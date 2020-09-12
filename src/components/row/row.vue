
<script>
export default {
data(){
return {
}
},created(){},methods:{},components:{},
render(h){
  console.log(this.tag)
  console.log(
h
);
return (
  <div
  class={'lwp-row'}
  >{this.$slots.default}</div>
)
//  return h(this.tag,{

//   },this.$slots.default)
}
}
</script>
<style lang='less' scoped>
</style>