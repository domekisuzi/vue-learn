<!-- made by domekisuzi @2022/11/6 比较失败的组件，最后完全被message box代替了-->

<template>

  <el-dialog v-model="dialogTableVisible" align-center title="请选择你要查看的名字">
    <el-input v-model="input" placeholder="name" clearable />
  </el-dialog>
</template>

<script setup>

const input = ref('')

// 使用model进行双向绑定，达到父传子的效果
const props = defineProps(
    {
      dialogTableVisible: {
        type:Boolean,
        default:false
      }
    }
 )

const  emit = defineEmits(['update:num'])
const  btn =  () =>{
  emit('update:num',200)
}

</script>

<style scoped>

</style>