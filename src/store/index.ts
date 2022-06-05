import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    is_login: false,
    is_mobile: false,
    users: [],
    posts: [],
    authors: [],
    total_posts: 0,
  },
  getters: {
    getUsers: (state) => state.users
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
    TOGGLE_SCREEN (state, dir = null) {
      if (dir === 'mobile') {
        state.is_mobile = true
      } else if (dir === 'browse') {
        state.is_mobile = false
      } else {
        state.is_mobile = !state.is_mobile
      }
    },
    SET_USERS(state, users) {
      state.users = users;
    }
  },
  actions: {
    ToggleLogin ({ commit }) {
      commit('TOGGLE_LOGIN')
    },
    ToggleScreen ({ commit }) {
      commit('TOGGLE_SCREEN')
    },
    /* USER */
    async fetchUsers({ commit }) {
      try {
        const data = await axios.get('https://pure-api.herokuapp.com/users')
        commit('SET_USERS', data.data)
      }
      catch (error) {
        console.error(error);
      }
    }
  },
  modules: {
  }
})
