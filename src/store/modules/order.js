import * as types from '../mutation-types'
import options from './options'

const state = {
  order: [],
  options: options
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

const mathings = {
  hungerPerPie: {
    10: 6,
    12: 9,
    14: 11,
    16: 15
  },
  pieScalingFactor:2
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

    buildPizzas = (menu,state) => {
      const sizes = getValidEntries(menu.Sizes.Pizza)
      let totalHunger = state.options.hunger * state.options.people,
          pieSize = 10,
          numPies = 1,
          idealPies = Math.floor(Math.log(state.options.people) / Math.log(mathings.pieScalingFactor) + 1)

      /*
        ^^^^^^^^^^
        ideal is one pie per person, and scales logarithmically
        log(people) / log(scalingFactor)
      */

      for (let s in sizes) {
        // console.log('loop:',sizes[s].Code,' mathings:',mathings.hungerPerPie[sizes[s].Code],' hunger:',totalHunger)
        if (totalHunger / mathings.hungerPerPie[sizes[s].Code] < idealPies) {
          pieSize = sizes[s].Code
          break;
        }
      }

      numPies = Math.ceil(totalHunger / mathings.hungerPerPie[pieSize])

      // console.log('numPies:', numPies, ' sizeToUse:', pieSize)

      return {
        size: sizes.find((s) => s.Code == pieSize),
        quantity: numPies
      }
    },

    pickToppings = (menu,state) => {
      const toppings = getValidToppings(menu.Toppings.Pizza)
      const sauces = getValidSauces(menu.Toppings.Pizza)

      let list = [sauces[Math.floor(Math.random() * sauces.length)]]

      for (let i=0; i<state.options.toppings; i++) {
        list.push( toppings[Math.floor(Math.random() * toppings.length)] )
      }

      return list
    }


// getters
const getters = {
  getPizzaShortDescriptions: state => {
    return state.order.map( (pie) => {
      return {
        size: pie.size.Name? pie.size.Name : '' ,
        crust: pie.crust.Name? pie.crust.Name : '',
        toppings: pie.toppings.length? pie.toppings.map((t) => t.Name) : []
      }
    })
  }
}

// mutations
const mutations = {
  [types.RECEIVE_MENU] (state, { menu }) {
    let pizzaPies = buildPizzas(menu,state),
        newState = []

    for (let p=1; p<=pizzaPies.quantity; p++) {
      newState.push({
        crust:pickCrust(menu),
        size:pizzaPies.size,
        toppings:pickToppings(menu,state)
      })
    }

    state.order = newState
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
