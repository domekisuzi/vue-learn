<template>
  {{data}}
</template>

<script setup>
  import {login} from "../api/login.js";

  const data = ref('test')

 login().then((res)=>{
    data.value = res
  })

</script>