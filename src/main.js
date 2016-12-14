import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
//跳转其他页面链接，使用router
import VueRouter from 'vue-router'
import MainPage from './components/mainPage.vue'

Vue.use(ElementUI)
Vue.use(VueRouter)

const routes = [ //定义路由
  { path: '/',component: App},
  { path: '/mainPage', component: MainPage }
]

const router = new VueRouter({//创建路由实例
  routes
})

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
