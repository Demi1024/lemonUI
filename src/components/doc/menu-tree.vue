<template>
  <ul class="menu-list">
    <li class="menu-item" v-for="item in Menu" :key=item.key>
      <p 
      :class="[
      {'menu-checked':item.key === chooseItems[0]},
      {'menu-available':item.path}
      ]"
        v-on:click="changeDocs(item.key,item.path)">{{item.label}}</p>
      <menu-tree v-if="item.children" :Menu="item.children" v-model:selectedKey.sync="chooseItems"></menu-tree>
    </li>
  </ul>
  
</template>
<script lang="ts">
import {useRouter} from 'vue-router'
import { onMounted,computed,watch,reactive,inject,Ref } from 'vue'
export default {
  name:'MenuTree',
  props:{
    Menu: Array,
    selectedKey:Array,
  },
  setup(props:any) {
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    const pageWidth = document.documentElement.clientWidth
    const router = useRouter()
    // 当前选中选项
    let chooseItems = computed({
      get:() => props.selectedKey,
      set:(val)=>val
    })
    const changeDocs = (key:[],path:string)=>{
      if(!path){
        return
      }
      if(key === props.selectedKey){
        return
      }
      // 更新路由
      router.push(path)
      chooseItems.value = key
    }
    return { router,changeDocs,chooseItems};
  }
}
</script>
<style lang="scss" scoped>
.menu-list{
  width: 100%;
  padding-left: 20px;
  p{
    padding:10px 0;
    color: #6b6969;
  }
  .menu-available{
    cursor: pointer;
    color: #111111;
    transition: all 250ms linear;
    &:hover{
      color:#01a9b4;
    }
  }
  
  .menu-checked{
    color:#01a9b4;
    border-right: 3px solid #01a9b4;
  }
}
</style>