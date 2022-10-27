<!-- made by domekisuzi
    @2022/10/27
-->
<template>
  <el-card class="my-card">
    <slot></slot>
  </el-card>
</template>

<script setup>

</script>

<style scoped>

.my-card{
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.83) 1%, rgba(255, 255, 255, 0.83) 90%);
}

</style>
