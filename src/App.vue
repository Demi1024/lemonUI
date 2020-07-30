<template>
    <router-view></router-view>
</template>

<script lang="ts">
import {ref,onMounted, provide} from 'vue'
import router from './router/index'
export default {
  name: 'App',
  setup(){
    const pageWidth = document.documentElement.clientWidth
    const asideVisible = ref(pageWidth <= 600?false:true)
    provide('asideVisible',asideVisible)
    router.afterEach(()=>{
     // 关闭侧边栏,针对于手机端
      if(pageWidth <= 600){
        asideVisible.value = !asideVisible.value
      }
    })
    onMounted(()=>{
      document.title="Lemon UI"
    })
  }
}
</script>
