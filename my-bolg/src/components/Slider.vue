<!-- made by domekisuzi @2022/10/25 -->

<!--单独将slider成为一个组件，使其能够正确黏附于父布局中-->
<!--使用插槽，增加其复用性-->
<template>
  <el-card shadow="always" class="slider">
    <slot>
    </slot>
  </el-card>
</template>

<script setup>

</script>

<style scoped>

.slider{
  position: sticky;
  width: 25%;
  height: 567.333px ;
  bottom: 0;
  top: 0;
  /*加入margin是使得不会离的太近*/
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: rgba(255, 255, 255, 0.65);
}

</style>