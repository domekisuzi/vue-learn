<!-- made by domekisuzi @2022/10/30 -->

<template>
  <div class="second_container">
    <div class="header">
      <Header></Header>
    </div>
    <div class="main">

    </div>
    <div class="footer">
      <Footer></Footer>
    </div>

  </div>

</template>

<script setup>
import Header from '../../components/Header.vue'

import Footer from '../../components/Footer.vue'

</script>

<style scoped>
.second_container{
  background-image: url('../../assets/chainsaw.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height:100vh;
}

.header{
  background: linear-gradient(to right, rgb(22, 22, 52) 1%, rgba(255, 255, 255, 0.65)50%, rgb(22, 22, 52) 100%) ;

}

</style>