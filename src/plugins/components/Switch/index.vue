<template>
  <button :class="classes" @click="toogle">
    <span>
    </span>
  </button>
  <slot></slot>
</template>

<script lang="ts">
const prefixCls = 'de-switch'
import { ref, computed, watch } from 'vue'
  export default {
    name: 'Swicth',
    props:{
      value:{
        type: [String, Number, Boolean],
        default:false
      },
      trueValue:{
        type: [String, Number, Boolean],
        default:true
      },
      falseValue:{
        type: [String, Number, Boolean],
        default:false
      }
    },
    setup(props,context){
      const currentValue = computed(()=> ref(props.value))
      const classes = computed(()=>{
                return [
                    `${prefixCls}`,
                    {
                      [`${prefixCls}-checked`]:currentValue.value.value === props.trueValue,
                    }
                ]
            })
      const toogle = ()=>{
        const checked = currentValue.value.value === props.trueValue ? props.falseValue : props.trueValue;
        context.emit('update:value',checked)
      }
      return{currentValue,classes,toogle}
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
    transition: all 250ms linear;
    > span{
      position: absolute;
      top:2px;
      left:2px;
      display: inline-block;
      width: $height2;
      height:$height2;
      border-radius: $height2/2;
      background:#ffffff;
      transition: all 250ms linear;
    }
    &-checked{
      background: royalblue;
      > span{
        left: calc(100% - #{$height2} - 4px);
      }
    }
    &:focus{
      outline: none;
      box-shadow: 0 0 0.5em #cccccc;
    }
    &-checked:focus{
      box-shadow: 0 0 0.5em royalblue;
    }
  }
  
</style>