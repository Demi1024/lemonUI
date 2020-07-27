<template>
  <button :class="classes" type='button'>
    <slot></slot>
  </button>
</template>
<script>
import '../../style/index.scss'
import {computed} from 'vue'
const prefixCls = 'de-button'
export default{
  name:'Button',
  props:{
    type:{
      type:String,
      default:'default'
    }
  },
  setup(props){
    const type = computed(()=>props.type)
    const classes = computed(()=>{
                return [
                    `${prefixCls}`,
                    `${prefixCls}-${props.type}`
                ]
            })
    return {classes,type}
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