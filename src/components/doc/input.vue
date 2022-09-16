<template>
  <article class="page">
    <h2>Input 输入框</h2>
    <div class="part-view">
      普通用法
      <div class="example-component">
        <de-input placeholder="请输入"></de-input>
      </div>
    </div>
    <div class="part-view">
      不同尺寸
      <div class="example-component">
        <de-input size="small" 
        placeholder="small"></de-input>
        <de-input size="normal" placeholder="normal"></de-input>
        <de-input size="large" placeholder="large"></de-input>
      </div>
    </div>
    <div class="part-view">
      可清空
      <div class="example-component">
        <de-input placeholder="请输入" clearable></de-input>
      </div>
    </div>
  </article>
</template>
<script lang="ts">
import '/src/styles/components/docs.scss'
export default {
  name:'DeInput'
}
</script>