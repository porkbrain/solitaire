<template id="profile-template">
  <div class="login">
    <h2 v-text="user"></h2>
    <!-- TODO: Change password. -->
    <button @click="logout">Logout</button>
  </div>
</template>

<script type="text/javascript">
  Vue.component('profile', {
    template: '#profile-template',
    props: ['user'],

    methods: {
      logout() {
        db.users.clearPointer()

        location.reload()
      }
    }
  })
</script>
