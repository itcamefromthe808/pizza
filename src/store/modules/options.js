import * as types from '../mutation-types'

const state = {
  people: 1,
  hunger: 5,
  toppings: 2,
  noCheese: false,
  noDupes: false,
  veggieSlider: 50
}

const getters = {
  getPeopleOption: state => state.people,
  getHungerOption: state => state.hunger,
  getToppingOption: state => state.toppings,
  getCheeseOption: state => state.noCheese,
  getDupesOption: state => state.noDupes,
  getVeggieSlider: state => state.veggieSlider
}

const actions = {
  setHungerOption: ({commit}, e) => {
    commit(types.SET_OPTION_HUNGER, { hunger: e.target.value })
  },

  setPeopleOption: ({commit}, e) => {
    commit(types.SET_OPTION_PEOPLE, { people: e.target.value })
  },

  setToppingOption: ({commit}, e) => {
    commit(types.SET_OPTION_TOPPINGS, { toppings: e.target.value })
  },

  setCheeseOption: ({commit}, e) => {
    commit(types.SET_OPTION_CHEESE, { noCheese: e.target.checked })
  },

  setDupeOption: ({commit}, e) => {
    commit(types.SET_OPTION_DUPES, { noDupes: e.target.checked })
  },

  setVeggieSlider: ({commit}, e) => {
    commit(types.SET_OPTION_VEGGIE_SLIDER, { veggieSlider: e.target.value })
  }
}

const mutations = {
  [types.SET_OPTION_HUNGER] (state, { hunger }) {
    state.hunger = (hunger > 10)? 10 : (hunger < 1)? 1 : hunger
  },

  [types.SET_OPTION_PEOPLE] (state, { people }) {
    state.people = (people > 10)? 10 : (people < 1)? 1 : people
  },

  [types.SET_OPTION_TOPPINGS] (state, { toppings }) {
    state.toppings = (toppings > 10)? 10 : (toppings < 1)? 1 : toppings
  },

  [types.SET_OPTION_CHEESE] (state, { noCheese }) {
    state.noCheese = noCheese
  },

  [types.SET_OPTION_DUPES] (state, { noDupes }) {
    state.noDupes = noDupes
  },

  [types.SET_OPTION_VEGGIE_SLIDER] (state, { veggieSlider }) {
    state.veggieSlider = veggieSlider
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
