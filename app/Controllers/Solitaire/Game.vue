<template id="game-template">
  <div class="game">
    <div class="flex-row">
      <deck class="deck flex-row"></deck>
      <div class="flush flex-row">
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  Vue.component('app', {
    template: '#game-template',
    data() {
      return {
      }
    }
  })
</script>
