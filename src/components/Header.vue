<template>
     <header class="header trans_300">

        <!-- Top Navigation -->
        <div class="top_nav">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                    </div>
                    <div class="col-md-5 text-right">
                        <div class="header-top-left mt-4">
                            <p class="contact-info"><i class="icon flaticon-phone"></i> Call Us: +919944536363</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Main Navigation -->

        <div class="main_nav_container">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
<router-link to="/">
                        <a class="brand-logo" href="https://inway.com.in:443."><img class="brand-image " src="@/assets/images/uploads_setting_uploads-setting-vimas-logo-png-1.png"  alt="Quick Ecommerce" /></a>
                        </router-link>
                        <nav class="navbar">
                            <ul class="navbar_menu">

<router-link to="/">
 <li class="menu-item"><a class="menu-link"  id="13">	HOME</a></li>
</router-link>
                               
<router-link to="/about-us">

                                <li class="menu-item"><a class="menu-link"  id="14">	ABOUT US</a></li>
</router-link>
<router-link to="/shop">
                                <li class="menu-item"><a class="menu-link"  id="39">	SHOP</a></li>

</router-link>
<router-link to="/contact-us">
                                <li class="menu-item"><a class="menu-link"  id="44">	CONTACT</a></li>
                            </router-link>
                            </ul>
                            <div class="hamburger_container">
                                <i class="fa fa-bars" aria-hidden="true"></i>
                            </div>
                            <div class="header-middle">
                                <div class="container">
                                    <div class="header-middle-wrap">
                                        <div class="header-right ">
                                            <div class="cart single-btn">
                                                <a data-bs-toggle="offcanvas" href="#cartOffcanvasSidebar" role="button" aria-controls="cartOffcanvasSidebar" class="cart-btn header-btn">
                                                  <div class="btn-left selector menu cart-wrapper icon-wrapper" id="selector-menu">
  <i class="btn-icon bi bi-cart3"></i>
  <span class="cart-count" v-if="cartStore.cartCount > 0" >
{{ cartStore.cartCount }}

  </span>
</div>

                                                    <div class="btn-right">
                                                        <!-- <span class="btn-text">Your Cart</span> -->
                                                        <!-- 	<span class="price">$92.56</span> -->
                                                    </div>
                                                </a>
                                            </div>
                                              
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                       <div class="icon-wrapper" style="cursor: pointer;">
  <i class="fas fa-user" @click="goToProfile"></i>
</div>

       
    
                              </nav>
                    </div>
                  
                </div>
            </div>
        </div>
        
    </header>
    <div class="fs_menu_overlay" style="pointer-events: none;"></div>
    <div class="hamburger_menu">
        <div class="hamburger_close"><i class="fa fa-times" aria-hidden="true"></i></div>
        <div class="hamburger_menu_content text-right">

            <ul class="menu_top_nav">

<router-link to="/">
<li class="menu-item" id="menu-item"><a class="menu-link"  id="13">	HOME</a></li>
</router-link>
                
                <hr>

<router-link to="/about-us">
<li class="menu-item" id="menu-item"><a class="menu-link"  id="14">	ABOUT US</a></li>
</router-link>
                
                <hr>

<router-link to="/shop">
 <li class="menu-item" id="menu-item"><a class="menu-link" id="39">	SHOP</a></li>
</router-link>
               
                <hr>

<router-link to="/contact-us">
 <li class="menu-item" id="menu-item"><a class="menu-link"  id="44">	CONTACT</a></li>
