<template>
  <aside v-if="asideVisible">
    <menu-tree :Menu=Menu :selectdKey.sync="selectdKey"></menu-tree>
  </aside>
</template>
<script lang="ts">
import menu from './menu'
import MenuTree from './MenuTree.vue'
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
aside{
  position: fixed;
  top:0;
  left:0;
  padding-top:50px ;
  max-width: 200px;
  width:100% ;
  }
</style>