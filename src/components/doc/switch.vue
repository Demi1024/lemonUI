<template>
  <article>
    <h2>Switch 开关</h2>
    <div>
      <p>默认使用</p>
      <le-switch  v-model:value="testDefault"></le-switch>
    </div>
    <div>
      <p>自定义值</p>
      <le-switch v-model:value="testShowLabel" trueValue="yes" falseValue="no"></le-switch><span>选中的值{{testShowLabel}}</span>
    </div>
    <div>
      <p>自定义文字</p>
      <le-switch v-model:value="testCustomLabel" trueValue="yes" falseValue="no">
        <template #label><span v-if="testCustomLabel ==='yes'">打开</span><span v-else>关闭</span></template>
      </le-switch>
    </div>
    
  </article>
</template>
<script lang="ts">
import Switch from '~/components/Switch/index.vue';
import { ref } from 'vue'
export default {
  name:'SwitchContent',
  components:{
    'le-switch':Switch
  },
  setup(){
    const testDefault = ref(false)
    const testShowLabel = ref('yes');
    const testCustomLabel = ref('yes');
    return{testDefault,testShowLabel,testCustomLabel}
  }
}
</script>