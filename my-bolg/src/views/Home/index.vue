<!-- made by domekisuzi
    @2022/10/21
-->
<template>


  <Header></Header>
  <MyNote></MyNote>
    <div class="footer">

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
</style>
