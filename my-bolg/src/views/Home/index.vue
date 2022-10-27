<!-- made by domekisuzi
    @2022/10/21
-->
<template>

  <div class="body">
    <div class="img-title">
      <img src="../../assets/moon.jpg" alt="">
      <div class="header">
        <Header/>
      </div>
      <!--      <h1>世界上只有一种英雄主义<br>便是注视过生活的真面目后，依然热爱它<br>-罗曼罗兰《米开朗基罗传》</h1>-->
      <FontAppear class="note">
        <template v-slot:context>
          {{everyday_context}}
        </template>

        <template v-slot:author>
          {{everyday_author}}
        </template>
      </FontAppear>
    </div>
    <MyNote></MyNote>
    <Footer></Footer>
  </div>


</template>

<script setup>
import Header from '../../components/Header.vue'
import MyNote from '../../components/MyNote.vue'
import Footer from '../../components/Footer.vue'
import FontAppear from '../../components/FontAppear.vue'


// router.push('/about')
let everyday_context = ref('世界上只有一种英雄主义\n' +
    '便是注视过生活的真面目后\n依然热爱它\n'
)
let everyday_author = ref('-罗曼罗兰《米开朗基罗传》')
</script>

<style scoped>

.header{
  margin-top: -721.666px;
}
/*实现背景不会动 !! 关键技术*/
.body{
  background-image: url('../../assets/star.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

.img-title{
  position: relative;
  /*height: 577.333px;*/
  height: 721.666px;
}

/*记得加个薄片！*/
/*Footer {*/
/*  margin-top: -577.333px;*/
/*  !*position: fixed;*!*/
/*  width: 100%;*/
/*  height: 50px;*/
/*  display: flex;*/
/*  justify-content: space-between;*/
/*  background: linear-gradient(to right, rgba(255, 255, 255, 0.83) 1%, rgba(255, 255, 255, 0.83) 90%)  ;*/

/*  !*background-color:rgb(63, 63, 63);*!*/
/*}*/



/*刚好充满整个平米*/
img{
  display: block;
  width: 100%;
  height: 721.666px;
}
.note{
  margin-left: 35%;
}


</style>
