import {createRouter, createWebHashHistory} from "vue-router";

const routes =
        // [
        //     {
        //         path: "/about",
        //         name: "About",
        //         component: () => import("../views/About.vue"),
        //         meta: {
        //             title: "关于",
        //         }
        //     },
        //     {
        //         path: "/home",
        //         name: "Home",
        //         component: () => import("../views/Home.vue"),
        //         meta: {
        //             title:"主页",
        //         }
        //     },
        //     {
        //         path: "/user/:id",
        //         name: "user",
        //         component: () => import("../views/User.vue"),
        //         meta: {
        //             title: "用户",
        //         }
        //     },{
        //     path: "/:path(.*)",
        //     name: "notfound",
        //     component: () => import("../views/NotFound.vue"),
        //     meta: {
        //         title: "404",
        //     }
        // },
        // ]
    [
        {
            path: "/",
            redirect: "about",
            children: [
                {
                    path: "about",
                    name: "About",
                    component: () => import("../views/About.vue"),
                    meta: {
                        title: "关于",
                    }
                },
                {
                    path: "home",
                    name: "Home",
                    component: () => import("../views/Home.vue"),
                    meta: {
                        title: "主页",
                    }
                },
                {
                    path: "user/:id",
                    name: "user",
                    component: () => import("../views/User.vue"),
                    meta: {
                        title: "用户",
                    }
                },{
                    path: ":path(.*)",
                    name: "notfound",
                    component: () => import("../views/NotFound.vue"),
                    meta: {
                        title: "404",
                    }
                },
            ],
        }
        ]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;