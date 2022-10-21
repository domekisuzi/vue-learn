<!-- made by domekisuzi @2022/10/12 -->

<template>
  <header>
    <div class="header-main">

      <div class="header-l">
        <h1 class="logo">

          <img src="../../assets/domekisuzi.png"/>

        </h1>
        <ul>
          <li class="active">首 页</li>

          <li>待 定</li>
          <li>待 定</li>
        </ul>
      </div>

      <div class="header-r">

        <div class="search">
          <input type="" name="" placeholder="搜索想要的美少女">
          <el-icon :size="20">
            <Search/>
          </el-icon>
        </div>

        <div class="shop">
          <el-icon :size="20">
            <ShoppingCart/>
          </el-icon>
        </div>
        <div class="login">登录/注册</div>

      </div>


    </div>

  </header>
</template>

<script setup>
import {Search, ShoppingCart} from '@element-plus/icons-vue'
</script>

<style scoped>
header {
  width: 100%;
  height: 80px;
}

.header-main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1000px;
  height: 100px;
  /*居中*/
  margin: 0 auto;
}

.header-l {
  display: flex;
  /*flex-direction: column;*/
  justify-content: center;
  align-items: center;

}

.logo {
  width: 127px;
  height: 80px;
  margin-right: 51px;
}

.logo img {
  width: 80px;
  height: 80px;
  /*width: 100%;*/
  /*height: 100%;*/

}

.header-l ul {
  display: flex;
  height: 50px;
}

.header-l ul li {
  line-height: 50px;
  font-weight: 500;
  cursor: pointer;
}

/* +排除第一个*/
.header-l ul li + li {
  margin-left: 79px;
  font-size: 16px;
  color: #808080;
}

.active {
  position: relative;
  color: #3585FF;
}

/*在每个元素后面插入新的内容*/
.active:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 140%;
  height: 2px;
  background: #535bf2;
  margin-left: -20%;
}

.header-r {
  display: flex;
  align-items: center;
  margin-left: 50px;
}

.header-r .search {
  display: flex;
  align-items: center;
  padding: 0 10px;
  width: 290px;
  height: 43px;
  background: #F0F2F4;
  opacity: 1;
  border-radius: 5px;
}

.header-r .search input {
  width: 270px;
  height: 43px;
  border: none;
  background: transparent;
  /*使得背景框消失*/
  outline: none;
}

.header-r .shop {
  display: flex;
  align-items: center;
  margin-left: 42px;
  cursor: pointer;
}

.header-r .login {
  margin-left: 39px;
  font-size: 16px;
  color: #808080;
  cursor: pointer;
}

</style>
