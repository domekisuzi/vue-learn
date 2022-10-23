<!-- made by domekisuzi
    @2022/10/21
-->
<template>

  <div class="body">
    <Header></Header>
    <MyNote></MyNote>
    <div class="footer">
    </div>
  </div>


</template>

<script setup>
import Header from '../../components/Header.vue'
import MyNote from '../../components/MyNote.vue'
</script>

<style scoped>
/*将footer设置为相对布局，就可以永久的待在底部*/
.footer{
  background: red;
  position: relative;
  margin-top: 0px;
  width: 100%;
  height: 200px;
}
/*实现背景不会动 !! 关键技术*/
.body{
  background-image: url('../../assets/moon.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>
