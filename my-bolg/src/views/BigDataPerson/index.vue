<!-- made by domekisuzi @2022/10/27 -->

<template>
  <el-container>
    <el-row :gutter="20">
       <el-col :span="8">
         <MyCard  class="card-list">

         </MyCard>
       </el-col>
        <el-col :span="16"  class="col-right">
          <div class="div-top">
            <MyCard class="card-top"></MyCard>
            <MyCard class="card-top"></MyCard>
            <MyCard class="card-top"></MyCard>
          </div>


            <MyCard class="card-bottom">
            </MyCard>

        </el-col>
    </el-row>
  </el-container>
</template>

<script setup>

import * as echarts from 'echarts'
import MyCard from "../../components/MyCard.vue";
</script>

<style scoped>
 .el-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 721.666px;
    width: 100%;
 }

 .el-row{
   height: 100%;
   width: 100%;
 }

 .col-right{
   height: 80%;
   width: 100%;
 }
 .card-list{
   height: 80%;
 }

 .div-top{
   display: flex;
   flex-direction: row;
   height: 30%;
   justify-content: space-between;
   align-content: center;
   width: 100%;
 }
 .card-top{
   width: 30%;

 }

 .card-bottom{
   height:  55%;
   margin-top: 10%;
 }
</style>
