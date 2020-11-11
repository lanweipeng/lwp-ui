    ```<lwp-tag
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
</script>```