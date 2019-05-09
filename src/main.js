import Vue from 'vue'
import App from './App.vue'
// 引入wui
import "weui"
// 引入路由对象
import router from './router.js'


Vue.config.productionTip = false

new Vue({
  el: "#app",
  // 挂载路由实例
  router,

  render: h => h(App),
}).$mount('#app')
