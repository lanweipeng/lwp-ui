<template>
  <div>
    <div v-show="active">
      <slot />
      </div>
  </div>
</template>

<script>
export default {
    name:'LwpTabPane',
  props: {
    label: String,
    name: String,
  },
  data(){
      return {index:null}
  },
  created() {
    // console.log('this.index');
    // console.log(this);
  },
  computed: {
    active() {
      const active = this.$parent.currentName === this.name||+this.$parent.currentName === this.index;
      return active;
    },
  },
};
</script>

<style lang='scss'>

</style>