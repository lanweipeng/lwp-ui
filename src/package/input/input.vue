<template>
  <div :class="[
  'lwp-input'
  ]">
<input type="text" v-bind="$attrs" class="lwp-input__inner">
  </div>
</template>

<script>

  export default {
    props:{
      
    },
    created(){
      console.log({this:this})
    },
    setup(x,y,z){
console.log('x,y,z')
console.log(x,y,z)
    }
  }
</script>

<style lang="scss" scoped>

</style>