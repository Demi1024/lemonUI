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
import '../../style/index.scss'
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
  &[disabled]{
    cursor: not-allowed;
    color:#cccccc;
    &:hover{
      color:#cccccc;
      border-color: #f4f5f6;
    }
  }
  &-default{
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
  &-primary{
    color:#ffffff;
    background: #016ab4;
    &:hover{
      background:#1077bf;
      color:#ffffff;
      border-color: #1077bf;
    }
    &:focus{
      outline: none;
      border-color: #1077bf;
    }
  }
  &-dashed{
    color:#515a6e;
    background: #ffffff;
    border-color: #f4f5f6;
    border-style: dashed;
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
  &-text{
    background: transparent;
    color:#515a6e;
    &:hover{
      color:#016ab4;
    }
    &:focus{
      outline: none;
    }
  }
  &-info{
    color:#ffffff;
    background: #01a9b4;
    &:hover{
      background:#07c2ce;
      color:#ffffff;
      border-color: #07c2ce;
    }
    &:focus{
      outline: none;
      border-color: #07c2ce;
    }
  }
  &-success{
    color:#ffffff;
    background: #17c123;
    &:hover{
      background:#19cd26;
      color:#ffffff;
      border-color: #19cd26;
    }
    &:focus{
      outline: none;
      border-color: #19cd26;
    }
  }
  &-warning{
    color:#ffffff;
    background: #df9d0e;
    &:hover{
      background:#e9a510;
      color:#ffffff;
      border-color: #e9a510;
    }
    &:focus{
      outline: none;
      border-color: #e9a510;
    }
  }
  &-error{
    color:#ffffff;
    background: #f2380d;
    &:hover{
      background:#f8451b;
      color:#ffffff;
      border-color: #f8451b;
    }
    &:focus{
      outline: none;
      border-color: #f8451b;
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
    border-color: #cccccc #cccccc #cccccc transparent;
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