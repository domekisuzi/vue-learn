/** made by domekisuzi
 * @2022/10/12
 */
import {createRouter, createWebHashHistory} from "vue-router";

const routes =
    [
        {
            path: "/home",
            name: "Home",
            component: () => import("../views/Home.vue"),
        },
        {
            path: "/about",
            name: "About",
            component: () => import('../views/About.vue'),
        },

        {
            //404界面,必须放最后面
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
