const activeCoursesFromStorage =
  JSON.parse(localStorage.getItem("activeCourses")) || [];
const completedCoursesFromStorage =
  JSON.parse(localStorage.getItem("completedCourses")) || [];

const state = {
  activeCourses: activeCoursesFromStorage,
  completedCourses: completedCoursesFromStorage,
};

const mutations = {
  ADD_ACTIVE_COURSE(state, newCourse) {
    const isCourseExist = state.activeCourses.some(
      (course) => course.id === newCourse.id,
    );
    if (!isCourseExist) {
      state.activeCourses = [...state.activeCourses, newCourse];
      localStorage.setItem(
        "activeCourses",
        JSON.stringify(state.activeCourses),
      );
    }
  },
  REMOVE_ACTIVE_COURSE(state, id) {
    state.activeCourses = state.activeCourses.filter((c) => c.id !== id);
    localStorage.setItem("activeCourses", JSON.stringify(state.activeCourses));
  },
  ADD_COMPLETED_COURSE(state, newCourse) {
    const existingCourse = state.completedCourses.find(
      (c) => c.id === newCourse.id,
    );
    if (!existingCourse) {
      state.completedCourses = [...state.completedCourses, newCourse];
    } else {
      existingCourse.attempts += 1;
    }
    localStorage.setItem(
      "completedCourses",
      JSON.stringify(state.completedCourses),
    );
  },
  UPDATE_CURRENT_COURSE(state, data) {
    const { completedLessonId, courseId } = data;
    const activeCourse = state.activeCourses.find((c) => c.id === courseId);
    if (
      activeCourse &&
      !activeCourse.completedLessons.includes(completedLessonId)
    ) {
      activeCourse.completedLessons.push(completedLessonId);
      localStorage.setItem(
        "activeCourses",
        JSON.stringify(state.activeCourses),
      );
    }
  },
};

const actions = {
  courseStarted({ commit }, data) {
    commit("ADD_ACTIVE_COURSE", data);
  },
  courseCompleted({ commit }, data) {
    commit("REMOVE_ACTIVE_COURSE", data.id);
    commit("ADD_COMPLETED_COURSE", data);
  },
  lessonCompleted({ commit }, data) {
    commit("UPDATE_CURRENT_COURSE", data);
  },
};

const getters = {
  getAllActiveCourses: (state) => state.activeCourses,
  isCourseActive: (state) => (courseId) =>
    state.activeCourses.some((c) => c.id === courseId),
  getAllLessonsByCourse: (state) => (courseId) => {
    const activeCourse = state.activeCourses.find((c) => c.id === courseId);
    return activeCourse ? activeCourse.totalLessons : false;
  },
  getActiveCourseStartDate: (state) => (courseId) => {
    const activeCourse = state.activeCourses.find((c) => c.id === courseId);
    if (activeCourse) {
      return activeCourse.startedAt;
    }
    return null;
  },
  getAllCompletedLessonsByCourse: (state) => (courseId) => {
    const activeCourse = state.activeCourses.find((c) => c.id === courseId);
    return activeCourse
      ? activeCourse.completedLessons.length
        ? activeCourse.completedLessons
        : []
      : false;
  },
  isLessonCompleted: (state) => (data) => {
    const { courseId, lessonId } = data;
    const activeCourse = state.activeCourses.find((c) => c.id === courseId);
    return activeCourse
      ? activeCourse.completedLessons.includes(lessonId)
      : false;
  },
  getCompletedCourseAttempts: (state) => (courseId) => {
    const completedCourse = state.completedCourses.find(
      (c) => c.id === courseId,
    );
    if (completedCourse) {
      return completedCourse.attempts;
    }
    return null;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
