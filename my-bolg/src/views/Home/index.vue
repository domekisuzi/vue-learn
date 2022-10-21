<!-- made by domekisuzi
    @2022/10/21
-->
<template>


  <Header></Header>
  <div class="center">
      <div class="main">

      </div>
      <div class="slider">

      </div>

    </div>
    <div class="footer">

    </div>

</template>

<script setup>
import Header from '../../components/Header.vue'

</script>

<style scoped>
.center{
  display: flex;
  justify-content: center;
  align-items: center;
}

.main {
  background-color: orange;
  width: 800px;
  height: 1000px;
}
.slider{
  background-color: yellow;
  width: 200px;
  height: 300px;
}
.footer{
  background: red;
  width: 100%;
  height: 200px;
}
</style>
