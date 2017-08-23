// 组装模块并导出 store 的文件
import Vuex from 'vuex'
import Vue from 'vue'

import Class from './modules/class.js';

Vue.use(Vuex);
// 导出需要的模块
export default new Vuex.Store({
  modules: {
    Class
  },
});