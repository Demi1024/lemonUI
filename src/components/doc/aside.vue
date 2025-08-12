<template>
  <aside class="aside" v-if="asideVisible">
    <menu-tree :Menu=Menu v-model:selectedKey.sync="selectedKey" @update:selectedKey="changeSelectedKey"></menu-tree>
  </aside>
</template>
<script lang="ts">
import menu from './menu'
import MenuTree from './menu-tree.vue'
import { reactive,inject,Ref,ref,watch } from 'vue'
import { useRoute } from 'vue-router'
export default {
  name:'DocsAside',
  components:{
    MenuTree
  },
  setup(){
     const asideVisible = inject<Ref<boolean>>('asideVisible')
     const Menu = reactive(menu)
     const route = useRoute()
     
     // 根据路由路径获取对应的菜单键
     const getKeyFromPath = (path: string): string => {
       const pathToKeyMap: { [key: string]: string } = {
         '/docs/started': 'started',
         '/docs/icon': 'icon', 
         '/docs/button': 'button',
         '/docs/input': 'input',
         '/docs/select': 'select',
         '/docs/switch': 'switch',
         '/docs/grid': 'grid',
         '/docs/layout': 'layout'
       }
       return pathToKeyMap[path] || 'started'
     }
     
     const selectedKey = ref(getKeyFromPath(route.path));

     // 监听路由变化，同步更新 selectedKey
     watch(() => route.path, (newPath) => {
       selectedKey.value = getKeyFromPath(newPath)
     })

     const changeSelectedKey = (key:string)=>{
      selectedKey.value = key
     }
     return{asideVisible,Menu,selectedKey,changeSelectedKey}
  }
}
</script>
<style lang="scss" scoped>
.aside{
  position:sticky;
  top:55px;
  width:100% ;
  height:100%;
  max-height: calc(100vh - 56px);
  background: #f1f1f1;
  overflow: hidden;
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