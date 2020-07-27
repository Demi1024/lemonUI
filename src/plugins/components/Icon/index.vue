<template>
  <i :class="classes"></i>
</template>
<script>
import {computed} from 'vue'
const prefixCls = 'de-icon';
export default {
  name:'Icon',
  props:{
    type:{
      type:String,
      default:''
    },
    custom:{
      type:String,
      default:''
    }
  },
  setup(props){
    const classes = computed(()=>{
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${props.type}`]: props.type !== '',
                        [`${props.custom}`]: props.custom !== '',
                    }
                ];
            })
    return {classes}
  }
}
</script>
<style lang="scss" scoped>

.de-icon{
  display: inline-block;
  // font-family: Ionicons;
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  text-rendering: optimizeLegibility;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  vertical-align: -.125em;
  text-align: center;
}
</style>