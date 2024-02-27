<template>
  <v-app>
    <Navbar v-if="$route.path != '/register' && '/login'"> </Navbar>
    <router-view></router-view>
    <Footer v-if="$route.path != '/register' && '/login'"></Footer>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    Navbar,
    Footer,
  },
}
</script>
