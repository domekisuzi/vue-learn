<!-- made by domekisuzi
    @2022/10/9
-->
<template>

  <p>notfound</p>
  <p>{{ name }}</p>
  <button @click="goLogin">跳转</button>
  {{ targetIsVisible }}

  <B></B>

  <button @click="change">加载</button>
  <C  :v-if="targetIsVisible.value"></C>
  <div ref="target">

  </div>

</template>

<!--TODO("异步组件完全不加载 ?")-->
<script setup>
import A from '@/components/A.vue'
import B from '@/components/B.vue'
// import C from  '@/components/C.vue'
import {useIntersectionObserver} from '@vueuse/core'
import {defineAsyncComponent, ref} from "vue";

const C = defineAsyncComponent({
  loader: () => import("../../components/C.vue"),
  delay:200,
  loadingComponent:B,
  timeout:3000,
  onError: ()=>{
    console.log("加载失败")
  }
})

// const C = defineAsyncComponent({
//
//   loader: () => import('../../components/C.vue'),
//   errorComponent:B,
//   loadingComponent:B
// })

// const C = () => import('../../components/C.vue')
let route = useRoute()
let router = useRouter()
const name = route.params.path

let target = ref(null)
let targetIsVisible = ref(true)

setTimeout(() => {
  const C =  import('../About.vue')
  targetIsVisible.value = true
  console.log(targetIsVisible.value)
}, 2000)


// const {stop} = useIntersectionObserver(
//     target, ([{isIntersecting}]) => {
//       console.log(isIntersecting)
//       if (isIntersecting) {
//         targetIsVisible.value = isIntersecting
//       }
//     }
// )

const change = () => {
  targetIsVisible.value = !targetIsVisible.value
}

//vue3页面跳转
function goLogin() {
  router.push("/login")
}

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
