<template>
     <section class="page">
        <div class="page__wrapper">
 <!-- Navbar -->
 <div class="d-flex justify-content-center align-items-center head-start  text-center" >
    <img src="../assets/images/Trichella Logo-02 2.png" alt="">
 </div>

<!--------checkout section start------------>
<section class="check-sec">
    <div class="container my-5">
        <div class="checkout-title">CHECK OUT</div>
        
        <div class="row mt-4">
            <!-- Delivery Info -->
            <div class="col-lg-7">
                <div class="card1 mb-4">
                    <div class="delivery-info">
                        <h5>Delivery Info</h5>


                        <hr>
                        <div class="d-flex">
                          <div v-if="defaultAddress" class="address-card">
  <h6>Default Address</h6>

  <p>
    {{ defaultAddress.name }}<br />

    {{ defaultAddress.address }}<br />

    <span v-if="defaultAddress.city">
      {{ defaultAddress.city }},
    </span>

    <span v-if="defaultAddress.state">
      {{ defaultAddress.state }},
    </span>

    {{ defaultAddress.zip_code }}<br />

    Ph: {{ defaultAddress.phone }}
  </p>
</div>

<div v-else class="address-card">
  <p>No default address found</p>
</div>

                            <div class="add-new-address" @click="openAddressModal">
                                <p><span class="add-address-plus">+</span><br>Add new address</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
<!-- =============== -->

<!-- Modal Overlay -->
<div v-if="showAddressModal" class="modal-overlay" @click.self="closeAddressModal">
  <div class="modal-box">

    <!-- Header -->
    <div class="d-flex p-3 add_address_head align-items-center">
     
      <div class="pers_info_head text-center w-100">Add Address</div>
       <button @click="closeAddressModal" id="backBtn">
        X
      </button>
    </div>

    <!-- Form -->
    <div class="row g-3 px-4 py-3">
      <div class="col-sm-6">
        <input class="form-control" v-model="form.firstName" placeholder="First name" />
      </div>
      <div class="col-sm-6">
        <input class="form-control" v-model="form.lastName" placeholder="Last name" />
      </div>
      <div class="col-sm-6">
        <input class="form-control" v-model="form.phone" placeholder="Mobile No." />
      </div>
      <div class="col-sm-6">
        <input class="form-control" v-model="form.email" placeholder="Email Id" />
      </div>
      <div class="col-sm-12">
        <textarea
          class="form-control"
          rows="4"
          v-model="form.address"
          placeholder="Address"
        ></textarea>
      </div>
      <div class="col-sm-4">
        <input class="form-control" v-model="form.city" placeholder="City" />
      </div>
      <div class="col-sm-4">
        <input class="form-control" v-model="form.state" placeholder="State" />
      </div>
      <div class="col-sm-4">
        <input class="form-control" v-model="form.pincode" placeholder="Pincode" />
      </div>
<div class="form-check mt-2">
  <input
    class="form-check-input"
     type="checkbox"
    value="1"
    v-model="form.is_default"
    id="defaultAddress"
  />
  <label class="form-check-label" for="defaultAddress">
    Set as default address
  </label>
</div>

      <div class="text-center">
        <button class="add_address_btn my-3" @click="saveAddress">
          Add address
        </button>
      </div>
    </div>
  </div>
</div>



<!-- ======================= -->
                <!-- Payment Details -->
                <div class="card1 ">
                    <div class="payment-details">
                        <h5>Payment Details</h5>
                        <hr>

                        <div class="payment-option d-flex align-items-center">
                            <input type="radio" name="payment" id="razorpay" checked>
                            <label for="razorpay" class="ms-3">
                                Razorpay Secure <span class="text-muted">Free Shipping above Rs.299.00</span>
                            </label>
                        </div>
                        <!-- <div class="payment-option d-flex align-items-center">
                            <input type="radio" name="payment" id="cod">
                            <label for="cod" class="ms-3">
                                Cash on delivery <span class="text-muted">Delivery Charges: Rs.99.00</span>
                            </label>
                        </div> -->
                    </div>
                </div>
    
            </div>
    
            <!-- Order Summary -->
            <div class="col-lg-5">
                <div class="card1 h-100">
                    <div class="order-summary">
                        <h5>Order Summary</h5>
                        <hr>
                        <div class="d-flex align-items-center mt-3"  v-for="product in cartIDetails"
                :key="product.id">
                            <img :src="image_url + product.product.image" alt="Product Image">
                            <div class="ms-3">
                                <strong>{{ product.product.name }}</strong><br>
                                Qty:  {{ product.qty}}<br>
                               {{ product.product.sale_price!==null?product.product.sale_price:product.product.price }}
                            </div>
                        </div>
                        <hr>
                    
    
                        <div class="mt-4 p-2 w-100 text-muted">
                            <div class="saving bg-light">You are saving <span>₹0</span> on this order</div> 
                        </div>
                        <div class="d-flex justify-content-center flex-column align-items-center">
                            <div class="d-flex justify-content-between mt-3">
                                <span>Sub Total</span>
                                <span>{{ subtotal }}</span>
                            </div>
                             <div class="d-flex justify-content-between mt-3">
                                <span>Shipping cost</span>
                                <span>₹{{ shippingAmnt }}</span>
                            </div>
                          <div class="d-flex justify-content-between mt-3">
                                <span>Coupon</span>
                                <span>₹{{ couponAmnt }}</span>
                            </div>
                            <div class="d-flex justify-content-between total-amount mt-3">
                                <strong>Total</strong>
                                <strong>{{ total }}</strong>
                            </div>
                            <p style="width: 70%;">including all taxes</p>
                            <button class="pay-now-btn mt-4" id="payNow" @click="payNow()">Pay now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
    <!-- <a href="cart.html" class="back-to-cart mb-3">&lt; Back to cart</a> -->

