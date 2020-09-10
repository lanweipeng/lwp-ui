

<script>
import TabNav from './tab-nav'
export default {
props:{
    activeName:String
},
components:{
    TabNav
},
data(){
    return{
labels:[],
panes:[],
currentName:this.activeName
    }
},
methods:{
    onTabClick(name){
        this.currentName=name
    },
    calcPaneInstances(isForceUpdate = false){
 console.log('this.activeName')
    console.log(this.activeName)
    const paneSlots=this.$slots.default.filter(vnode=>vnode.tag&&
    vnode.componentOptions&&vnode.componentOptions.Ctor.options.name==='LwpTabPane')
    const labels=paneSlots.map((item,index)=>({index:index,name:item.componentOptions.propsData.name,label:item.componentOptions.propsData.label}));
    this.labels=labels;
     let panes = paneSlots.map(({componentInstance}) => componentInstance);
     panes.map((item,index)=>item.index=index);
     const panesChanged = !(panes.length === this.panes.length && panes.every((pane, index) => pane === this.panes[index]));
  if(isForceUpdate||panesChanged){
     this.panes=panes

  }
    },
},
watch:{
    activeName(value){
        console.log('value')
        console.log(value)
    }
},
render(){
    const {
        currentName,
        panes
    }=this;
    const navData={
        props:{
            currentName,
            panes
        },
        ref: 'nav'
    }
  
    const header=(
        <div class="lwp-tabs__header">
            <tab-nav {...navData}></tab-nav>
        </div>
    )
    const panels=(
        <div class="lwp-tabs__content">
        {this.$slots.default}
        </div>
    )
    return (
       <div class="lwp-tabs">
       {[header,panels]}
    <slot/>
  </div>
    )
},
created(){
    console.log(this)
    console.log('this.activeName')
    console.log(this.activeName)
    if(!this.currentName){
        this.currentName='0'
    }
},
mounted(){
    this.calcPaneInstances()
},
updated(){
    this.calcPaneInstances()
}
}
</script>

<style lang="less">
.lwp-tabs-labels{
    display: flex;
    .lwp-tabs-label-item {
        
  background-color: red;
  color: white;
  width: 160px;
  line-height: 30px;
  text-align: center;
  
}
}
</style>