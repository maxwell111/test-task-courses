<script>
export default {
  props: {
    lesson: {
      type: Object,
      default: null,
    },
    courseId: {
      type: Number,
      default: 0,
    },
    courseActive: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isLessonCompleted() {
      if (this.lesson) {
        const { id } = this.lesson;
        const data = { courseId: this.courseId, lessonId: id };
        return this.$store.getters["courses/isLessonCompleted"](data);
      }
      return false;
    },
  },
  methods: {
    openLessonOverlay() {
      if (this.lesson) {
        this.$parent.$emit("open-lesson-overlay-event", this.lesson);
      }
    },
  },
};
</script>

<template>
  <li
    class="course-lessons-card card"
    v-if="lesson"
    :class="{ 'card--completed': isLessonCompleted }"
  >
    <div class="card-info">
      <h3>{{ lesson.title }}</h3>
      <p>{{ lesson.description }}</p>
    </div>
    <button
      v-if="courseActive && !isLessonCompleted"
      class="btn btn--primary btn--md"
      @click="openLessonOverlay()"
    >
      Start lesson
    </button>
    <button
      v-if="courseActive && isLessonCompleted"
      class="btn btn--secondary btn--md"
      @click="openLessonOverlay()"
    >
      Open lesson
    </button>
  </li>
</template>
