<template>
  <button class="swicth"><span></span></button>
</template>

<script>
  export default {
    name: 'Swicth',
    data() {
      return {
        
      }
    }
  }
</script>

<style lang="scss" scoped>
  $height:22px;
  .swicth{
    position: relative;
    width:$height*2;
    height: $height;
    background: royalblue;
    border-radius: $height/2;
  }
</style>