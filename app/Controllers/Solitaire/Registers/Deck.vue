<template id="deck-template">
  <div class="deck flex-row">
    <div class="register" @click="deal">
      <div v-if="! deck.empty()" class="card flipped"></div>
    </div>
    <div class="register">
      <card v-for="card in revealed.cards"
        v-on:click.native="clicked(card)"
        v-bind:card="card"></card>
    </div>
    <div class="register info">
      <div>redeals left:&nbsp;<b>{{ rereads }}</b></div>
      <div>score:&nbsp;<b>{{ score }}</b></div>
      <div><button @click="$emit('newgame')">new game</button></div>
  </div>
</template>

<script type="text/javascript">
  Vue.component('deck', {
    template: '#deck-template',
    /**
     * @prop init Array of cards for Deck register constructor.
     * @prop score Score info that gets rendered in info class.
     */
    props: ['init', 'score'],
    data() {
      return {
        deck: new Deck(),
        revealed: new Deck(),
        rereads: 3,
        disable: false,
        loaded: false
      }
    },

    methods: {
      /**
       * Draws another card from deck.
       */
      deal() {
        if (this.disable) {
          return
        }

        /*
         * If the deck is empty and player still has rereads, cards from
         * revealed register get put back into Deck register so that player can
         * draw them all again.
         */
        if (this.deck.empty()) {
          if (this.rereads === 0) {
            return
          }

          this.deck.reset(this.revealed.reset())
          return this.rereads--
        }

        let card = this.deck.pop().reveal()

        this.revealed.push(card)

        // Clears active cards and disables drawing for 350 ms.
        this.clicked(null)

        this.disableDeal()
      },

      /**
       * Prevents double click mistakes by setting some minimal time before
       * drawing another card.
       */
      disableDeal() {
        this.disable = true

        setTimeout(() => {
          this.disable = false
        }, 350)
      },

      /**
       * @param card Card object to be put onto revealed register.
       */
      clicked(card) {
        this.$emit('clicked', this.revealed, card)
      },
    },

    /**
     * TODO: Refactor the way all cards get loaded into Deck register as this
     *       is very poor and sticker-plaster-like solution.
     */
    watch: {
      init() {
        if (this.loaded) {
          return
        }

        this.loaded = true

        this.deck = new Deck(this.init)
      }
    }
  })
</script>
