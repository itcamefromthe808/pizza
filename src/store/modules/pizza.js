import * as types from '../mutation-types'

const state = {
  pizza: null,
  menu: []
}

// getters
const getters = {
  getPizza: state => state.pizza
}

// mutations
const mutations = {
  [types.RECEIVE_MENU] (state, { menu }) {
    state.menu = menu
    console.log(menu)
  }
}

export default {
  state,
  getters,
  mutations
}
