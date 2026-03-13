import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Shop from "../pages/Shop.vue";
import ShopDetail from "../pages/ShopDetail.vue";
import ShopCart from "../pages/ShopCart.vue";
import Blog from "../pages/Blog.vue";
import BlogDetail from "../pages/BlogDetail.vue";
import Checkout from "../pages/Checkout.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about-us", name: "About", component: About },
  { path: "/shop-default", name: "Shop", component: Shop },
  { path: "/shop-detail", name: "ShopDetail", component: ShopDetail },
  { path: "/shop-cart", name: "ShopCart", component: ShopCart },
  { path: "/blog", name: "Blog", component: Blog },
  { path: "/blog-detail", name: "BlogDetail", component: BlogDetail },
  { path: "/checkout", name: "Checkout", component: Checkout },
];
const router = createRouter({
  history: createWebHistory("/"),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});
export default router;
