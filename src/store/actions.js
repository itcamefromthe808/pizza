import * as types from './mutation-types'
import pizza from '../api/pizza'

export const setZip = ({commit}, zip) => {
  pizza.findStore(
    zip,
    (stores) => {
      commit(types.RECEIVE_RESTAURANTS, { stores })
    },
    () => {
      console.log('zip failure')
      commit(types.CLEAR_RESTAURANTS)
    }
  )
}

export const selectRestaurant = (store, StoreID) => {
  pizza.getMenu(
    StoreID,
    (menu) => {
      store.commit(types.RECEIVE_MENU, { menu })
      store.dispatch('buildOrder')
    },
    () => {
      console.log('menu failure')
    }
  )
}


export const setHungerOption = ({commit}, e) => {
  commit(types.SET_OPTION_HUNGER, { hunger: e.target.value })
}

export const setPeopleOption = ({commit}, e) => {
  commit(types.SET_OPTION_PEOPLE, { people: e.target.value })
}

export const setToppingOption = ({commit}, e) => {
  commit(types.SET_OPTION_TOPPINGS, { toppings: e.target.value })
}
