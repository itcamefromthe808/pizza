import Vue from 'vue'
import Vuex from 'vuex'

import zip from './modules/zip'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    zip,
  }
})
