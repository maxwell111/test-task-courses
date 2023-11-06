<template>
  <div class="wrap">
    <vHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import vHeader from "./components/vHeader.vue";

export default {
  components: {
    vHeader,
  },
};
</script>
