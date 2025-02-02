<template>
  <main class="home-page">
    <div
      v-if="getTopGames && getTopGames.length > 0"
      class="container home-page__content"
    >
      <div class="header-home-page__content">
        <div class="content-left">
          <h2 class="page-title">
            Топ игры <br />
            на сегодня
          </h2>
          <h3 class="game-title">Популярные игры на сегодня</h3>
          <v-btn to="/allgames" class="btn-simple"> Больше игр </v-btn>
        </div>
        <div class="content-right">
          <swiper
            v-if="getTopGames && getTopGames.length > 0"
            :modules="modules"
            :navigation="swiperNavigation"
            :loop="true"
            :centeredSlides="false"
            :autoplay="{
              delay: 1500,
              disableOnInteraction: false,
            }"
            :slides-per-view="3"
            :slides-per-group="1"
            class="top-games__slides"
          >
            <swiper-slide
              class="top-games__slide"
              v-for="(item, index) in getTopGames"
              @click="openGamePage(item)"
              :key="index"
            >
              <img :src="item.imgUrl" :alt="item.name" />
            </swiper-slide>
          </swiper>
          <div class="slider-btns">
            <v-btn class="slider-btn top-games__prev-slide">
              <i class="fa-solid fa-chevron-left"></i>
            </v-btn>
            <v-btn class="slider-btn top-games__next-slide">
              <i class="fa-solid fa-chevron-right"></i>
            </v-btn>
          </div>
        </div>
      </div>
      <GamesGrid :games="getTopGames" />
    </div>
    <Loader v-else />
  </main>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";
import { mapActions, mapGetters } from "vuex";
import GamesGrid from "@/components/GamesGrid.vue";
import AllGames from "@/views/AllGamesView.vue";
import Loader from "@/components/Ui/Loader.vue";

export default {
  data() {
    return {
      currentPage: 1,
      currentGamesGrid: [],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    GamesGrid,
    AllGames,
    Loader,
  },
  computed: {
    ...mapGetters(["getTopGames"]),
    // Ваши другие вычисляемые свойства компонента...
  },
  methods: {
    ...mapActions(["fetchTopGames", "fetchAllGames"]),
    openGamePage(game) {
      this.$router.push({
        path: `/game/${game.id}`,
        query: {
          title: game.name,
          id: game.id,
          name: game.name,
          image: game.imgUrl,
          price: game.price,
        },
      });
    },
  },
  setup() {
    mapActions(["fetchTopGames", "fetchAllGames"]);
    return {
      modules: [Navigation, Autoplay],
      swiperNavigation: {
        nextEl: ".top-games__next-slide",
        prevEl: ".top-games__prev-slide",
      },
    };
  },
  created() {
    // Вызываем действие fetchTopGames при создании компонента
    this.fetchTopGames();
    this.fetchAllGames();
  },
};
</script>
