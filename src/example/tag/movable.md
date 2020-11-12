### 可移除标签

:::demo 设置`closable`属性可以定义一个标签是否可移除。默认的标签移除时会附带渐变动画，如果不想使用，可以设置`disable-transitions`属性，它接受一个`Boolean`，true 为关闭。:::
```
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
import CodeTemplate from "../components/code-template/index"
  export default {
    components:{
      CodeTemplate
    }
  }
</script>
```