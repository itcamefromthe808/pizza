import pizza from 'dominos'

import storeData from '../assets/store-locator.json'
import menuData from '../assets/menu.json'

export default {
  findStore (zip, success, failure) {
    // query dominos api
    pizza.Util.findNearbyStores(
      zip,
      'Delivery',
      (payload) => {
        if (payload.success && payload.result.Stores.length) {
          success(payload.result.Stores)
        } else {
          // failure(payload)
          success(storeData.Stores)
        }
      }
    )
  },
  getMenu (StoreID, success, failure) {
    const myStore = new pizza.Store(StoreID)
    myStore.ID = StoreID
    myStore.getMenu(
      (payload) => {
        if (payload.success && payload.result) {
          success(payload.result)
        } else {
          // failure(payload)
          success(menuData)
        }
      }
    )
  }
}
