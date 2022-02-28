<template>
  <transition name="fade">
    <section v-if="show" class="tooltip" :class="position">
      {{ content || "我是新手教程" }}
      <div class="close" @click="close">X</div>
      <div class="point"></div>
    </section>
  </transition>
</template>

<script>
export default {
  props: {
    dom: {
      type: Document,
      default: null,
    },
    closeBack: null,
    resolveCB: null,
    _next: {
      type: Function,
      default: () => {},
    },
    position: null,
    content: null,
  },
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    this.show = true;
  },
  methods: {
    close() {
      this.closeBack && this.closeBack();
      this.resolveCB();
      this._next();
    },
  },
  destroyed() {
    this._next();
    this.resolveCB();
  },
};
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.tooltip {
  z-index: 888;
  font-size: 10px;
  width: 100px;
  height: 50px;
  background: rgba($color: #28b7e2, $alpha: 1);
  display: flex;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  color: #fff;
  position: relative;
  margin: 10px;
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 0px;
    height: 0px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent;
  }
  .close {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(30%, -30%) scale(0.5);
    background: #eee;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    cursor: pointer;
  }
}

.right {
  &::after {
    left: -5px;
    border-left-width: 0;
    border-right-color: #28b7e2;
  }
}
.left {
  &::after {
    right: -5px;
    border-right-width: 0;
    border-left-color: #28b7e2;
  }
}
.top {
  &::after {
    bottom: -5px;
    border-bottom-width: 0;
    border-top-color: #28b7e2;
  }
}
.bottom {
  &::after {
    top: -5px;
    border-top-width: 0;
    border-bottom-color: #28b7e2;
  }
}
</style>
