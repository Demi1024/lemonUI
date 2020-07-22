/**
 * @author [Demi Wang]
 * @email [demi1024w@gmail.com]
 * @create date 2020-07-20 22:16:33
 * @modify date 2020-07-20 22:16:33
 * @desc [输入框组件]
 */

<template>
  <div :class="['control',{small:Size == 'small'},{large:Size == 'large'}]">
    <i v-show="Clearable && inputValue" v-on:click="clearValue" class="input-icon clear icon"></i>
    
    <input v-model="inputValue" :class="['input',{small:Size == 'small'},{large:Size == 'large'}]"
      :placeholder=Placeholder
    />
  </div>
</template>
<script>
import '../../style/index.scss'
import {ref} from 'vue'
export default {
  name:'Input',
  props:{
    size: {
      type: String,
      default: 'normal'
    },
    placeholder: String,
    clearable:{
      type:Boolean,
      default:false
    }
  },
  setup(props){
    const Size = ref(props.size)
    const Placeholder = ref(props.placeholder)
    const Clearable = ref(props.clearable)
    const inputValue = ref('')
    const clearValue=()=>{
      inputValue.value = ''
    }
    return{inputValue,Size,Placeholder,Clearable,clearValue}
  }
}
</script>
<style lang="scss" scoped>
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1595428427657'); /* IE9 */
  src: url('iconfont.eot?t=1595428427657#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAALcAAsAAAAABogAAAKOAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcAqBDIEeATYCJAMICwYABCAFhG0HOBvMBcguMXY9kLYEs2esvOmTXTWjOAEfUAHx8LTft3NnZk0kbhTNYriXAPEnaLSgpYh1z+Q3ca7FebTAGmi0iUdSlDZg81cQvRX9gz3w/Pr99oiHwtA2FDSSTJPnJ+ctcoW/LMy80pHcftsAMttrAGXbr7WQWx9vBlxTvwY0kDyguUQERSVHAg5sOtAOHLXwZjLxDWMXuITzBJqN44D7s80+U1FY0wLx7MJBppILKApLNwr1NWuLeKVOY6qlAF6G349/lGgkqcusqqMH0zgz+Fmzs7LVc9d8QpCANtchYxWgEGe1iQN5wdiw5kTBNGBf5cHPWlX5drFXi2B/nVXaCkah9J5krvxWSxMo8eASwNaoN5Fax27/f77w+XLx9en8+fFBv2UuHj77c0VfOP2WYUeeHb+bQ0md79/lujb/uS3yxZ4yzT5S/P2Ch9a8X4UNzbjP57S+vnjthr/Bv6iLnfGAOW0Aqgyq8jNABG/G234OWf/fqIAfm9fAV1X0cwEaT+EMfpWsZ0fRFZYtFVVW60qWRk1NaNaMCvZ0+4019t1XJjTquztXg7EUWaNZsrBWUafFGuo12kKzFfrmFj1ieVGasKwDCJ3uSNp9QNbpQRbWF3X6/VGvMzKaXYiePVvMx+PaniBQxGSk5EfeJY5Da1H5Fvw0gWQVIecIeVzCJAtSMT2Hg8yxIHlxL9WEHPGWNHAZjPEUir8i0paneu+LolN3o5bpbaZmj4CAghgxpIgv4jmJ31/VSp/fAvZkBKSlpiZ8BOLhMjyRCaQe5FzretXcyzWJF9aTUgniEJ5FNDAKDMMjYf2oK4ioFm9E7K5PtHs5fbWt9fX2A0pYA5YphX1M1n4PBoqmczHm4jiTAQAA') format('woff2'),
  url('iconfont.woff?t=1595428427657') format('woff'),
  url('iconfont.ttf?t=1595428427657') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1595428427657#iconfont') format('svg'); /* iOS 4.1- */
}
.control{
    box-sizing: border-box;
    clear: both;
    font-size: 1rem;
    position: relative;
    text-align: left;
  .input{
      box-shadow: inset 0 1px 2px rgba(17, 17, 17, 0.1);
      max-width: 100%;
      width: 100%;
      padding-right:2em;
  }
  .input:active, .input:focus{
    outline: none;
  }
  .input:focus{
    border-color: #3273dc;
    box-shadow: 0 0 0 0.125em rgba(50,115,220,.25);
  }
  .small.input{
    font-size: 0.8em;
  }
  .large.input{
    font-size: 1.5em;
  }
  .clear::before{
    content: "\e689";
  }
  .input-icon{
    display: inline-block;
    width: 1em;
    height: 1em;
    line-height: 1em;
    // font-size: 16px;
    top:50%;
    margin-top:-0.5em;
    text-align: center;
    color: #808695;
    position: absolute;
    right: 0.5em;
    z-index: 3;
  }
  .icon{
    font-family: "iconfont";
    display: inline-block;
  }
}

</style>