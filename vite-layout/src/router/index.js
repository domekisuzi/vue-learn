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
            {
                //动态路由
                path: '/user/:id',
                component:() =>  import('../views/NotFound/NotFound.vue')
            },
        {
            //只可以是数字
            // path:"/news/:id(\\d+)",
            //可以有多个参数
            // path:"/news/:id+",
            //参数可有可无
            path: "/news/:id?",
            component:() => import("../views/News.vue")
        },
        {
            //404界面,必须放最后面
            path: '/:path(.*)',
            // component: () => import("../views/NotFound/NotFound.vue")
            component: () => import("@/views/NotFound/NotFound.vue")
        }
        ,
        ]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;
