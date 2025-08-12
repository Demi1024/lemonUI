<template>
  <article class="page">
    <h2>Input 输入框</h2>
    <div class="part-view">
      普通用法
      <div class="example-component">
        <le-input placeholder="请输入" class="w-[200px]"></le-input>
      </div>
    </div>
    <div class="part-view">
      不同尺寸
      <div class="example-component flex gap-2">
        <le-input size="small" 
        placeholder="small" class="w-[200px]"></le-input>
        <le-input size="normal" placeholder="normal" class="w-[200px]"></le-input>
        <le-input size="large" placeholder="large" class="w-[200px]"></le-input>
      </div>
    </div>
    <div class="part-view">
      可清空
      <div class="example-component">
        <le-input placeholder="请输入" clearable class="w-[200px]"></le-input>
      </div>
    </div>
  </article>
</template>
<script lang="ts">
import Input from '~/components/Input/index.vue';
import '@/styles/components/docs.scss'
export default {
  name:'InputContent',
  components:{
    'le-input':Input
  }
}
</script>