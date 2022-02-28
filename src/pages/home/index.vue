<template>
  <div class="container">
    <el-menu
      class="menu"
      default-active="2"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="select"
    >
      <el-menu-item index="./content1" ref="content1" id="content1">
        <i class="el-icon-menu"></i>
        <span slot="title">内容一</span>
      </el-menu-item>
      <el-menu-item index="./content2" ref="content2" id="content2">
        <i class="el-icon-menu"></i>
        <span slot="title">内容二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4" v-if="show">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
    <router-view class="content" />
  </div>
</template>

<script>
import store from "../../store/index.js";
export default {
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    store.commit("SHOW_DIALOG_FIRST");
    store.commit("SHOW_LEFT1_FIRST");
    store.commit("SHOW_LEFT2_FIRST");
    this.select(0);
  },
  methods: {
    select(index) {
      this.$router.push({ path: index, query: { first: true } });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  height: 100%;
  .menu {
    height: 100%;
    font-size: 20px;
  }
  .content {
    flex: 1;
  }
}
</style>
