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
        ]
      }
    },
    methods: {
      emit(flush, card) {
        this.$emit('clicked', flush, card)
      },
      move(flush) {
        this.$emit('emptystack', flush)
      }
    }
  })
</script>
