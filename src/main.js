import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// 引入字体图标
import '@/assets/font/iconfont.css'
import '@/assets/css/global.less'
import SocketService from "@/utils/socket_service";
SocketService.Instance.connect()

Vue.config.productionTip = false
// 将全局echarts对象挂载到Vue的原型对象上
Vue.prototype.$echarts = window.echarts
axios.defaults.baseURL = "http://127.0.0.1:8888/api/";
// 将axios挂载到Vue的原型对象上
Vue.prototype.$socket = SocketService.Instance;
Vue.prototype.$http = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
