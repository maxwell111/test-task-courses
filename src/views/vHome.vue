<template>
  <div class="container">
    <vCoursesPromo />
    <vCoursesList />
  </div>
</template>

<script>
import vCoursesPromo from "../components/vCoursesPromo.vue";
import vCoursesList from "../components/vCoursesList.vue";

export default {
  components: {
    vCoursesPromo,
    vCoursesList,
  },
};
</script>
