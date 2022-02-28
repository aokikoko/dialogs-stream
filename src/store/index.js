import Vue from "vue";
import Vuex from "vuex";
import first from "./first";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    first,
  },
  state: {
    showDialogFirst: true,
    showLeft1First: true,
    showLeft2First: true,
    showUploadFirst: true,
    showDownloadFirst: true,
    showPreviewFirst: true,
    showSearchFirst: true,
  },
  mutations: {
    CLOSE_DIALOG_FIRST(state) {
      state.showDialogFirst = false;
    },
    CLOSE_LEFT1_FIRST(state) {
      state.showLeft1First = false;
    },
    CLOSE_LEFT2_FIRST(state) {
      state.showLeft2First = false;
    },
    CLOSE_UPLOAD_FIRST(state) {
      state.showUploadFirst = false;
    },
    CLOSE_DOWNLOAD_FIRST(state) {
      state.showDownloadFirst = false;
    },
    CLOSE_PREVIEW_FIRST(state) {
      state.showPreviewFirst = false;
    },
    CLOSE_SEARCH_FIRST(state) {
      state.showSearchFirst = false;
    },
  },
});
