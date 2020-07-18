<template>
  <aside>
    <menu-tree :Menu=Menu :selectdKey.sync="selectdKey"></menu-tree>
  </aside>
</template>
<script>
import Menu from './menu'
import MenuTree from './MenuTree.vue'
export default {
  name:'DocsAside',
  components:{
    MenuTree
  },
  data(){
    return{
      Menu:Menu,
      selectdKey:['started']
    }
  }
}
</script>
<style lang="scss" scoped>
aside{
    max-width: 200px;
    width:100% ;
  }
</style>