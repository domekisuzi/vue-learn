<!-- made by domekisuzi @2022/10/25 技术栈组件-->

<template>
  <div class="my-skill">
    <slot></slot>
  </div>
</template>

<script setup>

</script>

<style scoped>
.my-skill{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  /*background-color: rgba(255, 255, 255, 0.65);*/

  height: 100%;
  width: 100%;
  border-radius: 4px;
}
</style>
