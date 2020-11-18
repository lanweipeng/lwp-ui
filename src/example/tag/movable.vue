<template>
  <div>
    <code-template
    name='可移除标签'
    :md='movaleMd'
    >
    <lwp-tag
  v-for="tag in tags"
  :key="tag.name"
  closable
  :type="tag.type">
  {{tag.name}}
</lwp-tag>
    </code-template>
  </div>
</template>

<script>

import movaleMd from './movable.md'// 引入md文件
import CodeTemplate from "../components/code-template/index"
import {reactive,toRefs,ref,defineComponent,setup} from '@vue/composition-api'
  export default {
    // data() {
    //   return {
    //     // movaleMd:this.md2html(movaleMd)
    //     movaleMd:movaleMd
    //   }
    // },
    components:{
      CodeTemplate
    },
    created(){
      console.log(this)
    },
    setup(){
      const data=reactive({
        tags: [
          { name: '标签一', type: '' },
          { name: '标签二', type: 'success' },
          { name: '标签三', type: 'info' },
          { name: '标签四', type: 'warning' },
          { name: '标签五', type: 'danger' }
        ],
        movaleMd:movaleMd
      })
      console.log(data)
      const dataAsRefs=toRefs(data);
      console.log(dataAsRefs)
      return {...dataAsRefs}
    }
  }
</script>

<style lang="scss" scoped>

</style>