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
  lookup ({commit, state}, zip ) {
    commit(types.ZIPCODE_REQUEST)
    pizza.findStore(
      zip,
      () => commit(types.ZIPCODE_SUCCESS),
      () => commit(types.ZIPCODE_FAILURE)
    )
  }
}

// mutation
const mutations = {
  [types.ZIPCODE_REQUEST] (state) {
    state.zipCodeStatus = null
  },

  [types.ZIPCODE_SUCCESS] (state, { zipcodeResults }) {
    console.log('zipcode success')
    state.zipCodeStatus = 'success'
  },

  [types.ZIPCODE_FAILURE] (state) {
    console.log('zipcode failed')
    state.zip = '';
    state.zipCodeStatus = 'failed'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
