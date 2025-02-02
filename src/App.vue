<template>
  <v-app>
    <Navbar v-if="$route.path != '/register' && '/login'"> </Navbar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer v-if="$route.path != '/register' && '/login'"></Footer>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
