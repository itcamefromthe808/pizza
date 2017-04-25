import * as types from '../mutation-types'
import options from './options'
import menu from './menu'

const state = {
  pizzas: [],
  options: options,
  menu: menu
}

const hungerPerPie = [
  {
    size: 10,
    factor: 6
  },
  {
    size: 12,
    factor: 9
  },
  {
    size: 14,
    factor: 11
  },
  {
    size: 16,
    factor: 15
  }
]

const pieScalingFactor = 2

// helper utilities
const getIdealPies = (people) => {
  return Math.floor(Math.log(people) / Math.log(pieScalingFactor) + 1)
}

const getPieSize = (totalHunger, idealPies) => {
  let size = hungerPerPie[0]
  for (let i = 0; i < hungerPerPie.length; i++) {
    if (totalHunger / hungerPerPie[i].factor < idealPies) {
      size = hungerPerPie[i]
      break
    }
  }
  return size
}

const assessHunger = (store) => {
  const totalHunger = store.getters.getHungerOption * store.getters.getPeopleOption
  const pieSize = getPieSize(totalHunger, getIdealPies(store.getters.getPeopleOption))

  return {
    size: store.getters.getSizes[pieSize.size],
    quantity: Math.ceil(totalHunger / pieSize.factor)
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

const useVeggieTopping = (veggieSlider) => {
  return (Math.floor(100 * Math.random()) < veggieSlider)
}

const selectToppings = (store) => {
  const toppings = []
  const cheeseOption = store.getters.getCheeseOption
  const numToppings = cheeseOption ? store.getters.getToppingOption + 1 : store.getters.getToppingOption
  const dupeOption = store.getters.getDupesOption
  const veggieSlider = store.getters.getVeggieSlider
  const meats = [...store.getters.getMeats]
  const nonmeats = cheeseOption ? [...store.getters.getNonMeats.filter((nm) => !(/(cheese|parmesan)/i).test(nm.Name))] : [...store.getters.getNonMeats]

  for (let t = 1; t <= numToppings; t++) {
    // pull meat or veggie based on preferences
    const useVeggies = useVeggieTopping(veggieSlider)
    const toppingGroup = useVeggies ? nonmeats : meats
    const idx = Math.floor(toppingGroup.length * Math.random())
    const toppingToAdd = toppingGroup[idx]

    // add to list
    toppings.push(toppingToAdd)

    // remove item if dupes are not desired
    if (dupeOption) toppingGroup.splice(idx, 1)
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
