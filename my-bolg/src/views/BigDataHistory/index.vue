<!-- made by domekisuzi @2022/10/27 -->

<template>
  <section id="cd-timeline" class="cd-container" ref="target">
    <div class="cd-timeline-block">
      <div class="cd-timeline-img cd-picture">
      </div>

      <div class="cd-timeline-content"  >
        <h2>大数据部创建</h2>
        <div class="timeline-content-info">
          <span class="timeline-content-info-title">
            <i class="fa fa-certificate" aria-hidden="true"></i>
           创建日期
          </span>
          <span class="timeline-content-info-date">
            <i class="fa fa-calendar-o" aria-hidden="true"></i>
           2022年6月20日
          </span>
        </div>
        <p>
          大数据部大概是这时候创建出来的吧（根据群创建的时间），当初大数据部的头er是这么说的：大一以比赛和项目为契机学大数据知识 大二是主力
          大三领头且支援研究生参与发表论文 大四帮助考研或就业 研究生专门负责发论文 所以各位只要想，我们都可以可以去钻研到本科生不该有的高度
        </p>
        <ul class="content-skills">
          <li>Hadoop</li>
          <li>Spark</li>
          <li>Java</li>
          <li>Linux</li>
          <li>机器学习</li>
          <li>深度学习</li>
        </ul>
      </div> <!-- cd-timeline-content -->
    </div> <!-- cd-timeline-block -->

    <div class="cd-timeline-block">
      <div class="cd-timeline-img cd-movie">
      </div> <!-- cd-timeline-img -->

      <div class="cd-timeline-content" >
        <h2>第一批新人入部</h2>
        <p>我们在暑假的时候开始了第一批招新与答辩，我们最终有一半的顺利的通过了考核并成为了大佬，并于暑假上来两个月后成为了新一批答辩官</p>
        <span class="cd-date">2022 7.1</span>
      </div> <!-- cd-timeline-content -->
    </div> <!-- cd-timeline-block -->

    <div class="cd-timeline-block">
      <div class="cd-timeline-img cd-picture">
      </div> <!-- cd-timeline-img -->

      <div class="cd-timeline-content" >
        <h2>第二批新人入部</h2>
        <p>我们的新一届面试官也参与了我们的招新，可喜可贺，我们的工作非常顺利，在22级某些新生的帮助下我们使得整个大数据将近一半的同学都开始报名参加学习</p>
        <span class="cd-date">2022 9.15</span>
      </div> <!-- cd-timeline-content -->
    </div> <!-- cd-timeline-block -->


    <div class="cd-timeline-block">
      <div class="cd-timeline-img cd-location">
      </div> <!-- cd-timeline-img -->
      <div class="cd-timeline-content" >
        <h2>第一次获奖？</h2>
        <p>大数据部的初代火影们组成的团队获得了互联网+省三等奖，emm其实这是在大数据部成立之前就在打的比赛，虽然不是非常大的成就但是我们还是小小的纪念以下吧。</p>
        <span class="cd-date">2022 10.28</span>
      </div> <!-- cd-timeline-content -->
    </div> <!-- cd-timeline-block -->

    <div class="cd-timeline-block">
      <div class="cd-timeline-img cd-location">
      </div>

      <div class="cd-timeline-content" >
        <h2>你们来叙说的故事</h2>
        <p>初代火影的时代就快要结束了，接下来是二代目火影还有将来的三代四代的故事了，这些故事里可能有获奖，招新，团建，或者是写下这些故事的人的私货（笑）...
        不管怎么说，是时候该你们去续写故事，创造奇迹了。
        </p>
        <span class="cd-date">future</span>
      </div> <!-- cd-timeline-content -->
    </div> <!-- cd-timeline-block -->

<!--    <div class="cd-timeline-block">-->
<!--      <div class="cd-timeline-img cd-movie">-->
<!--      </div> &lt;!&ndash; cd-timeline-img &ndash;&gt;-->

<!--      <div class="cd-timeline-content" >-->
<!--        <h2>Final Section</h2>-->
<!--        <p>This is the content of the last section</p>-->
<!--        <span class="cd-date">Feb 26</span>-->
<!--      </div> &lt;!&ndash; cd-timeline-content &ndash;&gt;-->
<!--    </div> &lt;!&ndash; cd-timeline-block &ndash;&gt;-->

  </section> <!-- cd-timeline -->
</template>

<script setup>
import {insertOperate} from "../../api/api.js";

insertOperate( store.name,"查看大数据部历史")
// import {useLazyData} from "../../hook/index.js";
// import  {useIntersectionObserver} from  '@vueuse/core'
// const target = ref(null)
 
//
// const showUp =
//     function (){
//       return true
//     }
// const  {result,target} = useLazyData(showUp)
// //这个组件貌似只适用于，是否有图片资源等 尝试加入移入动画！！
// const  {stop} = useIntersectionObserver(target,
//     ([{isIntersecting}] ) =>{
//       targetIsVisible.value = isIntersecting
//     }
// )


</script>

