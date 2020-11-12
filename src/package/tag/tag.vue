

<script>
  export default {
    props:{
      type:String,
      closable:Boolean,
    },
    computed:{
      text(){
        return this.$slots.default[0].text 
      }
    },
    created(){
      console.log(this.$slots.default[0].text)
    },
    render(){
      const {text,type,closable}=this;
      const classes=[
        'lwp-tag',
        type&&`lwp-tag--${type}`
      ]
      return (
          <div class={classes}>
    {this.$slots.default}
    {closable&&<i>x</i>}
  </div>
      )
    }
  }
</script>

<style lang="scss" scoped>
// @import url('../../static/main.scss');
// $main-color:#f00;
// .lwp-tag{
//   color:$main-color;
// }
</style>