import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    files: [],
    displayFiles: [],
    rows: 0,
    showSpinner: false
  },
  mutations: {
    SET_FILES(state, files) {
      state.files = files;
    },
    SET_ROWS(state, rows) {
      state.rows = rows;
    },
    SET_DISPLAY_FILES(state, displayFiles) {
      state.displayFiles = displayFiles;
    },
    SET_SPINNER(state, spinner) {
      state.showSpinner = spinner;
    }
  },
  actions: {
    async fetchData({ commit, state }) {
      commit("SET_SPINNER", true);
      return new Promise(resolve => {
        setTimeout(async () => {
          await axios.get("https://businesswork-test.herokuapp.com/documents/").then(response => {var datos = response.data; commit("SET_FILES", datos)});
          const val = state.files;
          resolve(val);
          commit("SET_SPINNER", false);
        }, 1000);
      });
    },
    updatePagination({ commit, dispatch }, { myJson, currentPage, perPage }) {
      commit("SET_FILES", myJson);
      commit("SET_ROWS", myJson.length);
      dispatch("paginate", { currentPage, perPage });
    },
    async fetchFiles({ dispatch }) {
      const myJson = await dispatch("fetchData");
      dispatch("updatePagination", { myJson, currentPage: 1, perPage: 10 });
      return myJson;
    },
    async paginate({ commit, state }, { currentPage, perPage }) {
      const start = (currentPage - 1) * perPage;
      const files = state.files.slice(start, start + 10);
      commit("SET_DISPLAY_FILES", files);
    },
    async search({ dispatch }, { text }) {
      const myJson = await dispatch("fetchData");
      const values = myJson.filter(val => {
        return val.name_doc.toLowerCase().includes(text.toLowerCase());
      });

      dispatch("updatePagination", {
        myJson: values,
        currentPage: 1,
        perPage: 1
      });
    }
  },
  getters: {
    getFiles(state) {
      return state.files;
    },
    getRows(state) {
      return state.rows;
    },
    getDisplayFiles(state) {
      return state.displayFiles;
    },
    getSpinner(state) {
      return state.showSpinner;
    }
  },
  modules: {}
});
