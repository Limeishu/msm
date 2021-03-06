import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import Active from '@/view/Active'
import Intro from '@/view/Intro'
import Exhibition from '@/view/Exhibition'
import Landing from '@/view/Landing'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        label: '首頁',
        type: 'main',
        index: 0
      }
    },
    {
      path: '/intro',
      name: 'Intro',
      component: Intro,
      meta: {
        label: '展覽緣起',
        type: 'main',
        index: 1
      }
    },
    {
      path: '/active',
      name: 'Active',
      component: Active,
      meta: {
        label: '活動列表',
        type: 'main',
        index: 2
      }
    },
    {
      path: '/exhibition',
      name: 'Exhibition',
      component: Exhibition,
      meta: {
        label: '展覽資訊',
        type: 'main',
        index: 3
      }
    },
    {
      path: '/landing',
      name: 'Landing',
      component: Landing,
      meta: {
        label: 'Landing',
        type: 'self'
      }
    }
  ].map(routeRule => {
    routeRule.path = `/2019${routeRule.path}`
    return routeRule
  }),
  scrollBehavior (to, from) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    } else if (!((from.name === 'Agenda' && to.name === 'AgendaPopup') || (from.name === 'AgendaPopup' && to.name === 'Agenda'))) {
      return {
        x: 0,
        y: 0
      }
    }
  }
})

export default router
