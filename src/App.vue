<template>
  <div>
    <!-- button -->
    <!-- <lwp-button type="primary" icon="left">lwp</lwp-button>
    <lwp-button icon="up" type="primary" position="right">今日头条</lwp-button> -->
    <!-- tabs -->
   <!-- <tabs></tabs>  -->
   <!-- <tag></tag> -->
   
    <!-- row -->
    <lwp-row>
      <!-- <lwp-col>hh</lwp-col> -->
    </lwp-row>
    <!-- button -->
   
<!-- link -->

<!-- <lwp-link href="http://www.baidu.com" target="_blank">默认链接</lwp-link> -->
 
 <header>lwp-ui</header>
<main>
  
  <aside>
   <router-link :to="{ name: 'tag', params: { userId: 123 }}">tag</router-link>
   <router-link :to="{ name: 'button'}">button</router-link>
   <router-link :to="{ name: 'dialog'}">dialog</router-link>
   <router-link :to="{ name: 'input'}">input</router-link>
 </aside>
 <div class="content">
<router-view></router-view>
 </div>
</main>
<div class="footer"></div>
  </div>
</template>

<script>
import Tabs from './example/tabs'
import Tag from './example/tag/index'
import Input from './example/input/index'
export default {
  components:{
    Tabs,Tag,Input
  },
  data() {
    return {
activeName: "user",
     
      
    };
  
  },
  created(){
      console.log(this.$route)
      console.log('this.$route')

  },
    
};
</script>

<style>
</style>