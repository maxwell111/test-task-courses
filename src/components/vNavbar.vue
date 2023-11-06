<script>
export default {
  data() {
    return {
      windowWidth: window.innerWidth,
      showNavbar: false,
      isUserLogged: !!localStorage.getItem("user"),
      isDevEnv: !!location.hostname === "localhost",
    };
  },
  mounted() {
    window.addEventListener("resize", this.updateWindowWidth);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateWindowWidth);
  },
  computed: {
    isMobile() {
      return this.windowWidth < 768;
    },
    getCurrentPagePath() {
      return this.$route.name;
    },
    rewriteHomeLink() {
      return this.isDevEnv ? "" : "/test-task-courses/";
    },
  },
  methods: {
    updateWindowWidth() {
      this.windowWidth = window.innerWidth;
    },
    userLogout() {
      this.$store.dispatch("auth/logout");
      if (this.getCurrentPagePath) {
        // Condition for Github pages because our default path is repo name
        if (this.isDevEnv) {
          this.$router.push({ path: "/" });
        } else {
          this.$router.push({ path: "/test-task-courses/" });
        }
      }
    },
    openNavbar() {
      this.showNavbar = !this.showNavbar;
    },
  },
};
</script>

<template>
  <nav class="nav">
    {{ isProduction }}
    <ul class="nav-list" :class="{ 'nav-list--active': showNavbar }">
      <li class="nav-item">
        <router-link :to="rewriteHomeLink" class="nav-link">Home</router-link>
      </li>
      <router-link
        v-if="!isUserLogged"
        :to="{ name: 'login' }"
        class="button nav-link"
      >
        Login
      </router-link>
      <button v-else class="nav-link" @click="userLogout">Logout</button>
    </ul>
    <button
      class="nav-btn btn--toggle"
      v-if="isMobile"
      @click="openNavbar"
      :class="{ 'btn--toggle--active': showNavbar }"
    >
      <i></i>
    </button>
  </nav>
</template>
