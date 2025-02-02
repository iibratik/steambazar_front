<template>
  <section class="game-page">
    <div class="game-page-content container">
      <div class="game-content-left">
        <img :src="game.image" :alt="game.name" />
      </div>
      <div class="game-content-right">
        <div class="game-content-body">
          <h2 class="game__name">{{ game.name }}</h2>
          <span class="game__price">Цена: ${{ game.price }}</span>
          <div class="game-quantity">
            <span> количество: </span>
            <div class="game-quantity__btns">
              <button class="game-quantity__btn" @click="addGameToCart()">
                <i class="fa-solid fa-plus"></i>
              </button>
              {{ gameQuantity }}
              <button class="game-quantity__btn" @click="removeGameFromCart()">
                <i class="fa-solid fa-minus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

  <script>
import { mapGetters, mapMutations } from "vuex";

export default {
  mounted() {
    if (this.getCart && this.getCart.length > 0) {
      this.getCart.find((game) => {
        if (game.id == this.game.id) {
          this.gameQuantity = game.quantity;
        }
      });
    }
  },
  computed: {
    ...mapGetters(["getCart"]),
  },
  data() {
    return {
      game: {
        id: this.$route.query.id,
        name: this.$route.query.name,
        image: this.$route.query.image,
        price: this.$route.query.price,
      },
      gameQuantity: 0,
    };
  },
  methods: {
    ...mapMutations(["addToCart", "subtractFromCart"]),
    addGameToCart() {
      this.addToCart(this.game);
      const currentGame = this.getCart.find((game) => game.id == this.game.id);
      this.gameQuantity = currentGame.quantity;
    },
    removeGameFromCart() {
      if (this.gameQuantity >= 1) {
        this.subtractFromCart(this.game);
        this.gameQuantity--;
      } else {
        return;
      }
    },
  },
};
</script>
