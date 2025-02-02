import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    serverUrl: 'http://localhost:3000/',
    topGames: [],
    allGames: [],
    cart: [],
  },
  getters: {
    getTopGames(state) {
      return state.topGames
    },
    getAllGames(state) {
      return state.allGames
    },
    getCart(state) {
      return state.cart
    }
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
    set
  },
  actions: {
    async fetchTopGames({ commit, state }) {
      try {
        const response = await axios.get(state.serverUrl + 'topGames');
        commit('setTopGames', response.data);
      } catch (error) {
        throw error; // Обработка ошибки
      }
    },
    async fetchAllGames({ commit, state }, pageId) {
      commit('setAllGames', []); // Очистка данных перед запросом
      try {
        const response = await axios.get(state.serverUrl + `allGames`);
        commit('setAllGames', response.data);
      } catch (error) {
        throw error; // Обработка ошибки
      }

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
