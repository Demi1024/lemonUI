<template>
  <aside class="aside" v-if="asideVisible">
    <menu-tree :Menu=Menu :selectedKey.sync="selectedKey" @update:selectedKey="changeSelectedKey"></menu-tree>
  </aside>
</template>
<script lang="ts">
import menu from './menu'
import MenuTree from './menu-tree.vue'
import { reactive,inject,Ref,ref } from 'vue'
export default {
  name:'DocsAside',
  components:{
    MenuTree
  },
  setup(){
     const asideVisible = inject<Ref<boolean>>('asideVisible')
     const Menu = reactive(menu)
     const selectedKey = ref('started');

     const changeSelectedKey = (key:string)=>{
      selectedKey.value = key
     }
     return{asideVisible,Menu,selectedKey,changeSelectedKey}
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