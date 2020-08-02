<template>
  <div :class="classes" @click="toogle"><span></span></div>
</template>

<script lang="ts">
const prefixCls = 'de-switch'
import { ref, computed } from 'vue'
  export default {
    name: 'Swicth',
    props:{
      value:{
        type:Boolean|| String,
        default:false
      }
    },
    setup(props,context){
      const status = computed(()=> ref(props.value))
      const classes = computed(()=>{
                return [
                    `${prefixCls}`,
                    {
                      [`${prefixCls}-checked`]:props.value
                    }
                ]
            })
      const toogle = ()=>{
        context.emit('input',!props.value)
      }
      return{status,classes,toogle}
    }
  }
</script>

<style lang="scss" scoped>
  $height:22px;
  $height2:$height - 4px;
  .de-switch{
    position: relative;
    width:$height*2;
    height: $height;
    background: #cccccc;
    border-radius: $height/2;
    border:none;
    &-checked{
      background: royalblue;
      > span{
        left: calc(100% - #{$height2} - 4px);
      }
    }
  }
  span{
      position: absolute;
      top:2px;
      left:2px;
      display: inline-block;
      width: $height2;
      height:$height2;
      border-radius: $height2/2;
      background:#ffffff;
      transition: left 250ms linear;
    }
</style>