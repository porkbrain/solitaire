<template id="deck-template">
  <div class="deck flex-row">
    <div class="pile" @click="deal">
      <div v-if="! deck.empty()" class="card flipped"></div>
    </div>
    <div class="pile">
      <card v-for="card in revealed.cards"
        v-on:click.native="emit(card)"
        v-bind:card="card"></card>
    </div>
    <div class="pile info">
      <div>redeals left:&nbsp;<b>{{ rereads }}</b></div>
      <div>score:&nbsp;<b>{{ score }}</b></div>
      <div><button @click="newGame()">New game</button></div>
      <!--
      position
      save game
      loads game
      new game
      -->
    </div>
  </div>
</template>

<script type="text/javascript">
  Vue.component('deck', {
    template: '#deck-template',
    props: ['active', 'score'],
    data() {
      return {
        deck: new Deck(Croupier.deal(24)),
        revealed: new Deck(),
        rereads: 3,
        disable: false
      }
    },
    methods: {
      deal() {
        if (this.disable) {
          return
        }

        if (this.deck.empty()) {
          if (this.rereads === 0) {
            return
          }

          this.deck.setCards(this.revealed.reset())
          return this.rereads--
        }

        let card = this.deck.pop().reveal()

        this.revealed.push(card)

        this.emit(null)

        this.disableDeal()
      },

      disableDeal() {
        this.disable = true

        setTimeout(() => {
          this.disable = false
        }, 350)
      },

      emit(card) {
        this.$emit('clicked', this.revealed, card)
      },
    }
  })
</script>
