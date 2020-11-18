<template>
  <div>
    <code-template :md="md">
      <lwp-input v-model="input" placeholder="请输入内容"/>
    </code-template>
  </div>
</template>

<script>
import md from './default.md'
import CodeTemplate from '../components/code-template/index'
import {toRefs,reactive} from '@vue/composition-api'
  export default {
    components:{CodeTemplate},
    setup(){
      const state=reactive({
        md:md,
        input:''
      })
      const stateRefs=toRefs(state);
      return {...stateRefs}
    }
    
  }
</script>

<style lang="scss" scoped>

</style>