<script>
import "./index.scss";
export default {
  props: {
    str: String,
    name: String,
    info: String,
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
    console.log(this);
    console.log("this.$slots.default");
    console.log(this.$parent.templet);
  },
  render(h, x) {
    const demo = this.$slots.default;
    const { name, str, visuable, changeVisual,md } = this;
    let {info}=this;
    console.log(info)
    let i=0;
    info=info.split('').map(item=>{
      if(item==='`'){
        if(i%2===0){
          item='<code>'
        }else{
          item='</code>'
        }
        i++;
      }
      return item;
    }).join('');
    return (
      <div>
        <h1>{name}</h1>
        <div class="demo-block">
          <div class="source">{demo}</div>
          {visuable&&<div class="meta" >
            <div class="description">{info}</div>
            <div>{md}</div>
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