<template>
    <router-view></router-view>
</template>

<script>
import {onMounted} from 'vue'
export default {
  name: 'App',
  setup(){
    onMounted(()=>{
      document.title="Lemon UI"
    })
  }
}
</script>
