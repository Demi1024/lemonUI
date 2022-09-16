<template>
  <nav>
    <span class="toggle"  @click="toggleVisible">LOGO</span>
    <div class="logo">
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

    const toggleVisible = ()=>{
      if(!asideVisible) return;
      asideVisible.value = !asideVisible?.value
    }
    return {toggleVisible}
  }
}
</script>
<style lang="scss" scoped>
nav{
  position:relative;
  padding: 16px 0;
  border-bottom:1px solid #cccccc;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  > .toggle{
    position: absolute;
    left:16px;
    top:50%;
    transform: translateY(-50%);
    width: 24px;
    height:24px;
    display: none;
  }
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
  @media (max-width:600px) {
    > .menu{
      display: none;
    }
    > .logo{
      margin:0 auto;
    }
    > .toggle{
      display: inline-block;
    }
  }
}
</style>