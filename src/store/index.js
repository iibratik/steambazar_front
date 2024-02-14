import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    serverUrl: 'http://localhost:3000/',
    topGames: [],
  },
  getters: {
    getTopGames(state){
      return state.topGames
    }
  },
  mutations: {
    setTopGames(state, games) {
      state.topGames = games
    },
  },
  actions: {
    fetchTopGames({ commit, state }) {
      return new Promise((resolve, reject) => {
        axios
          .get(state.serverUrl + 'top-games')
          .then((response) => {
            commit('setTopGames', response.data)
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
