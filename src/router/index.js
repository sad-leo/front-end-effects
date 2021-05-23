import {
    createRouter,
    // createWebHashHistory,
    createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/hello',
        component: () => import('../views/HelloWorld'),
    },
    {
        path: '/neon',
        component: () => import('../views/NeonLights.vue'),
    },
    {
        path: '/tear',
        component: () => import('../views/Tear.vue'),
    },
    {
        path: '/liquidflow',
        component: () => import('../views/LiquidFlow.vue'),
    },
    {
        path: '/textloading',
        component: () => import('../views/TextLoading.vue'),
    },
    {
        path: '/glow',
        component: () => import('../views/Glow.vue'),
    },
    {
        path: '/frostedglass',
        component: () => import('../views/FrostedGlass.vue'),
    },
    {
        path: '/telescopicnavbar',
        component: () => import('../views/TelescopicNavBar.vue'),
    },
]

const router = createRouter({
    // history: createWebHashHistory(), 路径带#号
    history: createWebHistory(),
    routes
})

export default router