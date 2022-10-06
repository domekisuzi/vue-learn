<!--<script>-->
<!--//声明式渲染，提高开发速率-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      name: 0,-->
<!--      uname: "张那是",-->
<!--      msg: '<p>asd</p>',-->
<!--      id: "idxx",-->
<!--      url: "www.baidu.com",-->
<!--      attributeId: "id",-->
<!--    user:{-->
<!--      game:1,-->
<!--    }-->
<!--    ,-->
<!--      isActive:false,-->

<!--      objs:{-->
<!--        happy:true,-->
<!--        active: true-->
<!--      },-->
<!--      error:null,-->
<!--      age:19,-->
<!--      person:["1",2,4,5],-->
<!--    }-->

<!--  },-->
<!--  //定义方法-->
<!--  methods: {-->
<!--    changeUname: function () {-->
<!--      this.uname = "..."-->
<!--      console.log("123")-->

<!--    },-->
<!--  }-->
<!--  ,-->
<!--  // 放入计算属性,当作属性使用-->
<!--  //只要依赖值不变，就不会重新计算 （缓存），如果放在method里面则相当于方法，需要加括号，且会重复计算-->
<!--  computed:{-->
<!--    reverseMsg:function (){-->
<!--      return this.msg.split('').reverse().join('')-->
<!--    },-->
<!--  //  每一个计算属性，都会有一个get和set-->
<!--  //  完整写法，基本不会用,会在=时被掉用-->
<!--    reverseMsg1:{-->
<!--      //设置或者更改属性调用,一般是不会有set方法-->
<!--      set:function (newValue){-->
<!--        console.log(newValue)-->
<!--        this.msg = newValue-->
<!--      },-->
<!--      get:function (){-->
<!--        return this.msg.split('').reverse().join('')-->
<!--      }-->

<!--    },-->
<!--    objtest:function(){-->
<!--       return{-->
<!--         active:this.isActive && this.error,-->
<!--         hello: this.error-->
<!--       }-->
<!--    }-->
<!--  },-->
<!--  //监听数据的变化，每当数据变化就会调用-->
<!--  watch:{-->
<!--    // msg:function (newValue,oldValue) {-->
<!--    //     console.log(newValue,oldValue)-->
<!--    //   if(newValue.length<5 || newValue.length >10){-->
<!--    //     console.log("输入框内容不能小于5，大于10")-->
<!--    //   }-->
<!--    //   //执行异步操作，或者复杂逻辑代码-->
<!--    // },-->
<!--    msg:{-->
<!--      //初始化就调用-->
<!--      immediate:true,-->
<!--      handle:function (newValue ) {-->
<!--            console.log(newValue)-->
<!--          if(newValue.length<5 || newValue.length >10){-->
<!--            console.log("输入框内容不能小于5，大于10")-->
<!--          }-->
<!--          //执行异步操作，或者复杂逻辑代码-->
<!--        },-->
<!--    }-->
<!--    ,-->
<!--    // user:{-->
<!--    //   handle:function (){-->
<!--    //-->
<!--    //   },-->
<!--    //   //深度监听，是否监听这个对象及所有属性值-->
<!--    //   deep:true-->
<!--    // },-->
<!--    // //使用对象.属性的方式优化，不用深度监听-->
<!--    // "user.game":{-->
<!--    //   handle:function (){-->
<!--    //-->
<!--    //   },-->
<!--    // },-->


<!--  }-->
<!--}-->

<!--import HelloWorld from './components/HelloWorld.vue'-->
<!--import TheWelcome from './components/TheWelcome.vue'-->

<!--</script>-->

<!--<template>-->
<!--  <header>-->
<!--&lt;!&ndash;    <p>{{ uname }}</p>&ndash;&gt;-->
<!--&lt;!&ndash;    <p>{{ name }}</p>&ndash;&gt;-->
<!--&lt;!&ndash;    &lt;!&ndash;    v-once使得值不能被动态修改&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;    <p v-once>{{ uname }}</p>&ndash;&gt;-->
<!--&lt;!&ndash;    <button @click="changeUname">改名字</button>&ndash;&gt;-->
<!--&lt;!&ndash;    &lt;!&ndash;    可以通过直接赋予id改-javascript表达式&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;    <button @click="uname=1">改名字2</button>&ndash;&gt;-->
<!--&lt;!&ndash;    <p>{{ msg }}</p>&ndash;&gt;-->

<!--&lt;!&ndash;    &lt;!&ndash;    v-html 使得html标签能被解析&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;    <p v-html="msg"></p>&ndash;&gt;-->


<!--&lt;!&ndash;    &lt;!&ndash;    v-bind 动态绑定属性&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;    <p v-bind:[attributeId]="id">zxcvb</p>&ndash;&gt;-->

