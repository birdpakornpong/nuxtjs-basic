<template>
  <div class="container has-text-centered">
    <h2 class="title">My Profile</h2>
    <img :src="user.avatar_url" class="avatar" />
    <p>Name : {{ user.login }}</p>
    <p>ID : {{ user.id }}</p>
    <div class="columns is-multiline my-4">
      <div class="column is-3" v-for="repo in repos" :key="repo.id">
        <div class="card">
          <div class="card-content">
            <a
              :href="repo.html_url"
              target="_blank"
              rel="noopener noreferrer "
              >{{ repo.name }}</a
            >
            <p>Star : {{ repo.stargazers_count }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  middleware: 'auth',
  head() {
    return {
      title: this.title,
    }
  },
  async asyncData({ $axios }) {
    $axios.setHeader('Authorization', null)
    const [user, repos] = await Promise.all([
      $axios.$get('https://api.github.com/users/birdpakornpong'),
      $axios.$get('https://api.github.com/users/birdpakornpong/repos'),
    ])

    const name = user.login
    return { user, repos, title: name }
  },
}
</script>
<style scoped>
.avatar {
  width: 128px;
  height: 128px;
}
</style>
