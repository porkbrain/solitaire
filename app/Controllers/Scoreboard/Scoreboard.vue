<template id="scoreboard-template">
  <div class="content">
    <div class="left">
      <h1>Scoreboard</h1>
      <div v-for="(game, key) in games"
        class="table-line"
        v-bind:class="{ 'bg-highlight': logged === game.player }">
        <span v-text="key + 1" class="order"></span>
        <span v-text="game.player" class="bold"></span>
        <span v-text="game.score" class="italic"></span>
      </div>

      <div v-if="games.length === 0" class="empty-list">
        There's nothing here yet :(
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  Vue.component('app', {
    template: '#scoreboard-template',
    data() {
      return {
        games: [],
        logged: db.users.getPointer()
      }
    },
    mounted() {
      this.games = db.games
        .sort('score', 'desc')
        .slice(0, 10)
    }
  })
</script>
