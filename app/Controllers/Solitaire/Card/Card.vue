<template id="card-template">
  <div class="card" v-bind:class="
    {
      red: card.color === 'red',
      active: card.active,
      flipped: card.hidden
    }">
    <div class="flex-row">
      <div>{{ Suits[card.suit] }} {{ card.value() }}</div>
      <div class="text-right">{{ Suits[card.suit] }} {{ card.value() }}</div>
    </div>

    <div class="flex-row big optional">
        <div>{{ Suits[card.suit] }} {{ card.value() }}</div>
    </div>

    <div class="flex-row optional">
      <div>{{ Suits[card.suit] }} {{ card.value() }}</div>
      <div class="text-right">{{ Suits[card.suit] }} {{ card.value() }}</div>
    </div>
  </div>
</template>

<script type="text/javascript">
  Vue.component('card', {
    template: '#card-template',
    /**
     * @prop card   Card object to render.
     * @prop active Boolean if card should be marked as active.  
     */
    props: ['card', 'active']
  })
</script>
