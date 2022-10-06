<template>
  <p>{{msg}}</p>
  <p>默认标签</p>
</template>

<script>
export default {
  name: "p",

  props:{
    //可以设置默认值，以及子组件
    msg:{
      type:String,
      default:"asa",
      required:false
    },
    list:{
      //如果事对象或数组，需要一个工厂函数返回
      type:Array,
      default(){
        return[]
      }
    }
  }
}
</script>

<style scoped>

</style>