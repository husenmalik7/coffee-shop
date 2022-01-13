import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Coffees from "../views/Coffees.vue";
import CoffeeDetail from "../views/CoffeeDetail.vue";
import Cart from "../views/Cart.vue";
import SuccessOrder from "../views/SuccessOrder.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/coffees",
    name: "Coffees",
    component: Coffees,
  },
  {
    path: "/coffees/:id",
    name: "CoffeeDetail",
    component: CoffeeDetail,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/success-order",
    name: "SuccessOrder",
    component: SuccessOrder,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
