<!-- made by domekisuzi @2022/10/12 -->

<template>
  <header>
    <div class="header-main">

      <div class="header-l">
        <h1 class="logo"><img src="@/assets/vue.svg"/></h1>
        <ul>
          <li>首 页</li>
          <li>课 程</li>
          <li>会 员</li>
        </ul>
      </div>

      <div class="header-r">

        <div>
          <input type="" name="">
          <i></i>
        </div>

        <div><i></i></div>

        <div>登录/注册</div>

      </div>
    </div>
  </header>
</template>

<script>

</script>

<style scoped>
header {
  width: 100%;
  height: 80px;
}

.header-main {
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 1000px;
  height: 80px;
  /*居中*/
  margin: 0 auto;

}

.header-l {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.logo {
  width: 127px;
  height: 50px;
}

.logo img {
  width: 100%;
  height: 100%;
}

.header-l ul {
  display: flex;
}
</style>
