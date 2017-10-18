<template id="flush-template">
  <div class="flush flex-row">
    <div class="pile" v-for="flush in flushes" v-on:click="move(flush)">
      <card v-for="card in flush.cards"
        v-on:click.native="emit(flush, card)"
        v-bind:card="card"></card>
    </div>
  </div>
</template>

<script type="text/javascript">
  Vue.component('flush', {
    template: '#flush-template',
    props: ['active'],
    data() {
      return {
        flushes: [
          new Flush(),
          new Flush(),
          new Flush(),
          new Flush()
        ],
        cardEvent: false
      }
    },
    methods: {
      emit(flush, card) {
        this.cardEvent = true
        
        this.$emit('clicked', flush, card)

        if (this.won()) {
          this.$emit('won')
        }
      },

      move(flush) {
        if (this.cardEvent) {
          return this.cardEvent = false
        }

        this.$emit('emptystack', flush)
      },

      won() {
        return this.flushes.reduce((cards, flush) => {
          return cards + flush.cards.length
        }, 0) === 52
      }
    }
  })
</script>
