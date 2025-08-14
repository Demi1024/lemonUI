<template>
  <header class="nav">
    <span class="toggle"  @click="toggleVisible">LOGO</span>
    <div class="logo">
      <router-link to="/"><svg-icon name="logo" class="logo-size"></svg-icon>柠檬 UI</router-link>
    </div>
    <ul class="menu">
      <li><router-link to="/docs/started">文档</router-link></li>
      <li>语言</li>
    </ul>
  </header>
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
.nav{
  position:sticky;
  top:0;
  z-index: 1000;
  max-width: 100%;
  background: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  padding: 16px 0;
  border-bottom:1px solid #cccccc;
  display: flex;
  justify-content: center;
  align-items: center;
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
    margin-right: auto;
    padding-left:20px;
    a{
      color:#515a6e;
      display: flex;
      align-items: center;
      &:hover{
        color:#01a9b4;
      }
    }
    .logo-size{
      margin-right:5px;
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