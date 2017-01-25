import * as types from '../mutation-types'
import options from './options'
import menu from './menu'

const state = {
  order: [],
  options: options,
  menu: menu
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
const buildPizzas = (mstate) => {
  let totalHunger = state.options.hunger * state.options.people,
      pieSize = 10,
      numPies = 1,
      idealPies = Math.floor(Math.log(state.options.people) / Math.log(mathings.pieScalingFactor) + 1)
      /*
        ^^^^^^^^^^
        ideal is one pie per person, and scales logarithmically
        log(people) / log(scalingFactor)
      */

  for (let s in mathings.hungerPerPie) {
    // console.log('loop:',sizes[s].Code,' mathings:',mathings.hungerPerPie[sizes[s].Code],' hunger:',totalHunger)
    if (totalHunger / mathings.hungerPerPie[s] < idealPies) {
      pieSize = s
      break;
    }
  }

  numPies = Math.ceil(totalHunger / mathings.hungerPerPie[pieSize])

  console.log('pieFactor:', totalHunger / mathings.hungerPerPie[pieSize])

  return {
    size: sizes.find((s) => s.Code == pieSize),
    quantity: numPies
  }
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

// actions
const actions = {
  buildOrder: (state, { menu }) => {
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
  actions,
  modules: {
    options,
    menu
  }
}
