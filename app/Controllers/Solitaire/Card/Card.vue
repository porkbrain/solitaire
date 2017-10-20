<template id="card-template">
  <div class="card" v-bind:class="
    {
      red: card.color === 'red',
      active: card.active,
      flipped: card.hidden
    }">
    <div class="flex-row">
      <span>{{ Suits[card.suit] }} {{ card.value() }}</span>
      <span class="text-right">{{ Suits[card.suit] }} {{ card.value() }}</span>
    </div>

    <div class="flex-row big optional">
        <span>{{ Suits[card.suit] }} {{ card.value() }}</span>
    </div>

    <div class="flex-row optional">
      <span>{{ Suits[card.suit] }} {{ card.value() }}</span>
      <span class="text-right">{{ Suits[card.suit] }} {{ card.value() }}</span>
    </div>
  </div>
</template>

<script type="text/javascript">
  Vue.component('card', {
    template: '#card-template',
    /**
     * @prop card Card object to render.
     */
    props: ['card']
  })
</script>
