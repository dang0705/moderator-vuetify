import Vue from "vue";
import Router from "vue-router";
// import routes from "./modules";
// import { routerBase as base } from "@/configs";
import initRoutes from "@/routes/middlewares";
export const routes = [
  {
    path: "/my",
    alias: "/",
    name: "my",
    component: () => import("pages/test/my"),
    meta: {
      title: "我的",
    },
  },
  {
    path: "/home",
    name: "home",
    component: () => import("pages/test/home"),
    meta: {
      title: "home",
    },
  },
];
Vue.use(Router);
const router = new Router({
  mode: "history",
  routes,
  // base,
  // routes,
});
initRoutes(router);
export default router;
