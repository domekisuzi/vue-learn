<!-- made by domekisuzi @2022/10/24 -->

<template>
  <div class="my-footer">
    <div class="icon">
<!--      修改大小需要加绑定-->
      <el-avatar :src="domekisuzi" :size="100"></el-avatar>
      <p>domekisuzi</p>
    </div>

    <el-divider>
      <el-icon><star-filled /></el-icon>
    </el-divider>
    <div class="info">
      <el-row>

      </el-row>
    </div>
  </div>
</template>

<script setup>
import {StarFilled} from '@element-plus/icons-vue'
import  domekisuzi from '../assets/domekisuzi.png'
</script>

<style scoped>
.my-footer{
  background: linear-gradient(to right, rgba(255, 255, 255, 0.83) 1%, rgba(255, 255, 255, 0.83) 90%)  ;
  display: flex;
  width: 100%;
  height: 200px;
  flex-direction: column;
}

.icon{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height:120px;
}

.el-divider{
  background-color: #99a9bf;
}
.el-divider  :deep(.el-divider__text){
  background-color :  transparent;
}
.info{
  background-color: #1a1a1a;
  width: 100%;
}



</style>