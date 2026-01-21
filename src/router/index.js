import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Product from "../pages/Product.vue";
import Faq from "../pages/Faq.vue";
import Contact from "../pages/Contact.vue";
import Cart from "../pages/Cart.vue";
import Checkout from "../pages/Checkout.vue";
const routes = [
  { path: "/", name: "Home", component: Home },
   { path: "/product", name: "Product", component: Product },
      { path: "/faq", name: "Faq", component: Faq },
       { path: "/contact", name: "Contact", component: Contact },
        { path: "/cart", name: "Cart", component: Cart },
            { path: "/checkout", name: "Checkout", component: Checkout },
]
const router = createRouter({
   history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});
export default router;
