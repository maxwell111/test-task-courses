const state = {
  showPopup: false,
};

const mutations = {
  SHOW_POPUP(state) {
    state.showPopup = true;
  },
  HIDE_POPUP(state) {
    state.showPopup = false;
  },
};

const actions = {
  showPopup({ commit }) {
    commit("SHOW_POPUP");
  },
  hidePopup({ commit }) {
    commit("HIDE_POPUP");
  },
};

const getters = {
  isPopupVisible: (state) => state.showPopup,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
