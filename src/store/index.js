import { createStore } from 'vuex'
import * as api from '../api/index.js'

const store = createStore({
  namespaced: true,
  state: () => ({
    token: null,
    sellList: [],
    key: false,
    pid: '',
    aid: '',
    banks: []
  }),
  mutations: {
    SET_SELLLIST(state, sellList) {
      state.sellList = sellList
    },
    CHECK_ADMIN(state, key) {
      state.key = true
    },
    FETCH_DETAIL(state, pid) {
      state.pid = pid
    },
    SET_BANKS(state, banks) {
      state.banks = banks
    }
  },
  actions: {
    FETCH({ commit }) {
      return api.admin.showSellList().then(data => {
        commit('SET_SELLLIST', data)
        console.log(data)
      })
    },
    FETCH_BANKS({ commit }) {
      return api.user.checkAccount().then(data => {
        const bankList = data.filter(el => !el.disabled)
        commit('SET_BANKS', bankList)
      })
    }
  }
})

export default store
