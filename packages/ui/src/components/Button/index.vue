<template>
  <button class="limo-button"
    :class="classes" 
    type='button'
    :disabled="disabled"
  >
    <span v-if="loading" class="limo-loadingIndicator"></span>
    <slot></slot>
  </button>
</template>
<script lang="ts">
import {computed} from 'vue'
const prefixCls = 'limo-button'
export default{
  // inheritAttrs:false,属性值为false最外层元素不继承事件
  name:'Button',
  props:{
    theme:{
      type:String,
      default:'default'
    },
    disabled:{
      type:Boolean,
      default:false
    },
    loading:{
      type:Boolean,
      default:false
    },
    size: {
      type: String,
      default: "normal"
    }
  },
  setup(props:any){
    const {theme,size} = props
    const classes = computed(()=>{
                return {
                    [`${prefixCls}-${theme}`]:theme,
                    [`limo-size-${size}`]: size,
                }
            })
    return {classes}
  }
}
</script>
<style lang="scss">
@import '../../styles/variables.scss';

.limo-button{
  align-items: center;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: none;
  display: inline-flex;
  font-size: 1rem;
  height: 2.25em;
  justify-content: flex-start;
  line-height: 1.5;
  padding: calc(.375em - 1px) calc(.625em - 1px);
  position: relative;
  vertical-align: top;
  transition: background .2s linear,color .2s linear;
  cursor: pointer;
  &[disabled]{
    cursor: not-allowed;
    color: $grey-6;
    &:hover{
      color: $grey-6;
      border-color: $grey-3;
    }
  }
  &-default{
    color: $font-color-primary;
    background: $grey-1;
    border-color: $grey-3;
    &:hover{
      background: $grey-1;
      color: $blue-7;
      border-color: $blue-7;
    }
    &:focus{
      outline: none;
      border-color: $blue-7;
    }
  }
  &-primary{
    color: $grey-1;
    background: $blue-7;
    &:hover{
      background: $blue-6;
      color: $grey-1;
      border-color: $blue-6;
    }
    &:focus{
      outline: none;
      border-color: $blue-6;
    }
  }
  &-dashed{
    color: $font-color-primary;
    background: $grey-1;
    border-color: $grey-3;
    border-style: dashed;
    &:hover{
      background: $grey-1;
      color: $blue-7;
      border-color: $blue-7;
    }
    &:focus{
      outline: none;
      border-color: $blue-7;
    }
  }
  &-text{
    background: transparent;
    color: $font-color-primary;
    &:hover{
      color: $blue-7;
    }
    &:focus{
      outline: none;
    }
  }
  &-info{
    color: $grey-1;
    background: $cyan-6;
    &:hover{
      background: $cyan-5;
      color: $grey-1;
      border-color: $cyan-5;
    }
    &:focus{
      outline: none;
      border-color: $cyan-5;
    }
  }
  &-success{
    color: $grey-1;
    background: $green-6;
    &:hover{
      background: $green-5;
      color: $grey-1;
      border-color: $green-5;
    }
    &:focus{
      outline: none;
      border-color: $green-5;
    }
  }
  &-warning{
    color: $grey-1;
    background: $yellow-7;
    &:hover{
      background: $yellow-6;
      color: $grey-1;
      border-color: $yellow-6;
    }
    &:focus{
      outline: none;
      border-color: $yellow-6;
    }
  }
  &-error{
    color: $grey-1;
    background: $red-6;
    &:hover{
      background: $red-5;
      color: $grey-1;
      border-color: $red-5;
    }
    &:focus{
      outline: none;
      border-color: $red-5;
    }
  }
  &.limo-size-large {
    font-size: 1.5em;
  }
  &.limo-size-normal {
    font-size: 1em;
  }
  &.limo-size-small {
    font-size: 0.8em;
  }
  & .limo-loadingIndicator{
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px; 
    border-color: $grey-6 $grey-6 $grey-6 transparent;
    border-style: solid;
    border-width: 2px;
    animation: limo-spin 1s infinite linear;
  }
}
@keyframes limo-spin {
  0%{transform: rotate(0deg)} 
  100%{transform: rotate(360deg)} 
}
</style>