<style scoped>
.cd-container {
  width: 90%;
  max-width: 1080px;
  margin: 0 auto;
  background: #2B343A;
  padding: 0 10%;
  border-radius: 2px;
}

.cd-container::after {
  content: '';
  display: table;
  clear: both;
}

/* --------------------------------

Main components

-------------------------------- */

#cd-timeline {
  position: relative;
  padding: 2em 0;
  margin-top: 2em;
  margin-bottom: 2em;
}

#cd-timeline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 25px;
  height: 100%;
  width: 4px;
  background: #c9e705;
}

@media only screen and (min-width: 1170px) {
  #cd-timeline {
    margin-top: 3em;
    margin-bottom: 3em;
  }

  #cd-timeline::before {
    left: 50%;
    margin-left: -2px;
  }
}

.cd-timeline-block {
  position: relative;
  margin: 2em 0;
}

.cd-timeline-block:after {
  content: "";
  display: table;
  clear: both;
}

.cd-timeline-block:first-child {
  margin-top: 0;
}

.cd-timeline-block:last-child {
  margin-bottom: 0;
}

@media only screen and (min-width: 1170px) {
  .cd-timeline-block {
    margin: 4em 0;
  }

  .cd-timeline-block:first-child {
    margin-top: 0;
  }

  .cd-timeline-block:last-child {
    margin-bottom: 0;
  }
}

.cd-timeline-img {
  position: absolute;
  top: 8px;
  left: 12px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  box-shadow: 0 0 0 4px #c9e705, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
}

.cd-timeline-img {
  background: #c9e705;
}

@media only screen and (min-width: 1170px) {
  .cd-timeline-img {
    width: 30px;
    height: 30px;
    left: 50%;
    margin-left: -15px;
    margin-top: 15px;
    /* Force Hardware Acceleration in WebKit */
    -webkit-transform: translateZ(0);
    -webkit-backface-visibility: hidden;
  }
}

.cd-timeline-content {
  position: relative;
  margin-left: 60px;
  margin-right: 30px;
  background: #333C42;
  border-radius: 2px;
  padding: 1em;
}

.timeline-content-info {
  background: #2B343A;
  padding: 5px 10px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
  box-shadow: inset 0 2px 0 rgba(0, 0, 0, 0.08);
  border-radius: 2px;
}

i {
  margin-right: 5px;
}

.timeline-content-info-title, .timeline-content-info-date {
  width: calc(50% - 2px);
  display: inline-block;
}

@media (max-width: 500px) {
  .timeline-content-info-title, .timeline-content-info-date {
    display: block;
    width: 100%;
  }
}

.content-skills {
  font-size: 12px;
  padding: 0;
  margin-bottom: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

li {
  background: #40484D;
  border-radius: 2px;
  display: inline-block;
  padding: 2px 10px;
  color: rgba(255, 255, 255, 0.7);
  margin: 3px 2px;
  text-align: center;
  flex-grow: 1;
}


.cd-timeline-content:after {
  content: "";
  display: table;
  clear: both;
}

.cd-timeline-content h2 {
  color: rgba(255, 255, 255, .9);
  margin-top: 0;
  margin-bottom: 5px;
}

.cd-timeline-content p, .cd-timeline-content .cd-date {
  color: rgba(255, 255, 255, .7);
  font-size: 13px;
  font-size: 0.8125rem;
}

.cd-timeline-content .cd-date {
  display: inline-block;
}

.cd-timeline-content p {
  margin: 1em 0;
  line-height: 1.6;
}

.cd-timeline-content::before {
  content: '';
  position: absolute;
  top: 16px;
  right: 100%;
  height: 0;
  width: 0;
  border: 7px solid transparent;
  border-right: 7px solid #333C42;
}

@media only screen and (min-width: 768px) {
  .cd-timeline-content h2 {
    font-size: 20px;
    font-size: 1.25rem;
  }

  .cd-timeline-content p {
    font-size: 16px;
    font-size: 1rem;
  }

  .cd-timeline-content .cd-read-more, .cd-timeline-content .cd-date {
    font-size: 14px;
    font-size: 0.875rem;
  }
}

@media only screen and (min-width: 1170px) {
  .cd-timeline-content {
    color: white;
    margin-left: 0;
    padding: 1.6em;
    width: 36%;
    margin: 0 5%
  }

  .cd-timeline-content::before {
    top: 24px;
    left: 100%;
    border-color: transparent;
    border-left-color: #333C42;
  }

  .cd-timeline-content .cd-date {
    position: absolute;
    width: 100%;
    left: 122%;
    top: 6px;
    font-size: 16px;
    font-size: 1rem;
  }

  .cd-timeline-block:nth-child(even) .cd-timeline-content {
    float: right;
  }

  .cd-timeline-block:nth-child(even) .cd-timeline-content::before {
    top: 24px;
    left: auto;
    right: 100%;
    border-color: transparent;
    border-right-color: #333C42;
  }

  .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-read-more {
    float: right;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-date {
    left: auto;
    right: 122%;
    text-align: right;
  }
}
</style>
