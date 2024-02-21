import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    serverUrl: 'http://localhost:3000/',
    topGames: [],
    allGames: [],
  },
  getters: {
    getTopGames(state) {
      return state.topGames
    },
    getAllGames(state) {
      return state.allGames
    },
  },
  mutations: {
    setTopGames(state, games) {
      state.topGames = games
    },
    setAllGames(state, games) {
      state.allGames = games
    },
    setAllGamesPageCount(state, games) {
      state.allGames = games
    },
  },
  actions: {
    fetchTopGames({ commit, state }) {
      return new Promise((resolve, reject) => {
        axios
          .get(state.serverUrl + 'topGames')
          .then((response) => {
            commit('setTopGames', response.data)
            resolve(response.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    fetchAllGames({ commit, state }) {
      return new Promise((resolve, reject) => {
        axios
          .get(state.serverUrl + `allGames`)
          .then((response) => {
            commit('setAllGames', response.data)
            resolve(response.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
  },
  modules: {},
})
