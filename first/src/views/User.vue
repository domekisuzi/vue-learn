<template>
<div>user</div>
</template>
<!--setup 组合式api-->
<script setup>
// export default {
//   name: "User",
//   //钩子
//   mounted() {
//     //表示当前活跃的路由对象
//     console.log(this.$route.params.id)
//   }
// }

import  {useRoute} from 'vue-router'
console.log(useRoute().params.id)
</script>

<style scoped>

</style>