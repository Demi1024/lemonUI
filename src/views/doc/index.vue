<template>
  <div class="document">
    <top-nav></top-nav>
    <main>
      <doc-side></doc-side>
      <div class="content">
        <div class="pagebox">
          <div class="pages">
            <router-view></router-view>
          </div>
          <bottom-footer></bottom-footer>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import TopNav from '/src/components/top-nav/index.vue'
import Footer from '/src/components/bot-footer/index.vue'
import DocAside from '/src/components/doc/aside.vue'
export default {
  components: {
    'top-nav':TopNav,
    'doc-side':DocAside,
    'bottom-footer':Footer
  }
}
</script>
<style lang="scss" scoped>
.document{
  display: flex;
  flex-direction: column;
  height: 100vh;
  > main{
    flex-grow: 1;
    display: flex;
    > .content{
      flex-grow: 1;
      .pagebox{
        height: 100%;
        display: flex;
        flex-direction: column;
        .pages{
          flex-grow: 1;
          padding: 20px;
        }
      }
    }
  }
}
</style>