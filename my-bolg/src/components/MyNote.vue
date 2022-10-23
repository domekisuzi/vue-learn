<!-- made by domekisuzi
    @2022/10/22
-->
<template>


  <div class="center">
    <div class="main">
<!--  暂时放markdown，一会自己写盒子啥的    -->
      <el-card v-for="o in 16" :key="o" class="box-card" shadow="hover">
        <div class="note-container">
          <v-md-preview :text="text"></v-md-preview>
        </div>
      </el-card>
    </div>
<!--    <el-card shadow="always" class="slider">-->
<!--    </el-card>-->
  </div>

</template>

<script setup>
import {ref} from "vue";
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
  width: 80%;
}

/*设置卡片之间间隔一些*/
.el-card {
  margin-top: 10px;
}
/*这个fixed属实给我整麻了*/
.slider{
  position: fixed;
  left: 1400px;
  width: 300px;
  height: 500px;
}

el-card{

}
</style>
