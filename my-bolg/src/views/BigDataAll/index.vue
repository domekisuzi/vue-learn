<!-- made by domekisuzi @2022/10/27  总体数据查看-->

<template>

  <div class="container">
    <el-row :gutter="20" class="row-header">
      <el-col :span="8">
        <MyCard class="card-header">
          <template #default>
            <p>入库人数</p>
            <p>{{studentNumber}}</p>
          </template>
        </MyCard >

      </el-col>
      <el-col  :span="8">
        <MyCard class="card-header">
          <template #default>
            <p>历代管理人员</p>
            <p>{{adminNumber}}</p>
          </template>
        </MyCard>
      </el-col>

      <el-col :span="8">
        <MyCard class="card-header">
          <template #default>
            <p>成立天数</p>
            <p>{{dayAcc}}</p>
          </template>
        </MyCard>
      </el-col>
    </el-row>

    <el-row :gutter="20" class="row-footer">
      <el-col :span="8" class="col-erect" >
        <MyCard class="card-erect">
          <template #default>
            <p>累计答辩次数</p>
            <p>{{butNumber}}</p>
          </template>
        </MyCard >
        <MyCard class="card-erect" id="wait">
          <template #default>
            <p>暂定</p>
          </template>
        </MyCard>
      </el-col>
      <el-col :span="16">
        <div class="card-rank" id="rank">
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import MyCard from  '../../components/MyCard.vue'
import  * as echarts from 'echarts'
import {  onBeforeMount, onMounted,  } from "vue";

import {storeToRefs} from 'pinia'
import  {useStore} from '../../store'
import {getRankScore} from "../../tool/tool.js";
import {insertOperate} from "../../api/api.js";



const studentNumber = ref(0)
const adminNumber = ref(0)
const dayAcc =  ref(0)
const butNumber = ref(0)
const grade21 = ref(null)
const grade22 = ref(null)
const avgGap  = ref(null)
var myChart;

const init = setTimeout (()=>{

  if(myChart !=null && myChart !=="" && myChart !==undefined){
    myChart.dispose()
  }
  myChart = echarts.init(document.getElementById('rank'));

  let  option = {
    title: {
      text: '大数据部rank',
      left: 'center'
      ,
      textStyle:{
        color:'  rgba(229,207,207,0.89) '
      }
    },
    color: ['#3A85D3','#BBDFFF','#F4BB17'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: '80px',
      containLabel: true
    },
    legend: {
      data: ['21级', '22级','平均分差'],
      top: '30px',
      right: '80px',
      textStyle:{
        color: 'rgba(229,207,207,0.89)',
      }

    },
    xAxis: [
      {
        type: 'category',
        data: ['1', '2', '3', '4', '5'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      },
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '21级',
        type: 'bar',
        itemStyle: {
          borderRadius: [50,50,0,0]
        },
        barWidth: '60',
        data: grade21.value
      },
      {
        name: '22级',
        type: 'bar',
        itemStyle: {
          borderRadius: [50,50,0,0]
        },
        barWidth: '60',
        data: grade22.value
      },
      {
        name: '平均分差',
        type: 'line',
        yAxisIndex: 1,
        data: avgGap.value
      }
    ]
  };

    option && myChart.setOption(option);
  },2100)



const store = useStore()


onBeforeMount(
      () => {
      //接口经测试无误
      //需要通过这种形式才能获得相应数据,需要进行提交才能修改这种响应数据

      store.upStudents()
      store.upAllButs()
      store.upGradeStatus(21,22)
        insertOperate( store.name,"查看大数据部总体数据")
        //简单无脑且好用！
        setTimeout(()=>{
          butNumber.value =   store.allButsNumber
          studentNumber.value =   store.allStudentsNumber
          dayAcc.value = store.setUpDay
          adminNumber.value = 16
          let{array1,array2,array3 } =  getRankScore(21,22)
          grade21.value =  array1
          grade22.value =  array2
          avgGap.value  = array3
        },2000)
    }
)

onMounted(
    ()=>{
      init
      // login()
    }
)



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

#wait{
  background: rgba(255, 255, 255, 0.65);
}
</style>
