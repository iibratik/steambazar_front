<template>
  <main class="home-page">
    <div class="container home-page__content">
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
  </main>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'
import { mapActions, mapGetters } from 'vuex'

// Import Swiper styles

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    ...mapGetters(['getTopGames']),
    // Ваши другие вычисляемые свойства компонента...
  },
  methods: {
    ...mapActions(['fetchTopGames']),
    // Ваши другие методы компонента...
  },
  setup() {
    mapActions(['fetchTopGames'])
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
  },
  data() {
    return {
      currenTitle: '',
    }
  },
}
</script>
