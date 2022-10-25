<!-- made by domekisuzi
    @2022/10/22
-->
<template>
  <div class="center">
    <Slider></Slider>
    <div class="main">
<!--  暂时放markdown，一会自己写盒子啥的    -->
      <el-card v-for="o in 10" :key="o" class="box-card" shadow="hover">
        <div class="note-container">
          <v-md-preview :text="text"></v-md-preview>
        </div>
      </el-card>

    </div>
  </div>

</template>

<script setup>
import {ref} from "vue";
import Slider from "./Slider.vue";
const text = ref("### Hive阶段作业\n" +
    "\n" +
    "你需要掌握\n" +
    "\n" +
    "- 分区，二级分区\n" +
    "- 查看表结构\n" +
    "- 创建表\n" +
    "- 载入数据")

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
