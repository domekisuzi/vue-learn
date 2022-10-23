<!-- made by domekisuzi @2022/10/23
文字渐出特效
-->
<!-- <h1>
    世界上只有一种英雄主义<br>便是注视过生活的真面目后，依然热爱它<br>-罗曼罗兰《米开朗基罗传》
  </h1>
-->
<template>
  <div class="note">
    <h1  style="white-space: pre">
      <slot  name="context"></slot>
    </h1>

    <h5>
      <slot name="author"></slot>
    </h5>
  </div>

</template>

<script setup>

</script>

<style scoped>
.note{
  margin-top: 150px;
  width: 50%;
}
.note h1{

  color: #fff;
}
.note h5{
  color: #fff;
}
</style>