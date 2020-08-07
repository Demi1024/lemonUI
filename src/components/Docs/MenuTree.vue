<template>
  <ul class="menu-list">
    <li class="menu-item" v-for="item in Menu" :key=item.key>
      <p :class="[
      {'menu-checked':item.key === chooseItems[0]},
      {'menu-avilable':item.path}
      ]"
        v-on:click="changeDocs(item.key,item.path)">{{item.label}}</p>
      <menu-tree v-if="item.children" :Menu="item.children" :selectdKey.sync="chooseItems"></menu-tree>
    </li>
  </ul>
  
</template>
<script lang="ts">
import {useRouter} from 'vue-router'
import { onMounted,computed,watch,reactive,inject,Ref } from 'vue'
// import { ref, computed, Ref, watch, createComponent } from '@vue/composition-api'
export default {
  name:'MenuTree',
  props:{
    Menu: Array,
    selectdKey:Array,
  },
  setup(props, { emit }) {
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    const pageWidth = document.documentElement.clientWidth
    const router = useRouter()
    // 当前选中选项
    const chooseItems = computed(() => props.selectdKey)
    const changeDocs = (key,path)=>{
      if(!path){
        return
      }
      if(key === props.selectdKey){
        return
      }
      // 更新路由
      router.push(path)
      chooseItems.value.push(key)
      chooseItems.value.shift()
    }
    // 生命周期
    onMounted(()=>{
    })
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
    cursor: pointer;
    color: #6b6969;
  }
  .menu-avilable{
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