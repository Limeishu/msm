import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        label: '首頁'
      }
    }
  ]
})
