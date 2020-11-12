

<script>
function noop(){}
export default {
  props: {
    // currentName: String,
    panes: Array,
    onTabClick:{
        type:Function,
        // default:noop
    }
  },
  created() {
    //   console.log('this.currentName')
    //   console.log(this.currentName)
  },
  watch:{
      currentName(value){
console.log(value)
      }
  },
  render() {
    const { panes,onTabClick  } = this;
    const tabs = this._l(panes, (pane, index) => {
        let tabName=pane.name||pane.index||index
      const tabLabelContent = pane.$slots.label || pane.label;
      console.log(pane)
      return <div class={{'lwp-tabs__item':true,'is-active':pane.active}} on-click={(ev)=>onTabClick(pane,tabName,ev)}>{tabLabelContent}</div>;
    });
    return <div class="lwp-tabs__nav">{tabs}</div>;
  },
};
</script>

<style lang="scss" scoped>
.lwp-tabs__nav {
  display: flex;
  .lwp-tabs__item {
    // background-color: red;
    color: black;
    width: 160px;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
  }
  .is-active{
      border-bottom: 1px solid #1989FA;
  }
}
</style>