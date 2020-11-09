import Vue from "vue";
import Vuex from "vuex";
import forageStorage from "@/plugins/localforage";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    darkMode: window.matchMedia("(prefers-color-scheme: dark)").matches || false
  },
  getters: {
    getDarkMode(state) {
      return state.darkMode;
    }
  },
  mutations: {
    setDarkMode(state, darkMode: boolean) {
      state.darkMode = darkMode;
    },
    changeModeState(state) {
      state.darkMode = !state.darkMode;
    }
  },
  actions: {
    async updateCachedMode(store) {
      const storedDarkMode: boolean =
        (await forageStorage.getItem("darkMode")) ||
        window.matchMedia("(prefers-color-scheme: dark)").matches ||
        store.state.darkMode;
      store.commit("setDarkMode", storedDarkMode);
      await forageStorage.setItem("darkMode", storedDarkMode);
    },
    async changeMode(store) {
      store.commit("changeModeState");
      await forageStorage.setItem("darkMode", store.state.darkMode);
    }
  },
  modules: {}
});
