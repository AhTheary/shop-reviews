<template>
  <div class="input-comment">
    <input type="text" placeholder="What are you thinking?" v-model="comment" />
    <input type="submit" @click="commentPost" />
  </div>
</template>

<script>
export default {
  name: 'CommentPosts',
  data() {
    return {
      comment: null,
    }
  },
  methods: {
    commentPost() {
      alert('Ok')
    },
  },
}
</script>

<style scoped></style>
