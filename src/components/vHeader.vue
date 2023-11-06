<script>
import vNavbar from "./vNavbar.vue";
export default {
  data() {
    return {
      isDevEnv: !!location.hostname === "localhost",
    };
  },
  components: {
    vNavbar,
  },
  computed: {
    isUserLogged() {
      return localStorage.getItem("user");
    },
    rewriteHomeLink() {
      return this.isDevEnv ? "" : "/test-task-courses/";
    },
  },
};
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header--wrap">
        <router-link :to="rewriteHomeLink" class="header-logo">
          <img src="https://placehold.co/180x40" />
        </router-link>
        <vNavbar />
      </div>
    </div>
  </header>
</template>
