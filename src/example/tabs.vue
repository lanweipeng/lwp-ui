<template>
  <div>
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
      }
    },
   methods: {
     handleClick(tab, event) {
        console.log('hhh');
        console.log({tab}, {event});
      }
   },
  }
</script>

<style lang="scss" scoped>

</style>