

<template>
  <div class="login-container">
    <el-form :model="form" ref="formRef" class="login-form">
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>

      <el-form-item>
        <el-icon class="svg-container">
          <edit/>
        </el-icon>
        <el-input v-model="form.name" />
      </el-form-item>

      <el-form-item >
        <el-icon class="svg-container">
          <edit/>
        </el-icon>
        <el-input v-model="form.password"  />
      </el-form-item>
      <el-button type="primary" class="login-button">登录</el-button>

    </el-form>

  </div>
</template>
<!--ref 定义基本数据， reactive 定义相应数据-->
<script setup>
import {ref} from 'vue'
import  {Edit} from  '@element-plus/icons-vue'
// import {login} from "../../api/login.js";
import axios from "axios";
const form = ref({
  name:'',
  password:'',
})
axios.get('/path/shixun/but/getAllButs').then(
    res=>console.log(res)
)
// login().then(res=>{
//   console.log(res)
// })


</script>
<!-- scoped意思为，只会给当前组件使用css -->
<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    :deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    :deep .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
      color: $dark_gray;
      input {

        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        height: 47px;
        color: $light_gray;

        caret-color: $cursor;
      }
    }

    .login-button {
      width: 100%;
      box-sizing: border-box;
    }
  }

  .tips {
    font-size: 16px;
    line-height: 28px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }

    :deep .lang-select {
      position: absolute;
      top: 4px;
      right: 0;
      background-color: white;
      font-size: 22px;
      padding: 4px;
      border-radius: 4px;
      cursor: pointer;
    }
  }

  .show-pwd {
    // position: absolute;
    // right: 10px;
    // top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
