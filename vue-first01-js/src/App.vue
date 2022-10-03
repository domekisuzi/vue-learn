<script >
//声明式渲染，提高开发速率
  export  default {
    data(){
      return{
        name:0,
        uname:"张那是",
        msg: '<p>asd</p>',
        id:"idxx",
        url:"www.baidu.com"
      }
    },
    //定义方法
    methods:{
      changeUname:function (){
        this.uname = "..."
        console.log("123")

      },
    }
  }

import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

</script>

<template>
  <header>
  <p>{{uname}}</p>
    <p>{{name}}</p>
<!--    v-once使得值不能被动态修改-->
    <p v-once>{{uname}}</p>
    <button @click="changeUname">改名字</button>
    <p>{{msg}}</p>

<!--    v-html 使得html标签能被解析-->
    <p v-html="msg"></p>



<!--    v-bind 动态绑定属性-->
    <p v-bind:id="id"></p>
    <img v-bind:img:="url" alt="">
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
