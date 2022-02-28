<template>
  <div class="container">
    <el-button id="upload" style="height: 30px" ref="upload">上传</el-button>
    <el-button id="download" style="height: 30px" ref="download"
      >下载</el-button
    >
    <!-- <el-button
      id="bottom"
      style="height: 30px; margin-top: 600px"
      ref="download"
      >底部</el-button
    > -->
  </div>
</template>

<script>
import store from "../../store/index.js";
export default {
  data() {
    return {
      tooltip1: null,
      tooltip2: null,
      tooltip3: null
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.showTooltip();
    });
  },
  methods: {
    showTooltip() {
      store.commit("SHOW_BOTTOM_FIRST", (vm) => {
        console.log(vm);
        this.tooltip3 = vm;
      });
      store.commit("SHOW_UPLOAD_FIRST", (vm) => {
        this.tooltip1 = vm;
      });
      store.commit("SHOW_DOWNLOAD_FIRST", (vm) => {
        this.tooltip2 = vm;
      });
    },
  },
  destroyed() {
    this.tooltip1 && this.tooltip1.$destroy();
    this.tooltip2 && this.tooltip2.$destroy();
    this.tooltip3 && this.tooltip3.$destroy();
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  width: 100%;
  justify-content: space-around;
}
</style>
