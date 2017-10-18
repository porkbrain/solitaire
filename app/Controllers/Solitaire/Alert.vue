<template id="alert-template">
  <div>
    <div class="alert alert-success" role="alert" v-show="won">
      <p>
        Congratulations! You have obtained <b>{{score}}</b> points.
      </p>
      <p>
        Have a look on a
        <a href="/scoreboard" class="alert-link">scoreboard</a>!
      </p>
    </div>
    <div class="alert alert-danger" role="alert" v-show="! logged">
      <p>
        You have to be logged in order to play <b>Solitare</b>.
      </p>
      <p>
        Please
        <a href="/auth" class="alert-link"> login or register</a>!
      </p>
    </div>
  </div>
</template>

<script type="text/javascript">
  Vue.component('alert', {
    template: '#alert-template',
    props: ['won', 'score'],
    data() {
      return {
        logged: db.users.getPointer()
      }
    }
  })
</script>
