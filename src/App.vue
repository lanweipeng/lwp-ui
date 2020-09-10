<template>
  <div>
    <!-- button -->
    <lwp-button type="primary" icon="left">lwp</lwp-button>
    <lwp-button icon="up" type="primary" position="right">今日头条</lwp-button>
    <!-- tabs -->
    <lwp-tabs 
    v-model="activeName" 
     @tab-click="handleClick"
    >
      <lwp-tab-pane label="用户管理" name="user">用户管理</lwp-tab-pane>
      <lwp-tab-pane label="客户管理" name="customer">客户管理</lwp-tab-pane>
    </lwp-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "user",
    };
  },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
};
</script>

<style>
</style>