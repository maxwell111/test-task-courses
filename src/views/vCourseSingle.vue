<template>
  <div class="course" v-if="loaded">
    <vCourseWelcome
      :title="courseTitle"
      :description="courseDescription"
      :course-active="isCourseActive"
      @course-started-event="courseStartedHandler(course)"
      @course-completed-event="courseCompletedHandler(course)"
      :all-lessons-completed="isAllLessonsCompleted"
    />
    <div class="container">
      <vCourseProgress
        :progress="courseProgress"
        :course-active="isCourseActive"
      />
      <div class="course-lessons">
        <vCourseLessons
          :courseLessons="courseLessons"
          :course-active="isCourseActive"
          :course-id="courseId"
          @open-lesson-overlay-event="openLessonOverlayHandler"
        />
      </div>
    </div>
    <vLessonOverlay
      v-if="isPopupVisible"
      :lesson="lessonOverlayContent"
      :course-id="courseId"
      @lesson-completed-event="lessonCompletedHandler"
    />
  </div>
</template>
<script>
import { getSingleCourse } from "../services/api";
import { getTimeDifference } from "../helpers/getTimeDifference";
import vCourseWelcome from "../components/vCoursesWelcome.vue";
import vCourseLessons from "../components/vCoursesLessons.vue";
import vCourseProgress from "../components/vCoursesProgress.vue";
import vLessonOverlay from "../components/vLessonOverlay.vue";
import { getCurrentDate } from "../helpers/getCurrentDate";

export default {
  components: {
    vCourseWelcome,
    vCourseLessons,
    vCourseProgress,
    vLessonOverlay,
  },
  data() {
    return {
      course: null,
      courseId: this.$route.params.courseId,
      lessonOverlayContent: null,
      loaded: false,
    };
  },
  computed: {
    courseTitle() {
      return this.course.title;
    },
    isAllLessonsCompleted() {
      const completedLessons = this.$store.getters[
        "courses/getAllCompletedLessonsByCourse"
      ](this.courseId);
      const totalLessons = this.$store.getters["courses/getAllLessonsByCourse"](
        this.courseId,
      );
      return completedLessons.length === totalLessons;
    },
    courseProgress() {
      const completedLessons = this.$store.getters[
        "courses/getAllCompletedLessonsByCourse"
      ](this.courseId);
      if (completedLessons.length) {
        return Math.round(
          (100 * completedLessons.length) / this.course.lessons.length,
        );
      }
      return 0;
    },
    courseDescription() {
      return this.course.description;
    },
    courseLessons() {
      return this.course.lessons.map((lesson) => ({
        ...lesson,
      }));
    },
    isCourseActive() {
      return this.$store.getters["courses/isCourseActive"](this.courseId);
    },
    isPopupVisible() {
      return this.$store.getters["popup/isPopupVisible"];
    },
    getCompletedCourseAttempts() {
      return (
        this.$store.getters["courses/getCompletedCourseAttempts"](
          this.courseId,
        ) || 0
      );
    },
    getActiveCourseStartDate() {
      return (
        this.$store.getters["courses/getActiveCourseStartDate"](
          this.courseId,
        ) || false
      );
    },
  },
  created() {
    if (!this.course) {
      this.fetchSingleCourse();
    }
  },
  methods: {
    async fetchSingleCourse() {
      const data = await getSingleCourse(this.courseId);
      if (data.length) {
        const [fetchedCourse] = data;
        this.course = fetchedCourse;
        this.loaded = true;
      }
    },
    courseStartedHandler(course) {
      const date = getCurrentDate();
      const { id, title } = course;
      const obj = {
        id,
        title,
        startedAt: date,
        totalLessons: this.course.lessons.length,
        completedLessons: [],
      };
      this.$store.dispatch("courses/courseStarted", obj);
    },
    lessonCompletedHandler(lessonId) {
      const obj = {
        completedLessonId: lessonId,
        courseId: this.courseId,
      };
      this.$store.dispatch("courses/lessonCompleted", obj);
    },
    openLessonOverlayHandler(lesson) {
      this.lessonOverlayContent = lesson;
      this.$router.push({ query: { lesson: lesson.id } });
      this.$store.dispatch("popup/showPopup");
      document.body.classList.add("body--overflow");
    },
    courseCompletedHandler(course) {
      const courseCompletedDate = getCurrentDate();
      const courseStartedDate = this.getActiveCourseStartDate;
      const { id, title } = course;
      const obj = {
        id,
        title,
        lastAttemptTime: courseCompletedDate,
        attempts: this.getCompletedCourseAttempts + 1,
        elapsedTime: getTimeDifference(courseStartedDate, courseCompletedDate),
      };
      this.$store.dispatch("courses/courseCompleted", obj);
    },
  },
};
</script>
