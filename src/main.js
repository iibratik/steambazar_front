import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/styles/main.scss'
import vuetify from '@/plugins/vuetify'
import 'swiper/css'
import 'swiper/css/navigation';

const app = createApp(App)
app.use(store).use(vuetify).use(router).mount('#app')
// Добавьте обработчик события beforeunload
window.addEventListener('beforeunload', (event) => {
  // Получите текущий путь или другую информацию о текущей странице
  const currentPath = window.location.pathname
  // Сохраните эту информацию в localStorage
  localStorage.setItem('lastVisitedPage', currentPath)
})

// Удалите обработчик события beforeunload при размонтировании приложения
app.unmount = function () {
  window.removeEventListener('beforeunload', beforeUnloadHandler)
}

function beforeUnloadHandler(event) {
  const lastVisitedPage = localStorage.getItem('lastVisitedPage')
  if (lastVisitedPage) {
    // Вы можете использовать маршрутизацию или другие методы для перенаправления пользователя на последнюю страницу
    // Например, если у вас есть маршрутизация Vue Router:
    router.push(lastVisitedPage)
  }
}
