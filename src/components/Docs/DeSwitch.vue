<template>
  <article>
    <h2>Swicth 开关</h2>
    <div>
      <de-switch v-model:value="test"></de-switch>
    </div>
  </article>
</template>
<script lang="ts">
import { ref } from 'vue'
export default {
  name:'DeSwicth',
  setup(){
    const test = ref(true)
    return{test}
  }
}
</script>