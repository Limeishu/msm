import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import Landing from '@/view/Landing'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/2019/landing'
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        label: '首頁'
      }
    },
    {
      path: '/landing',
      name: 'Landing',
      component: Landing,
      meta: {
        label: 'Landing'
      }
    }
  ].map(routeRule => {
    routeRule.path = `/2019${routeRule.path}`
    return routeRule
  })
})

export default router
