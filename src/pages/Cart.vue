<template>
     <!-- breadcrumb area start here  -->
    <div class="breadcrumb-area">
        <div class="container">
            <div class="breadcrumb-wrap text-center">
                <h2 class="page-title">Cart</h2>
                <ul class="breadcrumb-pages">
                    <li class="page-item"><a class="page-item-link" href="https://inway.com.in:443..">Home</a></li>
                    <li class="page-item">Shopping Cart</li>
                </ul>
            </div>
        </div>
    </div>
    <!-- breadcrumb area end here  -->
       <!-- wish-list area start here  -->
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
    <div class="wish-list-area cart-page-area section" v-else>
        <div class="container">

            <div class="row">
                <div class="col-12 wish-list-table">

                    <div class="table-responsive">
                        <table class="table table-bordered" id="mycartTable">
                            <thead>
                                <tr>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Remove</th>
                                </tr>
                            </thead>

                            <tbody>
                                <input type="hidden" value="9" class="pid">
                                <tr class="cart-page-item single-grid-product" data-sideVarSize="" data-sideVarPrice="325"  v-for="item in cartStore.cartItems"
                    :key="item.id">
                                    <td>
                                        <div class="single-grid-product m-0">
                                            <div class="product-top">
                                               
                                <img class="product-thumbnal"
                                   :src="image_url + item.image"
                        alt="Product Image">
                             
                                            </div>
                                            <div class="product-info text-center">
                                                <h3 class="product-name">
                                                    <a class="product-link" href="https://inway.com.in:443../product/aloevera-facial-gel">
                                 {{ item.name }}
                                </a>
                                                </h3>
                                            </div>
                                        </div>
                                    </td>


                                    <td>
                                        <div class="cart-quantity input-group button-container bg-light">
                                            <button
                        class="quantity-btn"
                       @click="cartStore.updateQty(item, 'decrement')"
                      >
                        -
                      </button>
                                             <input
                        type="text"
                        class="quantity mx-2 border-0 text-center"
                        style="width: 25px"
                        v-model="item.qty"
                        @change="cartStore.updateQty(item, 'input')"
                      />
                      <button
                        class="quantity-btn"
                       @click="cartStore.updateQty(item, 'increment')"
                      >
                        +
                      </button>
                                        </div>
                                    </td>


                                    <td>
                                        <button class="delet-btn emptyprodbtn" data-pid="9" title="Delete Item"  @click="cartStore.removeItem(item)">
                            <img src="@/assets/ui/images/close.svg" alt="close" />
                          </button>
                                    </td>
                                </tr>
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- Cart Page Bottom box area Start -->
            <div class="row cart-page-bottom-box-wrap">

                <!-- Discount Codes -->
                <!-- <div class="col-12 col-sm-12 col-md-12 col-lg-4">
                    <div class="cart-page-bottom-box">
                        <h2 class="bottom-box-title">Discount Codes</h2>
                        <form>
                            <div class="form-group">
                                <input type="text" class="form-control" name="coupon_code" placeholder="Enter your coupon code" />
                            </div>
                            <div class="form-button text-center">
                                <button type="button" class="form-btn">Apply Coupon</button>
                            </div>
                        </form>
                    </div>
                </div> -->

                <!-- Cart Options -->
                <!-- <div class="col-12 col-sm-12 col-md-12 col-lg-4">
                    <div class="cart-page-bottom-box">
                        <h2 class="bottom-box-title">Cart Options</h2>
                        <form>
                            <div class="form-button text-center">
                                <button type="button" class="form-btn">Update Cart</button>
                            </div>
                            <div class="pt-4 form-button text-center">
                               <button type="button" class="form-btn proceed-to-checkout-btn">Shopping</button>
                            </div>
                            <div class="pt-4 form-button text-center">
                                <button type="button" class="form-btn emptycartbtn">Empty Cart</button>
                            </div>
                        </form>
                    </div>
                </div> -->

                <!-- Totals -->
                <div class="col-12 col-sm-12 col-md-12 col-lg-4">
                    <div class="cart-page-bottom-box cart-page-sub-total-box">
        

     <div class="form-button text-center" @click="handleCheckout()" :style="{cursor: checkoutLoading? 'not-allowed': 'pointer'}">
                            <a  class="form-btn proceed-to-checkout-btn">     <span v-if="checkoutLoading">
    <span class="loader"></span> Processing...
  </span>

  <span v-else>
    Proceed To Checkout
  </span></a>
                        </div>

                       
                    </div>
                </div>  
                <!-- Cart page bottom box -->
            </div>
            <!-- Cart Page Bottom box area End -->

        </div>
    </div>
    <!-- wish-list area end here  -->
</template>
<style scoped>
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
.quantity-btn{
    background: none !important;
    border: none !important;
}
</style>
<script setup>
import { onMounted, ref } from 'vue';
import { useCartStore } from '../cartStore';
import { image_url } from '../config/api';
import { useRouter } from "vue-router";
import { useUserStore } from '../assets/js/store';
const cartStore=useCartStore();
const couponCode = ref("");
const checkoutLoading=ref(false);
const router=useRouter();
const loading = ref(true);
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
onMounted(async () => {
  loading.value = true;

  await cartStore.fetchCart();

  loading.value = false;
});
</script>