<template>
  <div class="document">
    <top-nav></top-nav>
    <main>
      <le-col :span="4">
        <doc-side></doc-side>
      </le-col>
      <le-col :span="20">
        <div class="content">
          <div class="page-box">
            <div class="pages">
              <router-view></router-view>
            </div>
            <bottom-footer></bottom-footer>
          </div>
        </div>
      </le-col>
    </main>
  </div>
</template>
<script lang="ts">
import TopNav from '@/components/topNav/index.vue'
import Footer from '@/components/pageFooter/index.vue'
import DocAside from '@/components/doc/aside.vue'
import Col from '@/plugins/components/Col/index.vue';
export default {
  components: {
    'top-nav':TopNav,
    'doc-side':DocAside,
    'bottom-footer':Footer,
    'le-col':Col
  }
}
</script>
<style lang="scss" scoped>
.document{
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #f1f1f1;
  > main{
    flex-grow: 1;
    display: flex;
    .content{
      flex-grow: 1;
      .page-box{
        height: 100%;
        display: flex;
        flex-direction: column;
        .pages{
          flex-grow: 1;
          padding: 20px;
          min-height: calc(100vh - 95px);
          border-radius: 10px;
          background: #ffffff;
        }
      }
    }
  }
}
</style>