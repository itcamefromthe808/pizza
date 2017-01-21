import pizza from 'dominos'
import Vue from 'vue'

export default {
  findStore ( zip, success, failure ) {
    // query dominos api
    pizza.Util.findNearbyStores(
      zip,
      'Delivery',
      (storeData) => {
        success(storeData)
      }
    )
  }
}
