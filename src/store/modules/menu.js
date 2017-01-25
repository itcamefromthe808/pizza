import * as types from '../mutation-types'

const state = {
  menu:[]
}

// local utilities
const getValidEntries = (list) => {
      return Object.getOwnPropertyNames(list).reduce((acc,val) => {
        if (list[val].Code && (/[A-Z0-9]+/).test(list[val].Code)) acc.push(list[val])
        return acc
      },[])
    },

    getValidSauces = (list) => {
      return Object.getOwnPropertyNames(list).reduce((acc,val) => {
        if (list[val].Code && (/[A-Z0-9]+/).test(list[val].Code) && list[val].Tags.Sauce) acc.push(list[val])
        return acc
      },[])
    },

    getValidCheeses = (list) => {
      return Object.getOwnPropertyNames(list).reduce((acc,val) => {
        if (list[val].Code && (/[A-Z0-9]+/).test(list[val].Code) && list[val].Tags.Cheese) acc.push(list[val])
        return acc
      },[])
    },

    getValidToppings = (list) => {
      return Object.getOwnPropertyNames(list).reduce((acc,val) => {
        if (list[val].Code && (/[A-Z0-9]+/).test(list[val].Code) && !list[val].Tags.Sauce && !list[val].Tags.Cheese) acc.push(list[val])
        return acc
      },[])
    }

const getters = {
  pickCrust: state => {
    const crusts = getValidEntries(state.menu.Flavors.Pizza)
    return crusts[Math.floor(Math.random() * crusts.length)]
  },
  pickCheese: state => {
    const cheeses = getValidCheeses(state.menu.Toppings.Pizza)
    return cheeses[Math.floor(Math.random() * cheeses.length)]
  },
  pickSauce: state => {
    const sauces = getValidSauces(state.menu.Toppings.Pizza)
    return sauces[Math.floor(Math.random() * sauces.length)]
  },
  pickTopping: state => {
    const toppings = getValidToppings(menu.Toppings.Pizza)
    return toppings[Math.floor(Math.random() * toppings.length)]
  }
}

const mutations = {
  [types.RECEIVE_MENU] (state, { menu }) => state.menu = menu
}

export default {
  state,
  getters,
  mutations,
  modules: {
    options
  }
}
