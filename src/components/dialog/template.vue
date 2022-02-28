<template>
  <div>
    <el-dialog title="公告" :visible.sync="dialogVisible" width="30%">
      <div>{{ content }}</div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelAll">关闭教程</el-button>
        <el-button type="primary" @click="cancel">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    _next: null,
    content: null,
    resolveCB: null,
    closeAll: null,
  },
  data() {
    return {
      dialogVisible: true,
    };
  },
  methods: {
    cancel() {
      this.resolveCB();
      this._next();
    },
    cancelAll() {
      this.closeAll && this.closeAll();
      this.resolveCB();
    },
  },
};
</script>

<style></style>