</router-link>
               
                <hr>

            </ul>
        </div>
    </div>
    <!-- mobile-header-area area start here  side cart -->
    <div class="mobile-header-area d-block d-lg-none  bg-light">
        <div class="container">
            <div class="menu-wrap">
                <!-- <div class="header-left">
                    <a class="brand-logo" ><img class="brand-image" src="./image-250-78/uploads_setting_uploads-setting-vimas-logo-png-1.png" alt="Quick Ecommerce" /></a>
                </div> -->
                <div class="header-right">
                    <a data-bs-toggle="offcanvas" href="#cartOffcanvasSidebar" role="button" aria-controls="cartOffcanvasSidebar" class="cart-btn header-btn">
                        <div class="btn-left selector menu">
                            <i class="btn-icon flaticon-shopping-bag"></i>
                            <span class="count counts" id="quantitys" style="display:none;"></span>
                        </div>
                    </a>
                    <button class="menu-bar" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMobileMenu" aria-controls="offcanvasMobileMenu"><i class="fas fa-bars"></i></button>
                </div>
            </div>
        </div>
    </div>


    <!-- Cart Offcanvas Sidebar Menu area Start here  -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="cartOffcanvasSidebar" aria-labelledby="cartOffcanvasSidebarLabel">

        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="cartOffcanvasSidebarLabel" style="display: flex; align-items: center; gap: 140px;">
                Shopping Cart
                <div class="icon-wrapper">
          <i class="btn-icon bi bi-cart3"></i>
  <span class="cart-count" v-if="cartStore.cartCount > 0">
    {{ cartStore.cartCount }}
  </span>
                </div>
       
            </h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div class="offcanvas-body">
            <div class="cart-product-list side-cart">
            </div>
<section v-if="loading" class="cart-sec text-center my-5">
        <div class="spinner-border text-dark" role="status"></div>
      </section>
            <!-- empty-wish-list area start here  -->
            <div class="empty-wish-list section"  v-else-if="cartStore.cartItems.length === 0">
                <div class="container">
                    <div class="empty-box-wrap text-center">
                        <img class="empty-box-img" src="@/assets/ui/images/empty-box.webp" alt="empty-box" />
                        <p class="empty-box-content">Enjoy Shopping </p>
                     <router-link to="/shop"><a  class="primary-btn">Shop Now</a></router-link>   
                    </div>
                </div>
            </div>

            <!-- empty-wish-list area end here  -->
            <div class="total-bottom-part"  v-else >
                <div class="cart-cards">
  <div
    class="cart-card"
    v-for="item in cartStore.cartItems"
    :key="item.id"
  >
    <!-- Left: Image -->
    <div class="cart-card-img">
      <img class="prodimg"
        :src="image_url + item.image"
        alt="Product Image"
      />
    </div>

    <!-- Middle: Product info -->
    <div class="cart-card-info">
      <h6 class="cart-title">{{ item.name }}</h6>
      <p class="cart-subtext">Smooth | Nourish</p>

      <div class="cart-price">
        Rs.
        {{ item.sale_price !== null ? item.sale_price : item.price }}
      </div>

      <!-- Quantity -->
      <div class="cart-qty">
        <button
          class="quantity-btn"
         @click="cartStore.updateQty(item, 'decrement')"
        >−</button>

        <input
          type="text"
          class="quantity-input"
          v-model="item.qty"
          @change="cartStore.updateQty(item, 'input')"
        />

        <button
          class="quantity-btn"
         @click="cartStore.updateQty(item, 'increment')"
        >+</button>
      </div>
    </div>

    <!-- Right: Total & remove -->
    <div class="cart-card-total">
      <div class="total-price">
        Rs.
        {{
          (
            (item.sale_price !== null
              ? item.sale_price
              : item.price) * (item.qty || 1)
          ).toFixed(2)
        }}
      </div>

      <a
        class="remove-link"
        @click="cartStore.removeItem(item)"
      >
        Remove
      </a>
    </div>
  </div>
