import { createRouter, createWebHistory } from 'vue-router'
import CvView from '@/views/CvView.vue'
import HomeView from '@/views/HomeView.vue'
import PassionsView from '@/views/PassionsView.vue'
import SkillsView from '@/views/SkillsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: (_to, _from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'smooth' }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/cv',
      name: 'cv',
      component: CvView,
    },
    {
      path: '/competences',
      name: 'skills',
      component: SkillsView,
    },
    {
      path: '/passions',
      name: 'passions',
      component: PassionsView,
    },
  ],
})

export default router
