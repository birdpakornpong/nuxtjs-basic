<template>
  <div class="container">
    <div class="columns is-multiline">
      <div class="column is-3" v-for="photo in photos" :key="photo.id">
        <div class="card">
          <div class="card-content">
            <nuxt-link :to="`/photos/${photo.id}`">
              <p>{{ photo.id }}</p>
              <p>By {{ photo.author }}</p>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $axios }) {
    const BASE_URL = 'https://picsum.photos'

    const photos = await $axios.$get(`${BASE_URL}/v2/list`)

    return { photos }
  },
}
</script>
