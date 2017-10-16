<template id="piles-template">
  <div class="piles flex-row">
    <div class="pile" v-for="pile in piles" v-on:click="move(pile)">
      <card v-for="(card, index) in pile.cards"
        v-on:click.native="emit(pile, card)"
        v-bind:card="card"></card>
    </div>
  </div>
</template>

<script type="text/javascript">
  Vue.component('piles', {
    template: '#piles-template',
    data() {
      return {
        piles: []
      }
    },
    mounted() {
      let piles = new Array(7)

      for (let i = 0; i < 7; i++) {
        piles[i] = new Pile(Croupier.deal(i + 1))
      }

      this.piles = piles
    },
    methods: {
      emit(pile, card) {
        this.$emit('clicked', pile, card)
      },
      move(pile) {
        this.$emit('emptystack', pile)
      }
    }
  })
</script>
