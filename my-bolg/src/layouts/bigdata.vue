<!-- made by domekisuzi @2022/10/26 -->

<template>

  <div class="first_container">
<!--    <MyDialog v-model:dialogTableVisible="dialogTableVisible"></MyDialog>-->
    <el-container>
      <div class="aside">
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

                <el-menu-item index="2" @click="isClickAble = false">
                  <el-icon><icon-menu /></el-icon>
                  <span>个人详情查看</span>
                </el-menu-item>

                <el-menu-item index="3">
                  <el-icon><document /></el-icon>
                  <span>大数据部历史</span>
                </el-menu-item>

                <el-menu-item index="4" disabled>
                  <el-icon><setting /></el-icon>
                  <span>吐槽版</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
      </div>


      <el-container>
        <div class="right">
          <div class="header">
            <el-header>
              <el-menu
                  id="menu-header"
                  mode="horizontal"
                  background-color="#545c64"
                  text-color="#fff"
                  active-text-color="#ffd04b"
                  @select="handleHeader"
              >
                <el-menu-item index="1" disabled>登录</el-menu-item>
                <el-menu-item index="2" disabled>主题</el-menu-item>
                <el-menu-item index="3"
                              @click="open"
                              :disabled="isClickAble"
                >{{ name }}</el-menu-item>
                <el-sub-menu index="4" disabled>
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
          </div>
          <div class="main">
            <el-main>
              <component :is="currentComponent.com" ref="child"></component>
            </el-main>
          </div>
        </div>
      </el-container>
    </el-container>
  </div>

</template>

<script setup>


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
import {   markRaw, onMounted, reactive, watch} from "vue";
import {useStore} from "../store/index.js";
import router from "../router/index.js";
import {ElMessage} from "element-plus";
import {getStudentByName} from "../api/api.js";

const store = useStore()
const name = ref(store.name)
const flag  = ref(null)
const isClickAble = ref(true)
//使用v-model实现双向绑定，父传子
// const dialogTableVisible = ref(false)
//markRaw 可以使得组件不去响应

let componentList  =  reactive([
  {name:'all',com:markRaw(All)},
  {name:'person',com:markRaw(Person)},
  {name:'history',com:markRaw(History)},
  {name:'feedback',com:markRaw(Feedback)},
]);

const test = ref(null)
watch( flag,(oldValue,newValue)=>{
  if (newValue ==="error1"){
    ElMessage.error("该学生未入库，请通知管理员")
    // alert("该学生未入库，请通知管理员")
  }
  else if(newValue ==="error2"){
    // ElMessage.error("输入了非法的内容")
    alert("输入了非法的内容")
  }
  else if(newValue ==="success"){
    // ElMessage({
    //   message:"修改成功",
    //   type: 'success'
    // })
    alert("修改成功")
  }
})

//修改名称栏
const  open = async () => {



  const newName = prompt("输入你想查找的名字", '')
  // ElMessage.success("修改成功（若名字没入库则无法查询）")
  if (name.value != null && name.value !== "" && name.value !== undefined) {
    getStudentByName(newName).then
    (res => {

      if (res.data !== '') {
        name.value = newName
        store.upName(newName)
        flag.value = "success"
      } else flag.value = "error1"
    }).catch(error => {
      console.log(error)
    })
  } else {
    flag.value = "error2"
    // ElMessage.error("输入了非法的内容！")
  }
}
let currentComponent = reactive({com:componentList[0].com})
onMounted(()=>{

})

/**
 * 处理侧边栏
 * @param index
 */
const props = defineProps(
    {
      dialogTableVisible: {
        type:Boolean,
        default:false
      }
    }
)


const child = ref(null)

const handleSelect = (index)=>{
  currentComponent.com  = componentList[index-1].com
}
const handleOpen = ()=>{

}
const handleClose = () =>{

}
const handleHeader =  () =>{

}


function init(){

}

</script>

<style scoped>
.first_container{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222C32;;
  width:100vw;
  height: 100vh;
}
.el-header{

  padding: 0;
}
.header{
  height: 10vh;

}
.main{
  height: 90vh;
}
.right{
  display: flex;
  flex-direction: column;
  width: 100%;
}

.el-main{
  /*background-color: #161634;*/
  height: 100%;
  width: 100%;
}
.el-aside{
  height: 100vh;
}
.el-row{
  height: 100%;
}
/*#menu-aside{*/
/*  position: fixed;*/
/*  height: 100vh;*/
/*  width: 200px;*/
/*}*/
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
  height: 100%;
}
</style>
