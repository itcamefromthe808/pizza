import * as types from './mutation-types'
import pizza from '../api/pizza'

export const setZip = ({commit}, zip) => {
  pizza.findStore(
    zip,
    (storeList) => {
      commit(types.RECEIVE_RESTAURANTS, {stores:storeList} )
    },
    () => {
      console.log('request failure')
      commit(types.CLEAR_RESTAURANTS)
    }
  )
}
