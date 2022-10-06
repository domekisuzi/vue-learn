<template>
  <div class="chart-wrapper"></div>
   <ptest :msg="water"></ptest>
    <p>love</p>
</template>

<script>
export default {
  name: "echarts",
  data(){
    return{
      water:"as",
    }
   },
  setup(){
    const chart = ref(null);

  }
  ,
  components:{
    ptest
  }
}
import echarts from "echarts"
import ptest from "./ptest"
import { onMounted, onBeforeUnmount, ref } from "vue";
</script>

<style scoped>

</style>