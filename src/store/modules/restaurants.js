import * as types from '../mutation-types'

const state = {
  restaurants: []
}

// getters
const getters = {
  allRestaurants: state => state.restaurants
}

// mutations
const mutations = {
  [types.RECEIVE_RESTAURANTS] (state, { stores }) {
    state.restaurants = stores
  },
  [types.CLEAR_RESTAURANTS] () {
    state.restaurants = []
  }
}

export default {
  state,
  getters,
  mutations
}
