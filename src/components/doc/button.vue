<template>
  <article class="page">
    <h2>Button 按钮</h2>
    <div class="part-view">
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
    </div>
    <div class="part-view">
      <p>不同的size</p>
      <div class="example-component">
        <de-button size="small">small</de-button>
        <de-button>Default</de-button>
        <de-button size="large">Default</de-button>
      </div>
    </div>
    <div class="part-view">
      <p>禁用</p>
      <div class="example-component">
        <de-button disabled>Default</de-button>
        <de-button theme="primary" disabled>Default</de-button>
      </div>
    </div>
    <div class="part-view">
      <p>加载中</p>
      <div class="example-component">
        <de-button loading>Default</de-button>
      </div>
    </div>
  </article>
</template>
<script>
import '../../styles/components/docs.scss'
export default {
  name:'DeButton'
}
</script>
<style lang="scss" scoped>

</style>