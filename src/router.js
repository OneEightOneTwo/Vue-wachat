import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//引入页面
//首页
import Home from './pages/Home.vue'

//定义路由
const routes = [
  { path: '/home', component: Home, name: 'home' },
  // 设置默认重定向
  { path: '/', redirect: '/home' }

]
// 实例化路由
const router = new VueRouter({
  routes
})


//暴露路由
export default router