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
  
  },
  render(h, x) {
    const demo = this.$slots.default;
    const { name, str, visuable, changeVisual,md } = this;
    let {info}=this;
    console.log(info)
    console.log({md})
    const arr=md.split(':::');
    let demo1=arr[2];
    demo1=demo1.replace(/<pre>/g,'')
    demo1=demo1.replace(/<\/pre>/g,'')
    demo1=demo1.replace(/<code>/g,'')
    demo1=demo1.replace(/<\/code>/g,'')
    demo1=demo1.replace(/&lt;/g,'<')
    demo1=demo1.replace(/&gt;/g,'>')
    demo1=demo1.replace(/&quot;/g,'"')
    demo1=demo1.replace(/<\/p>/g,'')
    
    console.log(demo)
    // let i=0;
    // info=info.split('').map(item=>{
    //   if(item==='`'){
    //     if(i%2===0){
    //       item='<code>'
    //     }else{
    //       item='</code>'
    //     }
    //     i++;
    //   }
    //   return item;
    // }).join('');
    // const demo2=this.md2html(demo1)
    return (
      <div>
        
        <div domPropsInnerHTML={arr[0]}></div>
        <div class="demo-block">
          <div class="source" >{demo}
          </div>
          {visuable&&<div class="meta" >
            <div class="description" domPropsInnerHTML={arr[1]}></div>
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