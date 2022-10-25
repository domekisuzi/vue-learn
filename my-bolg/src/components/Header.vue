<!-- made by domekisuzi @2022/10/21  头部组件，包括了头部-->
<template>

  <div class="my-header">
    <router-link class="header-img" to='about'>
      <el-avatar src="src/assets/domekisuzi-nobackground.png" size="default"></el-avatar>
      <p>domekisuzi的个人博客</p>
    </router-link>
    <div class="header-title">
      <ul>
        <router-link to="/home"><li>我的笔记</li></router-link>
        <router-link to="about"><li>个人简介</li></router-link>
        <li>大数据部</li>
        <li>my-life</li>
        <li>收藏</li>
        <li><a href="https://github.com/domekisuzi" title="GitHub" target="_blank" rel="noreferrer noopener"  ><i style="font-size:24px;" ><!--[--><svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" data-v-6c8d2bba=""><path fill=" rgba(255, 255, 255, 0.46)" d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.338 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.688c-.1-.25-.45-1.275.1-2.65c0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337c1.912-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"></path></svg><!--]--></i></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
</script>


<style scoped>
/*浅灰色  rgb(153, 153, 153)*/


/*让其贴住上部*/
/*记得加个薄片！*/
.my-header{
  /*position: fixed;*/
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  /*background-color:rgb(63, 63, 63);*/
}
.header-img {
  width:250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-img p{
  color: rgba(255, 255, 255, 0.46);
}

.header-title{
  display: flex;
  justify-content: center;
  align-items: center;

}

.header-title ul{
  display: flex;
  align-items: center;
  height: 50px;

}

.header-title ul li{
  margin-left: 50px;
  color:  rgba(255, 255, 255, 0.46);
  cursor: pointer;
}

/*刚好充满整个平米*/
img{
  display: block;
  width: 100%;
  height: 577.333px;
}



</style>
