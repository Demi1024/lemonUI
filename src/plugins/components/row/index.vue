<template>
  <div class="limo-row">
    <slot></slot>
  </div>
</template>
<script>
const prefixCls = 'limo-row'
export default {
  name:'Row'
}
</script>
<style lang="scss">
.limo-row{
  position: relative;
  margin-left: 0;
  margin-right: 0;
  height: auto;
  zoom: 1;
  display: block;
  &::before{
    content: '';
    display: table;
  }
  &::after{
    clear: both;
    visibility: hidden;
    font-size: 0;
    height: 0;
  }
}
</style>