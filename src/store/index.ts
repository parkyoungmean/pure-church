import { createStore } from 'vuex'

export default createStore({
  state: {
    is_login: false,
    open_modal: false,
    posts: [],
    authors: [],
    total_posts: 0,
  },
  getters: {
  },
  mutations: {
    TOGGLE_LOGIN (state, dir = null) {
      if (dir === 'login') {
        state.is_login = true
      } else if (dir === 'logout') {
        state.is_login = false
      } else {
        state.is_login = !state.is_login
      }
    },
    TOGGLE_MODAL (state, dir = null) {
      if (dir === 'open') {
        state.open_modal = true
      } else if (dir === 'close') {
        state.open_modal = false
      } else {
        state.open_modal = !state.open_modal
      }
    }
  },
  actions: {
    ToggleLogin ({ commit }) {
      commit('TOGGLE_LOGIN')
    },
    ToggleModal ({ commit }) {
      commit('TOGGLE_MODAL')
    }
  },
  modules: {
  }
})
