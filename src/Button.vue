<template>
  <div :class="type + ' lwp-button '+position">
    <iconfont :type='icon' v-if="icon" :class="'iconfont '"></iconfont>
    <slot class="content"></slot>
  </div>
</template>
<script>
import Iconfont from './Iconfont'
  export default {
    props:['type', 'icon', 'position'],
    data: function(){
      return {
      }
    }
  }
</script>
<style lang='less'>

.lwp-button{
  border: 1px solid #ccc;
  display: inline-block;
  border-radius: 4px;
  padding: 0 1em;
  text-align: center;
  padding: 0 10px;
  line-height: 28px;
  font-size: 14px;
  border-color: #e8e8e8;
  background: #f9f9f9;
  color: #666;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
   vertical-align: middle;
  align-items: center;
  .iconfont{
   display: inline;
   vertical-align: middle;
  }
}
.right{
    .iconfont{
      order:2;
    }
    .content{
      order: 1;
    }
  }
.primary{
  background: #f85959;
  color: #fff;
  border: 1px solid transparent;
}
.down{
  font-size: 14px;
}
</style>