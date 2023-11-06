<script>
export default {
  props: {
    title: {
      type: String,
      default: "Course Title",
    },
    description: {
      type: String,
      default: "Course Description",
    },
    courseActive: {
      type: Boolean,
      default: false,
    },
    allLessonsCompleted: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <div class="course-welcome">
    <div class="container">
      <div class="course-welcome-content content">
        <div class="content-info">
          <h1 class="content-title">{{ title }}</h1>
          <p>{{ description }}</p>
        </div>
        <div class="content-actions">
          <button
            class="btn btn--primary btn--md"
            @click="$emit('course-started-event')"
            v-if="!courseActive && !allLessonsCompleted"
          >
            Start Course
          </button>
          <button
            class="btn btn--primary btn--md"
            @click="$emit('course-completed-event')"
            v-if="allLessonsCompleted"
          >
            Complete Course
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
