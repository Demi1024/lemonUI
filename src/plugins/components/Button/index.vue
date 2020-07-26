<template>
  <button :class="classes">
    <slot></slot>
  </button>
</template>
<script>
import '../../style/index.scss'
import {computed} from 'vue'
const prefixCls = 'button'
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
.button{
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
      background:#1371b4;
      color:#ffffff;
      border-color: #016ab4;
    }
    &:focus{
      outline: none;
      border-color: #016ab4;
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
      background:#01a9b4;
      color:#ffffff;
      border-color: #01a9b4;
    }
    &:focus{
      outline: none;
      border-color: #01a9b4;
    }
  }
  &-success{
    color:#ffffff;
    background: #17c123;
    &:hover{
      background:#17c123;
      color:#ffffff;
      border-color: #17c123;
    }
    &:focus{
      outline: none;
      border-color: #17c123;
    }
  }
  &-warning{
    color:#ffffff;
    background: #df9d0e;
    &:hover{
      background:#df9d0e;
      color:#ffffff;
      border-color: #df9d0e;
    }
    &:focus{
      outline: none;
      border-color: #df9d0e;
    }
  }
  &-error{
    color:#ffffff;
    background: #f2380d;
    &:hover{
      background:#f2380d;
      color:#ffffff;
      border-color: #f2380d;
    }
    &:focus{
      outline: none;
      border-color: #f2380d;
    }
  }
}
</style>