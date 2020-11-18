### 禁用状态
:::
通过`disabled`属性指定是否禁用 input 组件
:::
```
<lwp-input
  placeholder="请输入内容"
  v-model="input"
  :disabled="true">
</lwp-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```