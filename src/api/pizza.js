import pizza from 'dominos'
import Vue from 'vue'

export default {
  findStore ( zip, success, failure ) {
    // query dominos api
    pizza.Util.findNearbyStores(
      zip,
      'Delivery',
      (payload) => {
        if (payload.success && payload.result.Stores.length) {
          success(payload.result.Stores)
        } else {
          failure(payload)
        }

      }
    )
  },
  getMenu (StoreID, success, failure) {
    let myStore = new pizza.Store(StoreID)
    myStore.ID = StoreID
    myStore.getMenu(
      (payload) => {
        if (payload.success && payload.result) {
          success(payload.result)
        } else {
          failure(payload)
        }

      }
    )
  }
}
