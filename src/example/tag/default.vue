<template>
  <div>
    <lwp-template :md="md">
      <lwp-tag>标签一</lwp-tag>
      <lwp-tag type="success" class="xx">标签二</lwp-tag>
      <lwp-tag type="info">标签三</lwp-tag>
      <lwp-tag type="warning">标签四</lwp-tag>
      <lwp-tag type="danger">标签五</lwp-tag>
    </lwp-template>
    <div></div>
  </div>
</template>
<script>
import md from "./default.md";
import LwpTemplate from "../components/code-template/index";
export default {
  components: {
    LwpTemplate,
  },
  data() {
    return {
      md: md,
    };
  },
  created() {},
};
</script>

<style lang="scss" scoped>
</style>