import { createRouter, createWebHistory } from 'vue-router'

import red from '../components/red'
import yellow from '../components/yellow'


const routes = [
    { path: '/red', name: 'red', component: red },
    { path: '/yellow', name: 'yellow', component: yellow }

]
export const router = createRouter({
        history: createWebHistory(),
        routes: routes,
    }

)