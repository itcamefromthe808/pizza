import * as types from './mutation-types'
import pizza from '../api/pizza'

export const setZip = ({ commit }, zip) => {
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

export const rebuildPizza = (store) => {
  store.dispatch('buildOrder')
}
