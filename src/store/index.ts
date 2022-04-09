import { createStore } from 'vuex'

export default createStore({
  state: {
    is_login: false,
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
    }
  },
  actions: {
    ToggleLogin ({ commit }) {
      commit('TOGGLE_LOGIN')
    }
  },
  modules: {
  }
})
