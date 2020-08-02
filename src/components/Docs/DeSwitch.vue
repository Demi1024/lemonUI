<template>
  <article>
    <h2>Swicth 开关</h2>
    <div>
      <de-switch :value="test" @input="changeValue"></de-switch>
    </div>
  </article>
</template>
<script lang="ts">
import { ref } from 'vue'
export default {
  name:'DeSwicth',
  setup(){
    const test = ref(true)
    const changeValue = (event)=>{
      test.value = event
    }
    return{test,changeValue}
  }
}
</script>