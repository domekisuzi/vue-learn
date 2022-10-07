import {createRouter, createWebHashHistory} from "vue-router";

const routes =
    [
               {
                    path: "/login",
                    name: "Login",
                    component: () => import("../views/login/index.vue"),
                    meta: {
                        title: "主页",
                    }
                },
        ]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;