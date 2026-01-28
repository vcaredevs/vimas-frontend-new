import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Product from "../pages/Product.vue";
import Faq from "../pages/Faq.vue";
import Contact from "../pages/Contact.vue";
import Cart from "../pages/Cart.vue";
import Checkout from "../pages/Checkout.vue";
import ProductDetail from "../pages/ProductDetail.vue";
import Login from "../pages/Login.vue";
import Profile from "../pages/customer/Profile.vue";
import Success from "../pages/Success.vue";
import OrderView from "../pages/customer/OrderView.vue";
import Wishlist from "../pages/wishlist.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/product", name: "Product", component: Product },
  { path: "/faq", name: "Faq", component: Faq },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/cart", name: "Cart", component: Cart },
   { path: "/wishlist/:id", name: "Wishlist", component: Wishlist},
  { path: "/checkout", name: "Checkout", component: Checkout },
  { path: "/product/:slug", name: "ProductDetail", component: ProductDetail },
  { path: "/login", name: "Login", component: Login },
    { path: "/customer/profile", name: "Profile", component: Profile },
     { path:"/success", name:"Success", component: Success},
     { path: "/customer/order/:id", name: "OrderView", component: OrderView },
  // {
  //   path: "/customer",
  //   component: CustomerLayout,
  //   meta: { requiresAuth: true },
  //   children: [
  //     { path: "profile", name: "Profile", component: Profile },
  //     // { path: "address-list", name: "ListAddress", component: ListAddress },
  //     // { path: "address-add", name: "AddressCreate", component: AddAddress },
  //     // { path: "address/edit/:id", name: "EditAddress", component: AddAddress },
  //     // {
  //     //   path: "address/delete/:id",
  //     //   name: "DeleteAddress",
  //     //   component: ListAddress,
  //     // },

  //     // { path: "orders", name: "Orders", component: Orders },
  //     // { path: "order/:id", name: "OrderView", component: OrderView },
  //   ],
  // },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});
export default router;
