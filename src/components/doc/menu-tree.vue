<template>
  <ul class="menu-list">
    <li class="menu-item" v-for="item in Menu" :key=item.key>
      <p 
      :class="[
      {'menu-checked':item.key === selectedKey},
      {'menu-available':item.path}
      ]"
        v-on:click="changeDocs(item.key,item.path)">{{item.label}}</p>
      <menu-tree v-if="item.children" :Menu="item.children" v-model:selectedKey.sync="selectedKey" @update:selectedKey="updateKey"></menu-tree>
    </li>
  </ul>
  
</template>
<script lang="ts">
import {useRouter} from 'vue-router';

interface MenuItem {
  key:string;
  label:string;
  path?:string;
}
type MenuItemProps = MenuItem & {
  children?:MenuItem[];
}
export default {
  name:'MenuTree',
  props:{
    Menu: Array as ()=> MenuItemProps[],
    selectedKey:String,
  },
  setup(props:any,ctx) {
    const router = useRouter();
   
    const changeDocs = (key:string,path?:string)=>{
      if(!path){
        return
      }
      if(key === props.selectedKey){
        return
      }

      ctx.emit("update:selectedKey",key);
      router.push(path)
    }

    const updateKey = (key:string)=>{
      ctx.emit("update:selectedKey",key);
    }

    return { router,changeDocs,updateKey};
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