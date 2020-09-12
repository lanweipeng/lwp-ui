

<script>
import TabNav from "./tab-nav";
export default {
  props: {
    activeName: String,
  },
  components: {
    TabNav,
  },
  data() {
    return {
      labels: [],
      panes: [],
      currentName: this.activeName,
    };
  },
  methods: {
      setCurrentName(tabName){
      this.currentName = tabName;
      },
    handleTabClick(tab,tabName,event) {
      this.setCurrentName(tabName)
      this.$emit('tab-click',tab,event)
    },
    calcPaneInstances(isForceUpdate = false) {
      const paneSlots = this.$slots.default.filter(
        (vnode) =>
          vnode.tag &&
          vnode.componentOptions &&
          vnode.componentOptions.Ctor.options.name === "LwpTabPane"
      );
      const labels = paneSlots.map((item, index) => ({
        index: index,
        name: item.componentOptions.propsData.name,
        label: item.componentOptions.propsData.label,
      }));
      this.labels = labels;
      let panes = paneSlots.map(({ componentInstance }) => componentInstance);
      panes.map((item, index) => (item.index = index));
      const panesChanged = !(
        panes.length === this.panes.length &&
        panes.every((pane, index) => pane === this.panes[index])
      );
      if (isForceUpdate || panesChanged) {
        this.panes = panes;
      }
    },
  },
  watch: {
    activeName(value) {
    //   console.log("value");
    //   console.log(value);
    },
  },
  render() {
    const { currentName, panes,handleTabClick } = this;
    const navData = {
      props: {
        currentName,
        panes,
        onTabClick:handleTabClick
      },
    //   ref: "nav",
    };
    const header = (
      <div class="lwp-tabs__header">
        <tab-nav {...navData}></tab-nav>
      </div>
    );
    const panels = <div class="lwp-tabs__content">{this.$slots.default}</div>;
    return (
      <div class="lwp-tabs">
        {[header, panels]}
        <slot />
      </div>
    );
  },
  created() {
    if (!this.currentName) {
      this.currentName = "0";
    }
  },
  mounted() {
    this.calcPaneInstances();
  },
  updated() {
    this.calcPaneInstances();
  },
};
</script>

<style lang="less">
</style>