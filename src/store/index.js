import Vue from 'vue'
import Vuex from 'vuex'

import restaurants from './modules/restaurants'
import pizza from './modules/pizza'
import * as actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: actions,
  modules: {
    restaurants,
    pizza
  },
  data() {
    return {
      StoreID: null
    }
  }
})
