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
            <a href="https://github.com/Demi1024/lemonUI">Github</a>
          </div>
        </div>
      </section>
    </main>
    <Footer></Footer>
  </div>
</template>
<script>
import TopNav from '/src/components/TopNav/index.vue'
import Footer from '/src/components/Footer/index.vue'
import {onMounted} from 'vue'
export default {
  name:'home',
  components: {
    TopNav,
    Footer
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
    .links{
      margin: 20px 0;
      a{
        margin:0 10px;
        background:#ffffff;
        display: inline-block;
        $h:30px;
        height:$h;
        line-height: $h;
        border-radius: $h/2;
        padding:0 10px;
        &:active{
          color:#36D1DC;
        }
      }
    }
  }
}
</style>
