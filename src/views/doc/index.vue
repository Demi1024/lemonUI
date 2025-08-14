<template>
  <div class="document">
    <top-nav></top-nav>
    <main>
      <le-row class="main-row">
        <le-col :span="4">
          <doc-side></doc-side>
        </le-col>
        <le-col :span="20">
          <div class="content">
            <router-view></router-view>
            <bottom-footer></bottom-footer>
          </div>
        </le-col>
      </le-row>
    </main>
  </div>
</template>
<script lang="ts">
import TopNav from '@/components/topNav/index.vue'
import Footer from '@/components/pageFooter/index.vue'
import DocAside from '@/components/doc/aside.vue'
import Col from '~/components/Col/index.vue';
import Row from '~/components/Row/index.vue';
export default {
  components: {
    'top-nav':TopNav,
    'doc-side':DocAside,
    'bottom-footer':Footer,
    'le-col':Col,
    'le-row':Row
  }
}
</script>
<style lang="scss" scoped>
.document{
  background: #f1f1f1;
  
  > main{
    
    .main-row{
      margin: 0 !important; // 移除栅格系统默认边距
      
      .content{
        min-height: calc(100vh - 77px);
        display: flex;
        flex-direction: column;
        padding: 20px;
        margin:10px 0;
        border-radius: 10px;
        background: #ffffff;
        overflow-y: auto; // 添加滚动处理
        
        // router-view 区域自动扩展
        > :first-child {
          flex-grow: 1;
        }
      }
    }
  }
}
</style>