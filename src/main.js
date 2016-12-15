import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/home.vue'
import MainPage from './components/mainPage.vue'
import Submit from './components/submit.vue'
import Yuecai from './components/yuecai.vue'
import Zhecai from './components/zhecai.vue'
import Chuan_sichuan from './components/chuancai/chuancai_sichuan.vue'
import Chuan_xiaochi from './components/chuancai/chuancai_xiaochi.vue'

import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)
Vue.use(VueRouter)

const routes = [ //定义路由
  { path: '/',component: Home},
  { path: '/home',component: Home},
  { path: '/mainPage', component: MainPage,
    children:[
      {path: '/', component: Submit},
      {path: 'submit', component: Submit},
      {path: 'yuecai', component: Yuecai},
      {path: 'zhecai', component: Zhecai},
      {path: 'Chuan_sichuan', component: Chuan_sichuan},
      {path: 'Chuan_xiaochi', component: Chuan_xiaochi}
    ]
  }
]

const router = new VueRouter({//创建路由实例
  routes
})

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
