<template>
  <nav class="navbar">
    <div class="navbar-content container">
      <router-link to="/" class="logo__link">
        <img src="@/assets/svg/logo.svg" alt="" />
      </router-link>
      <input
        type="text"
        placeholder="Поиск по товарам и категориям"
        class="input-simple round navbar__search"
      />
      <div class="navbar__btns">
        <v-btn to="/purchases" class="btn-simple round my-purchases">
          <i class="fa-solid fa-cart-shopping"></i> Мои <br />
          покупки
        </v-btn>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