</div>

                <div class="total-count d-flex">
                    <h3>Total</h3>
                    <h4><span class="side-cart-prod-over-totals">₹{{ cartStore.subtotal }}</span></h4>
                </div>
                  <a  @click="handleCheckout()" class="proceed-to-btn d-block text-center" :style="{ cursor: checkoutLoading ? 'not-allowed' : 'pointer' }">
          <span v-if="checkoutLoading">
    <span class="loader"></span> Processing...
  </span>

  <span v-else>
    Proceed To Checkout
  </span>
        </a>
                <div class="view-cart-go">
                <router-link to="/cart">
View Cart
                </router-link>
                  
                </div>
            </div>

        </div>
    </div>
    <!-- Cart Offcanvas Sidebar Menu area end here  -->
</template>
<style scoped>
.cart-cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 20px;
}

.cart-card {
  display: flex;
  gap: 16px;
  padding: 16px;
  border: 1px solid #eee;
  border-radius: 10px;
  background: #fff;
  align-items: center;
}

.cart-card-img img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
}

.cart-card-info {
  flex: 1;
}

.cart-title {
  margin: 0;
  font-weight: 600;
}

.cart-subtext {
  font-size: 12px;
  color: #888;
  margin-bottom: 6px;
}

.cart-price {
  font-weight: 600;
  margin-bottom: 8px;
}

.cart-qty {
  display: flex;
  align-items: center;
  gap: 6px;
}

.quantity-btn {
  width: 28px;
  height: 28px;
  border: 1px solid #ddd;
  background: #f8f8f8;
  cursor: pointer;
}

.quantity-input {
  width: 40px;
  text-align: center;
  border: 1px solid #ddd;
}

.cart-card-total {
  text-align: right;
}

.total-price {
  font-weight: 700;
}

.remove-link {
  font-size: 13px;
  color: #dc3545;
  cursor: pointer;
}
.offcanvas.offcanvas-end .offcanvas-body .total-bottom-part {
    border-top:none;
    padding-top:0;

}
.cart-wrapper {
  position: relative;
  cursor: pointer;
}

.cart-wrapper .btn-icon {
  font-size: 18px;   
  color: #000;
}
.icon-wrapper {
  display: flex;
  justify-content: center;  
  align-items: center;      
  height: 100%;             
}

.cart-count {
  position: absolute;
  top: -13px;
  right: -8px;
  background: #ff3b3b;
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  min-width: 18px;
  height: 18px;
  line-height: 18px;
  border-radius: 50%;
  text-align: center;
}
@media(max-width:991px){
  .cart-wrapper .btn-icon,.fa-user{
        font-size: 25px;
  }
}
@media (max-width: 480px) {
    #selector-menu {
      margin-left:0 !important; 
      margin-top: 0 !important;
    }
    .cart-wrapper .btn-icon,.fa-user{
        font-size: 20px;
  }
  }
  .loader {
  width: 16px;
  height: 16px;
  border: 2px solid #fff;
  border-top: 2px solid transparent;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
  animation: spin 0.6s linear infinite;
  vertical-align: middle;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}

</style>
<script setup>

import { useRouter } from "vue-router";
import { image_url } from "../config/api";
import { useCartStore } from "../cartStore";
import { onMounted, ref } from "vue";
import { useUserStore } from "../assets/js/store";

const checkoutLoading=ref(false);
const router=useRouter();
const cartStore=useCartStore();
const couponCode = ref("");
const userStore=useUserStore()
const isLoggedIn = () => {
  return !!localStorage.getItem("authToken");
};

const handleCheckout = async () => {
   if (checkoutLoading.value) return;
     checkoutLoading.value = true;
     try {
       if (!isLoggedIn()) {
    router.push("/login");
      return;
  } 
        const success = await cartStore.checkout(couponCode.value);

  if (success) {
    router.push("/checkout");
  }
     } catch (error) {
     console.error(error);
  } finally {
    checkoutLoading.value = false;
  }

};



 

function goToProfile() {
  if (!isLoggedIn()) {
    router.push("/login");
  } else {
    router.push("/customer/profile");
  }
}

onMounted(() => {
  cartStore.fetchCart();
});
</script>
