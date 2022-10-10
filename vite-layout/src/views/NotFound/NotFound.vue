<!-- made by domekisuzi
    @2022/10/9
-->
<template>

  <p>notfound</p>
  <p>{{name}}</p>
  <button @click="goLogin">挑战</button>


</template>

<script setup>

    import {useRoute} from  'vue-router';
    import {onMounted} from "vue";
    import router from "../../router/index.js";

    let s = useRoute()
    const name = s.params.path
    onMounted(()=>{

    })

    //vue3页面跳转
    function goLogin() {
      router.push("/login")
    }

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
