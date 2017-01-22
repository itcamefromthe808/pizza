import Vue from 'vue'
import Vuex from 'vuex'

import restaurants from './modules/restaurants'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: actions,
  mutations: mutations,
  getters: getters,
  modules: {
    restaurants
  },
  data() {
    return {
      StoreID: null
    }
  }
})
