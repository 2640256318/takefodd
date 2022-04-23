import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入初始化样式
import '@/../public/static/css/reset.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
