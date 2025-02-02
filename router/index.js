import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import AllGames from '@/views/AllGamesView.vue'
import Login from '@/views/LoginView.vue'
import Register from '@/views/RegisterView.vue'
import NotFound from '@/components/NotFound.vue'
import GameView from '@/views/GameView.vue'

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: Home,
    meta: { title: 'Главная' },
  },
  {
    path: '/allgames',
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
    name: 'GameView',
    component: GameView,
    props: route => ({ game: JSON.parse(route.query.game || '{}') }),
    meta: { title: 'Загрузка...' }, // Заголовок по умолчанию
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
router.beforeEach((to, from, next) => {
  if (to.name === 'GameView') {
    const title = to.query.title;
    if (title) {
      to.meta.title = title;
    }
  }
  next();
});

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = 'Steambazar' // title по default
  }
})

export default router
