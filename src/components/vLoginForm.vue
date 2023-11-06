<script>
import Loader from "../assets/images/svg/loader.svg";
import { validateEmail } from "../helpers/validateEmail";

export default {
  components: {
    Loader,
  },
  data() {
    return {
      email: "",
      submitted: false,
      loading: false,
      error: "",
      isDevEnv: !!location.hostname === "localhost",
    };
  },
  methods: {
    async handleAuth() {
      this.submitted = true;

      if (!validateEmail(this.email)) {
        this.error = "Please enter your email.";
        return;
      }

      try {
        await this.login(this.email);
        // Condition for Github pages because our default path is repo name
        if (this.isDevEnv) {
          this.$router.push({ path: "/" });
        } else {
          this.$router.push({ path: "/test-task-courses/" });
        }
        location.reload();
      } catch (error) {
        this.error = "An error occurred during login.";
        console.error("Fetch error:", error);
      } finally {
        this.loading = false;
      }
    },
    login(email) {
      return this.$store.dispatch("auth/login", email);
    },
  },
};
</script>

<template>
  <form @submit.prevent="handleAuth" class="login-form form">
    {{ isProduction }}
    <div class="form-group">
      <label for="email" class="form-label">Email</label>
      <input
        type="text"
        v-model="email"
        name="email"
        class="form-input"
        :class="{ 'form-input--invalid': submitted && !email }"
      />
    </div>
    <div class="form-group">
      <button class="btn btn--primary btn--full" :disabled="loading">
        <span class="btn-text" v-if="!loading">Login</span>
        <span class="btn--icon btn--loader" v-if="loading">
          <loader />
        </span>
      </button>
    </div>
    <span v-if="error" class="form-message form-message--error">{{
      error
    }}</span>
  </form>
</template>
