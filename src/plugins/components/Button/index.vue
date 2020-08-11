<template>
  <button :class="classes" type='button'>
    <slot></slot>
  </button>
  <!-- 默认把事件传给最外层的元素 -->
</template>
<script>
import '../../style/index.scss'
import {computed} from 'vue'
const prefixCls = 'de-button'
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
    }
  },
  setup(props){
    const theme = computed(()=>props.theme)
    const classes = computed(()=>{
                return [
                    `${prefixCls}`,
                    `${prefixCls}-${props.theme}`
                ]
            })
    return {classes,theme}
  }
}
</script>
<style lang="scss" scoped>
.de-button{
  transition: background .2s linear,color .2s linear;
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
}
</style>