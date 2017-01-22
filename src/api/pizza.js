import pizza from 'dominos'
import Vue from 'vue'

let storeInfo = function(r) {
  console.log(r)
  return r
}

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
  }
}
