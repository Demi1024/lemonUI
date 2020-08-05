<template>
  <article>
    <h2>Swicth 开关</h2>
    <div>
      <p>默认使用</p>
      <de-switch v-model:value="testDefault"></de-switch>
    </div>
    <div>
      <p>自定义值</p>
      <de-switch v-model:value="testShowLabel" trueValue="yes" falseValue="no">{{testShowLabel}}</de-switch>
    </div>
    <div>
      <p>自定义文字</p>
      <de-switch v-model:value="testShowLabel" trueValue="yes" falseValue="no">
        <template v-slot:open>开</template>c
        <template v-slot:close>关</template>
      </de-switch>
    </div>
    
  </article>
</template>
<script lang="ts">
import { ref } from 'vue'
export default {
  name:'DeSwicth',
  setup(){
    const testDefault = ref(false)
    const testShowLabel = ref('yes')
    return{testDefault,testShowLabel}
  }
}
</script>