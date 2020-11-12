<template>

  <a :href="href"  v-bind="$attrs" :class="[
  'lwp-link-'+type,
  
  ]"><slot/></a>

</template>
<script>
export default {
  props:{
    href:String,
    type:{
      type:String,
      default:'default'
    }
  },
data(){
return {
}
},created(){},methods:{},components:{}
}
</script>
<style lang='scss' scoped>
$--color-text-regular: #606266 ;
.lwp-link-default{
 color: $--color-text-regular;
}
</style>