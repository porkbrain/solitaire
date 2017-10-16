<template id="card-template">
  <div class="card"
    v-bind:class="{ red: card.color === 'red', active: card.active }">
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
</template>

<script type="text/javascript">
  Vue.component('card', {
    template: '#card-template',
    props: ['card', 'active']
  })
</script>
