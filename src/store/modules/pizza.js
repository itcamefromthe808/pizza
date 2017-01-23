import * as types from '../mutation-types'

const state = {
  pie: {
    size:{},
    crust:{},
    toppings:[]
  },
  options: {
    people: 0,
    hunger: 0,
    toppings: 3
  },
  menu: []
}

/*
Flavors->Pizza = list of crust types
Sizes->Pizza = Sizes
Toppings->Pizza = Toppings
CookingInstructions = Cooking Instructions
CookingInstructionGroups = Groups for the above
*/

// local utilities
let getValidEntries = function(list) {
      return Object.getOwnPropertyNames(list).reduce((acc,val) => {
        if (list[val].Code && (/[A-Z0-9]+/).test(list[val].Code)) acc.push(list[val])
        return acc
      },[])
    },

    pickCrust = function(menu) {
      const crusts = getValidEntries(menu.Flavors.Pizza)
      return crusts[Math.floor(Math.random() * crusts.length)]
    },

    pickSize = function(menu) {
      const sizes = getValidEntries(menu.Sizes.Pizza)
      return sizes[Math.floor(Math.random() * sizes.length)]
    },

    pickToppings = function(menu) {
      const toppings = getValidEntries(menu.Toppings.Pizza)
      let list = []

      for (let i=0; i<state.options.toppings; i++) {
        list.push( toppings[Math.floor(Math.random() * toppings.length)] )
      }

      return list
    }


// getters
const getters = {
  getPizzaShortDescription: state => {
    return {
      size: state.pie.size.Name? state.pie.size.Name : '' ,
      crust: state.pie.crust.Name? state.pie.crust.Name : '',
      toppings: state.pie.toppings.length? state.pie.toppings.map((t) => t.Name) : []
    }
  },

  getOptions: state => state.options
}

// mutations
const mutations = {
  [types.RECEIVE_MENU] (state, { menu }) {
    state.menu = menu
    state.pie = {
      crust:pickCrust(menu),
      size:pickSize(menu),
      toppings:pickToppings(menu)
    }
  },

  [types.SET_OPTIONS] (state, { options }) {
    state.options = options
  }
}

export default {
  state,
  getters,
  mutations
}
