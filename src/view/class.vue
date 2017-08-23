<template>
  <div class="schoolClass">
    <div class="clearfix logo">
      <h2 class="fl"><img src="./../assets/LOGO.png" alt="毕业十周年"></h2>
      <el-button class="fr audioType" type="primary" @click="handleAudioType()">{{audioType}}</el-button>
    </div>
    <section class="swiper-container BCindex_container">
      <section class="swiper-wrapper">
        <section class="swiper-slide" v-for="(item,key) in baseData">
          <a><img :src="item.IMG_URL"></a>
        </section>
      </section>
      <section class="swiper-pagination BCindex_page"></section>
    </section> 
    <div class="mediaPack">十年感言</div> 
    <ul>
      <li v-for="(data, index) in mediaData">
        <class-media :data="data" key="index" @controlAudio="handleAudioType"></class-media>
      </li>
    </ul>
  </div>
</template>

<script>
import Swiper from './../../static/swiper.min.js';
require('./../../static/swiper.min.css');
import { mapGetters } from 'vuex';

import ClassMedia from '@/components/class/ClassMedia';

export default {
  name: 'class',
  data () {
    return {
      oA: Object,
      audioType: '关闭背景音乐',
      baseData: [
      {IMG_URL: require('./../assets/picture/dongbaoxing.jpg')},
      {IMG_URL: require('./../assets/picture/pashan.jpg')}
      ],
      mediaData: [
        {
          name: '胡晨光（老胡）',
          logoSrc: require('./../assets/picture/media/headLogo/huchenguang.jpg'),
          testimonials: '怀念从前，回不去的从前',
          playerOptions: {
            // videojs options
            muted: false,
            language: 'en',
            playbackRates: [0.7, 1.0, 1.5, 2.0],
            sources: [{
              type: "video/mp4",
              src: require("./../../static/huchenguang.mp4")
            }],
            poster: require("./../assets/picture/media/headLogo/huchenguang.jpg"),
          },
        }
      ],
      swiper: Object
    }
  },
  computed: {
    ...mapGetters([
      'audioPlay',
    ]),
  },
  components: {
    ClassMedia
  },
  mounted() {
    // this.oA = null;
    this.oA = new Audio();
    this.oA.src = require('./../../static/bg_audio.mp3');
    this.oA.play();
    this.$store.dispatch('AUDIO_PLAY', true);
    

    this.swiper = new Swiper('.BCindex_container', {
      effect : 'coverflow',
      centeredSlides: true,
      coverflow: {
        rotate: 30,
        stretch: 10,
        depth: 60,
        modifier: 2,
        slideShadows : true
      },
      pagination: '.BCindex_page',
      loop: true,
      autoplay: 3000,
      observer: true,
      observeParents: true
    });
  },
  distroyed () {
    this.oA.pause();
    this.$store.dispatch('AUDIO_PLAY', false);
  },
  methods: {
    handleAudioType: function () {
      if (this.audioPlay) {
        this.audioType = '开启背景音乐';
        this.oA.pause();
        this.$store.dispatch('AUDIO_PLAY', false);
      } else {
        this.audioType = '关闭背景音乐';
        this.oA.play();
        this.$store.dispatch('AUDIO_PLAY', true);
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.schoolClass{
  width: 100%;
}
.logo{
  width: 100%;
  background:url(./../assets/nav_bd.png);
}
.schoolClass h2{
  width: 50%;
  padding:0.2rem 0.2rem;  
}

.schoolClass h2 img{
  width: 100%;
  margin: 0 auto;
}
.audioType{
  margin: 0.4rem 3% 0 0;
}
.BCindex_container .swiper-list {
  width: 100%;
}

.BCindex_container .swiper-slide img {
  width: 100%;
  height: 4.5rem;
}

.BCindex_container {
  width: 100%;
}

.BCindex_container .swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.mediaPack{
  width: 95%;
  padding-left: 5%;
  line-height: 0.8rem;
  color: #000;
  font-size: 0.4rem;
}
</style>
