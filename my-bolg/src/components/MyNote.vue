<!-- made by domekisuzi
    @2022/10/22
-->
<template>
  <div class="center">
    <Slider class="slider">
      <div class="slider-content">
        <h1>网站统计</h1>
        <h3>点击数{{clickCount}}</h3>
        <h3>运行天数{{dayCount}}</h3>
        <div class="tag">
          <el-check-tag v-for="o in tags" key="o" round @change="selectTag(o)"  :checked="o!==selectTags">{{o}}</el-check-tag>
        </div>
      </div>
    </Slider>
    <div class="main">
<!--  暂时放markdown，一会自己写盒子啥的    -->
      <el-card v-for="o in s" :key="o.id" class="box-card" shadow="hover">
        <div class="note-container">
          <v-md-preview :text="o.context"></v-md-preview>
        </div>
      </el-card>


    </div>
  </div>

</template>

<script setup>
import {onBeforeMount, ref, toRaw} from "vue";
import Slider from "./Slider.vue";
import {getAllNotes, getOperateCount, insertOperate} from "../api/api.js";

const clickCount = ref(0)
const dayCount = ref(0)
var s = ref('')
const tags = ref(null)
const selectTags = ref('数据库原理')
const tmpData  = ref(null)
onBeforeMount(()=>{
  getAllNotes().then(
      res=>{
        const tagsTmp = []
        const noteTmp = []
        const tmp =   eval("("+res['data']+")")
        tmpData.value = tmp
        for (let i = 0; i <tmp.length; i++) {
           tagsTmp.push(tmp[i]['label'])
          if (tmp[i]['label'] === selectTags.value){
            noteTmp.push(tmp[i])
          }
        }
        s.value = noteTmp
        tags.value = Array.from(new Set(tagsTmp))
      }
  )
  getOperateCount().then(res=>{
    console.log(res)
    clickCount.value = res.data
    dayCount.value =  Math.floor( (new Date() - new Date(2022,11,1))/(24*60*60*1000))

  })
})
const selectTag  = (o)=>{
  insertOperate("查看笔记","切换笔记tag")
  selectTags.value = o
  const noteTmp = []
  const tmp  = tmpData.value
  for (let i = 0; i <tmp.length; i++) {

    if (tmp[i]['label'] === selectTags.value){
      noteTmp.push(tmp[i])
    }
  }
  s.value = noteTmp
}
</script>

<style scoped>


.center{
  margin-top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

.main {
  width: 50%;
  position: relative;
}

/*设置卡片之间间隔一些*/
.el-card {
  margin-top: 10px;
  background-color:  rgba(255, 255, 255, 0.65);
}

.slider{
  height: 400px;
}
.slider .slider-content{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 100%;
}

.el-card :deep(.el-card__body ){
  height:  100%;
  padding: 0;
}


</style>
