<template>
  <div class="home">
    <main>
      <top-nav></top-nav>
      <section class="banner">
        <div class="intro">
          <h1>柠檬UI</h1>
          <p>基于VUE3和TypeScript的轻量级UI框架</p>
          <div class="links">
            <router-link to="/docs/started">查看文档</router-link>
            |
            <a href="https://github.com">Github</a>
          </div>
        </div>
      </section>
    </main>
    <footer>技术支持By Demi</footer>
  </div>
</template>
<script>
import TopNav from '../../components/TopNav/index.vue'
import {onMounted} from 'vue'
export default {
  name:'home',
  components: {
    TopNav
  },
  setup(){
    // 生命周期
    onMounted(()=>{
      document.title="柠檬UI "
    })
  }
}
</script>
<style lang="scss" scoped>
.home{
  display: flex;
  flex-direction: column;
  height: 100vh;
  > main{
    flex: 1 1 auto;
    overflow-y: auto;
  }
  .intro{
    background: linear-gradient(to right, #36D1DC , #5B86E5);
    max-width: 1000px;
    width: 100%;
    padding: 150px 0;
    margin:0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
      font-size: 3rem;
      color: #fbfd8a;
    }
    p{
      font-size: 2rem;
      color:#ffffff;
    }
  }
  > footer{
    flex: 0 0 auto;
    max-width: 1000px;
    width: 100%;
    margin:0 auto;
    text-align: center;
  }
}
</style>
