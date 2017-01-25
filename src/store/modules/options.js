import * as types from '../mutation-types'

const state = {
  people: 1,
  hunger: 5,
  toppings: 2
}

const getters = {
  getPeopleOption: state => state.people,
  getHungerOption: state => state.hunger,
  getToppingOption: state => state.toppings
}

const mutations = {
  [types.SET_OPTION_HUNGER] (state, { hunger }) {
    state.hunger = hunger
  },

  [types.SET_OPTION_PEOPLE] (state, { people }) {
    state.people = people
  },

  [types.SET_OPTION_TOPPINGS] (state, { toppings }) {
    state.toppings = toppings
  }
}

export default {
  state,
  getters,
  mutations
}
