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
      <div><button @click="$emit('newgame')">New game</button></div>
  </div>
</template>

<script type="text/javascript">
  Vue.component('deck', {
    template: '#deck-template',
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
      deal() {
        if (this.disable) {
          return
        }

        if (this.deck.empty()) {
          if (this.rereads === 0) {
            return
          }

          this.deck.reset(this.revealed.reset())
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
    },

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
