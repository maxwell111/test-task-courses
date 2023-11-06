import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth.js";
import courses from "./modules/courses.js";
import popup from "./modules/popup.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
    courses,
    popup,
  },
});

export default store;
