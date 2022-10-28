<!-- made by domekisuzi @2022/10/27 -->

<template>

  <div class="container">
    <el-row :gutter="20" class="row-header">
      <el-col :span="8">
        <MyCard class="card-header">
          <template #default>
            <p>入库人数</p>

          </template>
        </MyCard >

      </el-col>
      <el-col  :span="8">
        <MyCard class="card-header">
          <template #default>
            <p>历代管理人员</p>
          </template>
        </MyCard>
      </el-col>

      <el-col :span="8">
        <MyCard class="card-header">
          <template #default>
            <p>成立天数</p>
          </template>
        </MyCard>
      </el-col>
    </el-row>

    <el-row :gutter="20" class="row-footer">
      <el-col :span="8" class="col-erect" >
        <MyCard class="card-erect">
          <template #default>
            <p>累计答辩次数</p>
          </template>
        </MyCard >
        <MyCard class="card-erect">
          <template #default>
            <p>男女比例</p>
          </template>
        </MyCard>
      </el-col>
      <el-col :span="16">
        <MyCard class="card-rank">
          <template #default>
            <p>rankEcharts</p>
          </template>
        </MyCard>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import MyCard from  '../../components/MyCard.vue'
import  * as echarts from 'echarts'

</script>

<style scoped>
.container{
  /*background-color: #99a9bf;*/
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 721.666px;
}

.el-row{
  width: 100%;
}


.el-col{
  height: 100%;
}
.row-header{
  height: 30%;
}
.row-footer{
  height: 60%;
}
.card-header{
  height: 100%;
}
.card-erect{
  margin-top: 10px;
  height: 50%;
}
.card-rank{
  margin-top: 10px;
  height: 100%;
}
</style>
