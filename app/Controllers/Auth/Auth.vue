<template id="auth-template">
  <div class="auth">
    <login v-if="! logged"></login>
    <register v-if="! logged"></register>
    <profile v-bind:user="logged" v-if="logged"></profile>
  </div>
</template>

<script type="text/javascript">
  Vue.component('app', {
    template: '#auth-template',
    data() {
      return {
        logged: false
      }
    },

    mounted() {
      let pointer = db.users.getPointer()

      if (pointer) {
        this.logged = pointer
      }
    }
  })
</script>
