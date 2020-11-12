<template>
  <div>
    <lwp-dialog :visible.sync="dialogVisible">hh</lwp-dialog>
    <div @click="changeVisible">click</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    changeVisible() {
      this.dialogVisible = !this.dialogVisible;
    },
    handleClick(tab, event) {
      // console.log('hhh');
      // console.log(tab, event);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>