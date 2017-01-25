import Vue from 'vue'
import Vuex from 'vuex'

import restaurants from './modules/restaurants'
import order from './modules/order'
import * as actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: actions,
  modules: {
    restaurants,
    order
  },
  data() {
    return {
      StoreID: null
    }
  }
})
