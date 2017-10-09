<template id="register-template">
  <div class="right">
    <h1>Register</h1>
    <form @submit.prevent.self>
      <div class="line">
        <input type="text" placeholder="Your e-mail" v-model="email">
      </div>
      <div class="line">
        <input type="text" placeholder="Your nick" v-model="name">
      </div>
      <div class="line">
        <input type="password" placeholder="Your password" v-model="password">
      </div>
      <div class="line">
        <input type="password" placeholder="Confirm password" v-model="confirm">
      </div>
      <div class="line text-left">
        <button @click="register">Register</button>
        <span class="note danger" v-text="error"></span>
      </div>
    </form>
  </div>
</template>

<script type="text/javascript">
  Vue.component('register', {
    template: '#register-template',
    data() {
      return {
        email: '',
        name: '',
        password: '',

        confirm: '',
        error: ''
      }
    },

    methods: {
      /**
       * If the form data is valid, adds a user to collection and loggs him in.
       */
      register() {
        if (this.validate() !== true) {
          return
        }

        db.users.add({
          email: this.email,
          name: this.name,
          password: this.password,
        })

        db.users.setPointer(this.name)

        location.reload()
      },

      validate() {
        let regex = /[a-zA-Z1-9]+@[a-zA-Z]+\.[a-zA-Z]+/i

        if (this.email.match(regex) === null) {
          return this.error = 'Enter a valid e-mail adress!'
        }

        if (this.name.length === 0) {
          return this.error = 'Your nick can\' be empty!'
        }

        if (this.password.length < 4) {
          return this.error = 'Your password is too short!'
        }

        if (this.password !== this.confirm) {
          return this.error = 'Your passwords don\'t match!'
        }

        if (! db.users.unique('name', this.name)) {
          return this.error = 'This username is already in use!'
        }

        return true
      }
    }
  })
</script>
