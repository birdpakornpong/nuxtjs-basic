<template>
  <div class="container" style="text-align: center">
    <h1>Photo Detail</h1>

    <img class="image" :src="photo.download_url" alt="Photo Image" />
    <p>Author : {{ photo.author }}</p>
    <nuxt-link to="/photos" class="link">Back to Photos</nuxt-link>
  </div>
</template>
<script>
export default {
  middleware: 'auth',
  async asyncData({ $axios, params }) {
    const photo = await $axios.$get(
      `https://picsum.photos/id/${params.id}/info`
    )
    return { photo }
  },
}
</script>
<style scoped>
.image {
  width: 480px;
  display: inline;
}
</style>
