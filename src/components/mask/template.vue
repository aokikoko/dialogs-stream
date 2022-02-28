<template>
  <transition name="fade">
    <section v-if="show" class="mask" >
    </section>
  </transition>
</template>

<script>
export default {
  props: {
    resolveCB: null,
  },
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    this.show = true;
  },
  destroyed() {
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
.mask {
  top: 0;
  left:0;
  z-index: 888;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba($color: #000000, $alpha: 0.3)
}
</style>
