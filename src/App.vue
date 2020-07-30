<template>
    <router-view></router-view>
</template>

<script lang="ts">
import {ref,onMounted, provide} from 'vue'
export default {
  name: 'App',
  setup(){
    const asideVisible = ref(false)
    provide('asideVisible',asideVisible)
    onMounted(()=>{
      document.title="Lemon UI"
    })
  }
}
</script>
