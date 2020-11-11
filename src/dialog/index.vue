<template>
  <div v-if="visible">
    <div class="lwp-dialog__wrapper" @click="close">
      <div class="lwp-dialog"
        :style="style"
      >
        <div class="lwp-dialog__header">
          <slot name="title">
            <span class="lwp-dialog__title">{{ title }}</span>
          </slot>
          <button>
              <i class="lwp-dialog__close" @click="close">x</i>
          </button>
        </div>
        <div class="lwp-dialog__body"><slot></slot></div>
        <div class="lwp-dialog__footer">
          <button>取消</button>
          <button>确定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
    },
    title: {
      type: String,
      default: "提示",
    },
    top:
  },
  computed: {
      style() {
          return this.data 
      }
  },
  methods: {
    close() {
      this.$emit("update:visible", false);
    },
  },
};
</script>

<style lang="scss" scoped>
// .lwp-dialog {
//   position: relative;
.lwp-dialog__wrapper {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  .lwp-dialog {
    position: fixed;
    width: 400px;
    height: 300px;
    // position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: #fff;
    z-index: 1000;
  }
}
// }
</style>