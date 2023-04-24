import { createRouter, createWebHistory } from 'vue-router';
import PageOrder from '@/views/PageOrder.vue';
import PageBuy from '@/views/PageBuy.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/PageOrder', component: PageOrder },
    { path: '/PageBuy', component: PageBuy },
  ],
});

export default router;


