// require videojs style [and custom videojs theme]
// require('video.js/dist/video-js.css')
// require('vue-video-player/src/custom-theme.css')

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router'
import store from './store/index';
import rem from './config/rem'
import VueVideoPlayer from 'vue-video-player'

// element-ui
Vue.use(ElementUI)
	// mount with global
Vue.use(VueVideoPlayer)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: {
		App
	}
})

Vue.filter('getYMD', function(input) {
	return input.split(' ')[0];
})