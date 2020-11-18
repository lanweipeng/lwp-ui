<script>
import "./index.scss";
export default {
  props: {
    md:String
  },
  computed: {
    demo() {
      return this.$slots.default;
    },
  },
  data() {
    return {
      visuable: true
    }
  },
  methods: {
    changeVisual() {
      this.visuable=!this.visuable
    }
  },
  created() {
  
  },
  render(h, x) {
    const demo = this.$slots.default;
    const { name, str, visuable, changeVisual,md } = this;
    const arr=md.split(':::');

    const info=arr[1].replace(/\s+/g,'');
    return (
      <div>
        
        <div domPropsInnerHTML={arr[0]}></div>
        <div class="demo-block">
          <div class="source" >{demo}
          </div>
          {visuable&&<div class="meta" >
            {info.length!==0&&<div class="description" domPropsInnerHTML={arr[1]}></div>}
            <div domPropsInnerHTML={arr[2]}></div>
          </div>}
          <div class="demo-block-control" onClick={()=>changeVisual()}>隐藏</div>
        </div>
      </div>
    );
  },
};
</script>

<style lang="scss" scoped>
</style>