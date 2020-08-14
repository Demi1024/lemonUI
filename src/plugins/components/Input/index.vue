/**
 * @author [Demi Wang]
 * @email [demi1024w@gmail.com]
 * @create date 2020-07-20 22:16:33
 * @modify date 2020-07-20 22:16:33
 * @desc [输入框组件]
 */

<template>
  <div :class="['limo-input-control',{small:Size == 'small'},{large:Size == 'large'}]">
    <slot></slot>
    <Icon v-if="Clearable && inputValue" 
      type="delete-round"
      v-on:click="clearValue" class="input-icon"></Icon>
    <input v-model="inputValue" :class="['input',{small:Size == 'small'},{large:Size == 'large'}]"
      :placeholder=Placeholder
    />
  </div>
</template>
<script>
import '../../style/index.scss'
import {ref} from 'vue'
import Icon from '../icon/index.vue'
const prefixCls = 'limo-input'
export default {
  name:'Input',
  components:{
    Icon
  },
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
<style lang="scss">
.limo-input{
  &-control{
    box-sizing: border-box;
    clear: both;
    font-size: 1rem;
    position: relative;
    text-align: left;
  .input{
      box-shadow: inset 0 1px 2px rgba(17, 17, 17, 0.1);
      max-width: 100%;
      width: 100%;
      padding:.2em 2em .2em .5em;
      background-color: #fff;
      border-color: #dbdbdb;
      border-radius: 4px;
      color: #363636;
  }
  .input:active, .input:focus{
    outline: none;
  }
  .input::-ms-clear, input::-ms-reveal {
    display: none;
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
 }
}


</style>