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


            <MyCard class="card-bottom" id="approximateRank">
            </MyCard>

        </el-col>
    </el-row>
  </el-container>
</template>

<script setup>

import * as echarts from 'echarts'
import MyCard from "../../components/MyCard.vue";
import {getButListByName} from "../../api/api.js";
import {useStore} from "../../store/index.js";
import {onBeforeMount} from "vue";

let store = useStore()
const butList = ref(null)
onBeforeMount(()=>{
  getButListByName(store.name).then(
      res=>{
        //将答辩list转为JSON
        butList.value =eval("("+ res+")").length
      }
  )
})

onMounted(()=>{
  initCharts
})


const  initCharts = setTimeout(()=>{
  var myChart = echarts.init(document.getElementById('approximateRank'));
  let option = {
    backgroundColor: '#2c343c',
    title: {
      text: 'Customized Pie',
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
      min: 80,
      max: 600,
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
        data: [
          { value: 335, name: 'Direct' },
          { value: 310, name: 'Email' },
          { value: 274, name: 'Union Ads' },
          { value: 235, name: 'Video Ads' },
          { value: 400, name: 'Search Engine' }
        ].sort(function (a, b) {
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
          shadowColor: 'rgba(0, 0, 0, 0.5)'
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
)

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
