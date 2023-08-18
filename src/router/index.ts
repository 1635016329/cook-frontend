import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LikeView from '@/views/LikeView.vue'
import MessageView from '@/views/MessageView.vue'
import MineView from '@/views/MineView.vue'
import CreateView from '@/views/CreateView.vue'
import { usetabbarActiveStore } from '@/stores/tabbarActive'


const routes = [
    {
        path: '/home',
        name: 'home',
        component: HomeView
    },
    {
        path: '/like',
        name: 'like',
        component: LikeView
    },
    {
        path: '/create',
        name: 'create',
        component: CreateView,
        beforeEnter: (to: any, from: any, next: any) => {
            const store = usetabbarActiveStore()
            store.pre = from.path
            next()
        }
    },
    {
        path: '/message',
        name: 'message',
        component: MessageView
    },
    {
        path: '/mine',
        name: 'mine',
        component: MineView
    },
    {
        path: '/',
        redirect: '/home'
        
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})

export default router
