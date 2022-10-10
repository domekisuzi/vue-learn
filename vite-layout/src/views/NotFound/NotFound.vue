<!-- made by domekisuzi
    @2022/10/9
-->
<template>

  <p>notfound</p>
  <p>{{ name }}</p>
  <button @click="goLogin">跳转</button>

  <A></A>
  <B></B>
  <div ref="target">
    <C v-if="targetIsVisible"> </C>
  </div>
  <!--  <ul>-->
  <!--    <li v-for="(item,index) in tabList" :key="index" @click="change(index)">{{item.name}}</li>-->
  <!--  </ul>-->
  <!--  <component :is="currentComponent.com"></component>-->

</template>

<script setup>
import A from '@/components/A.vue'
import B from '@/components/B.vue'
// import C from '@/components/C.vue'
import {useIntersectionObserver} from '@vueuse/core'
import {defineAsyncComponent} from "vue";

const C = defineAsyncComponent(() => {
  import C from '@/components/C.vue'
})

let route = useRoute()
let router = useRouter()
const name = route.params.path

//vue3页面跳转
function goLogin() {
  router.push("/login")
}

const target = ref(null)
const targetIsVisible = ref(false)
const {stop} = useIntersectionObserver(
    target, ([{isIntersecting}]) => {
      console.log(isIntersecting)
      targetIsVisible.value = isIntersecting
    }
)
// //markRaw,防止 markRaw响应提高性能
// let tabList = reactive(
//   [{name:"A：你们慢慢A",com:markRaw(A)},
//     {name:"B：你们慢慢B",com:markRaw(B)},
//     {name:"C：你们慢慢C",com:markRaw(C)},]
//  )
//
// let currentComponent = reactive({
//   com:A
// })
//
// const change =  (index)=>{
//   console.log(index)
//   currentComponent.com = tabList[index].com
// }

// export default{
//   setup(){
//     let s =  'sds'
// 要使用 return才能给模板使用
//     return{
//       s
//     }
//   }
// }
// export default {
//   name: 'NotFound',
//   setup() {
//     const name = useRoute().params.id;
//     console.log(name)
//   }
// }

// import useRoute  from  'vue-router';
// let name = useRoute().params.id
// console.log(name)


</script>

<style scoped>

</style>
