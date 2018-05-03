import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import axios from 'axios'

import '../static/css/style.css'
import '../static/css/swiper-3.4.2.min.css'


Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
