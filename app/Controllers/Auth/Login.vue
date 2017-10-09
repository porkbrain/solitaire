<template id="login-template">
  <div class="left">
    <h1>Login</h1>
    <form @submit.prevent.self>
      <div class="line">
        <input type="text"
          placeholder="Your nick"
          v-model="name"
          v-bind:class="{ 'bg-danger': error }">
      </div>
      <div class="line">
        <input type="password"
          placeholder="Your password"
          v-model="password"
          v-bind:class="{ 'bg-danger': error }">
      </div>
      <div class="line text-left">
        <button @click="login">Login</button>
          <!-- TODO: Add a forgot your password email validation. -->
        <a href="#" class="note">Forgot your password?</a>
      </div>
    </form>
  </div>
</template>

<script type="text/javascript">
  Vue.component('login', {
    template: '#login-template',
    data() {
      return {
        name: '',
        password: '',

        error: false
      }
    },

    methods: {
      login() {
        let users = db.users.find({
          name: this.name,
          password: this.password
        })

        if (users.length === 0) {
          return this.error = true
        }

        db.users.setPointer(users[0].name)

        location.reload()
      }
    }
  })
</script>
