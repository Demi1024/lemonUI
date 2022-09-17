<template>
  <article class="page">
    <h2>Icon 图标</h2>
    <p>基础用法</p>
    <ul>
      <li>
        <le-icon type="delete-round"></le-icon>
      </li>
      <li>
        <le-icon type="up-arrow"></le-icon>
      </li>
      <li>
        <le-icon type="down-arrow"></le-icon>
      </li>
      <li>
        <le-icon type="left-arrow"></le-icon>
      </li>
      <li>
        <le-icon type="right-arrow"></le-icon>
      </li>
    </ul>
  </article>
</template>
<script lang="ts">
import '../../styles/components/docs.scss'
export default {
  name:'IconContent'
}
</script>
<style lang="scss" scoped>
.page{
  ul{
    display: flex;
    flex-direction: row;
    li{
      margin:0 .5em;
      padding: .5em;
      background:#ffffff;
      border:1px solid #c2c2c2;
      transition: border .5s;
      border-radius: 3px;
      &:hover{
        border-color: #016ab4;
        transition: border-color .5s;
      }
    }
  }
}
</style>