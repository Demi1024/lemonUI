<template>
  <button class="button">
    <slot></slot>
  </button>
</template>
<script>
import '../../style/index.scss'
export default{
  name:'Button',
  props:{
    type:{
      type:String,
      default:'default'
    }
  },
  setup(){

  }
}
</script>
<style lang="scss" scoped>
.button{
  color:#515a6e;
  background: #ffffff;
  border-color: #f4f5f6;
  &:hover{
    background:#ffffff;
    color:#016ab4;
    border-color: #016ab4;
  }
  &:focus{
    outline: none;
    border-color: #016ab4;
  }
}
</style>