/**
 * @author [Demi Wang]
 * @email [demi1024w@gmail.com]
 * @create date 2020-07-20 22:16:33
 * @modify date 2020-07-20 22:16:33
 * @desc [输入框组件]
 */

<template>
  <div :class="['control',{small:Size == 'small'},{large:Size == 'large'}]">
    <input :class="['input',{small:Size == 'small'},{large:Size == 'large'}]"
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
    placeholder: String
  },
  setup(props){
    const Size = ref(props.size)
    const Placeholder = ref(props.placeholder)
    console.log(Size)
    return{Size,Placeholder}
  }
}
</script>
<style lang="scss" scoped>

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
}

</style>