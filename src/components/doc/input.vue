<template>
  <article class="page">
    <h2>Input 输入框</h2>
    <div class="part-view">
      普通用法
      <div class="example-component">
        <le-input placeholder="请输入"></le-input>
      </div>
    </div>
    <div class="part-view">
      不同尺寸
      <div class="example-component">
        <le-input size="small" 
        placeholder="small"></le-input>
        <le-input size="normal" placeholder="normal"></le-input>
        <le-input size="large" placeholder="large"></le-input>
      </div>
    </div>
    <div class="part-view">
      可清空
      <div class="example-component">
        <le-input placeholder="请输入" clearable></le-input>
      </div>
    </div>
  </article>
</template>
<script lang="ts">
import '/src/styles/components/docs.scss'
export default {
  name:'InputContent'
}
</script>