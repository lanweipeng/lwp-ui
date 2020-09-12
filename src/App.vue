<template>
  <div>
    <!-- button -->
    <lwp-button type="primary" icon="left">lwp</lwp-button>
    <lwp-button icon="up" type="primary" position="right">今日头条</lwp-button>
    <!-- tabs -->
    <!-- <lwp-tabs 
    v-modlwp="activeName" 
     @tab-click="handleClick"
    >
      <lwp-tab-pane lablwp="用户管理" name="user">用户管理</lwp-tab-pane>
      <lwp-tab-pane lablwp="客户管理" name="customer">客户管理</lwp-tab-pane>
    </lwp-tabs> -->
    <!-- row -->
    <lwp-row>
      <!-- <lwp-col>hh</lwp-col> -->
    </lwp-row>
    <!-- button -->
   <lwp-row>
      <lwp-button>默认按钮</lwp-button>
    <lwp-button type="primary">主要按钮</lwp-button>
    <lwp-button type="success">成功按钮</lwp-button>
    <lwp-button type="info">信息按钮</lwp-button>
    <lwp-button type="warning">警告按钮</lwp-button>
    <lwp-button type="danger">危险按钮</lwp-button>
   </lwp-row>
    <lwp-row>
      <lwp-button>默认按钮</lwp-button>
    <lwp-button type="primary" plain>主要按钮</lwp-button>
    <lwp-button type="success" plain>成功按钮</lwp-button>
    <lwp-button type="info" plain>信息按钮</lwp-button>
    <lwp-button type="warning" plain>警告按钮</lwp-button>
    <lwp-button type="danger" plain>危险按钮</lwp-button>
   </lwp-row>
   <lwp-row>
  <lwp-button round>圆角按钮</lwp-button>
  <lwp-button type="primary" round>主要按钮</lwp-button>
  <lwp-button type="success" round>成功按钮</lwp-button>
  <lwp-button type="info" round>信息按钮</lwp-button>
  <lwp-button type="warning" round>警告按钮</lwp-button>
  <lwp-button type="danger" round>危险按钮</lwp-button>
</lwp-row>
<lwp-row>
  <lwp-button icon="lwp-icon-search" circle></lwp-button>
  <lwp-button type="primary" icon="lwp-icon-edit" circle></lwp-button>
  <lwp-button type="success" icon="lwp-icon-check" circle></lwp-button>
  <lwp-button type="info" icon="lwp-icon-message" circle></lwp-button>
  <lwp-button type="warning" icon="lwp-icon-star-off" circle></lwp-button>
  <lwp-button type="danger" icon="lwp-icon-dlwpete" circle></lwp-button>
</lwp-row>
<lwp-row>
  <lwp-button disabled>默认按钮</lwp-button>
  <lwp-button type="primary" disabled>主要按钮</lwp-button>
  <lwp-button type="success" disabled>成功按钮</lwp-button>
  <lwp-button type="info" disabled>信息按钮</lwp-button>
  <lwp-button type="warning" disabled>警告按钮</lwp-button>
  <lwp-button type="danger" disabled>危险按钮</lwp-button>
</lwp-row>
<!-- link -->
<lwp-link href="http://www.baidu.com" target="_blank">默认链接</lwp-link>
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
        console.log('hhh');
        console.log(tab, event);
      }
    }
};
</script>

<style>
</style>