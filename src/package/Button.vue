<template>
  <div :class="[
  type + ' lwp-button '+position,
  {
    'is-plain':plain,
    'is-round':round,
    'is-circle':circle,
    'is-disabled':disabled
  }
  ]">
    <iconfont
      :type='icon'
      v-if="icon"
      :class="'iconfont '"
    ></iconfont>
    <slot class="content"></slot>
  </div>
</template>
<script>
import Iconfont from "./Iconfont";
export default {
  // props:['type', 'icon', 'position',plain:Boolean],
  props: {
    type: String,
    icon: String,
    position: String,
    plain: Boolean,
    round:Boolean,
    circle:Boolean,
    disabled:Boolean
  },
  data: function () {
    return {};
  },
};
</script>
<style lang='scss'>
.lwp-button {
  border: 1px solid #ccc;
  display: inline-block;
  border-radius: 4px;
  padding: 0 1em;
  text-align: center;
  padding: 0 10px;
  line-height: 28px;
  font-size: 14px;
  border-color: #e8e8e8;
  background: #f9f9f9;
  color: #666;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  vertical-align: middle;
  align-items: center;
  .iconfont {
    display: inline;
    vertical-align: middle;
  }
}
.right {
  .iconfont {
    order: 2;
  }
  .content {
    order: 1;
  }
}
.is-plain {

}
.is_disabled:focus{
border-color: transparent;
}
.primary {
  background: blue;
  color: #fff;
  border: 1px solid transparent;
}
.success {
  background-color: green;
  color: #fff;
  border: 1px solid transparent;
}
.info {
  background-color: grey;
  color: #fff;
  border: 1px solid transparent;
}
.warning {
  background-color: orange;
  color: #fff;
  border: 1px solid transparent;
}
.dander {
  background-color: red;
  color: #fff;
  border: 1px solid transparent;
}
.is-round{
   border-radius: 20px;
}
.is-cricle{

   border-radius: 50%;
}
.down {
  font-size: 14px;
}
</style>