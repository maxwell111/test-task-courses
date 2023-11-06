const state = {
  user: JSON.parse(localStorage.getItem("user")) || null,
};

const mutations = {
  SET_USER_DATA(state, data) {
    state.user = { email: data };
    localStorage.setItem("user", JSON.stringify(data));
  },
  CLEAR_USER_DATA(state) {
    state.user = null;
    localStorage.removeItem("user");
  },
};

const actions = {
  async login({ commit }, data) {
    if (data) {
      commit("SET_USER_DATA", data);
    }
  },
  logout({ commit }) {
    commit("CLEAR_USER_DATA");
  },
};

const getters = {
  loggedIn: (state) => !!state.user,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
