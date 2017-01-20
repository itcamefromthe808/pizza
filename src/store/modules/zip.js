import pizza from '../../api/pizza'
import * as types from '../mutation-types'

const state = {
  zip: 90095,
  zipCodeStatus: null
}

// getters
const getters = {
  zipCodeStatus: state => state.zipCodeStatus
}

// action
const actions = {
  lookupZipCode ({ commit }) {
    pizza.findStore(
      zip,
      () => commit(types.ZIPCODE_SUCCESS),
      () => commit(types.ZIPCODE_FAILURE, { zip })
    })
  }
}

// mutation
const mutations = {
  [types.ZIPCODE_REQUEST] (state, { zip }) {
    state.zip = ''
    state.zipCodeStatus = null
  }

  [types.ZIPCODE_SUCCESS] (state) {
    state.zipCodeStatus = 'success'
  }

  [types.ZIPCODE_FAILURE] (state, { zip }) {
    state.zip = zip
    state.zipCodeStatus = 'failed'
  }
}
