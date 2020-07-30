<template>
  <nav>
    <div class="logo" >
      <p @click="toogleVisible">LOGO</p>
      <router-link to="/">柠檬UI</router-link>
    </div>
    <ul class="menu">
      <li><router-link to="/docs/started">文档</router-link></li>
      <li>语言</li>
    </ul>
  </nav>
</template>
<script lang="ts">
import { inject, Ref } from 'vue'
export default {
  name:'TopNav',
  setup(){
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    console.log('topnav的可见性：'+asideVisible.value)
    const toogleVisible = ()=>{
      asideVisible.value = !asideVisible.value
    }
    return {toogleVisible}
  }
}
</script>
<style lang="scss" scoped>
nav{
  position:relative;
  padding: 16px 0;
  border-bottom:1px solid #cccccc;
  display: flex;
  z-index: 3;
  > .logo{
    max-width: 6em;
    margin-right: auto;
    a{
      color:#515a6e;
    }
  }
  > .menu{ 
    display: flex;
    // flex-direction: row;
    white-space: nowrap;
    flex-wrap: nowrap;
    >li{
      margin: 0 1em;
    }
  }
}
</style>