import Vue from 'vue'
import App from './App.vue'
import $ from 'jquery'
import router from './router.js'
import 'weui'
Vue.config.productionTip = false
Vue.prototype.$ = $
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
