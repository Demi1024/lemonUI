<template>
  <article>
    <h2>Swicth 开关</h2>
    <div>
      <de-switch v-model:value="testDefault">{{testDefault}}</de-switch>
      <de-switch v-model:value="testShowLabel">{{testShowLabel}}</de-switch>
    </div>
  </article>
</template>
<script lang="ts">
import { ref } from 'vue'
export default {
  name:'DeSwicth',
  setup(){
    const testDefault = ref(true)
    const testShowLabel = ref(true)
    return{testDefault,testShowLabel}
  }
}
</script>