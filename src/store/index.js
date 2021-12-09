import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    darkMode: false,
  },
  getters: {
    isDarkMode(state) {
      return state.darkMode;
    },
  },
  mutations: {
    CHANGE_DARK_MODE(state) {
      state.darkMode = !state.darkMode;
    },
  },
  actions: {
    changeDarkMode({ commit }) {
      commit("CHANGE_DARK_MODE");
    },
  },
});
