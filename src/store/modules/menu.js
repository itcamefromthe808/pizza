import * as types from '../mutation-types'

const state = {
  raw:[],
  sizes:[],
  meats:[],
  veggies:[],
  nonmeats:[],
  cheeses:[],
  sauces:[]
}

/*
Flavors->Pizza = list of crust types
Sizes->Pizza = Sizes
Toppings->Pizza = Toppings
CookingInstructions = Cooking Instructions
CookingInstructionGroups = Groups for the above

pizza object format
{
  size:{},
  crust:{},
  toppings:[]
}
*/

// local utilities
const getValidEntries = (menu) => {
      return Object.getOwnPropertyNames(menu).reduce((acc,val) => {
        if (menu[val].Code && (/[A-Z0-9]+/).test(menu[val].Code)) acc.push(menu[val])
        return acc
      },[])
    },

    getValidSizes = (menu) => {
      let sizes = getValidEntries(menu),
          SizeObj = sizes.reduce( (acc, cur, i) => {
            acc[cur.Code] = cur
            return acc
          }, {})

      return SizeObj
    },

    getValidSauces = (menu) => {
      return Object.getOwnPropertyNames(menu).reduce((acc,val) => {
        if (menu[val].Code && (/[A-Z0-9]+/).test(menu[val].Code) && menu[val].Tags.Sauce) acc.push(menu[val])
        return acc
      },[])
    },

    getValidCheeses = (menu) => {
      return Object.getOwnPropertyNames(menu).reduce((acc,val) => {
        if (menu[val].Code && (/[A-Z0-9]+/).test(menu[val].Code) && menu[val].Tags.Cheese) acc.push(menu[val])
        return acc
      },[])
    },

    getValidMeats = (menu) => {
      return Object.getOwnPropertyNames(menu).reduce((acc,val) => {
        if (menu[val].Code && (/[A-Z0-9]+/).test(menu[val].Code) && menu[val].Tags.Meat && !menu[val].Tags.Sauce) acc.push(menu[val])
        return acc
      },[])
    },

    getValidVeggies = (menu) => {
      return Object.getOwnPropertyNames(menu).reduce((acc,val) => {
        if (menu[val].Code && (/[A-Z0-9]+/).test(menu[val].Code) && menu[val].Tags.Vege && !menu[val].Tags.Sauce) acc.push(menu[val])
        return acc
      },[])
    },

    getValidNonMeats = (menu) => {
      return Object.getOwnPropertyNames(menu).reduce((acc,val) => {
        if (menu[val].Code && (/[A-Z0-9]+/).test(menu[val].Code) && !menu[val].Tags.Meat && !menu[val].Tags.Sauce) acc.push(menu[val])
        return acc
      },[])
    }

const getters = {
  getSizes: state => state.sizes,
  getCrusts: state => state.crusts,
  getSauces: state => state.sauces,
  getCheeses: state => state.cheeses,
  getMeats: state => state.meats,
  getNonMeats: state => state.nonmeats,
  getVeggies: state => state.veggies
}

const mutations = {
  [types.RECEIVE_MENU] (state, { menu }) {
    state.raw = menu
    state.sizes = getValidSizes(menu.Sizes.Pizza)
    state.crusts = getValidEntries(menu.Flavors.Pizza)
    state.sauces = getValidSauces(menu.Toppings.Pizza)
    state.cheeses = getValidCheeses(menu.Toppings.Pizza)
    state.meats = getValidMeats(menu.Toppings.Pizza)
    state.veggies = getValidVeggies(menu.Toppings.Pizza)
    state.nonmeats = getValidNonMeats(menu.Toppings.Pizza)
  }
}

export default {
  state,
  getters,
  mutations
}
