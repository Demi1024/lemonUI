<template>
  <div class="document">
    <top-nav></top-nav>
    <main>
      <DocAside></DocAside>
      <div class="content">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>
<script>
import TopNav from '../../components/TopNav/index.vue'
import DocAside from '../../components/Docs/DocAside.vue'
export default {
  components: {
    TopNav,
    DocAside
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
    }
  }
}
</style>