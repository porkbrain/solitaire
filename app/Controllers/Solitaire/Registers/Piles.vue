<template id="piles-template">
  <div class="piles flex-row">
    <div class="register" v-for="pile in piles" v-on:click="move(pile)">
      <card v-for="card in pile.cards"
        v-on:click.native="clicked(pile, card)"
        v-bind:card="card"></card>
    </div>
  </div>
</template>

<script type="text/javascript">
  Vue.component('piles', {
    template: '#piles-template',
    /**
     * @prop init Array of cards for Deck register constructor.
     */
    props: ['init'],
    data() {
      return {
        piles: [],
        cardEvent: false
      }
    },

    methods: {
      /**
       * Emits an event to Game.vue about a card being clicked.
       *
       * @param pile Pile object.
       * @param card Card object that has been clicked on.
       */
      clicked(pile, card) {
        this.cardEvent = true

        this.$emit('clicked', pile, card)
      },

      /**
       * Here I did some poor design choise. If one clickes on pile with
       * cards, both events get promoted. 'emptystack' event should be prevented
       * upon propagatting 'clicked' event. I did it via creating new bool var.
       *
       * @param pile Pile object that has been clicked on.
       */
      move(pile) {
        if (this.cardEvent) {
          return this.cardEvent = false
        }

        this.$emit('emptystack', pile)
      }
    },

    /**
     * TODO: Refactor the way all cards get loaded into Deck register as this
     *       is very poor and sticker-plaster-like solution.
     */
    watch: {
      init() {
        if (this.piles.length > 0) {
          return
        }

        let piles = new Array(7)

        for (let i = 0; i < 7; i++) {
          piles[i] = new Pile(this.init[i])
        }

        this.piles = piles
      }
    }
  })
</script>
