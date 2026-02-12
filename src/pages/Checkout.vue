<template>
        <!-- breadcrumb area start here  -->
    <div class="breadcrumb-area">
        <div class="container">
            <div class="breadcrumb-wrap text-center">
                <h2 class="page-title">Checkout</h2>
                <ul class="breadcrumb-pages">
                    <li class="page-item"><a class="page-item-link" href="https://inway.com.in:443..">Home</a></li>
                    <li class="page-item">Checkout</li>
                </ul>
            </div>
        </div>
    </div>
    <!-- breadcrumb area end here  -->
       <!-- checkout page area start here  -->
    <section class="page-content section">
        <div class="checkout">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <div class="checkout-form" >
                            <div v-if="defaultAddress">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <h2 class="checkout-title">Billing Address</h2>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <input type="text" class="form-control" id="c_name" name="c_name" placeholder="Your Name Here"  v-model="defaultAddress.name"/>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <input type="text" class="form-control" id="c_email" name="c_email" placeholder="Email Address" v-model="defaultAddress.email" />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <input type="text" class="form-control" id="c_address" name="c_address" placeholder="Street Address"  v-model="defaultAddress.address"/>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <input type="text" class="form-control" id="c_city" name="c_city" placeholder="City"  v-model="defaultAddress.city"/>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" id="c_state" name="c_state" placeholder="State/Country" v-model="defaultAddress.state"/>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" id="c_pin" name="c_pin" placeholder="Zip/Postal Code"  v-model="defaultAddress.zip_code" />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <input type="text" class="form-control" id="c_phone" name="c_phone" placeholder="Phone Number"   v-model="defaultAddress.phone"/>
                                        </div>
                                    </div>
                                   
                                    <div class="col-lg-12">


                                        <textarea type="text" name="c_notes" id="c_notes" rows="5" class="form-control" style="font-size:14px;" placeholder="   Write order your notes here..."></textarea>


                                    </div>
                                    
                 

                                </div>
                                <div class="payment-method">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <h2 class="checkout-title">Payment Method</h2>
                                        </div>

                                        <div class="col-lg-12">
                                            <!-- <div class="form-group">
                                                <div class="form-check card-check">
                                                    <input class="form-check-input" type="radio" name="payment" id="upi" value="upi">
                                                    <label class="form-check-label" for="upi">UPI by qr</label>
                                                    <div class="input-icon">
                                                        <img src="https://inway.com.in:443../image-118-30/uploads_payment_upi.png" alt="UPI">
                                                    </div>
                                                </div>
                                            </div> -->
                                            <div class="form-group">
                                                <div class="form-check card-check">
                                                    <input class="form-check-input" type="radio" name="payment" id="razor_pay" value="razor_pay">
                                                    <label class="form-check-label" for="razor_pay">Razorpay</label>
                                                    <!-- <div class="input-icon">
                                                        <img src="https://inway.com.in:443../image-118-30/uploads_payment_razorpay_razorpay.png" alt="razorpay">
                                                    </div> -->
                                                </div>
                                            </div>
                                            <!-- <div class="form-group">
                                                <div class="form-check card-check">
                                                    <input class="form-check-input" type="radio" name="payment" id="paypal" value="paypal">
                                                    <label class="form-check-label" for="paypal">Paypal</label>
                                                    <div class="input-icon">
                                                        <img src="https://inway.com.in:443../image-118-30/uploads_payment_paypal_paypal.png" alt="Paypal">
                                                    </div>
                                                </div>
                                            </div> -->
                                            <!-- <div class="form-group">
                                                <div class="form-check card-check">
                                                    <input class="form-check-input" type="radio" name="payment" id="cod" value="cod" checked>
                                                    <label class="form-check-label" for="cod">Cash On
																Delivey</label>
                                                    <div class="input-icon">
                                                        <img src="https://inway.com.in:443../image-118-30/uploads_payment_cod.jpg" alt="Cash On Delivey">
                                                    </div>
                                                </div>
                                            </div> -->
                                            <!-- <div class="modal fade" id="edit-upi-form" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-dialog-centered">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h4 class="modal-title" id="edit-upi-form">UPI Payment</h4>
                                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body pt-5 text-center">

                                                            <img class="border p-5" src="../uploads/payment/upi/qr.jpg" width="60%"></img><br><br>


                                                            <ul class="summary-list" style="padding: 1rem 8rem;">
                                                                <li style="display: flex; justify-content: space-between;">
                                                                    Subtotal <span class="float-right">₹1,050.00</span>
                                                                </li>
                                                                <li style="display: flex; justify-content: space-between;">
                                                                    Tax 0 % <span class="float-right"><b>₹0.00</b></span>
                                                                </li>
                                                                <li style="display: flex; justify-content: space-between;">
                                                                    Shipping <span class="float-right">₹99.00</span>
                                                                </li>
                                                            </ul>
                                                            <div class="total-amount" style="padding: 1rem 8rem;">
                                                                <h3 style="display: flex; justify-content: space-between;">
                                                                    Total Cost <span class="float-right text-danger">₹1149.00</span>
                                                                </h3>
                                                            </div>

                                                        </div>
                                                        <div class="modal-footer">
                                                             <button type="button" class="checkout-btn btn btn-primary submit-order-whatsapp-modal">Place
																Order On Whatsapp</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> -->
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-group form-check terms-agree pt-3">
                                                <input type="checkbox" class="form-check-input" id="agree" />
                                                <label class="form-check-label" for="agree">By clicking the button you
													agree to our <a href="https://inway.com.in:443../terms">Terms &
														Conditions</a></label>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <button class="checkout-btn"  @click="payNow()">Pay now</button>
                                        </div>
                                        <!-- <div class="col-lg-12">
                                            <button type="submit" class="checkout-btn form-btn razorpay-make-payment razorpay-payment-order-whatsapp" style="display:none;">Pay with Razorpay</button>

                                        </div>
                                        <div class="col-lg-12">
                                            <button type="submit" class="checkout-btn form-btn paypal-make-payment paypal-payment-order-whatsapp" style="display:none;">Pay with PayPal</button>
                                            <div id="paypal-button-container" style="display:none;"></div>

                                        </div>
                                        <div class="col-lg-12">
                                            <button type="submit" class="checkout-btn form-btn upi-payment-order-whatsapp" style="display:none;">Make UPI Payment</button>
                                        </div> -->


                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="cart-summary">
                            <div class="summary-top d-flex gap-3">
                                <h2>Cart Summary</h2>
                                <router-link to="/cart">
                                    <h2>Edit</h2>

                                </router-link>
                                
                            </div>
                            <ul class="cart-product-list">
                                <li class="single-cart-product d-flex justify-content-between" v-for="product in cartIDetails"
                    :key="product.id">
                                    <div class="product-info">
                                        <h3>{{ product.product.name }}</h3><span>Qty:{{ product.qty }}</span>
                                        <p>Per Unit  {{
                        product.product.sale_price !== null
                          ? product.product.sale_price
                          : product.product.price
                      }}</p>
                                    </div>
                                    <div class="price-area">
                                      <h3 class="price">
  ₹{{
    (product.product.sale_price !== null
      ? product.product.sale_price
      : product.product.price) * product.qty
  }}
