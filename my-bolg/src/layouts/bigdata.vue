<!-- made by domekisuzi @2022/10/26 -->

<template>
  <div class="container">
    <el-container>
      <el-aside width="200px">
        <el-row>
          <el-col :span="24">
            <el-menu
                id="menu-aside"
                active-text-color="#ffd04b"
                background-color="#545c64"
                default-active="2"
                text-color="#fff"
                @open="handleOpen"
                @close="handleClose"
                @select="handleSelect"
            >
              <el-menu-item index="1">
                <template #title>
                  <el-icon><location/></el-icon>
               <span>总体数据查看</span>
                </template>
              </el-menu-item>

              <el-menu-item index="2">
                <el-icon><icon-menu /></el-icon>
                <span>个人详情查看</span>
              </el-menu-item>

              <el-menu-item index="3">
                <el-icon><document /></el-icon>
                <span>大数据部历史</span>
              </el-menu-item>

              <el-menu-item index="4" disabled="true">
                <el-icon><setting /></el-icon>
                <span>吐槽版</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>

      </el-aside>
      <el-container>
        <el-header>
          <el-menu
              :default-active="activeIndex2"
              id="menu-header"
              mode="horizontal"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
              @select="handleHeader"
          >
            <el-menu-item index="1" disabled>登录</el-menu-item>
            <el-menu-item index="2" disabled>暂定</el-menu-item>
            <el-menu-item index="3">暂定</el-menu-item>
            <el-sub-menu index="4" disabled="true">
              <template #title>个人中心</template>
              <el-menu-item index="2-1">item one</el-menu-item>
              <el-menu-item index="2-2">item two</el-menu-item>
              <el-menu-item index="2-3">item three</el-menu-item>
              <el-sub-menu index="2-4">
                <template #title>item four</template>
                      <el-menu-item index="2-4-1">item one</el-menu-item>
                      <el-menu-item index="2-4-2">item two</el-menu-item>
                      <el-menu-item index="2-4-3">item three</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
          </el-menu>
        </el-header>
        <el-main>
          <component :is="currentComponent.com"></component>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script setup>
import * as echarts from "vue"
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import All from  '@/views/BigDataAll/index.vue'
import History from  '@/views/BigDataHistory/index.vue'
import Feedback from  '@/views/BigDataFeedback/index.vue'
import Person from  '@/views/BigDataPerson/index.vue'
import {markRaw, reactive} from "vue";

//markRaw 可以使得组件不去响应
let componentList  =  reactive([
    {name:'all',com:markRaw(All)},
  {name:'person',com:markRaw(Person)},
  {name:'history',com:markRaw(History)},
  {name:'feedback',com:markRaw(Feedback)},
]);

let currentComponent = reactive({com:componentList[0].com})


/**
 * 处理侧边栏
 * @param index
 */

const handleSelect = (index)=>{
  currentComponent.com  = componentList[index-1].com
}

function init(){

}

</script>

<style scoped>
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222C32;;
  width:100%;
}
.el-header{
  width: 100%;
  padding: 0;
}
.el-main{
  /*background-color: #161634;*/
}
#menu-aside{
  position: fixed;
  height: 721.666px;
  width: 200px;
}
#menu-header{

  width: 100%;
  justify-content: right;
}
/*.el-menu :deep(.el-menu--horizontal){*/
/*  border-bottom: 0;*/
/*}*/

.el-menu--horizontal{
  border-bottom: 0;
}
.el-menu{
  border-right: 0;
}
</style>
