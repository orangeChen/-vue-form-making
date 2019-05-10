import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'


import 'element-ui/lib/theme-chalk/index.css'

// import 'form-making/dist/FormMaking.css'
// import FormMaking from 'form-making'
import FormMaking from './index'
Vue.use(FormMaking)

Vue.config.productionTip = false

Vue.use(ElementUI, { size: 'small' })

window.userInfo = {
  id:"f5f49ee557cbf21a0157cc264fb2000d",
  token:"cd37eb1b-6446-4eb4-a5e6-b4cf9525416c",
  userName:'dszxlb',
  deviceId:'4e632bc10f2a4eb2914a03466d4e48f5'
}

import axios from 'axios'

/**
 *
 * http拦截
 *
 */
window.http = axios;

// 请求拦截器
axios.interceptors.request.use(function (config) {
  if (!config.headers['Authorization']) {
    let localtoken = userInfo.token
    let loginNameCookie = userInfo.userName
    let deviceIdCookie = userInfo.deviceId

    if (localtoken){
      config.headers['Authorization'] = `Bearer ${localtoken}`
      config.headers["loginName"] = loginNameCookie;
      config.headers["deviceId"] = deviceIdCookie;
      config.headers["deviceType"] = "web";
    }
  }
  // 发送请求的信息
  return config
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
 
  return response
}, function (error) {
 
  return Promise.reject(error)
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
