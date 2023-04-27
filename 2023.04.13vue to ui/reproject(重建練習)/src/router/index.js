import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/PageOrder',
      name: 'PageOrder',
      component: () => import('../views/PageOrder.vue')
    },
    {
      path: '/PageBuy',
      name: 'PageBuy',
      component: () => import('../views/PageBuy.vue')
    },
    {
      path: '/PageCheck',
      name: 'PageCheck',
      component: () => import('../views/PageCheck.vue')
    }
  ]
})

export default router
