<template>
  <div class="home">
    <top-nav></top-nav>
    <section class="banner">
      <div class="intro">
        <h1>柠檬UI</h1>
        <p>基于VUE3和TypeScript的轻量级UI框架</p>
        <div class="links">
          <router-link to="/docs">查看文档</router-link>
          |
          <a href="https://github.com">Github</a>
        </div>
      </div>
    </section>
    <footer>技术支持</footer>
  </div>
</template>
<script>
import TopNav from '../../components/TopNav/index.vue'
export default {
  name:'home',
  components: {
    TopNav
  }
}
</script>
<style lang="scss" scoped>
.home{
  display: flex;
  flex-direction: column;
  height: 100vh;
  .intro{
    background: linear-gradient(to right, #36D1DC , #5B86E5);
    max-width: 1000px;
    width: 100%;
    padding: 100px 0;
    margin:0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  > footer{
    max-width: 1000px;
    width: 100%;
    margin:0 auto;
    text-align: center;
  }
}
</style>