</h3>

                                    </div>
                                </li>
                               

                            </ul>

                            <ul class="summary-list" style="padding: 1rem 2rem;">
                                <li>Subtotal <span>₹{{ subtotal }}</span></li>
                                <li>Tax <span>including tax</span></li>
                                <li>Shipping <span>₹{{ shippingAmnt }}</span></li>
                            </ul>
                            <div class="total-amount" style="padding: 1rem 2rem;">
                                <h3>Total Cost <span class="float-right">------₹{{ total }}</span></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- checkout page area end here  -->
</template>
<script setup>
import { computed, onMounted, ref, watch } from "vue";
import {
  displayCartDetails,
  getCartCount,
  getCheckoutDetails,
  getCustomerAddress,
  postCustomerAddress,
  sendPaymentDetails,
} from "../services/apiService";
import { image_url, razorpay_key } from "../config/api";
import { useRouter } from "vue-router";
import { useUserStore } from "../assets/js/store";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
const { store } = useUserStore();
//  const checkoutData=store.checkoutData?.cart_details || []
// const checkoutData = store.checkoutData;
const router = useRouter();
const waitpayment = ref(false);
const cartIDetails = ref([]);
let orderId = ref(null);
const addresses = ref([]);
const addressdetails = ref(null);

const subtotal = computed(() => {
  return cartIDetails.value.reduce((total, item) => {
    const qty = Number(item.qty || 1);
    const price = Number(
      (item.product?.sale_price !== null
        ? item.product.sale_price
        : item.product.price) || 0,
    );
    return total + qty * price;
  }, 0);
});
const shippingAmnt = computed(() => {
  return subtotal.value < 999 ? 100 : 0;
});
const total = computed(() => {
  return subtotal.value + shippingAmnt.value;
});

const showAddressModal = ref(false);
const loading = ref(false);
const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  alt_phone: "",
  city: "",
  state: "",
  pincode: "",
  address: "",
  is_default: 0,
});

function openAddressModal() {
  showAddressModal.value = true;
}

function closeAddressModal() {
  showAddressModal.value = false;
}

