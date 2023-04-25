import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Settings from '@/views/Settings.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/settings', component: Settings },
  ],
});

export default router;