<!-- made by domekisuzi @2022/10/10 -->

<template>
  {{ num }}
  {{ name }}
  {{ changeNum }}
  <button @click="sss">加</button>
</template>

<script setup>

import {use} from "../store/use.js";
import {shop} from '../store/shop.js'
import {storeToRefs} from "pinia";


const store = use()

console.log(store)
//通过使用storeToRefs 可以使得数据响应
let {name, num, changeNum} = storeToRefs(store)
setTimeout(() => {
  // num.value =1000
  //实现批量修改
  store.$patch(state => {
    state.num++;
    state.name = 'wdnmd';
  })

}, 2000)
const sss = () => {
  store.upNum(200)
}

</script>

<style scoped>

</style>
