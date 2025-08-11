<template>
  <article class="page">
    <h2>Button 按钮</h2>
    <le-row>
      <le-col :span="12" class="p-[20px]">
        <p>普通用法</p>
        <div class="example-component grid grid-cols-4 gap-6">
          <le-button>Default</le-button>
          <le-button theme="primary">Primary</le-button>
          <le-button theme="dashed">Dashed</le-button>
          <le-button theme="text">Text</le-button>
          <le-button theme="info">Info</le-button>
          <le-button theme="success">Success</le-button>
          <le-button theme="warning">Warning</le-button>
          <le-button theme="error">Error</le-button>
        </div>
        <div>
          <p>代码示例</p>
          <pre v-highlight>
            <code class="language-html">
              {{code1}}
            </code>
          </pre>
        </div>
      </le-col>
      <le-col :span="12" class="p-[20px]">
        <p>不同的 size</p>
        <div class="example-component flex items-start gap-x-2">
          <le-button size="small">small</le-button>
          <le-button>Default</le-button>
          <le-button size="large">Default</le-button>
        </div>
        <div>
          <p>代码示例</p>
          <pre v-highlight>
            <code class="language-html">
              {{code2}}
            </code>
          </pre>
        </div>
      </le-col>
      <le-col :span="12" class="p-[20px]">
        <p>禁用</p>
        <div class="example-component flex items-start gap-x-2">
          <le-button disabled>Default</le-button>
          <le-button theme="primary" disabled>Default</le-button>
        </div>
        <div>
          <p>代码示例</p>
          <pre v-highlight>
            <code class="language-html">
              {{code3}}
            </code>
          </pre>
        </div>
      </le-col>
      <le-col :span="12" class="p-[20px]">
        <p>加载中</p>
        <div class="example-component flex items-start gap-x-2">
          <le-button loading>Default</le-button>
          <le-button theme="primary" loading>Primary</le-button>
          <le-button :loading="loading" @click="clickToLoading">Default</le-button>
          <le-button theme="primary" :loading="loading2" @click="clickToLoading2">Primary</le-button>
        </div>
      </le-col>
    </le-row>
  </article>
</template>
<script lang="ts">
import Button from '~/components/Button/index.vue';
import '@/styles/components/docs.scss'
import { ref } from 'vue'
export default {
  name:'ButtonContent',
  components:{
   'le-button':Button
  },
  setup(){
    const loading = ref(false)
    const loading2 = ref(false)
    let clickToLoading = ()=>{
      loading.value = true
    }
    let clickToLoading2 = ()=>{
      loading2.value = true
    }
    const code1 = `
    <div class="example-component">
      <le-button>Default</le-button>
      <le-button theme="primary">Primary</le-button>
      <le-button theme="dashed">Dashed</le-button>
      <le-button theme="text">Text</le-button>
      <br>
      <br>
      <le-button theme="info">Info</le-button>
      <le-button theme="success">Success</le-button>
      <le-button theme="warning">Warning</le-button>
      <le-button theme="error">Error</le-button>
    </div>`
    const code2 = `
    <div class="example-component">
      <le-button size="small">small</le-button>
      <le-button>Default</le-button>
      <le-button size="large">Default</le-button>
    </div>`
    const code3 = `
    <div class="example-component">
      <le-button disabled>Default</le-button>
      <le-button theme="primary" disabled>Default</le-button>
    </div>`
    return{loading,loading2,clickToLoading,clickToLoading2,code1,code2,code3}
  }
}
</script>
<style lang="scss" scoped>

</style>