<template>
  <div>
    <code-template
    :md='md'
    >
   <lwp-tag
  :key="tag"
  v-for="tag in dynamicTags"
  closable
  :disable-transitions="false"
  @close="handleClose(tag)">
  {{tag}}
</lwp-tag>
<lwp-input
  class="input-new-tag"
  v-if="inputVisible"
  v-model="inputValue"
  ref="saveTagInput"
  size="small"
  @keyup.enter.native="handleInputConfirm"
  @blur="handleInputConfirm"
>
</lwp-input>
<lwp-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</lwp-button>

    </code-template>
  </div>
</template>

<script>

import md from './edit.md'// 引入md文件
import CodeTemplate from "../components/code-template/index"
import {reactive,toRefs,ref,defineComponent,setup} from '@vue/composition-api'
  export default {
    components:{
      CodeTemplate
    },
    data() {
      return {
        dynamicTags: ['标签一', '标签二', '标签三'],
        inputVisible: false,
        inputValue: ''
      };
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        console.log('lwp')
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
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
        md:md
      })
      console.log(data)
      const dataAsRefs=toRefs(data);
      console.log(dataAsRefs)
      return {...dataAsRefs}
    }
  }
</script>

<style lang="scss" scoped>
  .lwp-tag + .lwp-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>