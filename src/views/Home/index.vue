<template>
  <div class="home">
    <main>
      <top-nav></top-nav>
      <section class="banner">
        <div class="intro">
          <h1>柠檬 UI</h1>
          <p>基于 VUE3 和 TypeScript 的轻量级 UI 框架</p>
          <div class="links">
            <router-link to="/docs/started">查看文档</router-link>
            
            <a href="https://github.com/Demi1024/lemonUI">Github</a>
          </div>
        </div>
      </section>
    </main>
    <bottom-footer></bottom-footer>
  </div>
</template>
<script lang="ts">
import TopNav from '@/components/topNav/index.vue'
import BottomFooter from '@/components/pageFooter/index.vue'
import {onMounted} from 'vue'
export default {
  name:'home',
  components: {
    TopNav,
    BottomFooter
  },
  setup(){
    // 生命周期
    onMounted(()=>{
      document.title="柠檬 UI "
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
  .banner{
    max-width: 1000px;
    margin:0 auto;
  }
  .intro{
    background: linear-gradient(to right, #36D1DC , #5B86E5);
    width: 100%;
    padding: 150px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
      font-size: 3rem;
      color: #fbfd8a;
    }
    p{
      margin: 1rem 0;
      font-size: 2rem;
      color:#ffffff;
    }
    .links{
      margin: 20px 0;
      a{
        color:#333;
        margin:0 10px;
        display: inline-block;
        $h:30px;
        height:$h;
        line-height: $h;
        border-radius: calc($h/2);
        padding:0 10px;
        &:active,&:hover{
          color:#ccc;
        }
      }
    }
  }
}
</style>
