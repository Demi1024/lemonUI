<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import {computed} from 'vue'
const prefixCls = 'limo-container';
export default {
  name:'Container',
  props:{
    // span:{
    //   type:Number,
    //   default:24
    // }
  },
  setup(props:any){
    const {span} = props
    const classes = computed(()=>{
                return [
                  `${prefixCls}`
                ]
                
            })
    return{classes}
  }
}
</script>
<style lang="scss" scoped>
.limo-container{
  width: 100%;
  margin:0 auto;
  padding:0 $padding-x-1;
}

</style>