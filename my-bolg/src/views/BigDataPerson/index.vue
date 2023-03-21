<!-- made by domekisuzi @2022/10/27 -->

<template>
  <el-container>
    <el-row :gutter="20">
       <el-col :span="10">

           <el-table
               :data="butList"
               style="width: 100% "
               :row-class-name="tableRowClassName"
               class="card-list"
           >
             <el-table-column prop="order" label="答辩名称" width="180" />
             <el-table-column prop="score" label="分数" width="180" />
             <el-table-column prop="context" label="首次答辩记录" />
           </el-table>


       </el-col>
        <el-col :span="14"  class="col-right">
          <div class="div-top">
            <MyCard class="card-top">
              <p>总分</p>
              <h1>{{sumScores}}</h1>
            </MyCard>
            <MyCard class="card-top">
              <p>平均分</p>
              <h1>{{avgScores}}</h1>
            </MyCard>
            <MyCard class="card-top">
              <p>暂无</p>
            </MyCard>
          </div>


            <MyCard class="card-bottom" id="approximateRank">

            </MyCard>

        </el-col>
    </el-row>
  </el-container>
</template>

<script setup>

import * as echarts from 'echarts'
import MyCard from "../../components/MyCard.vue";
import {getButListByName, insertOperate} from "../../api/api.js";
import {useStore} from "../../store/index.js";
import {onBeforeMount, onMounted, watch} from "vue";
import {getRange, getStatus} from "../../tool/tool.js";

import {storeToRefs} from "pinia";

let store = useStore()
const butList = ref(null)
const butNumber = ref(0)

const avgScores = ref(0)
const sumScores = ref(0)
const {name} = storeToRefs(store)
const pieData = ref (null)
const pieName = ref("年级均分占比")
//这个意为获取某个比较人数为多少
const pieLength = ref(0)

watch(name,(newValue,oldValue)=>{
  console.log("检测到了变化")
  setTimeout(updateData(),1000)
  insertOperate( store.name,"更改查看人")
  initCharts
})
var myChart
onBeforeMount(()=>{
  setTimeout(updateData(),1500)
  insertOperate( store.name,"查看大数据部个人")
})


onMounted(()=>{
  initCharts
})

const  initCharts = setTimeout(()=>{
      if(myChart !=null && myChart !=="" && myChart !==undefined){
        myChart.dispose()
      }
      myChart = echarts.init(document.getElementById('approximateRank'));
      let option = {
    backgroundColor: '#2c343c',
    title: {
      text: pieName.value,
      left: 'center',
      top: 20,
      textStyle: {
        color: '#ccc'
      }
    },
    tooltip: {
      trigger: 'item'
    },
    visualMap: {
      show: false,
      min: 0,
      max: pieLength.value,
      inRange: {
        colorLightness: [0, 1]
      }
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: pieData.value.
        sort(function (a, b) {
          return a.value - b.value;
        }),
        roseType: 'radius',
        label: {
          color: 'rgba(255, 255, 255, 0.3)'
        },
        labelLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.3)'
          },
          smooth: 0.2,
          length: 10,
          length2: 20
        },
        itemStyle: {
          color: '#c23531',
          shadowBlur: 200,
          shadowColor: 'rgba(250,88,88,0.5)'
        },
        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function (idx) {
          return Math.random() * 200;
        }
      }
    ]
  };
              option && myChart.setOption(option);
}
,2500)

const updateData =() => {
      console.log("开始更新数据")
      getButListByName(name.value).then(
          res => {
            //将答辩list转为JSON
            //    butList.value =eval("("+ res+")")
            let data = eval("(" + res['data'] + ")")
            butList.value = data
            butNumber.value = data.length
          }
      )
      let {length, result} = getStatus()
      console.log(length,result)
      pieLength.value = length
      sumScores.value = result['sumScores']
      avgScores.value = result['avgScores'].toFixed(2)
      pieData.value = getRange(21)
    }

const  tableRowClassName = ({
  row,rowIndex,
})=>{
  //大于90标绿
  if(row['score'] ===0){
    return 'warning-row'
  }
  else if(row['score'] >=90){
    return 'success-row'
  }
  return  ''
}

</script>

<style scoped>
 .el-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
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

 .el-table :deep(.warning-row) {
   --el-table-tr-bg-color: var(--el-color-warning-light-9);

 }
 .el-table :deep(.success-row) {

   --el-table-tr-bg-color: var(--el-color-success-light-9);
 }
</style>
