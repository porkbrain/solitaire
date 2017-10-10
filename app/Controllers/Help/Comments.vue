<template id="comments-template">
  <div>
    <h2>Comments</h2>

    <form @submit.prevent.self v-show="logged">
      <div class="line">
        <textarea v-model="message" placeholder="Your message"></textarea>
      </div>
      <div class="line">
        <input type="text" v-model="tags" placeholder="Tags separated by space (optional)">
      </div>
      <div class="line text-left">
        <button @click="comment">Comment</button>
        <span class="note danger" v-text="error"></span>
      </div>
    </form>

    <div v-for="(comment, id) in comments" class="line comment">
      <div>
        <span v-show="logged === comment.author">
          <i class="fa fa-trash" aria-hidden="true" @click="remove(id)"></i>
        </span>
        <span class="author" v-text="comment.author"></span>
        <span class="tag" v-for="tag in comment.tags" v-text="tag.toLowerCase()"></span>
      </div>
      <div v-text="comment.body"></div>
    </div>
    <div v-if="comments.length === 0" class="empty-list">
      There's nothing here yet :(
    </div>
  </div>
</template>

<script type="text/javascript">
  Vue.component('comments', {
    template: '#comments-template',
    data() {
      return {
        message: '',
        tags: '',
        error: '',

        logged: db.users.getPointer(),
        comments: db.comments.find(),
      }
    },

    methods: {
      comment() {
        if (this.message.length < 10) {
          return this.error = 'Your message is too short!'
        }

        db.comments.add({
          id: db.comments.next('id'),
          author: this.logged,
          tags: this.tags.split(' ').slice(0, 3),
          body: this.message
        })

        this.message = this.tags = ''

        this.comments = db.comments.find()
      },

      remove(id) {
        db.comments.delete({
          id: this.comments[id].id
        })

        this.comments = db.comments.find()
      }
    }
  })
</script>