<!--&lt;!&ndash;    <button @click="attributeId=hhh">&ndash;&gt;-->
<!--&lt;!&ndash;    </button>&ndash;&gt;-->
<!--&lt;!&ndash;    &lt;!&ndash;    语法糖；：= v-bind&ndash;&gt;&ndash;&gt;-->

<!--&lt;!&ndash;    <img v-bind:img:="url" alt="">&ndash;&gt;-->

<!--&lt;!&ndash;    &lt;!&ndash;    v-on监听 dom 事件 = @&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125"/>&ndash;&gt;-->

<!--&lt;!&ndash;    <div class="wrapper">&ndash;&gt;-->
<!--&lt;!&ndash;      <HelloWorld msg="You did it!"/>&ndash;&gt;-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->

<!--&lt;!&ndash;    <p>{{msg}}</p>&ndash;&gt;-->
<!--&lt;!&ndash;    <button @click="msg='你好'" >改变message</button>&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;    v-model 数据的双向绑定&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;    <input type="text" v-model="msg">&ndash;&gt;-->

<!--&lt;!&ndash;    <p class="active">hello</p>&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;    放置对象 p:class="{classname:boolean}"&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;    可以和静态class一起使用&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;    <p :class="{active:isActive,hello:isActive}">happy</p>&ndash;&gt;-->
<!--&lt;!&ndash;    <p :class="objs">Zxccz</p>&ndash;&gt;-->
<!--&lt;!&ndash;    <button @click="isActive=true">hh</button>&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;    如果类内容较多，可以放到一个obj中&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;    <p :class="objtest">qwe</p>&ndash;&gt;-->
<!--&lt;!&ndash;    style使用方法 ,也可以放在对象里&ndash;&gt;-->
<!--&lt;!&ndash;    <p :style="{color:'red'}">6666</p>&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;  v-if v-else 跟if else一样，else if&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;    <p v-if="age>18">成年人</p>&ndash;&gt;-->
<!--&lt;!&ndash;    <p v-else="age<=18">铜矿</p>&ndash;&gt;-->
<!--&lt;!&ndash;  v-show 始终保存在dom中,占用内存,且不能用在template中 v-if 控制dom的销毁与创建 &ndash;&gt;-->
<!--&lt;!&ndash;    v-for 把一个数组映射为一组元素  key:为列表项加入唯一的表示,默认应该为index,并且可以方便跟踪,减少渲染次数&ndash;&gt;-->
<!--&lt;!&ndash;    <ul>&ndash;&gt;-->
<!--&lt;!&ndash;      <li v-for="(item,index,key) in person" >&ndash;&gt;-->
<!--&lt;!&ndash;        {{item}}&ndash;&gt;{{index}}&ndash;&gt;{{key}}&ndash;&gt;-->
<!--&lt;!&ndash;      </li>&ndash;&gt;-->
<!--&lt;!&ndash;    </ul>&ndash;&gt;-->

<!--&lt;!&ndash;    传递参数+绑定事件 &ndash;&gt;-->
<!--  </header>-->

<!--  <main>-->
<!--    <TheWelcome/>-->
<!--  </main>-->
<!--</template>-->

<!--<style scoped>-->
<!--header {-->
<!--  line-height: 1.5;-->
<!--}-->

<!--.logo {-->
<!--  display: block;-->
<!--  margin: 0 auto 2rem;-->
<!--}-->

<!--@media (min-width: 1024px) {-->
<!--  header {-->
<!--    display: flex;-->
<!--    place-items: center;-->
<!--    padding-right: calc(var(&#45;&#45;section-gap) / 2);-->
<!--  }-->

<!--  .logo {-->
<!--    margin: 0 2rem 0 0;-->
<!--  }-->

<!--  header .wrapper {-->
<!--    display: flex;-->
<!--    place-items: flex-start;-->
<!--    flex-wrap: wrap;-->
<!--  }-->

<!-- p  [hhh='id'] {-->
<!--    font-size: 100px;-->

<!--  }-->
<!--}-->
<!-- /*.active{*/-->
<!-- /*  font-size: 30px;*/-->
<!-- /*  color: red;*/-->
<!-- /*}*/-->
<!-- /*.hello{*/-->
<!-- /*  background: gold;*/-->
<!-- /*}*/-->
<!--</style>-->


<template>

  <div>
    <h1>hello app</h1>
    <p>
      <router-link to="/home">home</router-link>
      <br>
      <router-link to="/about">about</router-link>
      <br>
      <router-link to="/user/123">user</router-link>
    </p>

    <router-view>
    </router-view>
  </div>


  <!--  <div id="app">-->
  <!--  </div>-->
</template>

<style>

</style>