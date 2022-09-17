<template>
  <article class="page">
    <h2>Icon 图标</h2>
    <p>基础用法</p>
    <ul>
      <li>
        <de-icon type="delete-round"></de-icon>
      </li>
      <li>
        <de-icon type="up-arrow"></de-icon>
      </li>
      <li>
        <de-icon type="down-arrow"></de-icon>
      </li>
      <li>
        <de-icon type="left-arrow"></de-icon>
      </li>
      <li>
        <de-icon type="right-arrow"></de-icon>
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