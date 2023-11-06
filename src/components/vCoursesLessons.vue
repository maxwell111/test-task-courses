<template>
  <ul class="course-lessons-list">
    <vLessonsListItem
      v-for="lesson in courseLessons"
      :key="lesson.id"
      :lesson="lesson"
      :courseId="courseId"
      :courseActive="courseActive"
    />
  </ul>
</template>

<script>
import vLessonsListItem from "./vLessonsListItem.vue";

export default {
  components: {
    vLessonsListItem,
  },
  props: {
    courseLessons: {
      type: Array,
      default: () => [],
    },
    courseActive: {
      type: Boolean,
      default: false,
    },
    courseId: {
      type: Number,
      default: 0,
    },
  },
};
</script>
