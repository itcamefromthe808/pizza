import * as types from '../mutation-types'
import options from './options'
import menu from './menu'

const state = {
  pizzas: [],
  options: options,
  menu: menu
}

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
const assessHunger = (store) => {
  let people = store.getters.getPeopleOption,
      hunger = store.getters.getHungerOption,
      totalHunger = hunger * people,
      pieSize = 10,
      numPies = 1,
      idealPies = Math.floor(Math.log( people )/Math.log( mathings.pieScalingFactor ) + 1)
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
    size: store.getters.getSizes[pieSize],
    quantity: numPies
  }
}


// getters
// move this to menu.js
const getters = {
  getPizzaShortDescriptions: state => {
    return state.pizzas.map( (pie) => {
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
  buildOrder: (store) => {
    let pizzaPies = assessHunger(store),
        crusts = store.getters.getCrusts,
        sauces = store.getters.getSauces,
        cheeses = store.getters.getCheeses,
        numToppings = store.getters.getToppingOption,
        toppings = store.getters.getToppings,
        pizzas = []

    for (let p=1; p<=pizzaPies.quantity; p++) {
      // pick one sauce and one cheese (there's only one anyway)
      let pizzaToppings = [
        sauces[Math.floor(Math.random() * sauces.length)],
        cheeses[Math.floor(Math.random() * cheeses.length)]
      ]

      for (let t=1; t<=numToppings; t++) {
        pizzaToppings.push(toppings[Math.floor(Math.random() * toppings.length)])
      }

      pizzas.push({
        crust:crusts[Math.floor(Math.random() * crusts.length)],
        size:pizzaPies.size,
        toppings:pizzaToppings
      })
    }

    store.commit(types.SET_PIZZA_LIST, {pizzas})
  }
}

const mutations = {
  [types.SET_PIZZA_LIST] (state, {pizzas}) {
    state.pizzas = pizzas
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
  modules: {
    options,
    menu
  }
}
