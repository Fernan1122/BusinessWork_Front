import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/login/",
    name: "login",
    component:() =>
    import("../components/Login.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import("../views/About.vue")
  },
  {
    path: "/notification",
    name: "notification",
    component: () =>
      import("../views/notification.vue")

  },
  {
    path: "/agregar",
    name: "agregar",
    component: () =>
      import("../views/agregar.vue")

  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
