<template>
  <article>
    <h2>Switch 开关</h2>
    <div>
      <p>默认使用</p>
      <le-switch  v-model:value="testDefault"></le-switch>
    </div>
    <div>
      <p>自定义值</p>
      <le-switch v-model:value="testShowLabel" trueValue="yes" falseValue="no"></le-switch>{{testShowLabel}}
    </div>
    <div>
      <p>自定义文字</p>
      <le-switch v-model:value="testShowLabel" trueValue="yes" falseValue="no">
        <template v-slot:open>开</template>c
        <template v-slot:close>关</template>
      </le-switch>
    </div>
    
  </article>
</template>
<script lang="ts">
import Switch from '@/plugins/components/Switch/index.vue';
import { ref } from 'vue'
export default {
  name:'SwitchContent',
  components:{
    'le-switch':Switch
  },
  setup(){
    const testDefault = ref(false)
    const testShowLabel = ref('yes')
    return{testDefault,testShowLabel}
  }
}
</script>