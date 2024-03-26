<template>
  <div class="home-page__main">
    <GamesGrid
      v-if="getAllGames.results && getAllGames.results.length > 0"
      :games="getAllGames.results"
      @get-clicked-page="changePage"
      :paginationCount="Math.ceil(getAllGames.count / 20)"
    />
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
    };
  },
  setup() {
    mapActions(["fetchAllGames"]);
    mapGetters(["getAllGames"]);
  },
  methods: {
    ...mapActions(["fetchAllGames"]),
    changePage(pageNumber) {
      this.fetchAllGames(pageNumber);
      this.$router.push({ name: "AllGames", params: { pageId: pageNumber } });
    },
  },
  created() {
    const pageId = this.$route.params.pageId
    this.fetchAllGames( pageId ? pageId: 1);
  },
};
</script>
