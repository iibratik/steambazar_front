<template>
  <section class="cart">
    <div class="cart-content container">
      <div class="cart-content-body" :style="setRows()">
        <div class="cart-content__card" v-for="game in getCart" :key="game.id">
          <div class="cart-card-body">
            <div class="card-body__left">
              <img :src="game.image" :alt="game.name" />
            </div>
            <div class="card-body__right">
              <h2 class="card__title">{{ game.name }}</h2>
              <div class="card-body__text">
                <p class="card__text price">
                  Цена за одну единицу: <span> ${{ game.price }}</span>
                </p>
                <p class="card__text quantity">
                  Кол-во: <span>{{ game.quantity }}</span>
                </p>
                <p class="card__text total-price">
                  Общая цена: <span> ${{ game.price * game.quantity }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cart-content-footer">
        <h3 class="total-main-price">Итого: ${{ totalPrice }}</h3>
        <v-btn class="btn-simple round purchase">Оплатить</v-btn>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getCart"]),
  },
  mounted() {
    this.setTotalPrice();
  },
  data() {
    return {
      totalPrice: 0,
    };
  },
  methods: {
    setTotalPrice() {
      this.getCart.forEach((game) => {
        this.totalPrice = game.price * game.quantity + this.totalPrice;
      });
    },
    setRows() {
      if (this.getCart.length < 4) {
        return `grid-template-columns: repeat(${this.getCart.length}, 18%);`;
      } else {
        return `grid-template-columns: repeat(4, 18%);`;
      }
    },
  },
};
</script>
