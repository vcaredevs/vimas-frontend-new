<template>
  <section class="header"  id="myHeader">
    <div class="head-start">
    
    </div>
   <nav class="navbar navbar-expand-lg navbar-light ">
      <div class="container m-auto">
          <a class="navbar-brand fs-3 fw-bold" href="./"><img src="../assets/images/logo.png" height="50"/></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
              <!-- <ul class="navbar-nav ms-auto">
          <li class="nav-item" v-for="(menu,index) in menus" :key="index">
  <p class="nav-link">{{ menu.title }}</p>
</li>
</ul> -->
              <ul class="navbar-nav ms-auto">
          <li class="nav-item">
  <router-link to="/" class="nav-link">Home</router-link>
</li>
        <li class="nav-item">
  <router-link to="/product" class="nav-link">Shop by Concern</router-link>
</li>
 <li class="nav-item">
  <router-link to="/faq" class="nav-link">FAQs</router-link>
</li>
 <li class="nav-item">
  <router-link to="/contact" class="nav-link">Contact Us</router-link>
</li>
              
              </ul>
           <p class="menu-icon" @click="goToWishList" style="cursor:pointer;">  <i class="far fa-heart"></i>
           <span  class="cart-badge">{{
                  store.wishlistProd && store.wishlistProd.data
                    ? store.wishlistProd.data.length
                    : 0
                }}</span>
          </p>
              <p class="menu-icon" @click="$emit('open-search')"><i class="fas fa-search"></i></p>
              <SearchDrawer :open="openSearch" @close="openSearch = false" />
           
              <p class="menu-icon" @click="goToCart" style="cursor:pointer;">
  <i class="fas fa-shopping-cart"></i>
  <span v-if="cartCount > 0" class="cart-badge">{{ cartCount }}</span>
</p>
 <p class="menu-icon" @click="goToProfile">  <i class="fas fa-user"></i> </p>

          </div>
      </div>
  </nav>
  </section>
</template>
<style>
.menu-icon {
  position: relative;
  cursor: pointer;
}

.cart-badge {
  position: absolute;
  top: -15px;
  right: -14px;
  background: red;
  color: white;

  width: 22px;
  height: 22px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 12px;
  font-weight: 600;

  border-radius: 50%;
}
#myHeader{
  top:0;
    z-index: 1000;
    width: 100%;
    position: fixed;
}
</style>
<script setup>
import { onMounted, ref, watch } from "vue";
import { getCartCount } from "../services/apiService";
import { cartCount } from "../services/cartService";
import { useRouter } from "vue-router";
import { useUserStore } from "../assets/js/store";
import SearchDrawer from "./SearchDrawer.vue";
const openSearch = ref(false);
const menus = ref([]);
const { store } = useUserStore();
const router = useRouter();
const userId = atob(localStorage.getItem("user_id"));
const isLoggedIn = () => {
  return !!localStorage.getItem("authToken"); 
};

function goToCart() {
  if (!isLoggedIn()) {
    router.push("/login"); 
  } else {
    router.push("/cart");
  }
}
function goToProfile() {
  if (!isLoggedIn()) {
    router.push("/login"); 
  } else {
    router.push("/customer/profile");
  }
}
function goToWishList() {
  if (!isLoggedIn()) {
    router.push({ name: "Login" });
  } else {
     router.push({
      name: "Wishlist",
      params: { id: userId } 
    });
  }
}

const fetchCartCount = async () => {
  console.log("Fetchcount");
  
  
  try {
    if (!isLoggedIn()) {
      cartCount.value = 0;
      return;
    }

    
    const res = await getCartCount(userId);

    cartCount.value = res.data.cart_count || 0;
  } catch (err) {
    cartCount.value = 0;
  }
};

onMounted(() => {
  fetchCartCount();
});
onMounted(async () => {
   
    
    watch(
        () => store.menu?.menu_nodes,
        (nodes) => {
            if (!nodes) return;
             menus.value = [...nodes].sort(
        (a, b) => a.position - b.position
      );
           
        },
        { immediate: true }
    );
   
  
});


</script>
