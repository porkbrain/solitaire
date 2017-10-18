<template id="game-template">
  <div class="game">
    <alert
      v-bind:won="won"
      v-bind:score="score"></alert>

    <div class="flex-row">
      <deck
        v-bind:active="active"
        v-bind:score="score"
        v-on:clicked="push"></deck>

      <flush
        v-bind:active="active"
        v-on:won="endGame"
        v-on:clicked="push"
        v-on:emptystack="push"></flush>
    </div>

    <piles
      v-bind:active="active"
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
        won: false
      }
    },

    mounted() {
      let game = db.games.getPointer()

      /*if (game === null) {
        this.newGame()
      } else {
        this.loadGame(game)
      }*/

      this.interval = setInterval(() => {
        this.time++
      }, 1000)
    },

    methods: {
      push(stack, card = null) {
        // If no card is sent, then disactivate all cards.
        if (card === null && this.active.card === null) {
          return this.activate(null)
        }

        /**
         * If there is no active card or active card can't be placed on clicked
         * stack, then rewrite active stack and card with those clicked.
         */
        if (this.active.card === null || ! stack.validate(this.active.card)) {
          return this.activate(stack, card)
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
      },

      /**
       * Sets recently clicked card. This changes the card texture and serves
       * as a memory storage where stack indicates register a card should be
       * tried to moved from on next click.
       *
       * @param stack A stack that the Card object belongs to.
       * @param card  Particular Card object from stack that has been selected.
       */
      activate(stack, card = null) {
        // Setting the texture.
        if (this.active.card !== null) {
          this.active.card.active = false
        }

        if (card !== null) {
          card.active = true
        }

        this.active = {stack: stack, card: card}
      },

      /**
       * If all 52 cards are stacked onto 4 Flush registers, game ends and
       * gets stored to highscores.
       */
      endGame() {
        db.games.clearPointer()

        db.games.add({
          player: db.user.getPointer(),
          score: this.score
        })

        clearInterval(this.interval)

        this.won = true
      },

      save() {
        console.log('saving ...')
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
