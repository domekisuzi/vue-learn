<template>
  <!--  元素暴露给无障碍API aria-hidden-->
  <svg class="svg-icon" aria-hidden="true">
<!--    use元素在 SVG 文档内取得目标节点，并在别的地方复制它们。
它的效果等同于这些节点被深克隆到一个不可见的 DOM 中，然后将其粘贴到use元素的位置，
很像 HTML5 中的克隆模板元素。-->
    <use :xlink:href="iconName">
      
    </use>
  </svg>
</template>

<script setup>
import {defineProps, computed} from "vue";

const props = defineProps({
  icon: {
    type: String,
    required: true,
  }
})


const iconName = computed(() => {
  //# 代表网页中的一个位置
  return `#icon-${props.icon}`
})


</script>

<style lang="scss" scoped>

.svg-icon{
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
