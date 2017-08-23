<template>
  <section class="mine">
    <section class="mine-bgcolor">
      <section class="header">生活搜索</section>
      <section class="logn">
        <section class="logned">
            <img src="../assets/main/pig.png" alt="">
            <p v-cloak>北京天气：{{weatherNow.cond.txt}}--{{weatherNow.wind.sc}}</p>
            <p v-cloak>{{weatherSuggest.comf.txt}}</p>
        </section>
      </section>
    </section>
    <section class="my_zoom">
      <router-link to="/">
        <section class="middle mbord">
          <img src="../assets/main/pig.png" alt="">
          <p>菜谱大全</p>
        </section>
      </router-link>
      <!-- 订单与福利 -->
      <router-link to="/">
        <section class="mbord">
          <img src="../assets/main/3.png" alt="">
          <p>笑话板块</p>
        </section>
      </router-link>
      <div style="clear: both"></div>
    </section>
    <section class="my_zoom">
      <!-- 俱乐部 -->
      <router-link to="/">
        <section class="middle">
          <img src="./../assets/main/pig.png" alt="">
          <p>俱乐部</p>
        </section>
      </router-link>
      <!-- 我的收藏 -->
      <router-link to="/">
        <section>
          <img src="./../assets/mine/icon/myAtt.png" alt="">
          <p>我的关注</p>
        </section>
      </router-link>
      <div style="clear: both"></div>
    </section>
    <!-- 我的关注 -->
    <router-link to="/">
      <section class="content mid">
        <section>
          <img src="../assets/mine/icon/myCollect.png">
          <span>关于Jason</span>
        </section>
        <section>
          <img src="../assets/main/right.png" alt="">
        </section>
        <div style="clear: both"></div>
      </section>
    </router-link>
    <!-- 建议与反馈 -->
    <!-- <router-link to="/mine/mySuggest">
      <section class="content">
        <section>
          <img src="../assets/main/2.png">
          <span>建议与反馈</span>
        </section>
        <section>
          <img src="../assets/main/right.png" alt="">
        </section>
        <div style="clear: both"></div>
      </section>
    </router-link> -->
    <!-- 推荐给好友 -->
    <!-- <router-link to="/mine/appRecommend">
      <section class="content">
        <section>
          <img src="../assets/main/fen.png">
          <span>推荐给好友</span>
        </section>
        <section>
          <img src="../assets/main/right.png" alt="">
        </section>
        <div style="clear: both"></div>
      </section>
    </router-link> -->
    <!-- 常见问题 -->
    <!-- <router-link to="/mine/myFaq">
      <section class="content">
        <section>
          <img src="../assets/main/1.png">
          <span>常见问题</span>
        </section>
        <section>
          <img src="../assets/main/right.png" alt="">
        </section>
        <div style="clear: both"></div>
      </section>
    </router-link>
    <router-link to="/mine/aboutUs">
      <section class="content">
        <section>
          <img src="../assets/main/about.png">
          <span>关于我们</span>
        </section>
        <section>
          <img src="../assets/main/right.png" alt="">
        </section>
        <div style="clear: both"></div>
      </section>
    </router-link> -->
  </section>
</template>

<script>
import api from './../axios/api.js';

export default {
  name: 'Mine',
  data() {
    return {
      weatherNow: {
        cond: {},
        wind: {}
      },
      weatherSuggest: {
        comf: {
          txt: ''
        }
      }
    }
  },
  created() {
    api.JB_Api('https://way.jd.com/he/freeweather', {
      city: "beijing",
      appkey: "636228d4a874bbf00c727a6aa4d3900b"
    })
    .then( res => {
      console.log(res);
      this.weatherNow = res.result.HeWeather5[0].now;
      this.weatherSuggest = res.result.HeWeather5[0].suggestion;
    })
  },
  methods: {
  }
}
</script>
<style scoped>
[v-cloak] {
  display: none !important;
}
.mine {
  width: 100%;
  height: 100%;
  padding-bottom: 1rem;
}

