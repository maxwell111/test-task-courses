<script>
export default {
  props: {
    lesson: {
      type: Object,
      default: () => ({}),
    },
    courseId: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    lessonTitle() {
      return this.lesson.title;
    },
    lessonId() {
      return this.lesson.id;
    },
    lessonDescription() {
      return this.lesson.description;
    },
    lessonContent() {
      return this.lesson.content;
    },
    isLessonCompleted() {
      const data = {
        courseId: this.courseId,
        lessonId: this.lesson.id,
      };
      return this.$store.getters["courses/isLessonCompleted"](data);
    },
  },
  methods: {
    closeLessonOverlay() {
      this.$router.replace({ query: null });
      this.$store.dispatch("popup/hidePopup");
      document.body.classList.remove("body--overflow");
    },
    completeLesson(id) {
      this.$emit("lesson-completed-event", id);
    },
  },
};
</script>

<template>
  <div class="lesson-overlay">
    <div class="lesson-overlay--decoration decoration--left"></div>
    <div class="lesson-overlay--decoration decoration--right"></div>
    <button
      class="lesson-overlay-close btn btn--close"
      @click="closeLessonOverlay"
    >
      <svg
        class="w-5 h-5"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>

    <div class="lesson-overlay-wrap">
      <div class="container">
        <div class="lesson-overlay-info">
          <h2>{{ lessonTitle }}</h2>
          <p>{{ lessonDescription }}</p>
        </div>
        <div class="lesson-overlay-content" v-html="lessonContent"></div>
        <div class="lesson-overlay-actions" v-if="!isLessonCompleted">
          <button @click="completeLesson(lessonId)" class="btn btn--primary">
            Complete lesson
          </button>
        </div>
        <div v-if="isLessonCompleted" class="lesson-overlay-message">
          You've completed this lesson!
        </div>
      </div>
    </div>
  </div>
</template>
