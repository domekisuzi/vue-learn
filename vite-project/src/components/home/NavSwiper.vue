<!-- made by domekisuzi
    @2022/10/17
-->
<template>

  <div class="nav-swiper">
    <div class="nav-swiper-main">
      <div class="swiper-t">
        <ul>
          <li class="active">
            <span>HTML/CSS</span>
            <el-icon>
              <ArrowRight/>
            </el-icon>
          </li>
          <li>
            <span>HTML/CSS</span>
            <el-icon>
              <ArrowRight/>
            </el-icon>
          </li>
          <li>
            <span>HTML/CSS</span>
            <el-icon>
              <ArrowRight/>
            </el-icon>
          </li>
          <li>
            <span>HTML/CSS</span>
            <el-icon>
              <ArrowRight/>
            </el-icon>
          </li>
          <li>
            <span>HTML/CSS</span>
            <el-icon>
              <ArrowRight/>
            </el-icon>
          </li>
        </ul>

        <div>
          <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3 text="2xl" justify="center">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>

      </div>
      <ul class="swiper-b">
        <li>
          <h3>
            <img src="../../assets/domekisuzi.png" alt="">
          </h3>
          <div>
            <h4>初级课程</h4>
            <span>入门快，岗位多</span>
          </div>
        </li>
        <li>
          <h3>
            <img src="../../assets/domekisuzi.png" alt="">
          </h3>
          <div>
            <h4>初级课程</h4>
            <span>入门快，岗位多</span>
          </div>
        </li>
        <li>
          <h3>
            <img src="../../assets/domekisuzi.png" alt="">
          </h3>
          <div>
            <h4>初级课程</h4>
            <span>入门快，岗位多</span>
          </div>
        </li>
        <li>
          <h3>
            <img src="../../assets/domekisuzi.png" alt="">
          </h3>
          <div>
            <h4>初级课程</h4>
            <span>入门快，岗位多</span>
          </div>
        </li>
        <li>
          <h3>
            <img src="../../assets/domekisuzi.png" alt="">
          </h3>
          <div>
            <h4>初级课程</h4>
            <span>入门快，岗位多</span>
          </div>
        </li>
      </ul>

    </div>
  </div>
  {{test}}
</template>

<script setup>
import {ArrowRight} from "@element-plus/icons-vue"
import {getData} from '../../utils/api/slider.js'
import {onBeforeMount} from "vue";
import {useUserStore} from "../../store/user.js";

const useStore = useUserStore();


let test = ref("")
onBeforeMount(()=>{
  getData().then(
      data => {
        test.value = data
      }
  )
})


</script>

<style scoped>
.nav-swiper {
  background: url('../../assets/domekisuzi.png');
  width: 100%;
  height: 600px;
}

.nav-swiper-main {
  width: 1000px;
  /*上下47，左右 0 */
  padding: 47px 0;

  margin: 0 auto;
}

.swiper-t {
  display: flex;
  height: 373px;
  border-radius: 11px 11px 0px 0px;
}

.swiper-t ul {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 160px;
  background: #2B283D;
  border-radius: 11px 11px 0px 0px;
}

.swiper-t ul li {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 160px;
  height: 37px;
  /*background: #2B283D;*/
  font-size: 16px;
  margin-top: 35px;
  color: #F2F2F2;
  cursor: pointer;
}

.active {
  background: linear-gradient(90deg, #3FE5FF 0%, rgba(62, 222, 255, 0.93) 2%, rgba(60, 203, 255, 0.73) 9%, rgba(58, 186, 255, 0.56) 17%, rgba(57, 172, 255, 0.41) 25%, rgba(55, 160, 255, 0.28) 33%, rgba(54, 150, 255, 0.18) 43%, rgba(53, 142, 255, 0.1) 53%, rgba(53, 137, 255, 0.04) 64%, rgba(53, 133, 255, 0.01) 77%, rgba(53, 133, 255, 0) 100%);
}

/*只能接子div*/
.swiper-t > div {
  height: 373px;
  width: 840px;
}

.el-carousel {
  height: 373px;
}

:deep .el-carousel__container {
  height: 300px;
}

.swiper-b {
  display: flex;
}

.swiper-b li {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 213px;
  height: 133px;
  background: #FFFFFF;
  border-radius: 0px 0px 0px 11px;
  cursor: pointer;
}

.swiper-b li img {
  width: 64px;
  height: 64px;
}

.swiper-b li div {
  margin-left: 11px;
}

.swiper-b li div h4 {
  font-size: 16px;
  color: #333333;
}

.swiper-b li div span {
  font-size: 12px;
  color: #808080;
}
</style>
