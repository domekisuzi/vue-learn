<!-- made by domekisuzi @2022/10/10 -->

<template>

  <div>

    <p>C</p>
    <img src="@\assets\vue.svg" alt="" style='width:200px;height:200px'
         @error.once ='showError'>
    <div  style="background-color:green;height: 300px;width: 300px"></div>

  </div>

</template>

<script setup>
const showError = () =>{
  console.log("无法加载图片")
}

</script>

<style scoped>

</style>
