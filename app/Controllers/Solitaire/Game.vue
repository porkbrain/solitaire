<template id="game-template">
  <div class="game">
    <alert
      v-bind:won="won"
      v-bind:score="score"></alert>

    <div class="flex-row">
      <deck
        v-bind:init="stacks.deck"
        v-bind:score="score"
        v-on:newgame="newGame"
        v-on:clicked="push"></deck>

      <flush
        v-bind:init="stacks.flushes"
        v-on:won="endGame"
        v-on:clicked="push"
        v-on:emptystack="push"></flush>
    </div>

    <piles
      v-bind:active="active"
      v-bind:init="stacks.piles"
      v-on:clicked="push"
      v-on:emptystack="push"></piles>
    </div>
  </div>
</template>

<script type="text/javascript">
  Vue.component('app', {
    template: '#game-template',
    data() {
      return {
        active: {stack: null, card: null},
        clicks : 0,
        time: 0,
        won: false,
        stacks: {}
      }
    },

    /**
     * TODO: Mounted method should be outside of Game.vue and just pass
     *  it's result via props.
     */
    mounted() {
      let game = db.games.getPointer()

      // If there's no current game played, creates new one.
      if (game === null) {
        return this.newGame()
      }

      this.init(game)

      // Starts interval for decrementing score each second.
      this.interval = setInterval(() => {
        this.time++
      }, 1000)
    },

    methods: {
      /**
       * Creates a fresh game info and reloads the window.
       */
      newGame() {
        db.games.setPointer({
          stacks: Croupier.deal(),
          rereads: 3,
          time: 0,
          clicks: 0
        })

        return location.reload()
      },

      /**
       * Loads game info into Vue object.
       *
       * @param game Object with following properties:
       *               clicks Int
       *               rereads Int
       *               time Int
       *               stacks Storage of cards..
       */
      init(game) {
        this.clicks = game.clicks
        this.$children[1].rereads = game.rereads
        this.time = game.time

        // Function that inits all cards as Card objects.
        let parseStack = (stack) => {
          return stack.map((card) => {
            return new Card(card.val, card.suit, card.hidden)
          })
        }

        this.stacks = {
          piles: game.stacks.piles.map(parseStack),
          flushes: game.stacks.flushes.map(parseStack),
          deck: parseStack(game.stacks.deck)
        }
      },

      /**
       * TODO: Exlude sideeffects from validating function.
       *
       * @param stack, card See this.push().
       *
       * @return Bool that's true if the card can be pushed onto the stack.
       */
      validate(stack, card) {
        // If card argument is empty then disactivate all cards.
        if (card === null && this.active.card === null) {
          return this.activate(null)
        }

        // Player shouldn't be able to move with hidden cards.
        if (card !== null && card.hidden) {
          return this.activate(null)
        }

        /**
         * If there is no active card or active card can't be placed on clicked
         * stack, then rewrite active stack and card with those clicked.
         */
        if (this.active.card === null || ! stack.validate(this.active.card)) {
          return this.activate(stack, card)
        }

        return true
      },

      /**
       * Core method for moving cards. Is called by emited events in children.
       * If there's no active card, marks clicked card as active. Otherwise
       * validates if active card can be moved onto clicked card.
       *
       * @param stack Register that's been clicked on.
       * @param card Card that has been clicked on.
       */
      push(stack, card = null) {
        if (! this.validate(stack, card)) {
          return
        }

        // Otherwise put the active card and all above it onto the clicked stack.
        stack.push(this.active.stack.pop(this.active.card))

        // Set top Card object bool hidden to true.
        if (this.active.stack.top() !== undefined) {
          this.active.stack.top().reveal()
        }

        // Clears all active cards.
        this.activate(null)

        this.clicks++

        this.save()
      },

      /**
       * Sets recently clicked card. This changes the card texture and serves
       * as a memory storage where stack indicates register a card should be
       * tried to moved from on next click.
       *
       * @param stack A stack that the Card object belongs to.
       * @param card  Particular Card object from stack that has been selected.
       *
       * @return Bool false
       */
      activate(stack, card = null) {
        // Setting the background texture.
        if (this.active.card !== null) {
          this.active.card.active = false
        }

        if (card !== null) {
          card.active = true
        }

        this.active = {stack: stack, card: card}

        return false
      },

      /**
       * If all 52 cards are stacked onto 4 Flush registers, game ends and
       * gets stored to highscores.
       */
      endGame() {
        db.games.clearPointer()

        db.games.add({
          player: db.users.getPointer(),
          score: this.score
        })

        clearInterval(this.interval)

        this.won = true
      },

      /**
       * Saves current game into localstorage as a pointer of games collection.
       */
      save() {
        db.games.setPointer({
          stacks: Croupier.parse(this.$children),
          rereads: _.clamp(this.$children[1].rereads - 1, 0, 3),
          time: this.time,
          clicks: this.clicks
        })
      }
    },

    computed: {
      // Formula for calculating obtained points.
      score() {
        return _.clamp(1000 - this.clicks * 2 - this.time, 0, 1000)
      }
    }
  })
</script>
