<template>
  <nav>
    <div class="logo">
      <router-link to="/">柠檬UI</router-link>
    </div>
    <ul class="menu">
      <li><router-link to="/docs/started">文档</router-link></li>
      <li>语言</li>
    </ul>
  </nav>
</template>
<style lang="scss" scoped>
nav{
  padding: 16px 0;
  border-bottom:1px solid #cccccc;
  display: flex;
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