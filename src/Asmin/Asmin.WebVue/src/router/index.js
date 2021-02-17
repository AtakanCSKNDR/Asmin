import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import EmptyLayout from "@/layout/empty.vue";

Vue.use(VueRouter);

import users from "@/router/modules/users";

const routes = [
  {
    path: "/",
    component: EmptyLayout,
    children: [
      {
        path: "",
        name: "Login",
        component : Login
      },
    ],
  },
  users,
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
