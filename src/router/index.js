import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: Home,
    meta: { title: 'Главная' },
  },
  {
    path: '/registration',
    name: 'register',
    component: Home,
    meta: { title: 'Главная' },
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
