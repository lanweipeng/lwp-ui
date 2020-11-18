<template>
  <div>
<code-template :md="md">
  <lwp-input
  placeholder="请输入内容"
  v-model="input"
  :disabled="true"
  >
</lwp-input>
</code-template>
  </div>
</template>

<script>
import md from './disabled.md'
import CodeTemplate from '../components/code-template/index'
 import {toRefs,reactive} from '@vue/composition-api'
 export default {
   components:{
     CodeTemplate
   },
    setup(){
      const state=reactive({
        md,
        input: ''
      })
      const stateRefs=toRefs(state);
       return {...stateRefs}
    }
    
   
  }
</script>

<style lang="scss" scoped>

</style>