<template>
  <div class="container">
    <el-button id="preview" style="height: 30px" ref="preview">预览</el-button>
    <el-button id="search" style="height: 30px" ref="search">搜索</el-button>
  </div>
</template>

<script>
import store from "../../store/index.js";
export default {
  data() {
    return {
      tooltip1: null,
      tooltip2: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.showTooltip();
    });
  },
  methods: {
    showTooltip() {
      store.commit("SHOW_PREVIEW_FIRST", (vm) => (this.tooltip1 = vm));
      store.commit("SHOW_SEARCH_FIRST", (vm) => (this.tooltip2 = vm));
    },
  },
  destroyed() {
    this.tooltip1 && this.tooltip1.$destroy();
    this.tooltip2 && this.tooltip2.$destroy();
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
