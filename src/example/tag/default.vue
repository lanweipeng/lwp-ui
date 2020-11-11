<template>
  <div>
 <lwp-template name='基础用法' 
 str='
<lwp-tag>标签一</lwp-tag>
<lwp-tag type="success" class="xx">标签二</lwp-tag>
<lwp-tag type="info">标签三</lwp-tag>
<lwp-tag type="warning">标签四</lwp-tag>
<lwp-tag type="danger">标签五</lwp-tag>
 '
 info='由`type`属性来选择tag的类型，也可以通过`color`属性来自定义背景色。'>
    <lwp-tag>标签一</lwp-tag>
    <lwp-tag type="success" class="xx">标签二</lwp-tag>
<lwp-tag type="info">标签三</lwp-tag>
<lwp-tag type="warning">标签四</lwp-tag>
<lwp-tag type="danger">标签五</lwp-tag>
   </lwp-template> 
<div>

</div>
  </div>
</template>

<script>
import LwpTemplate from '../components/code-template/index'
  export default {
    components:{
      LwpTemplate
    },
    data(){
      return {
   
      }
    },
    created(){
      
    }
  }
</script>

<style lang="scss" scoped>

</style>