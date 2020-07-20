/**
 * @author [Demi Wang]
 * @email [demi1024w@gmail.com]
 * @create date 2020-07-20 22:16:33
 * @modify date 2020-07-20 22:16:33
 * @desc [输入框组件]
 */

<template>
<div class="field">
  <div class="control">
    <input class="input"/>
  </div>
</div>

</template>
<script>
import '../../style/index.scss'
export default {
  name:'Input'
}
</script>
<style lang="scss" scoped>

.field:not(:last-child) {
    margin-bottom: .75rem;
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
  }
  .input:active, .input:focus{
    outline: none;
  }
}

</style>