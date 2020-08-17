<template>
  <article class="page">
    <h2>Button 按钮</h2>
    <de-row>
      <de-col span="12">
        <p>普通用法</p>
        <div class="example-component">
          <de-button>Default</de-button>
          <de-button theme="primary">Primary</de-button>
          <de-button theme="dashed">Dashed</de-button>
          <de-button theme="text">Text</de-button>
          <br>
          <br>
          <de-button theme="info">Info</de-button>
          <de-button theme="success">Success</de-button>
          <de-button theme="warning">Warning</de-button>
          <de-button theme="error">Error</de-button>
        </div>
        <div>
          <p>代码示例</p>
          <pre>
            <code class="html">
              <de-button theme="info">Info</de-button>
              <de-button theme="success">Success</de-button>
              <de-button theme="warning">Warning</de-button>
              <de-button theme="error">Error</de-button>
            </code>
          </pre>
        </div>
      </de-col>
      <de-col span="12">
        <p>不同的size</p>
        <div class="example-component">
          <de-button size="small">small</de-button>
          <de-button>Default</de-button>
          <de-button size="large">Default</de-button>
        </div>
      </de-col>
      <de-col span="12">
        <p>禁用</p>
        <div class="example-component">
          <de-button disabled>Default</de-button>
          <de-button theme="primary" disabled>Default</de-button>
        </div>
      </de-col>
      <de-col span="12">
        <p>加载中</p>
        <div class="example-component">
          <de-button loading>Default</de-button>
          <de-button theme="primary" loading>Primary</de-button>
          <de-button :loading="loading" @click="clickToLoading">Default</de-button>
          <de-button theme="primary" :loading="loading2" @click="clickToLoading2">Primary</de-button>
        </div>
      </de-col>
    </de-row>
  </article>
</template>
<script>
import '../../styles/components/docs.scss'
import { ref } from 'vue'
export default {
  name:'DeButton',
  setup(){
    const loading = ref(false)
    const loading2 = ref(false)
    let clickToLoading = ()=>{
      loading.value = true
    }
    let clickToLoading2 = ()=>{
      loading2.value = true
    }
    return{loading,loading2,clickToLoading,clickToLoading2}
  }
}
</script>
<style lang="scss" scoped>

</style>