import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/home.vue";
import Login from "../views/login/login.vue";

Vue.use(VueRouter);

const routes = [
  {
    // 路由重定向
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/home",
    component: Home,
  },
  // {
  //   path: "/home/center",
  //   name: "Center",
  //   component: Center,
  //   children: [
  //     {
  //       path: "/home/center/cultural-relic-register",
  //       name: "cultural-relic-register",
  //       component: culturalRelicRegister,
  //     },
  //   ],
  // },

  // 错误页面
  {
    path: "*",
    // component: () => import('../views/error/Error.vue')
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
