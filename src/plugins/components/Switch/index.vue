<template>
  <button :class="classes" @click="toogle">
    <span :class="innerClass">
        <slot name="open" v-if="currentValue.value === trueValue"></slot>
        <slot name="close" v-if="currentValue.value === falseValue"></slot>
    </span>
  </button>
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
      // 计算属性会挂载ref的属性和effect
      const currentValue = computed(()=> props.value)
      const trueValue = props.trueValue
      const falseValue = props.falseValue
      const classes = computed(()=>{
                return [
                    `${prefixCls}`,
                    {
                      [`${prefixCls}-checked`]:currentValue.value === props.trueValue,
                    }
                ]
            })
      const innerClass = computed(()=> `${prefixCls}-inner`)
      const toogle = ()=>{
        const checked = currentValue.value === props.trueValue ? props.falseValue : props.trueValue;
        context.emit('update:value',checked)
      }
      return{currentValue,trueValue,falseValue,classes,innerClass,toogle}
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
    &::after{
      content: '';
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
      &::after{
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
    &-inner{
      color: #ffffff;
    }
  }
  
</style>