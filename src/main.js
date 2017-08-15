import Vue from 'vue'
import App from './App'
import store from '@/store'
import router from './router'

import aceCss from 'ace-css/css/ace.min.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  aceCss,
  store,
  router,
  render: h => h(App)
})
