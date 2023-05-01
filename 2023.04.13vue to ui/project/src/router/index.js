import { createRouter, createWebHistory } from 'vue-router';
import PageOrder from '@/components/PageOrder.vue';
import PageBuy from '@/components/PageBuy.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/PageOrder', component: PageOrder },
    { path: '/PageBuy', component: PageBuy },
  ],
});

export default router;


