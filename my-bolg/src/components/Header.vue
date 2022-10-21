<!-- made by domekisuzi
    @2022/10/21
-->
<template>
  <div class="container">
    <div class="header-img">
      <h1 class="logo">
        <img src="../assets/domekisuzi-nobackground.png">
      </h1>
      <p>domekisuzi的个人博客</p>
    </div>

    <div class="header-title">
      <ul>
        <li>我的笔记</li>
        <li>个人简介</li>
        <li>大数据部</li>
        <li>my-life</li>
      </ul>
    </div>

  </div>

</template>

<script setup>

</script>

<style scoped>
.container{
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;

}
.header-img{
  display: flex;
  align-items: center;

}
.logo{
  width: 70px;
  height: 50px;
}
.logo img{
  height: 50px;
  width: 50px;
}
.header-title{
  display: flex;
  justify-content: center;
  align-items: center;
}
.header-title ul{
  display: flex;
  
  align-items: center;
  height: 50px;
}
.header-title ul li{
  margin-left: 50px;
}
</style>
