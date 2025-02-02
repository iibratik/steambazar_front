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
    addToCart(state, game) {
      const existingItem = state.cart.find(item => item.id == game.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cart.push({ id: game.id, name: game.name, image: game.image, quantity: 1, price: game.price });
      }

    },
    subtractFromCart(state, game) {
      const index = state.cart.findIndex(item => item.id === game.id);
      if (index === -1) return; // Если элемент не найден, ничего не делаем

      const item = state.cart[index];
      if (!item || typeof item.quantity !== "number") return; // Проверяем, что item существует и у него есть quantity

      if (item.quantity > 1) {
        item.quantity--; // Уменьшаем количество
      } else {
        state.cart.splice(index, 1); // Удаляем, если quantity <= 1
      }
    },

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
