import * as types from '../mutation-types'

const state = {
  size:{},
  crust:{},
  toppings:[]
}

// local utilities
const getValidEntries = (list) => {
      return Object.getOwnPropertyNames(list).reduce((acc,val) => {
        if (list[val].Code && (/[A-Z0-9]+/).test(list[val].Code)) acc.push(list[val])
        return acc
      },[])
    },
    getValidToppings = (list) => {
      return Object.getOwnPropertyNames(list).reduce((acc,val) => {
        if (list[val].Code && (/[A-Z0-9]+/).test(list[val].Code) && !list[val].Tags.Sauce) acc.push(list[val])
        return acc
      },[])
    },

    pickCrust = (menu) => {
      const crusts = getValidEntries(menu.Flavors.Pizza)
      return crusts[Math.floor(Math.random() * crusts.length)]
    },
    pickTopping = (menu) => {
      const toppings = getValidToppings(menu.Toppings.Pizza)
      const sauces = getValidSauces(menu.Toppings.Pizza)

      let list = [sauces[Math.floor(Math.random() * sauces.length)]]

      for (let i=0; i<state.options.toppings; i++) {
        list.push( toppings[Math.floor(Math.random() * toppings.length)] )
      }

      return list
    }

const getters = {
  getShortDescription: state => {
    return {
      size: state.size.Name? state.size.Name : '' ,
      crust: state.crust.Name? state.crust.Name : '',
      toppings: state.toppings.length? state.toppings.map((t) => t.Name) : []
    }
  }
}

const mutations = {
  [types.BUILD_PIZZA] (state, {menu}) {

  }
}

export default {
  state,
  getters,
  mutations,
  modules: {
    options
  }
}
