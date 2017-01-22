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

export const selectRestaurant = ({commit}, StoreID) => {
  pizza.getMenu(
    StoreID,
    (menu) => commit(types.RECEIVE_MENU, { menu }),
    () => {
      console.log('menu failure')
    }
  )
}
