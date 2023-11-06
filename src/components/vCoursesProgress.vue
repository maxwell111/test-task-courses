<template>
  <div class="course-progress" v-if="progress > -1 && courseActive">
    <h2>Your course progress:</h2>
    <div class="course-progress-shell">
      <span class="course-progress-start">0</span>
      <div class="course-progress-bar" :style="{ width: progress + '%' }">
        <span>{{ progress }}%</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      default: 0,
      validator: (value) => value >= 0 && value <= 100,
    },
    courseActive: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
