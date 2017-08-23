import axios from 'axios'
import vue from 'vue'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求拦截器
axios.interceptors.request.use(function(config) {
    return config;
  }, function(error) {
    return Promise.reject(error);
  })
  // 响应拦截器
axios.interceptors.response.use(function(response) {
  return response
}, function(error) {
  return Promise.reject(error)
})

// jsonBird v1 接口
let JsonBird = 'https://bird.ioliu.cn/v1/?url=';
// 聚合数据
let JH_NewsURL = 'http://v.juhe.cn/toutiao/index';
// 聚合数据appkey
let AppKey = '614ed485a3451db8d8cc9d771080231c';

// 封装axios的post请求
export function fetch(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default {
  // 聚合数据 新闻 接口
  JH_NewsApi(params) {
      let url = JsonBird + JH_NewsURL;
      params = params + '&key=' + AppKey;
      return fetch(url, params);
    },
    // jsonBird 消化接口
    JB_Api(url, params) {
      url = JsonBird + url;
      return fetch(url, params);
    }
}