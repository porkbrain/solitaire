<template id="deck-template">
  <div>
    <div class="pile" @click="deal">
      <div v-if="! deck.empty()" class="card flipped"></div>
    </div>
    <div class="pile">
      <div v-for="card in revealed.cards"
        class="card"
        v-bind:class="{ red: card.color === 'red' }">
        <div class="flex-row">
          <div>{{ Suits[card.suit].icon }} {{ card.value() }}</div>
          <div class="text-right">{{ Suits[card.suit].icon }} {{ card.value() }}</div>
        </div>

        <div class="flex-row big">
            <div>{{ Suits[card.suit].icon }} {{ card.value() }}</div>
        </div>

        <div class="flex-row">
          <div>{{ Suits[card.suit].icon }} {{ card.value() }}</div>
          <div class="text-right">{{ Suits[card.suit].icon }} {{ card.value() }}</div>
        </div>
      </div>
    </div>
    <div class="pile" style="opacity: 0"></div>
  </div>
</template>

<script type="text/javascript">
  Vue.component('deck', {
    template: '#deck-template',
    props: ['cards'],
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
            return;
          }
          
          this.deck.setCards(this.revealed.reset())
          Croupier.rereads--
          return;
        }

        let card = this.deck.pop().reveal()

        this.revealed.drawOne(card)
      }
    }
  })
</script>
