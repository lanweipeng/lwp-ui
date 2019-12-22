<template>
<div>
    <svg class='svgClass'><use xlink:href='#icondown' class='down'></use></svg>

  <div :class="type + ' lwp-button '">
    <slot></slot>
  </div>
  </div>
</template>
<script>
  export default {
    props:['type'],
    data: function(){
      return {
      }
    }
  }
</script>
<style lang='scss'>

.lwp-button{
  border: 1px solid #ccc;
  display: inline-block;
  border-radius: 4px;
  min-width: 100px;
  text-align: center;
  padding: 0 10px;
  line-height: 28px;
  font-size: 14px;
  border-color: #e8e8e8;
  background: #f9f9f9;
  color: #666;
  cursor: pointer;
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