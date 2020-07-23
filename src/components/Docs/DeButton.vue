<template>
  <article class="page">
    <h2>Button 按钮</h2>
    <div class="part-view">
      <p>普通用法</p>
      <div class="example-component">
        <de-button>Default</de-button>
        <de-button type="primary">Primary</de-button>
        <de-button type="dashed">Dashed</de-button>
        <de-button type="text">Text</de-button>
        <br>
        <br>
        <de-button type="info">Info</de-button>
        <de-button type="success">Success</de-button>
        <de-button type="warning">Warning</de-button>
        <de-button type="error">Error</de-button>
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