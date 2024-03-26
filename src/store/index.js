import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    serverUrl: 'http://127.0.0.1:8000/api/',
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
      axios
        .get(state.serverUrl + 'topGames')
        .then((response) => {
          commit('setTopGames', response.data)
        })
        .catch((error) => {
          reject(error)
        })
    },
    fetchAllGames({ commit, state }, pageId) {
      commit('setAllGames', [])
      axios
        .get(state.serverUrl + `allGames/?page=${pageId}`)
        .then((response) => {
          commit('setAllGames', response.data)
        })
        .catch((error) => {
          return (error)
        })
    },
    createUser({ commit, state }, userData) {
      const jsonedData = JSON.stringify(userData);
      axios.post(state.serverUrl + `users/`, jsonedData, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        // Обрабатываем успешный ответ
        console.log('Пользователь успешно создан:', response.data);
      }).catch(error => {
        // Обрабатываем возможные ошибки
        console.error('Произошла ошибка при создании пользователя:', error);
      });
    }
  },
  modules: {},
})
