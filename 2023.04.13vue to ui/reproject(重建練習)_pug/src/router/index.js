import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
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
