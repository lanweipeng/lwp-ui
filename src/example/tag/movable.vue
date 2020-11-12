<template>
  <div>
    <code-template
    name='可移除标签'
    :md='movaleMd'
    str='

    '
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
  export default {
    data() {
      return {
        // movaleMd:this.md2html(movaleMd)
        movaleMd:movaleMd
      }
    },
    components:{
      CodeTemplate
    }
  }
</script>

<style lang="scss" scoped>

</style>