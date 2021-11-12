import {createStore} from 'vuex'
import * as api from '../api/index.js'

const adminStore = createStore({
  namespaced: true,
  state: () => ({
    token: null,
    sellList: [],
    key: false
  }),
  mutations : {
    SET_SELLLIST(state, sellList) {
      state.sellList = sellList
    },
    CHECK_ADMIN(state, key) {
      state.key = true
    }
  },
  actions : {
    FETCH({ commit }) {
      return api.admin.showSellList().then(data => {
        commit('SET_SELLLIST', data)
        console.log(data)
      })
    }
  }
})

export default adminStore
