<template>
    
  <section class="page" >
    <div class="page__wrapper">
      <section v-if="loading" class="cart-sec text-center my-5">
  <div class="spinner-border text-dark" role="status"></div>
  
</section>
      <section v-else-if="cartItems.length === 0" class="cart-sec text-center my-5">
      <h3>Your cart is empty 🛒</h3>
      <router-link to="/product">
        <button class="btn btn-dark mt-3">Shop Now</button>
      </router-link>
    </section>
      <!--------cart section start---------->
      <section v-else class="cart-sec">
        <div class="container my-5">
          <h2 class="mb-4">Cart</h2>
          <div class="row align-items-center">
            <div class="col-lg-8">
              <table class="table cart-table">
                <thead>
                  <tr>
                    <th>PRODUCT</th>
                    <th>PRICE</th>
                    <th>QUANTITY</th>
                    <th>TOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="cart-inner"
                    v-for="item in cartItems"
                    :key="item.id"
                  >
                    <td class="d-flex align-items-center">
                      <img
                        :src="image_url + item.image"
                        alt="Product Image"
                        class="cart-item-img me-3"
                      />
                      <div>
                        <strong>{{ item.name }}</strong
                        ><br />
                        <small class="p1">Skin Type: Oil</small><br />
                        <small class="p1">Item Volume: 100 Millilitres</small>
                      </div>
                    </td>

                    <td>
                      Rs. <span class="price">{{ item.sale_price!==null? item.sale_price:item.price}}</span>
                    </td>

                    <td>
                      <button
                        class="quantity-btn"
                        @click="qtychange(item, 'decrement')"
                      >
                        -
                      </button>
                      <input
                        type="text"
                        class="quantity mx-2 border-0 text-center"
                        style="width: 25px"
                        v-model="item.qty"
                        @change="qtychange(item, 'input')"
                      />
                      <button
                        class="quantity-btn"
                        @click="qtychange(item, 'increment')"
                      >
                        +
                      </button>
                    </td>

                    <td>
                      Rs.
                      <span class="total">
                        {{ ((item.sale_price !==null?item.sale_price:item.price) * (item.qty || 1)).toFixed(2) }}
                      </span>
                      <a style="cursor: pointer;"
                        class="remove-link d-block mt-2"
                        @click="deleteItem(item)"
                        >Remove</a
                      >
                    </td>
                  </tr>
                </tbody>
               
              </table>
            </div>

            <!-- Order Summary -->
            <div class="col-lg-4">
              <div class="order-summary">
                <h5>Order Summary</h5>
                <div class="order-sec">
                  <div class="d-flex justify-content-between mb-2">
                    <span>Sub Total</span>
                    <span>Rs. <span id="subtotal">{{ subtotal }}</span></span>
                  </div>
                  <div class="d-flex justify-content-between mb-3">
                    <span>Shipping</span>
                    <span>{{ shippingAmnt }}</span>
                  </div>
                  <div class="apply-coupon mb-3">
                    <label for="coupon" class="form-label"
                      >Apply Coupon codes</label
                    >
                    <div class="input-group">
                      <input
                        type="text"
                        id="coupon"
                        class="form-control"
                        v-model="couponCode"
                        placeholder="Enter coupon code"
                      />
                      
                      <button class="btn" @click="applyCoupon">Apply</button>
                  
                    </div>
                        <p class="text-success mt-2">{{ message }}</p>
                  </div>
                </div>
                <div class="total d-flex justify-content-between">
                  <strong>Total Payable</strong>
                  <strong>Rs. <span id="totalPayable">{{ total }}</span></strong>
                </div>
              </div>

              <!-- <router-link to="/checkout"> -->
                <button class="checkout-btn mt-4 text-white" @click="checkout()">
                  Check Out
                </button>
                <!-- </router-link> -->
            </div>
          </div>
        </div>
      </section>
      <!--------card section start---------->

      <!-----------buy section start---------->
      <div class="bestproduct-sec">
        <div class="container my-5">
          <div class="row justify-content-center">
            <div class="section_header1">
              <h2>People also bought</h2>
              <img src="../assets/images/heading-underline.png" class="heading_image">
            </div>
            <div class="row justify-content-center">
              <div
                class="col-md-3"
                v-for="product in limitedProducts"
                :key="product.id"
              >
                <div class="product-card">
                  <div class="product-image">
                    <router-link
                      :to="
                        product.slug
                          ? {
                              name: 'ProductDetail',
                              params: { slug: product.slug.key },
                            }
                          : ''
                      "
                    >
                      <img
                        class="zoom_image"
                        :src="image_url + product.image"
                        :alt="product.name"
                    /></router-link>
                  </div>
                  <button
                    @click="addToCart(product)"
                    class="btn btn-dark mt-2"
                    style="background-color: #09302a !important"
                  >
                    <div>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.03857 2.29251C2.8508 2.22647 2.64448 2.23773 2.46501 2.32381C2.28554 2.40989 2.14761 2.56374 2.08157 2.75151C2.01553 2.93928 2.02679 3.1456 2.11287 3.32507C2.19895 3.50454 2.3528 3.64247 2.54057 3.70851L2.80257 3.79951C3.46957 4.03451 3.90857 4.18951 4.23157 4.34851C4.53457 4.49751 4.66857 4.61851 4.75657 4.74651C4.84657 4.87851 4.91657 5.06051 4.95657 5.42351C4.99657 5.80351 4.99757 6.29851 4.99757 7.03851V9.64051H20.7226C21.0526 7.98251 21.2076 7.14051 20.7746 6.57751C20.3306 6.00051 18.8136 6.00051 17.1286 6.00051H6.49057C6.48599 5.75401 6.47131 5.50781 6.44657 5.26251C6.39357 4.76551 6.27657 4.31251 5.99457 3.90051C5.71057 3.48451 5.33257 3.21851 4.89257 3.00151C4.48057 2.79951 3.95657 2.61551 3.33957 2.39851L3.03857 2.29251Z"
                          fill="white"
                        ></path>
                        <path
                          opacity="0.5"
                          d="M20.2 12.1876L20.7 9.76362L20.724 9.64062H5C5 12.5816 5.063 13.5526 5.93 14.4666C6.796 15.3806 8.19 15.3806 10.98 15.3806H16.282C17.843 15.3806 18.624 15.3806 19.175 14.9306C19.727 14.4806 19.885 13.7166 20.2 12.1876Z"
                          fill="white"
                        ></path>
                        <path
                          d="M7.5 18C7.89782 18 8.27936 18.158 8.56066 18.4393C8.84196 18.7206 9 19.1022 9 19.5C9 19.8978 8.84196 20.2794 8.56066 20.5607C8.27936 20.842 7.89782 21 7.5 21C7.10218 21 6.72064 20.842 6.43934 20.5607C6.15804 20.2794 6 19.8978 6 19.5C6 19.1022 6.15804 18.7206 6.43934 18.4393C6.72064 18.158 7.10218 18 7.5 18ZM16.5 18C16.8978 18 17.2794 18.158 17.5607 18.4393C17.842 18.7206 18 19.1022 18 19.5C18 19.8978 17.842 20.2794 17.5607 20.5607C17.2794 20.842 16.8978 21 16.5 21C16.1022 21 15.7206 20.842 15.4393 20.5607C15.158 20.2794 15 19.8978 15 19.5C15 19.1022 15.158 18.7206 15.4393 18.4393C15.7206 18.158 16.1022 18 16.5 18Z"
                          fill="white"
                        ></path>
                      </svg>
                      <div class="button-text" @click="addToCart(product)"> Add to cart</div>
                    </div>
                  </button>
                  <div class="product-details">
                    <div class="product-rating">
                      <svg
                        role="presentation"
                        fill="none"
                        focusable="false"
                        width="20"
                        height="20"
                        class="rating__star icon icon-rating-star"
                        viewBox="0 0 15 15"
                      >
                        <path
                          d="M7.5 0L9.58587 5.2731L15 5.72949L10.875 9.44483L12.1353 15L7.5 12.0231L2.86475 15L4.125 9.44483L0 5.72949L5.41414 5.2731L7.5 0Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      4.5 (100 reviews)
                    </div>
                    <h5 class="product-title">{{ product.name }}</h5>
                    <p>Smooth | Nourish</p>
                    <div class="product-price">
                      <del>{{ product.original_price }}</del>
                      <span>{{ product.front_sale_price }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- <div class="text-center btn-view-all">
                <button class="btn btn-dark">View all products</button>
              </div> -->
          </div>
        </div>
      </div>
      <!--------buy section end------------->
    </div>
  </section>
</template>
<style>
.cart-sec {
  padding-top: 6rem;
}
</style>
<script setup>
import { computed, onMounted, ref } from "vue";
import {
  deleteCartList,
  displayCartDetails,
  getCartCount,
  getCheckoutDetails,
  getProducts,
  postCoupon,
  updateToCartApi,
} from "../services/apiService";
import { image_url } from "../config/api";
import {
  addToCart,
  cartCount,
  decreaseCount,
  increaseCount,
} from "../services/cartService";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { getOrCreateAuthUserId } from "../utils/authUser";
const productList = ref([]);
const cartItems = ref([]);
const loading = ref(true)
const message=ref("")
const {setCheckoutData} = useUserStore();
import { useRouter } from "vue-router";
import { useUserStore } from "../assets/js/store";

const router = useRouter();
const userId = atob(localStorage.getItem("user_id"));
async function getCartDetails() {
    loading.value = true
  try {
    
    const payload = {
      user_id: userId,
    };
  
    const productRes = await displayCartDetails(payload);
    const countRes = await getCartCount(userId);
    const cartQtyMap = {};
    countRes.data.cart_items.forEach((item) => {
      cartQtyMap[item.product_id] = item.qty;
    });
    cartItems.value = productRes.data.data.map((product) => ({
      ...product,
      qty: cartQtyMap[product.id] || 1,
    }));
  } catch (error) {
    console.error(error);
  }
   finally {
    loading.value = false
  }
}
async function fetchProducts(page = 1, param = null) {
  try {
    const result = await getProducts(page, param);

    productList.value = result.data.data ?? result.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
const limitedProducts = computed(() => {
  return productList.value.slice(0, 4);
});

const props = defineProps({
  cartItems: {
    type: Array,
    required: true,
  },
});

async function qtychange(item, type) {
  const userId = getOrCreateAuthUserId();
  const prevQty = Number(item.qty || 1);

  let newQty = prevQty;

  if (type === "increment") newQty++;
  if (type === "decrement" && prevQty > 1) newQty--;

  if (newQty === prevQty) return;

  try {
    const payload = {
      user_id: userId,
      product_id: item.product_id ?? item.id,
      qty: newQty,
    };

    await updateToCartApi(payload);

    item.qty = newQty;

    if (type === "increment") increaseCount(1);
    if (type === "decrement") decreaseCount(1);

    toast.success("Cart updated successfully");
  } catch (err) {
    toast.error(err || "Failed to update cart");
  }
}

async function deleteItem(item) {
  const userId = getOrCreateAuthUserId();
  try {
    item.loading = true;
    const payload = {
      user_id: userId ? parseInt(userId) : null,
      product_id: item.id,
    };
    const res = await deleteCartList(payload);
    cartItems.value = cartItems.value.filter(
      (p) => (p.product_id ?? p.id) !== (item.product_id ?? item.id),
    );
    decreaseCount(item.qty || 1);
    toast.error("Cart Item Deleted Successfully", {});
  } catch (err) {
    console.error(err);
  } finally {
    item.loading = false;
  }
}
const subtotal = computed(() => {
  return cartItems.value.reduce((sum, item) => {
    const qty = Number(item.qty || 1);
    const price = Number((item.sale_price!==null?item.sale_price:item.price) || 0);
    return sum + price * qty;
  }, 0);
});

const shippingAmnt=computed(()=>{
return subtotal.value<999?100:0
})


const couponCode = ref("");
const applyCoupon=async()=>{
  try {
    const payload={
      user_id:userId,
      coupon_code:couponCode.value
    }
    const res=await postCoupon(userId,payload);
message.value=res.data.message
  } catch (error) {
    console.error(error)
  }
}

const total=computed(()=>{
  return (subtotal.value + shippingAmnt.value )
})

 const checkout = async ()=>{
   
        let userId = localStorage.getItem("user_id") ? atob(localStorage.getItem("user_id")) :null
        var payload = {
           
            coupon_code:couponCode.value,
           
        }
        try{    
            
            const res = await getCheckoutDetails(userId,payload);
        if (res.status) {
     setCheckoutData(res.data);
      router.push("/checkout");
    }
          
           
           
        }
       catch (err) {
  console.error("Checkout error:", err);


}

        finally{
        }
    }

onMounted(() => {
  getCartDetails();
  fetchProducts();
});
</script>
