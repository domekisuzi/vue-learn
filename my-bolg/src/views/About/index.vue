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
<!--            <el-avatar src="../../../assets/domekisuzi.png" :size="100"></el-avatar>-->
            <img src="../../assets/domekisuzi.png"  >
            <p>一个快乐肥宅</p>
            <el-divider></el-divider>
<!--            <span class="attr" key="5">-->
<!--                <el-image :src="hobby"></el-image>-->
<!--                <h1>ひかりになれ！</h1>-->
<!--            </span>-->
          </div>
        </Slider>
        <div class="other">
          <el-card class="skill">

            <el-row :gutter="10">
              <el-col :span="6">
                <Skill>
                  <el-image lazy="lazy" :src="android"></el-image>
                  <span>安卓</span>
                </Skill>
              </el-col>
              <el-col :span="6">
                <Skill>
                  <el-image lazy="lazy" :src="bug"></el-image>
                  <span>爬虫</span>
                </Skill>
              </el-col>
              <el-col :span="6">
                <Skill>
                  <el-image lazy="lazy" :src="c_plus"></el-image>
                  <span>c/c++</span>
                </Skill>
              </el-col>
              <el-col :span="6">
                <Skill>
                  <el-image lazy="lazy" :src="docker"></el-image>
                  <span>docker</span>
                </Skill>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <Skill>
                  <el-image lazy="lazy" :src="linux"></el-image>
                  <span>linux</span>
                </Skill>
              </el-col>
              <el-col :span="6">
                <Skill>
                  <el-image lazy="lazy" :src="spark"></el-image>
                  <span>spark</span>
                </Skill>
              </el-col>
              <el-col :span="6">
                <Skill>
                  <el-image lazy="lazy" :src="springboot"></el-image>
                  <span>springboot</span>
                </Skill>
              </el-col>
              <el-col :span="6">
                <Skill>
                  <el-image lazy="lazy" :src="vue_js"></el-image>
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
import {insertOperate} from "../../api/api.js";
import android from  '../../assets/android.svg'
import domekisuzi from  '../../assets/domekisuzi.png'
import bug from  '../../assets/bug.svg'
import c_plus from  '../../assets/c++.svg'
import docker from '../../assets/docker.svg'
import  linux from  '../../assets/linux.svg'
import spark from '../../assets/linux.svg'
import springboot from '../../assets/springboot.svg'
import vue_js from '../../assets/vue.svg'
const hobby = '../../assets/hobby.svg'

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
    "![chika](./../../assets/chika.webp)\n" +
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
insertOperate("个人博客","查看关于我的")


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
