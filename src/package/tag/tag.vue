

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
    methods:{
      handleClose(event){
        event.stopPropagation();
        this.$emit('close',event);
      },
      handleClick(event){
        this.$emit('click',event)
      }
    },
    render(){
      const {text,type,closable}=this;
      const classes=[
        'lwp-tag',
        type&&`lwp-tag--${type}`
      ]
      console.log({type})
      return (
          <span class={classes} on-click={this.handleClick}>
    {this.$slots.default}
    {closable&&<i on-click={this.handleClose} class={`lwp-tag__close lwp-icon-close`}></i>}
  </span>
      )
    }
  }
</script>
