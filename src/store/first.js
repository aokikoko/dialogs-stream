import dialog from "../components/dialog/index";
import { tooltipBlock, tooltip } from "../components/tooltip/index";
export default {
  state: {
    showDialogFirst: true,
    showLeft1First: true,
    showLeft2First: true,
    showUploadFirst: true,
    showDownloadFirst: true,
    showPreviewFirst: true,
    showSearchFirst: true,
    showBottomFirst: true,
  },
  mutations: {
    SHOW_DIALOG_FIRST(state) {
      if (state.showDialogFirst) {
        dialog({
          content: "你是个新手",
          closeBack() {
            state.showDialogFirst = false;
          },
        });
      }
    },
    SHOW_LEFT1_FIRST(state) {
      if (state.showLeft1First) {
        tooltipBlock("content1", {
          position: "right",
          content: "这里面是上传和下载功能",
          closeBack() {
            state.showLeft1First = false;
          },
        });
      }
    },
    SHOW_LEFT2_FIRST(state) {
      if (state.showLeft1First) {
        tooltipBlock("content2", {
          position: "right",
          content: "这里面是预览和搜索功能",
          closeBack() {
            state.showLeft1First = false;
          },
        });
      }
    },
    SHOW_BOTTOM_FIRST(state, callback) {
      if (state.showBottomFirst) {
        tooltipBlock("bottom", {
          position: "top",
          content: "这是底部",
          success(vm) {
            callback(vm);
          },
          closeBack() {
            state.showBottomFirst = false;
          },
        });
      }
    },
    SHOW_UPLOAD_FIRST(state, callback) {
      if (state.showUploadFirst) {
        tooltip("upload", {
          position: "bottom",
          content: "这是上传按钮",
          closeBack() {
            state.showUploadFirst = false;
          },
          success(vm) {
            callback(vm);
          },
        });
      }
    },
    SHOW_DOWNLOAD_FIRST(state, callback) {
      if (state.showDownloadFirst) {
        tooltip("download", {
          position: "bottom",
          content: "这是下载按钮",
          closeBack() {
            state.showDownloadFirst = false;
          },
          success(vm) {
            callback(vm);
          },
        });
      }
    },
    SHOW_PREVIEW_FIRST(state, callback) {
      if (state.showPreviewFirst) {
        tooltip("preview", {
          position: "bottom",
          content: "这是预览功能",
          closeBack() {
            state.showPreviewFirst = false;
          },
          success(vm) {
            callback(vm);
          },
        });
      }
    },
    SHOW_SEARCH_FIRST(state, callback) {
      if (state.showSearchFirst) {
        tooltip("search", {
          position: "bottom",
          content: "这是搜索功能",
          closeBack() {
            state.showSearchFirst = false;
          },
          success(vm) {
            callback(vm);
          },
        });
      }
    },
  },
};
