<template>
  <div class="home-page__main">
    <GamesGrid
      v-if="getAllGames && getAllGames.length > 0"
      :games="getAllGames"
    />
    <!-- @get-clicked-page="changePage"
      :paginationCount="Math.ceil(getTopGames.length / 20)" -->
    <Loader v-else />
  </div>
</template>

<script>
import GamesGrid from "@/components/GamesGrid.vue";
import Loader from "@/components/Ui/Loader.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    GamesGrid,
    Loader,
  },
  computed: {
    ...mapGetters(["getAllGames"]),
  },
  data() {
    return {
      paginationStatus: true,
      games: [],
    };
  },
  methods: {
    ...mapActions(["fetchAllGames"]),
    // changePage(pageNumber) {
    //   this.fetchTopGames(pageNumber);
    //   this.$router.push({ name: "AllGames", params: { pageId: pageNumber } });
    // },
  },
  created() {
    this.fetchAllGames();
    this.games = this.getAllGames;
  },
};
</script>
