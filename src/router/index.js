import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Shop from "../pages/Shop.vue";
import Contact from "../pages/Contact.vue";
import Cart from "../pages/Cart.vue";
import Checkout from "../pages/Checkout.vue";
import Success from "../pages/Success.vue";
import Login from "../pages/Login.vue";
import OrderView from "../pages/customer/OrderView.vue";
import Profile from "../pages/customer/Profile.vue";
import ProductDetail from "../pages/ProductDetail.vue";
const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about-us", name: "About", component: About },
  { path: "/shop", name: "Shop", component: Shop },
    { path: "/contact-us", name: "Contact", component: Contact },
    { path: "/cart", name: "Cart", component: Cart },
     { path: "/checkout", name: "Checkout", component: Checkout },
       { path: "/success", name: "Success", component: Success },
         { path: "/login", name: "Login", component: Login },
    { path: "/customer/order/:id", name: "OrderView", component:OrderView  },
    { path: "/customer/profile", name: "Profile", component: Profile },
     { path: "/product/:slug", name: "ProductDetail", component: ProductDetail },
 
];
const router = createRouter({
  history: createWebHistory("/vimas/"),
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
