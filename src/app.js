import Vue from 'vue'
import VeeValidate from 'vee-validate'

import App from './components/App.vue'

Vue.use(VeeValidate)

import store from './store/index.js'

new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
})
