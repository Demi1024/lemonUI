<template>
  <aside class="aside" v-if="asideVisible">
    <menu-tree :Menu=Menu :selectdKey.sync="selectdKey"></menu-tree>
  </aside>
</template>
<script lang="ts">
import menu from './menu'
import MenuTree from './menu-tree.vue'
import { reactive,inject,Ref } from 'vue'
export default {
  name:'DocsAside',
  components:{
    MenuTree
  },
  setup(){
     const asideVisible = inject<Ref<boolean>>('asideVisible')
     const Menu = reactive(menu)
     const selectdKey = reactive(['started'])
     return{asideVisible,Menu,selectdKey}
  }
}
</script>
<style lang="scss" scoped>
.aside{
  max-width: 200px;
  width:100% ;
  background: #ffffff;
  z-index: 2;
  }
  @media (max-width:600px) {
    .aside{
      position: fixed;
      top:0;
      left:0;
      padding-top:50px ;
    }

  }
</style>