/** made by domekisuzi
 * @2022/10/12
 */
import {createRouter, createWebHashHistory} from "vue-router";

const routes =
    [

        {
            path: "/home",
            name: "Home",
            component: () => import("../views/login/index.vue"),
            meta: {
                title: "主页",
            }
        },
        {
            path: "/about",
            name: "About",
            component: () => import("../views/About.vue"),
            meta: {
                title: "主页",
            }
        },
        {
            path: "/A",
            name: "A",
            component: () => import('../components/A.vue')
        },
        {
            //404界面,必须放最后面
            path: '/:path(.*)',
            // component: () => import("../views/NotFound/NotFound.vue")

        }
        ,
    ]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;
