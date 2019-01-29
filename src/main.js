import Vue from 'vue'

import App from './App'
import router from './router'

Vue.config.devtools = true

const app = new Vue({
  router,
  ...App
})

export { app }
