<template id="deck-template">
  <div>
    <div class="pile" @click="deal">
      <div v-if="! deck.empty()" class="card flipped"></div>
    </div>
    <div class="pile">
      <card v-for="card in revealed.cards"
        v-on:click.native="emit(revealed, card)"
        v-bind:card="card"></card>
    </div>
    <div class="pile" style="opacity: 0"></div>
  </div>
</template>

<script type="text/javascript">
  Vue.component('deck', {
    template: '#deck-template',
    props: ['active'],
    data() {
      return {
        deck: new Deck(Croupier.deal(24)),
        revealed: new Deck()
      }
    },
    methods: {
      deal() {
        if (this.deck.empty()) {
          if (Croupier.rereads === 0) {
            return
          }

          this.deck.setCards(this.revealed.reset())
          return Croupier.rereads--
        }

        let card = this.deck.pop().reveal()

        this.revealed.drawOne(card)
      },
      emit(revealed, card) {
        this.$emit('clicked', revealed, card)
      }
    }
  })
</script>
