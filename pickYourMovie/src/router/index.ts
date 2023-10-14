import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CreateSessionView from '@/views/CreateSessionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: { title: 'О нас' }
    },

    {
      path: '/create-session',
      name: 'create-session',
      component: CreateSessionView,
      meta: { title: 'Создание сессии' }
    }
  ]
})

export default router
