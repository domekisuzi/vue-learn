/** made by domekisuzi
 * @2022/10/12
 */
import {createRouter, createWebHashHistory} from "vue-router";

const routes =
    [
        //主页面
        {
            path: "/home",
            alias:'/',
            name: "Home",
            component: () => import("../views/Home/index.vue"),
        },
        //自我介绍页面
        {
            path: "/about",

            name: "About",
            // component: () => import('../views/About/index.vue'),
            component: () => import("../views/About/index.vue"),
        },
        {
            path: "/bigdata",
            name: "BigData",
            component:() => import('../views/BigData/index.vue')
        },
        {
            // path: "/",
            component: () => import("../views/Home/index.vue"),
            // 404界面,必须放最后面
            path: '/:path(.*)',
            // component: () => import("../views/")
        }
        ,

    ]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