async function saveAddress() {
  try {
    loading.value = true;

    const payload = {
      name: `${form.value.firstName} ${form.value.lastName}`.trim(),
      email: form.value.email,
      phone: form.value.phone,
      alt_phone: form.value.alt_phone || null,
      zip_code: form.value.pincode || null,
      is_valid_pincode: form.value.zip_code ? true : null,
      state: form.value.state || null,
      city: form.value.city || null,
      address: form.value.address,
      is_default: form.value.is_default,
      user_id: Number(atob(localStorage.getItem("user_id"))),
    };

    const res = await postCustomerAddress(payload);

    toast.success("Address added successfully ");
    await fetchAddresses();

    closeAddressModal();
    resetForm();
  } catch (err) {
    toast.error("Failed to save address ");
  } finally {
    loading.value = false;
  }
}

function resetForm() {
  form.value = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    alt_phone: "",
    city: "",
    state: "",
    zip_code: "",
    address: "",
    is_default: 0,
  };
}

    async function fetchAddresses() {
    try {
     
        loading.value = true;
        // const userId = atob(localStorage.getItem("user_id"));
const userId=7;
        const res = await getCustomerAddress(userId);
        console.log("res.data", res.data.data.data);

        addresses.value = res.data.data.data;
        console.log("addresses.value ", addresses.value);
    } catch (err) {
        console.error("Failed to fetch addresses", err);
    } finally {
        loading.value = false;
    }
    }
const couponcode = ref("");
const fetchproductcheckout = () => {
  

  const res = store.checkoutData.data;

  if (!res?.cart_details) return;

  cartIDetails.value = res.cart_details;
  orderId.value = res.orderId;
    console.log("cartIDetails.value",cartIDetails.value);
      console.log("res.orderId",res.orderId);
};
const defaultAddress = computed(() => {
  if (!Array.isArray(addresses.value)) return null;
  return addresses.value.find((addr) => addr.is_default === 1) || null;
});
// console.log("defaultAddress",defaultAddress);

watch(defaultAddress, (val) => {
  if (val) {
    addressdetails.value = val;
    showDefaultAddress.value = true;
  }
});
onMounted(() => {
  fetchAddresses();
});

watch(
  () => store.checkoutData,
  (val) => {
    // console.log("CheckoutData in checkout page:", val);
    if (!val) return;

    const cartDetails = val?.data?.cart_details;
// console.log("cartDetails",cartDetails);


    if (cartDetails && cartDetails.length === 0) {
      router.push("/cart");
      return;
    }

    if (cartDetails?.length > 0) {
      fetchproductcheckout();
    }
  },
  { immediate: true }
);


const showDefaultAddress = ref(true);
const addressForm = ref({
  address: "",
  alt_phone: null,
  city: "",
  country: "",
  customer_id: "",
  email: "",
  name: "",
  phone: "",
  state: "",
  zip_code: "",
});

// let ordersId = ref(null);

const payNow = async () => {
  if (!addressdetails.value) {
    alert("Please add or select a delivery address");
    return;
  }
  if (!showDefaultAddress.value) {
    addressdetails.value = addressForm.value;
  }
  let status;
  let tot_amount = Number(Math.round(subtotal.value));
//   const userId = atob(localStorage.getItem("user_id"));
 const userId =7
  const options = {
    key: razorpay_key,
    amount: tot_amount * 100,
    currency: "INR",
    name: "Prabha's Vcare",
    description: `Pay bill of Rs.${tot_amount * 100}`,
    order_id: orderId.value,
    handler: async function (response) {
      waitpayment.value = true;
      if (response) {
        status = "completed";
      }
      const normalizedAddress = {
        ...addressdetails.value,
        pincode: addressdetails.value.zip_code,
      };

      var payload = {
        subTotal: subtotal.value,
        grandTotal: Math.round(total.value),
        tax: 0,
        shipping_amount: shippingAmnt.value,
        address: normalizedAddress,
        payment: response,
        userId: userId,
        customer_id: userId,
        amount: Math.round(total.value),
        //  'coupon_code':
        currency: "INR",

        shipping_method: "default",
        payment_channel: "razorpay",

        order_id: orderId.value,
        payment_method: "razorpay",
        charge_id: response.razorpay_payment_id,
        razor_pay_status: status,
      };

      const res = await sendPaymentDetails(userId, payload);

      if (res?.data?.status && res?.data?.data?.id) {
        localStorage.setItem("orderId", btoa(res.data.data.id));
        waitpayment.value = false;
        router.push({ name: "Success" });
      }
    },
    prefill: {
      name: addressdetails.value?.name || "",
      email: addressdetails.value?.email || "",
      contact: addressdetails.value?.phone || "",
    },
    theme: {
      color: "#3399cc",
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();

  rzp.on("payment.failed", function (response) {
    console.error(" Payment Failed:", response.error);
    alert(response.error.description);
  });
};
</script>   