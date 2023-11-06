import Vue from "vue";
import Router from "vue-router";
import Home from "./views/vHome.vue";
import { checkAuth } from "./helpers/checkAuth";
Vue.use(Router);

const router = new Router({
  mode: "history",
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
  routes: [
    {
      path: process.env.NODE_ENV == "development" ? "/" : "/test-task-courses/",
      component: Home,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path:
        process.env.NODE_ENV == "development"
          ? "/login"
          : "/test-task-courses/login",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "Courses" */ "./views/vLogin.vue"),
    },
    {
      path:
        process.env.NODE_ENV == "development"
          ? "/course/:courseId"
          : "/test-task-courses/course/:courseId",
      name: "course",
      component: () =>
        import(/* webpackChunkName: "Course" */ "./views/vCourseSingle.vue"),
      meta: {
        requiresAuth: true,
      },
      props: { default: true },
    },
  ],
});

router.beforeEach((to, from, next) => {
  checkAuth(to, from, next);
});

export default router;
