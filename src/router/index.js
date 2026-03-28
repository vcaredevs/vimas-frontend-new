import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Shop from "../pages/Shop.vue";
import ShopDetail from "../pages/ShopDetail.vue";
import ShopCart from "../pages/ShopCart.vue";
import Blog from "../pages/Blog.vue";
import BlogDetail from "../pages/BlogDetail.vue";
import Checkout from "../pages/Checkout.vue";
import Login from "../pages/Login.vue";
import OrderView from "../pages/customer/OrderView.vue";
import Profile from "../pages/customer/Profile.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about-us", name: "About", component: About },
  { path: "/shop-default", name: "Shop", component: Shop },
  { path: "/shop-detail", name: "ShopDetail", component: ShopDetail },
  { path: "/shop-cart", name: "ShopCart", component: ShopCart },
  { path: "/blog", name: "Blog", component: Blog },
  { path: "/blog-detail", name: "BlogDetail", component: BlogDetail },
  { path: "/checkout", name: "Checkout", component: Checkout },
         { path: "/login", name: "Login", component: Login },
           { path: "/customer/order/:id", name: "OrderView", component:OrderView  },
    { path: "/customer/profile", name: "Profile", component: Profile },
     { path: "/product/:slug", name: "ProductDetail", component: ShopDetail },
     {
  path: '/shop/product-categories/:slug',
  name: 'ShopCategory',
  component: Shop
}
   
];
const router = createRouter({
  history: createWebHistory("/"),
  routes,
    scrollBehavior() {
    return false; 
  }
 
});
export default router;
