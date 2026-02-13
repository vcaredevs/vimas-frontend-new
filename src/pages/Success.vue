<template>
  <div
    v-if="loading"
    class="d-flex justify-content-center align-items-center"
    style="height: 100vh"
  >
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div class="container suc-section" v-else>
    <div class="row">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 col-md-6 col-12 left">
            <div class="checkout-logo">
              <div class="container">
                <a
                  href="http://192.168.1.120/shop.vcaretrichology/public"
                  title="Vcare Shop"
                >
                  <img
                    src="https://192.168.1.120/shop.vcaretrichology/public/storage/logo/vcare-logo.png#id=78"
                    class="img-fluid"
                    width="150"
                    alt="Vcare Shop"
                  />
                </a>
              </div>
            </div>
            <hr />

            <div class="thank-you">
             
              <div class="d-inline-block">
                <h3 class="thank-you-sentence">
                  Your order is successfully placed
                </h3>
             
              </div>
            </div>

            <div class="container mt-3">
              <h3 style="font-size: calc(1rem + 0.6vw)">
                Customer information
              </h3>
              <div class="order-customer-info">
                <div class="row" style="padding: 10px 0">
                  <div class="col-md-4">
                    <span class="d-inline-block">Full name</span>
                  </div>
                  <div class="col-md-8">
                    <span class="order-customer-info-meta">
                      {{ successRes.address?.name }}</span
                    >
                  </div>
                </div>

                <div class="row" style="padding: 10px 0">
                  <div class="col-md-4">
                    <span class="d-inline-block">Phone</span>
                  </div>
                  <div class="col-md-8">
                    <span class="order-customer-info-meta">{{
                      successRes.address?.phone
                    }}</span>
                  </div>
                </div>

                <div class="row" style="padding: 10px 0">
                  <div class="col-md-4">
                    <span class="d-inline-block">Email</span>
                  </div>
                  <div class="col-md-8">
                    <span class="order-customer-info-meta">{{
                      successRes.address?.email
                    }}</span>
                  </div>
                </div>
                <div class="row" style="padding: 10px 0">
                  <div class="col-md-4">
                    <span class="d-inline-block">Address</span>
                  </div>
                  <div class="col-md-8">
                    <span class="order-customer-info-meta"
                      >{{ successRes.address?.address }} -
                      {{ successRes.address?.zip_code }}
                    </span>
                  </div>
                </div>
                <div class="row" style="padding: 10px 0">
                  <div class="col-md-4">
                    <span class="d-inline-block">Shipping method </span>
                  </div>
                  <div class="col-md-8">
                    <span class="order-customer-info-meta text-end"
                      >Shipping Charge - ₹{{
                        successRes.order?.shipping_amount
                      }}</span
                    >
                  </div>
                </div>

                <div class="row" style="padding: 10px 0">
                  <div class="col-md-4">
                    <span class="d-inline-block">Payment status </span>
                  </div>
                  <div class="col-md-8">
                    <span
                      class="order-customer-info-meta"
                      style="text-transform: uppercase"
                      ><span class="label-success status-label"
                        >Completed</span
                      ></span
                    >
                  </div>
                </div>
              </div>
            </div>
            <!-- <router-link
              :to="{ name: '/shop' }"
              class="btn btn-secondary greenbtn mt-2"
            >
              Continue shopping
            </router-link> -->
          </div>
          <!---------------------- start right column ------------------>
          <div class="col-lg-5 col-md-6 d-md-block right">
            <div class="container">
              <div class="pt-3 mb-4">
                <div class="align-items-center">
                  <h6 class="d-inline-block">
                    Order number: {{ successRes.order?.code }}
                  </h6>
                </div>

                <div class="checkout-success-products">
                  <div class="row show-cart-row d-md-none p-2">
                    <div class="col-9">
                      <a
                        class="show-cart-link"
                        href="javascript:void(0);"
                        data-bs-toggle="collapse"
                        data-bs-target="#cart-item-1381"
                      >
                        Order information
                        <i class="bi bi-chevron-down" aria-hidden="true"></i>
                      </a>
                    </div>
                    <!-- <div class="col-3">
                                            <p class="text-end mobile-total"> ₹1000 </p>
                                        </div> -->
                  </div>
                  <div id="cart-item-1381" class="collapse collapse-products">
                    <template
                      v-for="(data, index) in successRes.cart_details"
                      :key="index"
                    >
                      <div class="row cart-item">
                        <div class="col-lg-3 col-md-3">
                          <div class="checkout-product-img-wrapper">
                            <img
                              class="item-thumb img-thumbnail img-rounded"
                              :src="image_url + data.product?.image"
                              :alt="data.product?.name"
                            />
                            <span class="checkout-quantity">{{
                              data.qty
                            }}</span>
                          </div>
                        </div>
                        <div class="col-lg-5 col-md-5">
                          <p class="mb-0">{{ data.product.name }}</p>
                          <p class="mb-0">
                            <small></small>
                          </p>
                        </div>
                        <div class="col-lg-4 col-md-4 col-4 float-end text-end">
                          <p>
                            ₹{{
                              (
                                data.product.front_sale_price ??
                                data.product.front_sale_price
                              ).toFixed(2)
                            }}
                          </p>
                        </div>
                      </div>
                    </template>
                  </div>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-6">
                  <p>Subtotal:</p>
                </div>
                <div class="col-6 float-end">
                  <p class="price-text text-end">
                    ₹{{ successRes.order?.amount }}
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <p>Shipping fee:</p>
                </div>
                <div class="col-6 float-end">
                  <p class="price-text text-end">₹{{ shippingAmnt }}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <p>Discount:</p>
                </div>
                <div class="col-6 float-end">
                  <p class="price-text text-end">₹{{ discount }}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <p>Tax:</p>
                </div>
                <div class="col-6 float-end">
                  <p class="price-text text-end">
                    ₹{{ successRes.order?.tax_amount }}
                  </p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-6">
                  <p>Total:</p>
                </div>
                <div class="col-6 float-end">
                  <p class="total-text raw-total-text text-end">₹{{ total }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";

import { useRouter } from "vue-router";
import { getcheckoutSuccess } from "../services/apiService";
import { image_url } from "../config/api";
import { useCartStore } from "../cartStore";
const cartStore=useCartStore();
const subtotal = ref(0);
const amount = ref(0);
const shippingAmnt = ref(0);
const router = useRouter();

const loading = ref(false);
const successRes = ref([]);
const userId = atob(localStorage.getItem("user_id"));
const checkoutSuccess = async (id) => {

  loading.value = true;
  var payload = {
    id: id,
    user_id: userId,
  };
  const res = await getcheckoutSuccess(id, payload);
  successRes.value = res.data.data;
  amount.value = res.data.data.order?.amount;
  subtotal.value = res.data.data.order?.sub_total;
  shippingAmnt.value = res.data.data.order?.shipping_amount;
 cartStore.clearCart();
 cartStore.cartItems;

  loading.value = false;
  localStorage.removeItem("orderId");
};
//     const shippingAmnt=computed(()=>{
// return subtotal.value<999?100:0
// })
const discount = computed(() => {
  return amount.value - subtotal.value;
});
const total = computed(() => {
  return (
    Number(amount.value) - Number(discount.value) + Number(shippingAmnt.value)
  );
});
onMounted(() => {
  console.log("Orderidfetched");
  
  const orderId = localStorage.getItem("orderId")
    ? atob(localStorage.getItem("orderId"))
    : null;
  if (orderId) {
    checkoutSuccess(orderId);
  } else {
    router.push({ name: "Profile" });
  }
});
</script>
<style>

.suc-section {
  padding-top: 20rem;
}
.greenbtn {
  background-color: #0e302a;
}
</style>
