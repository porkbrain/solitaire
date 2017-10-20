<template id="flush-template">
  <div class="flush flex-row">
    <div class="register" v-for="flush in flushes" v-on:click="move(flush)">
      <card v-for="card in flush.cards"
        v-on:click.native="clicked(flush, card)"
        v-bind:card="card"></card>
    </div>
  </div>
</template>

<script type="text/javascript">
  Vue.component('flush', {
    template: '#flush-template',
    /**
     * @prop init Array of cards for Deck register constructor.
     */
    props: ['init'],
    data() {
      return {
        flushes: [],
        cardEvent: false
      }
    },

    /**
     * Emits an event to Game.vue about a card being clicked.
     *
     * @param flush Flush object.
     * @param card Card object that has been clicked on.
     */
    methods: {
      clicked(flush, card) {
        this.cardEvent = true

        this.$emit('clicked', flush, card)

        if (this.won()) {
          this.$emit('won')
        }
      },

      /**
       * Here I did some poor design choise. If one clickes on flush with
       * cards, both events get promoted. 'emptystack' event should be prevented
       * upon propagatting 'clicked' event. I did it via creating new bool var.
       *
       * @param flush Flush object that has been clicked on.
       */
      move(flush) {
        if (this.cardEvent) {
          return this.cardEvent = false
        }

        this.$emit('emptystack', flush)
      },

      /**
       * The game ends once all 52 cards are in Flush registers.
       *
       * @return Bool true if number of card objects equals 52.
       */
      won() {
        return this.flushes.reduce((cards, flush) => {
          return cards + flush.cards.length
        }, 0) === 52
      }
    },

    /**
     * TODO: Refactor the way all cards get loaded into Deck register as this
     *       is very poor and sticker-plaster-like solution.
     */
    watch: {
      init() {
        if (this.flushes.length > 0) {
          return
        }

        let flushes = new Array(4)

        for (let i = 0; i < 4; i++) {
          flushes[i] = new Flush(this.init[i])
        }

        this.flushes = flushes
      }
    }
  })
</script>
