import {createRouter, createWebHistory} from "vue-router";
import Main from "../pages/Main.vue";
import Index from "../pages/course/Index.vue";
import Create from "../pages/course/Create.vue";
import Show from "../pages/course/Show.vue";
import Edit from "../pages/course/Edit.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Main,
            name: 'course'
        },
        {
            path: '/index',
            component: Index,
            name: 'course.index'
        },
        {
            path: '/create',
            component: Create,
            name: 'course.create'
        },
        {
            path: '/show/:id',
            component: Show,
            name: 'course.show'
        },
        {
            path: '/edit/:id',
            component: Edit,
            name: 'course.edit'
        }
    ]
})

export default router