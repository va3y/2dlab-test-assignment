import Vue from "vue";
import Vuex from "vuex";
import placeholder from "./placeholder.json";
console.log(placeholder);
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ...placeholder,
    menuOpen: false,
  },
  mutations: {
    toggleMenu(state) {
      state.menuOpen = !state.menuOpen;
    },
    setMenu(state, isOpen) {
      state.menuOpen = isOpen;
    },
  },
  actions: {},
  modules: {},
});
