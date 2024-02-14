<template>
  <v-footer class="bg-grey-darken-4">
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        variant="text"
        class="mx-2"
        :to="link.link"
        rounded="xl"
      >
        {{ link.title }}
      </v-btn>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>STEAMBAZAR</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      { title: 'Главная', link: '/' },
      { title: 'Каталог', link: '/catalog' },
      { title: 'О нас', link: '/aboutus' },
      { title: 'Услуги', link: '/services' },
      { title: 'Команда', link: '/team' },
      { title: 'Наши контакты', link: '/contacts' },
    ],
  }),
}
</script>

<style lang="scss" scoped></style>
