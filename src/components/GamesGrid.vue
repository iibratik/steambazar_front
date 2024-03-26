<template>
  <ul class="all-games-lists">
    <li class="all-games-list" v-for="(game, index) in games" :key="index">
      <div class="game" @click="getGamePage(game)">
        <img :src="game.img_url" :alt="game.name" />
      </div>
    </li>
  </ul>
  <div class="all-games-pagination">
    <v-pagination
      v-if="$route.path != '/'"
      v-model="page"
      :length="paginationCount"
      @click="sendingClickedPage(page)"
      :total-visible="7"
    ></v-pagination>
    <v-btn
      v-else
      class="btn-simple round"
      @click="$router.push({ name: 'AllGames', params: { pageId: 1 } })"
      >Все Игры</v-btn
    >
  </div>
</template>

<script>
export default {
  emits:['get-clicked-page'],
  data() {
    return {
      page: Number(this.$route.params.pageId ? this.$route.params.pageId : 1),
    };
  },
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
      this.$emit("get-clicked-page", pageNumber);
    },
  },
};
</script>
