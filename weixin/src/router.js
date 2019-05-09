import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from "./components/Home.vue";
const routes = [
    { path: '/', component: Home, name: 'home' },
    // // 设置默认重定向
    // { path: '/', redirect: '/home/wechat' }
]
// 实例化路由
const router = new VueRouter({
    routes
})
// 暴露路由
export default router

