<template>
  <main class="home-page">
    <div class="container home-page__content">
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
              :key="index"
            >
              <div class="slider__img">
                <img :src="item.imgUrl" :alt="item.name" />
              </div>
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
      <GamesGrid
        :games="paginateArray(getAllGames, currentPage)"
        @get-clicked-page="changePage"
        :paginationCount="Math.ceil(getAllGames.length / 20)"
      />
    </div>
  </main>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'
import { mapActions, mapGetters } from 'vuex'
import GamesGrid from '@/components/GamesGrid.vue'
// Import Swiper styles

export default {
  data() {
    return {
      currentPage: 1,
      currentGamesGrid: [],
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    GamesGrid,
  },
  computed: {
    ...mapGetters(['getTopGames', 'getAllGames']),
    // Ваши другие вычисляемые свойства компонента...
  },
  methods: {
    ...mapActions(['fetchTopGames', 'fetchAllGames']),
    paginateArray(array, page) {
      const itemsPerPage = 20
      const startIndex = (page - 1) * itemsPerPage
      const endIndex = startIndex + itemsPerPage
      return array.slice(startIndex, endIndex)
    },
    changePage(pageNumber) {
      this.currentPage = pageNumber
    },
  },
  setup() {
    mapActions(['fetchTopGames', 'fetchAllGames'])
    return {
      modules: [Navigation, Autoplay],
      swiperNavigation: {
        nextEl: '.top-games__next-slide',
        prevEl: '.top-games__prev-slide',
      },
    }
  },
  created() {
    // Вызываем действие fetchTopGames при создании компонента
    this.fetchTopGames()
    this.fetchAllGames()
  },
}
</script>
