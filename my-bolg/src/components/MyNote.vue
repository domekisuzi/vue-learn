<!-- made by domekisuzi
    @2022/10/22
-->
<template>
  <div class="center">
    <Slider></Slider>
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
import {getAllNotes} from "../api/api.js";


var s = ref('')

onBeforeMount(()=>{
  getAllNotes().then(
      res=>{
        s.value  = eval("("+res['data']+")")
        for (const resKey in s.value) {
          console.log(resKey)
        }
      }
  )
})

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


el-card{

}
</style>
