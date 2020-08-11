<template>
  <i :class="classes"></i>
</template>
<script>
import {computed} from 'vue'
const prefixCls = 'limo-icon';
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
<style lang="scss">
@font-face {
  font-family: 'iconfont';  /* project id 1961129 */
  src: url('//at.alicdn.com/t/font_1961129_vu9kkpqvu3l.eot');
  src: url('//at.alicdn.com/t/font_1961129_vu9kkpqvu3l.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1961129_vu9kkpqvu3l.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1961129_vu9kkpqvu3l.woff') format('woff'),
  url('//at.alicdn.com/t/font_1961129_vu9kkpqvu3l.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1961129_vu9kkpqvu3l.svg#iconfont') format('svg');
}
.limo-icon{
  display: inline-block;
  font-family: iconfont;
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
  &-delete-round::before{
    content: '\e602';
  }
  &-up-arrow:before{
    content: '\e605';
  }
  &-down-arrow:before{
    content: '\e601';
  }
  &-left-arrow:before{
    content: '\e603';
  }
  &-right-arrow:before{
    content: '\e604';
  }
}
</style>