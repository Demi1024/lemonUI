<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import {computed} from 'vue'
const prefixCls = 'limo-col';
export default {
  name:'Col',
  props:{
    span:{
      type:Number,
      default:24
    }
  },
  setup(props){
    const {span} = props
    const classes = computed(()=>{
                return [
                  `${prefixCls}`,
                  {[`${prefixCls}-${span}`]:span}
                ]
                
            })
    return{classes}
  }
}
</script>
<style lang="scss">
.limo-col{
  position: relative;
  min-height: 1px;
  display: block;
  box-sizing: border-box;
  &-1{
    width: 4.1666667%;
  }
  &-2{
    width: 8.3333333%;
  }
  &-3{
    width: 12.5%;
  }
  &-4{
    width: 16.666667%;
  }
  &-5{
    width: 20.833333%;
  }
  &-6{
    width: 25%;
  }
  &-7{
    width: 29.166667%;
  }
  &-8{
    width: 33.333333%;
  }
  &-9{
    width: 37.5%;
  }
  &-10{
    width: 41.666667%;
  }
  &-11{
    width: 45.833333%;
  }
  &-12{
    width: 50%;
  }
  &-13{
    width: 54.166667%;
  }
  &-14{
    width: 58.333333%;
  }
  &-15{
    width: 62.5%;
  }
  &-16{
    width: 66.666667%;
  }
  &-17{
    width: 70.833333%;
  }
  &-18{
    width: 75%;
  }
  &-19{
    width: 79.166667%;
  }
  &-20{
    width: 83.333333%;
  }
  &-21{
    width: 87.5%;
  }
  &-22{
    width: 91.666667%;
  }
  &-23{
    width: 95.833333%;
  }
  &-24{
    width:100%;
  }
}
.limo-col-1, .limo-col-2, .limo-col-3, .limo-col-4, .limo-col-5, .limo-col-6, .limo-col-7, .limo-col-8, .limo-col-9, .limo-col-10, .limo-col-11, .limo-col-12, .limo-col-13, .limo-col-14, .limo-col-15, .limo-col-16, .limo-col-17, .limo-col-18, .limo-col-19, .limo-col-20, .limo-col-21, .limo-col-22, .limo-col-23, .limo-col-24{
  flex: 0 0 auto;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  float: left;
}
</style>