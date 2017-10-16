<template id="game-template">
  <div class="game">
    <div class="flex-row">
      <deck class="deck flex-row"
        v-bind:active="active"
        v-on:clicked="push"></deck>
      <flush class="flush flex-row"
        v-bind:active="active"
        v-on:clicked="push"
        v-on:emptystack="push"></div>
    </div>
  </div>
</template>

<script type="text/javascript">
  Vue.component('app', {
    template: '#game-template',
    data() {
      return {
        active: {stack: null, cards: []}
      }
    },
    methods: {
      push(stack, cards = []) {
        if (! _.isArray(cards)) {
          cards = [cards]
        }

        if (this.active.cards.length === 0 || ! stack.validate(this.active.cards)) {
          if (cards.length !== 0) {
            return this.activate(stack, cards)
          }

          return
        }

        stack.push(this.active.stack.pop(this.active.cards))

        this.activate(null, [])
      },

      activate(stack, cards) {
        if (this.active.stack !== null) {
          this.active.cards.every((el) => {
            el.active = false
          })
        }

        cards.every((el) => {
          el.active = true
        })

        this.active = {stack: stack, cards: cards}
      }
    }
  })
</script>
