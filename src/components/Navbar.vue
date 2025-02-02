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
        <v-btn class="btn-simple round my-purchases">
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
          v-if="getCart && getCart.length > 0"
          :style="dynamicStyle"
          class="cart-body"
        >
          <div class="cart-game" v-for="game in getCart" :key="game.id">
            <div class="cart-body__left">
              <img
                src="https://itorrents-igruha.org/uploads/posts/2024-02/1707887455_library_600x900_2x.jpg"
                alt=""
              />
            </div>
            <div class="cart-body__right">
              <span class="game-name">Dealer Simulator</span>
              <p class="game-quantity">Количество: <span>1</span></p>
            </div>
          </div>
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
    dynamicStyle() {
      const length = this.getCart.length; // Получаем длину массива
      return {
        bottom: length > 1 ? `-${5 * length}em` : "-5em",
      };
    },
  },
};
</script>

