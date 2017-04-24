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
  pieScalingFactor: 2
}

// helper utilities
const assessHunger = (store) => {
  // break this up
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
      break
    }
  }

  numPies = Math.ceil(totalHunger / mathings.hungerPerPie[pieSize])

  console.log('pieFactor:', totalHunger / mathings.hungerPerPie[pieSize])

  return {
    size: store.getters.getSizes[pieSize],
    quantity: numPies
  }
}

const selectCrust = (store) => {
  const crusts = store.getters.getCrusts
  return crusts[Math.floor(Math.random() * crusts.length)]
}

const selectCheese = (store) => {
  const cheeses = store.getters.getCheeses
  return cheeses[Math.floor(Math.random() * cheeses.length)]
}

const selectSauce = (store) => {
  const sauces = store.getters.getSauces
  return sauces[Math.floor(Math.random() * sauces.length)]
}

const selectToppings = (store) => {
  // break this up for real
  let toppings = [],
      cheeseOption = store.getters.getCheeseOption,
      toppingOption = cheeseOption? store.getters.getToppingOption + 1 : store.getters.getToppingOption,
      dupeOption = store.getters.getDupesOption,
      veggieSlider = store.getters.getVeggieSlider,

      meats = [...store.getters.getMeats],
      nonmeats = cheeseOption? [...store.getters.getNonMeats.filter((nm) => !(/(cheese|parmesan)/i).test(nm.Name))] : [...store.getters.getNonMeats]

  for (let t=1; t<=toppingOption; t++) {
    // pull meat or veggie based on preferences
    let topping_factor = Math.floor(100 * Math.random()),
        topping_to_add = (topping_factor < veggieSlider) ? nonmeats : meats,
        idx = Math.floor(topping_to_add.length * Math.random())

    // add to list
    toppings.push(topping_to_add[idx])

    // remove item if dupes are not desired
    if (dupeOption) topping_to_add.splice(idx,1)

    console.log(toppings.length, meats.length, nonmeats.length, (topping_factor < veggieSlider));
  }

  return toppings
}

// getters
// move this to menu.js
const getters = {
  getPizzaShortDescriptions: state => {
    return state.pizzas.map((pie) => {
      return {
        size: pie.size.Name ? pie.size.Name : '',
        crust: pie.crust.Name ? pie.crust.Name : '',
        toppings: pie.toppings.length ? pie.toppings.map((t) => t.Name) : []
      }
    })
  }
}

// actions
const actions = {
  buildOrder: (store) => {
    const pizzaPies = assessHunger(store)
    const pizzas = []

    for (let p = 1; p <= pizzaPies.quantity; p++) {
      // pick sauce
      const pizzaToppings = [
        selectSauce(store)
      ]

      // check for optional cheese topping
      if (!store.getters.getCheeseOption) {
        pizzaToppings.push(selectCheese(store))
      }

      // add remaining random toppings
      pizzaToppings.push(...selectToppings(store))

      pizzas.push({
        crust: selectCrust(store),
        size: pizzaPies.size,
        toppings: pizzaToppings
      })
    }

    store.commit(types.SET_PIZZA_LIST, { pizzas })
  }
}

const mutations = {
  [types.SET_PIZZA_LIST] (state, { pizzas }) {
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