</section>
<!------checkout section end------------->
 
  
  
        </div>
    </section>
</template>
<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import { displayCartDetails, getCartCount, getCheckoutDetails, getCustomerAddress, postCustomerAddress, sendPaymentDetails } from '../services/apiService';
import { image_url, razorpay_key } from '../config/api';
import { useRouter } from "vue-router";
import { useUserStore } from '../assets/js/store';

const { store } = useUserStore();

const checkoutData = store.checkoutData;
const router = useRouter();
 const waitpayment = ref(false);
const cartIDetails = ref([]);
     const addresses = ref([]);
         const addressdetails = ref(null);

const subtotal = computed(() => {
  return cartIDetails.value.reduce((total, item) => {
    const qty = Number(item.qty || 1);
    const price = Number((item.product?.sale_price!==null?item.product.sale_price:item.product.price) || 0);
    return total + qty * price;
  }, 0);
});
const shippingAmnt=computed(()=>{
return subtotal.value<999?100:0
})
const total=computed(()=>{
  return (subtotal.value + shippingAmnt.value )
})

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

    alert("Address added successfully ");
await fetchAddresses();

    closeAddressModal();
    resetForm();
  } catch (err) {
    console.error("Failed to save address", err);
    alert("Failed to save address ");
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
    const userId = atob(localStorage.getItem("user_id"));

    const res = await getCustomerAddress(userId );
    console.log("res.data",res.data.data.data);
    
    addresses.value = res.data.data.data; 
    console.log("addresses.value ",addresses.value );
    
  } catch (err) {
    console.error("Failed to fetch addresses", err);
  } finally {
    loading.value = false;
  }
}
const couponcode=ref("")
 const fetchproductcheckout =  ()=>{
    
           if (!checkoutData) return;

  cartIDetails.value = checkoutData.data.cart_details;
  couponcode.value = checkoutData.data.cart_details;
  orderId.value = checkoutData.data.orderId;
  
    }
const defaultAddress = computed(() => {
  if (!Array.isArray(addresses.value)) return null;
  return addresses.value.find(addr => addr.is_default === 1) || null;
});

watch(defaultAddress, (val) => {
  if (val) {
    addressdetails.value = val;
    showDefaultAddress.value = true;
  }
});


onMounted(() => {
 
  fetchAddresses();
  
  if (!store.checkoutData) {
    router.push("/cart");
    return;
  }
  fetchproductcheckout();
  console.log("checkoutData",checkoutData);
  
});

const showDefaultAddress = ref(true);
    const addressForm = ref({
        'address': "",
        'alt_phone': null,
        'city': "",
        'country': "",
        'customer_id': '',
        'email': "",
        'name': "",
        'phone': "",
        'state': "",
        'zip_code': "",
    });
      let orderId = ref(null);
  // let ordersId = ref(null);

 const payNow = async ()=>{


      if (!addressdetails.value) {
    alert("Please add or select a delivery address");
    return;
  }
        if(!showDefaultAddress.value){
            addressdetails.value = addressForm.value     
        }
        let status;
        let tot_amount = Number(Math.round(subtotal.value));
        const userId = atob(localStorage.getItem("user_id"));
   
        const options = {
            key: razorpay_key, 
            amount:  tot_amount * 100,
            currency: "INR",
            name: "Prabha's Vcare",
            description: `Pay bill of Rs.${tot_amount * 100}`,
            order_id: orderId.value,
            handler: async function  (response) {
                waitpayment.value = true;
                if(response){
                    status = 'completed';
                }
                const normalizedAddress = {
  ...addressdetails.value,
  pincode: addressdetails.value.zip_code, 
};

                var payload = {
                    'subTotal':subtotal.value,
                    'grandTotal':Math.round(total.value),
                    'tax':0,
                    'shipping_amount':shippingAmnt.value,
                    'address':normalizedAddress,
                    'payment':response,
                    'userId':userId,
                    'customer_id':userId,
                     'amount': Math.round(total.value), 
                    //  'coupon_code':
  currency: "INR",  

                    'shipping_method':'default',
                    'payment_channel':'razorpay',
                    
                    'order_id': orderId.value,
                    'payment_method':'razorpay',
                    'charge_id':response.razorpay_payment_id,
                    'razor_pay_status':status
                }   
               
                
                const res = await sendPaymentDetails(userId,payload);
                console.log("Checkoutresponse",res.data);
                
                if (res?.data?.status && res?.data?.data?.id) {
                    localStorage.setItem('orderId', btoa(res.data.data.id));
                    waitpayment.value = false
                    router.push({name:'Success'});
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
<style>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  z-index: 1000;
}

.modal-box {
    background-color: #FFFF;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-x: hidden;
}

</style>