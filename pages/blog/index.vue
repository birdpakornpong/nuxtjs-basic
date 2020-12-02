<template>
  <div class="container mt-4">
    <div class="columns is-multiline">
      <div class="column is-4" v-for="post in posts" :key="post.slug">
        <div class="card">
          <div class="card-content">
            <nuxt-link :to="`/blog/${post.slug}`" class="title">{{
              post.title
            }}</nuxt-link>
            <p>{{ post.description }}</p>

            <p>Created At : {{ post.createdAt }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content('blog').sortBy('createdAt', 'desc').fetch()
    return { posts }
  },
}
</script>
<style scoped>
.card {
  min-height: 250px;
  max-height: 250px;
  padding: 1em;
  overflow: scroll;
}
</style>
