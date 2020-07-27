<template>
  <div>
    <router-view></router-view>
  </div>
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
