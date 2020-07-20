<template>
  <div class="page">
    这里是输入框介绍页面
    <div class="intro">
      普通用法
      <de-input></de-input>
    </div>
    <div>
      自定义边框颜色
    </div>
  </div>
</template>
<script>
export default {
  name:'DeInput'
}
</script>
<style lang="scss" scoped>
  .page{
    .intro{
      width: 50%;
    }
  }
</style>