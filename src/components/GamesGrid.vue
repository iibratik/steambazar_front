<template>
  <ul class="all-games-lists">
    <li class="all-games-list" v-for="(game, index) in games" :key="index">
      <div class="game" @click="openGamePage(game)">
        <img :src="game.imgUrl" :alt="game.name" />
      </div>
    </li>
  </ul>
  <div class="all-games-pagination">
    <!-- <v-pagination
      v-if="$route.path != '/'"
      v-model="page"
      :length="paginationCount"
      @click="sendingClickedPage(page)"
      :total-visible="7"
    ></v-pagination> -->
    <v-btn
      class="btn-simple round"
      v-if="$route.path == '/'"
      @click="$router.push({ name: 'AllGames' })"
    >
      Все Игры</v-btn
    >
  </div>
</template>

<script>
export default {
  // emits: ["get-clicked-page"],
  // data() {
  //   return {
  //     page: Number(this.$route.params.pageId ? this.$route.params.pageId : 1),
  //   };
  // },
  props: {
    games: {
      type: Array,
      required: true,
    },
    // paginationCount: {
    //   type: Number,
    //   required: true,
    // },
  },
  methods: {
    // sendingClickedPage(pageNumber) {
    //   this.$emit("get-clicked-page", pageNumber);
    // },
    openGamePage(game) {
      this.$router.push({
        path: `/game/${game.id}`,
        query: {
          title: game.name,
          name: game.name,
          image: game.imgUrl,
          price: game.price,
        },
      });
    },
  },
};
</script>
