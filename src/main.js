import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store/index'
//引入初始化样式
import '@/../public/static/css/reset.css'
//引入mock，因为没有暴露东西，所以就当引入css文件一样引入mock
import "@/mock/mockServer.js"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
