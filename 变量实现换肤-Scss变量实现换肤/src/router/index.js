import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

let routes = [];

export default new Router({
  routes: routes.concat([
    {
      path: "/",
      name: "home",
      component: () => import("@/page/home/index.vue"),
    },
  ]),
});