.mine-bgcolor {
  background: -webkit-linear-gradient(#95AEDA, #0071BC);
}

.header {
  width: 100%;
  padding-top: 0.66rem;
  text-align: center;
  font-size: 0.36rem;
  color: #FFFFFF;
}

.logn {
  width: 100%;
  text-align: center;
  position: relative;
}

.logn div {
  font: 0.5rem/5rem 'Microsoft YaHei';
  color: #fff;
}

.logned img {
  margin-top: 1.32rem;
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
}

.logned p:nth-of-type(1) {
  font-size: 0.32rem;
  color: #FFFFFF;
  margin: 0.06rem 0;
}

.logned p:nth-of-type(2) {
  font-size: 0.24rem;
  color: #FFFFFF;
  padding-bottom: 1.64rem;
}

.forlogn {
  padding-bottom: 2.4rem;
}

.forlogn p {
  cursor: pointer;
  font-size: 0.32rem;
  color: #0071BC;
  line-height: 0.8rem;
  width: 3.8rem;
  background: #FFFFFF;
  border-radius: 2rem;
  margin: 2.1rem auto 0;
}

.my_zoom section {
  width: 49.8%;
  float: left;
  text-align: center;
  background-color: white;
}

.my_zoom .router-link-active {
  background-color: #F8F8F8;
  border-radius: 0.08rem;
}

.my_zoom .middle {
  border-right: 1px solid rgba(245, 245, 245, 0.8);
}

.my_zoom .mbord {
  border-bottom: 1px solid rgba(245, 245, 245, 0.8)
}

.my_zoom section img {
  width: 0.6rem;
  height: 0.56rem;
  margin: 0.66rem auto 0.28rem;
}

.my_zoom section p {
  margin-bottom: 0.5rem;
  font-size: 0.28rem;
  color: #666666;
}

.mid {
  border-bottom: 1px solid rgba(245, 245, 245, 0.8);
  margin-top: 0.2rem;
}

.mid2 {
  border-bottom: 1px solid rgba(245, 245, 245, 0.8);
  margin-top: 0.32rem;
}

.mid3 {
  border-bottom: 1px solid rgba(245, 245, 245, 0.8);
}

.content {
  width: 100%;
  background-color: white;
}

.content section:nth-of-type(1) {
  float: left;
}

.content section:nth-of-type(1) img {
  width: 0.36rem;
  height: 0.38rem;
  margin: 0.22rem 0.2rem 0.28rem 0.36rem;
}

.content section:nth-of-type(2) {
  width: 0.14rem;
  height: 0.28rem;
  float: right;
  margin: 0.3rem 0.32rem;
}

.content section:nth-of-type(2) img {
  width: 0.14rem;
  height: 0.28rem;
}

.content span {
  font-size: 0.28rem;
  color: #333333;
  line-height: 0.88rem;
}

.logout {
  background-color: white;
  width: 100%;
  font-size: 0.28rem;
  color: #0071BC;
  line-height: 0.88rem;
  text-align: center;
  padding-bottom: 0.96rem;
}

.exit {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 800;
  width: 100%;
  background-color: rgba(41, 61, 91, 0.8);
  height: 100%;
  color: #fff;
}

.exit section {
  width: 90.7%;
  background-color: white;
  margin: 4.6rem auto 0;
  border-radius: 0.3rem;
}

.exit section h3 {
  width: 100%;
  font-size: 0.36rem;
  line-height: 1.33rem;
  text-align: center;
  color: #333;
  border-bottom: 1px solid rgba(245, 245, 245, 1);
}

.exit section p {
  width: 49%;
  display: inline-block;
  font-size: 0.36rem;
  color: #0071B8;
  text-align: center;
  line-height: 1.33rem;
}

.exit section p.bord {
  border-right: 1px solid rgba(245, 245, 245, 1);
}

.exit section p.tActive {
  background-color: rgb(245, 245, 245);
  border-bottom-left-radius: 0.3rem;
}

.exit section p.lActive {
  background-color: rgb(245, 245, 245);
  border-bottom-right-radius: 0.3rem;
}
</style>
