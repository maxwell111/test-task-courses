<template>
  <div class="courses">
    <ul v-if="courses.length" class="courses-list">
      <li v-for="course in courses" :key="course.id" class="courses-card card">
        <router-link :to="{ name: 'course', params: { courseId: course.id } }">
          <div class="card-image">
            <img :src="course.image.url" />
          </div>
        </router-link>
        <div class="card-info">
          <h3 class="card-title">{{ course.title }}</h3>
          <span class="card-lessons">Lessons: {{ course.lessons.length }}</span>
        </div>
        <div class="card-action">
          <router-link
            :to="{ name: 'course', params: { courseId: course.id } }"
            class="btn btn--secondary btn--md"
            >Explore</router-link
          >
        </div>
        <vNoResults v-if="showNoResultsBlock && !courses.length" />
      </li>
    </ul>
  </div>
</template>
<script>
import vNoResults from "./vNoResults.vue";
import { getAllCourses } from "../services/api";

export default {
  data() {
    return {
      courses: [],
      showNoResultsBlock: false,
    };
  },
  components: {
    vNoResults,
  },
  async created() {
    if (!this.courses.length) {
      try {
        await this.fetchAllCourses();
      } catch (error) {
        console.error("Error fetching courses:", error);
        this.showNoResultsBlock = true;
      }
    }
  },
  methods: {
    async fetchAllCourses() {
      const data = await getAllCourses();
      if (!data.length) {
        this.showNoResultsBlock = true;
      }
      this.courses = data;
    },
  },
};
</script>
