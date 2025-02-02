<template>
  <nav class="navbar">
    <div class="navbar-content container">
      <router-link to="/" class="logo__link">
        <img src="@/assets/svg/logo.svg" alt="" />
      </router-link>
      <input
        type="text"
        placeholder="Поиск по товарам и категориям"
        class="input-simple round navbar__search"
      />
      <div class="navbar__btns">
        <v-btn
          class="btn-simple round my-purchases"
          @mouseenter="showCart = !showCart"
        >
          <i class="fa-solid fa-cart-shopping"></i>
          <div v-if="getCart.length > 0" class="cart-quantity">
            {{ getCart.length }}
          </div>
        </v-btn>
        <v-btn to="/register" class="btn-simple round">
          <i class="fa-solid fa-user"></i>
          <span>Войти/Регистрация</span>
        </v-btn>
        <div
          v-if="getCart.length != 0 && showCart"
          class="cart-body"
          @mouseleave="showHideCart"
        >
          <div class="cart-game" v-for="game in getCart" :key="game.id">
            <div class="cart-body__left">
              <img :src="game.image" :alt="game.name" />
            </div>
            <div class="cart-body__right">
              <span class="game-name">{{ game.name }}</span>
              <p class="game-quantity">
                Количество: <span>{{ game.quantity }}</span>
              </p>
              <p class="game-quantity">
                Цена: <span> ${{ game.price * game.quantity }}</span>
              </p>
            </div>
          </div>
          <v-btn class="btn-simple round" to="/cart">Купить</v-btn>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getCart"]),
  },
  data() {
    return {
      showCart: false,
    };
  },
  methods: {
    showHideCart() {
      setTimeout(() => {
        this.showCart = !this.showCart;
      }, 150);
    },
  },
};
</script>

