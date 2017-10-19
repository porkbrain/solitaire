<template id="piles-template">
  <div class="piles flex-row">
    <div class="pile" v-for="pile in piles" v-on:click="move(pile)">
      <card v-for="card in pile.cards"
        v-on:click.native="emit(pile, card)"
        v-bind:card="card"></card>
    </div>
  </div>
</template>

<script type="text/javascript">
  Vue.component('piles', {
    template: '#piles-template',
    props: ['init'],
    data() {
      return {
        piles: [],
        cardEvent: false
      }
    },

    methods: {
      emit(pile, card) {
        this.cardEvent = true

        this.$emit('clicked', pile, card)
      },

      move(pile) {
        if (this.cardEvent) {
          return this.cardEvent = false
        }

        this.$emit('emptystack', pile)
      }
    },

    watch: {
      init() {
        if (this.piles.length > 0) {
          return
        }

        let piles = new Array(7)

        for (let i = 0; i < 7; i++) {
          piles[i] = new Pile(this.init[i])
        }

        console.log(piles)

        this.piles = piles
      }
    }
  })
</script>
