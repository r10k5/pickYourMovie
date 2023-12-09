import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CreateSessionView from '@/views/CreateSessionView.vue'
import SessionView from '@/views/SessionView.vue'
import MatchView from '@/views/MatchView.vue'
import ResultsView from '@/views/ResultsView.vue'

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
    },

    {
      path: '/session',
      name: 'session',
      component: SessionView
    },

    {
      path: '/connect-session/:uid',
      name: 'session',
      component: CreateSessionView,
      meta: { title: 'Присоединиться к сессии' }
    },

    {
      path: '/match',
      name: 'match',
      component: MatchView
    },

    {
      path: '/results',
      name: 'results',
      component: ResultsView
    },

  ]
})

export default router
