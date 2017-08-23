<template>
  <div class="classMedia">
    <div class="mediaTop clearfix">
      <img class="fl" :src="data.logoSrc">
      <div class="fl">
        <p class="txt"><span class="className">{{data.name}}</span>{{data.testimonials}}</p>
      </div>
    </div>
    <div class="mediaBut">
      <video-player 
        class="video-player-box classVideo"
        ref="videoPlayer"
        :options="data.playerOptions"
        :playsinline="true"
        customEventName="customstatechangedeventname"
        
        @play="onPlayerPlay($event)"
        @pause="onPlayerPause($event)"
        @ended="onPlayerEnded($event)"
        @statechanged="playerStateChanged($event)"
        @ready="playerReadied">
      </video-player>
    </div>
  </div>
</template>

<script>
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

export default {
  name: 'classMedia',
  props: {
    data: Object,
  },
  data () {
    return {
    }
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    }
  },
  mounted() {
    console.log('this is current player instance object', this.player)
  },
  methods:{
    // listen event
      onPlayerPlay(player) {
        // this.$store.dispatch('AUDIO_PLAY', false);
        this.$emit('controlAudio');
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // this.$store.dispatch('AUDIO_PLAY', true);
        this.$emit('controlAudio');
        // console.log('player pause!', player)
      },
      onPlayerEnded(player){
        // this.$store.dispatch('AUDIO_PLAY', true);
        this.$emit('controlAudio');
      },

      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },

      // player is ready
      playerReadied(player) {
        console.log('the player is readied', player)
        // you can use it to do something...
        // player.[methods]
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.classMedia{
  width: 100%;
  height: 100%;
}
.mediaTop img{
  margin: 0 0.2rem 0.2rem 0.1rem;
  width: 15%;
}
.mediaTop .className {
  font-weight: bold;
  color: #000;
}
.mediaTop .txt {
  margin-right: 0.4rem;
  text-align: center;
  line-height: 0.4rem;
  font-size: 0.3rem;
}
.classMedia .video-js{
  width: 100%;
}
.video-js .vjs-big-play-button{
  left: 40%;
  top: 40%;
}
</style>
