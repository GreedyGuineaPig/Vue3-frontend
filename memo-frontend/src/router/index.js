import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import Char from "../views/Char.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component:() => About
        },
        {
            path: '/char',
            component:() => Char
        }
    ]

})

export default router