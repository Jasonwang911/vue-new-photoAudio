<template>
  <div class="index">
    <div class="topNav">
      <ul class="simpleNav">
          <li 
          v-for="(item,index) in news.newsList" 
          :key="index" 
          class="simpleNavBar" 
          :class="navActive === index ? 'navActive' : '' "
          @click="getNewsList(index)">{{item}}</li>
        </ul>
    </div>
    <div class="placeholder"></div>
	  <div v-for="(item, key) in newsListShow">
	  	<news-cell
	  	:newsDate="item"
	  	:key="key"
	  	></news-cell>
	  </div>
  </div>
</template>

<script>
import api from './../axios/api.js'
import NewsCell from './../components/index/NewsCell.vue'

export default {
  name: 'index',
  data () {
    return {
    	news: {
    		newsList: ['头条', '社会', '国内', '国际', '娱乐', '体育', '军事', '科技', '财经', '时尚'],
        newsType: ['top', 'shehui', 'guonei', 'guoji', 'yule', 'tiyu', 'junshi', 'keji', 'caijing', 'shishang']
    	},
      newsList: [],
      newsListShow: [],
      navActive: 0,
      position: 0,
    }
  },
  components: {
  	NewsCell
  },
  created() {
    for(let i = 0; i < this.news.newsList.length; i++) {
      this.newsList = this.newsList.concat([])
    }
  	this.setNewsApi(0)
  	// api.JB_jokeApi('https://bird.ioliu.cn/joke/', {type: 'text', page: 1, pagesize: 10})
  	// .then( res => {
  	// 	console.log(res)
  	// })
  },
  methods:{
    getNewsList: function(index) {
      this.position = window.scrollY;
      this.navActive = index;
      this.setNewsApi(index)
    },
    setNewsApi: function(index) {
      api.JH_NewsApi('type=' + this.news.newsType[index])
      .then(res => {
        this.newsList[index] = res.result.data;
        this.newsListShow = this.newsList[index];
        this.jump(0)
        // window.scroll(0, 0)
      });
    },
    jump: function (total) {
      let distance = this.position;
      let step = Math.abs(distance) / 30;

      smoothUp();

      function smoothUp () {
        if (distance > total) {
          distance -= step
          document.body.scrollTop = distance
          document.documentElement.scrollTop = distance
          window.pageYOffset = distance
          setTimeout(smoothUp, 10)
        } else {
          document.body.scrollTop = total
          document.documentElement.scrollTop = total
          window.pageYOffset = total
        }
      } 
   },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topNav{
  width: 100%;
  background: #ED4040;
  position: fixed;
  top:0rem;
  left: 0;
  z-index: 10;
}
.simpleNav{
  width: 100%;
  line-height: 1rem;
  overflow: hidden;
  overflow-x: auto;
  text-align: center;
  font-size: 0;
  font-family: '微软雅黑';
  white-space: nowrap;
}
.simpleNav::-webkit-scrollbar{height:0px}
.simpleNavBar{
  display: inline-block;
  width: 1.2rem;
  color:#fff;
  font-size:0.3rem;
}
.navActive{
  color: #000;
  border-bottom: 0.05rem solid #000;
}
.placeholder{
  width:100%;
  height: 1rem;
}
</style>
