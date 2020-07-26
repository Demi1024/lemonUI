<template>
  <i :class="classes"></i>
</template>
<script>
import {computed} from 'vue'
const prefixCls = 'icon';
export default {
  name:'Icon',
  props:{
    type:{
      type:String,
      default:''
    }
  },
  setup(props){
    const classes = computed(()=>{
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.type}`]: this.type !== '',
                        [`${this.custom}`]: this.custom !== '',
                    }
                ];
            })
    return {classes}
  }
}
</script>