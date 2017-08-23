import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'index',
		component: resolve => require(['./../view/index.vue'], resolve)
	}, {
		path: '/life',
		name: 'life',
		component: resolve => require(['./../view/life.vue'], resolve)
	}, {
		path: '/class',
		name: 'calss',
		component: resolve => require(['./../view/class.vue'], resolve)
	}]
})