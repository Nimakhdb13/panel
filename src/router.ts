import { createRouter, createWebHistory } from 'vue-router'
import index from './pages/index.vue'
import dashboard from './pages/dashboard.vue'
const routes = [
    { path: '/', component: index},
    { path: '/dashboard', component: dashboard}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
