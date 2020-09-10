

<script>
export default {
    props:{
        currentName:String,
        panes:Array
    },
    created(){
    },
render(){
    const {panes}=this;
    const tabs=this._l(panes,(pane,index)=>{
            const tabLabelContent=pane.$slots.label||pane.label;
return (
    <div>{tabLabelContent}</div>
)
    });
    return (
<div>{tabs}</div>
    )
}
}
</script>

<style>

</style>