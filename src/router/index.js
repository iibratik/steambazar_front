import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import AllGames from '@/views/AllGames.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import NotFound from '@/components/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: Home,
    meta: { title: 'Главная' },
  },
  {
    path: '/allgames/:pageId',
    name: 'AllGames',
    component: AllGames,
    meta: { title: 'Все Игры' },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { title: 'Регистрация' },
  },
  {
    path: '/game/:gameId',
    name: 'GamePage',
    component: Register,
    meta: { title: 'Регистрация' },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { title: 'Вход' },
  },
  {
    path: '/:catchAll(.*)',
    meta: { title: 'Страница не найдена' },

    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = 'Steambazar' // title по default
  }
})

export default router
