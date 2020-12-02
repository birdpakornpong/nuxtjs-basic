<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <!-- <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
        /> -->
        <Logo class="logo" />
      </a>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        @click="showNav = !showNav"
        :class="{ 'is-active': showNav }"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
      @click="showNav = !showNav"
      :class="{ 'is-active': showNav }"
    >
      <div class="navbar-start">
        <nuxt-link to="/" class="navbar-item"> Home </nuxt-link>

        <nuxt-link to="/blog" class="navbar-item"> Blog </nuxt-link>
        <nuxt-link to="/profile" class="navbar-item"> Profile </nuxt-link>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link"> More </a>

          <div class="navbar-dropdown">
            <nuxt-link to="/about" class="navbar-item"> About </nuxt-link>
            <nuxt-link to="/photos" class="navbar-item"> Photos </nuxt-link>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div v-if="loggedIn" class="buttons">
            <button @click="logout" class="button is-danger">
              <strong>Log out</strong>
            </button>
          </div>
          <div v-else class="buttons">
            <nuxt-link to="/login" class="button is-primary">
              <strong>Log in</strong>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      showNav: false,
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$this.router.push('/login')
    },
  },
  computed: {
    ...mapState('auth', ['loggedIn']),
  },
}
</script>
<style scoped>
.logo {
  width: 32px;
  height: 32px;
}
</style>
