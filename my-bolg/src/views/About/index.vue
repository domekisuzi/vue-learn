<!-- made by domekisuzi
    @2022/10/21
-->
<template>
  <div class="body">
    <div class="home">
      <div class="header">
        <Header/>

      </div>
      <div class="self">
        <Slider>
          <div class="slider">
            <el-avatar src="src/assets/domekisuzi.png" :size="100"></el-avatar>
            <p>一个快乐肥宅</p>
            <el-divider></el-divider>

            <span class="attr" v-for="i in 5" key="5">
                <el-image :src="hobby"></el-image>
                <h1>{{ i }}</h1>
              </span>
          </div>
        </Slider>
        <div class="other">
          <el-card class="skill">

            <el-row :gutter="10">
              <el-col :span="6">
                <Skill>
                  <el-image lazy="lazy" src="src/assets/android.svg"></el-image>
                  <span>安卓</span>
                </Skill>
              </el-col>
              <el-col :span="6">
                <Skill>
                  <el-image lazy="lazy" src="src/assets/bug.svg"></el-image>
                  <span>爬虫</span>
                </Skill>
              </el-col>
              <el-col :span="6">
                <Skill>
                  <el-image lazy="lazy" src="src/assets/c++.svg"></el-image>
                  <span>c/c++</span>
                </Skill>
              </el-col>
              <el-col :span="6">
                <Skill>
                  <el-image lazy="lazy" src="src/assets/docker.svg"></el-image>
                  <span>docker</span>
                </Skill>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <Skill>
                  <el-image lazy="lazy" src="src/assets/linux.svg"></el-image>
                  <span>linux</span>
                </Skill>
              </el-col>
              <el-col :span="6">
                <Skill>
                  <el-image lazy="lazy" src="src/assets/spark.svg"></el-image>
                  <span>spark</span>
                </Skill>
              </el-col>
              <el-col :span="6">
                <Skill>
                  <el-image lazy="lazy" src="src/assets/springboot.svg"></el-image>
                  <span>springboot</span>
                </Skill>
              </el-col>
              <el-col :span="6">
                <Skill>
                  <el-image lazy="lazy" src="src/assets/vue.svg"></el-image>
                  <span>vue.js</span>
                </Skill>
              </el-col>
            </el-row>

          </el-card>
          <el-card class="introduction">
            <v-md-preview  :text="text"></v-md-preview>
          </el-card>
        </div>

      </div>

      <div class="footer">
        <Footer/>
      </div>
    </div>
  </div>


</template>

<script setup>
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
import Slider from "../../components/Slider.vue";
import Skill from "../../components/Skill.vue";
import {onBeforeMount} from "vue";
import {storeToRefs} from 'pinia'
import  {useStore} from '../../store'
const hobby = 'src/assets/hobby.svg'
const  store = useStore()

onBeforeMount(()=>{
    //需要通过这种形式才能获得相应数据,需要进行提交才能修改这种响应数据
    let {name} =  storeToRefs( store)
    console.log("################")
     console.log(name)
})

const text = ref("## about me\n" +
    "\n" +
    "吹在前面的话：博主日常发癫，图一乐就可。如有雷同，~~那确实牛逼~~ 。 \n" +
    "\n" +
    "------\n" +
    "\n" +
    "#### 关于大学时期到底在干嘛  \n" +
    "\n" +
    "- 摆烂\n" +
    "\n" +
    "- 进食\n" +
    "\n" +
    "- ###  看番\n" +
    "\n" +
    "- 跟实验室打架 \n" +
    "\n" +
    "- 调教室友 \n" +
    "\n" +
    "#### 关于大学时期的小目标 \n" +
    "\n" +
    "- 找个人把我给收了\n" +
    "- 颜值*2+学历↑\n" +
    "- 摆脱拣瓶子生活的日子\n" +
    "\n" +
    "- #### ~~当日本总理大臣~~\n" +
    "\n" +
    "![chika](./src/assets/chika.webp)\n" +
    "\n" +
    "#### 关于为什么至今还是母胎solo \n" +
    "\n" +
    "*这是因为上辈子桃花运太旺，所以本人也没什么办法*\n" +
    "\n" +
    "#### 爱好\n" +
    "\n" +
    "- 唱，跳，rap\n" +
    "- 来自深渊 \n" +
    "- ~~无聊，我要看他们血流成河~~ \n" +
    "- **说胡话**\n" +
    "\n" +
    "#### 大学期间的收获\n" +
    "\n" +
    "- 大概是个合格的大数据人，精通excel的打开与关闭，以及数据库的创建与删除 \n" +
    "- 学会了丑法制android  app\n" +
    "- 不怎么会写网页\n" +
    "- 家乡话n1（准）水平\n" +
    "\n")

</script>

<style scoped>

.home {
  display: flex;
  width: 100%;
  top: 0;
  flex-direction: column;
}

.body {
  background-image: url('../../assets/aosen.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

.header {
  /*position: fixed;*/
  width: 100%;
  height: 50px;
}

.self {
  margin-top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  width: 100%;
}

.slider {
  margin-top: 50px;
  left: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.other {
  width: 60%;
}

.other .skill {
  position: relative;
  /*background: linear-gradient(to right, rgba(255, 255, 255, 0.83) 1%, rgba(255, 255, 255, 0.83) 90%);*/
  background-image: url("../../assets/00002.webp");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: row;
}

.other .introduction {
  position: relative;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.83) 1%, rgba(255, 255, 255, 0.83) 90%);
  width: 100%;
  margin-top: 10px;
}

.el-image {
  width: 40px;
  height: 40px;
}

.attr {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 200%;
}

/*深穿，使得cardbody占据100%的容器*/
.el-card :deep(.el-card__body) {
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
}

.el-row {
  height: 45%;
  width: 80%;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

</style>
