<template>
  <ul class="all-games-lists">
    <li class="all-games-list" v-for="(game, index) in games" :key="index">
      <div class="game" @click="getGamePage(game)">
        <h3 class="game-title">{{ game.name }}</h3>
        <img :src="game.imgUrl" alt="" />
      </div>
    </li>
  </ul>
  <div class="all-games-pagination">
    <button
      v-for="(item, index) in paginationCount"
      :key="index"
      class="pagination-item"
      @click="sendingClickedPage(item)"
    >
      {{ item }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    games: {
      type: Array,
      required: true,
    },
    paginationCount: {
      type: Number,
      required: true,
    },
  },
  methods: {
    sendingClickedPage(pageNumber) {
      this.$emit('get-clicked-page', pageNumber)
    },
  },
}
</script>
