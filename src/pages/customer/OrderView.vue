<template>
  <div class="container text-center px-4 pTop">
    <div class="row" v-if="orderViewDetails"></div>
  </div>

  <section class="page container">
    <div class="page__wrapper">
      <div class="row justify-content-center mt2">
        <div class="col-12 col-sm-12 col-md-11">
          <div class="d-flex gap-2" id="mobview">
            <button id="backBtn" @click="goBack">
              <i class="bi bi-chevron-left"></i>
            </button>

            <p class="purchaat text-center text-md-start mb-0">
              Purchased At:
              <span>{{ dateTime(orderViewDetails?.created_at) }}</span>
            </p>
            <p class="purchaat paid text-center text-md-center mb-0">
              Paid On:
              <span>{{ dateTime(orderViewDetails?.payment?.created_at) }}</span>
            </p>
            <button class="track_btn" @click="downloadinvoice()">
              Download Invoice
            </button>
          </div>
          <div class="d-flex gap-2">
            <div class="position-relative order_address mb-4">
              <div
                class="def_add_details"
                v-if="orderViewDetails && orderViewDetails.default_address"
              >
                <h6 class="shippadd">Default Address</h6>
                <span class="para">{{ orderViewDetails.default_address.name }}</span
                ><br />
                <span>
                  {{ orderViewDetails.default_address.address }}<br />
                  {{ orderViewDetails.default_address.city }}<br />
                  {{ orderViewDetails.default_address.state }}<br />
                </span>
              </div>
            </div>

            <div class="position-relative order_address mb-4">
              <div
                class="def_add_details"
                v-if="orderViewDetails && orderViewDetails.shipment_address"
              >
                <h3 class="shippadd">Shipping Address</h3>
                <span class="para">{{ orderViewDetails.shipment_address.name }}</span
                ><br />
                <span>
                  {{ orderViewDetails.shipment_address.address }}<br />
                  {{ orderViewDetails.shipment_address.city }}<br />
                  {{ orderViewDetails.shipment_address.state }}<br />
                </span>
              </div>
            </div>
          </div>

          <div class="d-md-block d-none border rounded p-4 mt-2">
            <div class="row py-3 border-bottom fw-semibold text-muted">
              <div class="col-sm-6 prod">Products</div>
              <div class="col-sm-2 prod">Price</div>
              <div class="col-sm-2 text-center prod">Quantity</div>
              <div class="col-sm-2 text-end prod">Total Price</div>
            </div>

            <div
              class="row align-items-center py-3 border-bottom"
              v-for="product in orderViewDetails?.products || []"
              :key="product.id"
            >
              <div class="col-sm-6">
                <div class="d-flex align-items-center">
                  <img
                    class="ord_pro_img me-3"
                    :src="image_url + product.product_image"
                    :alt="product.product_name"
                  />
                  <div>
                    <div class="ord_pro_names">{{ product.product_name }}</div>
                    <!-- <div class="ord_pro_type">Skin Type: Oil</div> -->
                    <div class="ord_pro_voll">
                      Item Volume :{{ product.weight }}
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-sm-2">
                Rs.{{
                  product.product.sale_price !== null
                    ? product.product.sale_price
                    : product.product.price
                }}
              </div>
              <div class="col-sm-2 text-center">{{ product.qty }}</div>
              <div class="col-sm-2 text-end">
                Rs.
                {{
                  (product.product.sale_price !== null
                    ? product.product.sale_price
                    : product.product.price) * product.qty
                }}
              </div>
            </div>
          </div>

          <div class="d-md-none d-block">
            <div class="order_status_wrap">
              <div
                class="d-flex justify-content-between p-3 ord_pro_details"
                v-for="product in orderViewDetails?.products || []"
                :key="product.id"
              >
                <div class="d-flex">
                  <div>
                    <img
                      class="ord_pro_img"
                      :src="image_url + product.product_image"
                      :alt="product.product_name"
                    />
                  </div>
                  <div>
                    <div class="ord_pro_name">
                      {{ product.product_name }}
                    </div>
                    <div class="ord_pro_type">Skin Type:&nbsp;Oil</div>
                    <div class="ord_pro_vol">
                      Item Volume :{{ product.weight }}
                    </div>
                  </div>
                </div>
                <div class="ord_pro_pri">
                  Rs.
                  {{
                    product.product.sale_price !== null
                      ? product.product.sale_price
                      : product.product.price
                  }}
                </div>
              </div>
              <!-- <div class="d-flex align-items-center p-3">
                            <button class="track_btn">Add Cart</button>
                            <button class="cancel_btn">Remove</button>
                        </div> -->
            </div>
          </div>
          <div class="mt-4 sub-tol border rounded p-4">
            <div class="">
              <div class="d-flex justify-content-between mb-2">
                <span>Sub Total</span>
                <span
                  >Rs.
                  <span id="subtotal">{{
                    orderViewDetails?.sub_total
                  }}</span></span
                >
              </div>

              <div class="d-flex justify-content-between mb-3">
                <span>Shipping</span>
                <span class="text-success">{{
                  orderViewDetails?.sub_total < 999 ? 100 : 0
                }}</span>
              </div>
            </div>
            <hr class="my-3" />

            <div class="total d-flex justify-content-between">
              <strong class="total">Total Amount</strong>
              <strong class="total"
                >Rs.
                <span id="totalPayable">{{
                  Number(orderViewDetails?.sub_total) +
                  Number(orderViewDetails?.sub_total < 999 ? 100 : 0)
                }}</span></strong
              >
            </div>
          </div>
        </div>
        <!-- <div class="pers_info_head mb-4">
                    <button class="bck_tab_link"><i class="bi bi-chevron-left"></i></button>
                    Wishlist
                </div> -->
      </div>

      <!--     <div class="container mt-4 d-md-none">
               <button class="btnint w-100 text-center" @click="downloadInvoice(orderViewDetails?.code)">
                     Download Invoice
               </button>
           </div> -->
    </div>
  </section>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import {
  downloadInvoiceApi,
  getInvoice,
  getViewOrderDetails,
} from "../../services/apiService";
import { useRoute, useRouter } from "vue-router";
import { image_url } from "../../config/api";
const route = useRoute();
const loading = ref(false);
const orderViewDetails = ref(null);
const router = useRouter();
const userId = atob(localStorage.getItem("user_id"));

const fetchOrderViewDetail = async (id) => {
  try {
    loading.value = true;
    const orderViewRes = await getViewOrderDetails(id, userId);
    orderViewDetails.value = orderViewRes.data.data;
  } catch (error) {
    console.error("Error while fetching:" + error);
  } finally {
    loading.value = false;
  }
};
const dateTime = (date) => {
  if (!date) return "-";

  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();

  return `${day}-${month}-${year}`;
};

const goBack = () => {
  router.push({
    name: "Profile",
    query: { tab: "order" },
  });
};

const downloadinvoice = async () => {
  try {
    const invoiceId = route.params.id;

    const res = await downloadInvoiceApi(invoiceId);

    const blob = new Blob([res.data], { type: "application/pdf" });
    const url = window.URL.createObjectURL(blob);

    window.open(url, "_blank");

    setTimeout(() => {
      window.URL.revokeObjectURL(url);
    }, 1000);
  } catch (err) {
    console.error("Invoice download failed", err);
  }
};
onMounted(() => {
  fetchOrderViewDetail(route.params.id);
});
</script>
<style scoped>
.pTop {
  padding-top: 7rem;
}
.sub-tol {
  max-width: 373px;
  margin-left: auto;

  border: 1px solid #e5e5e5;
}

.sub-tol .total {
  font-size: 16px;
}

.btnint {
  border: 1px solid #0e302a;
  border-radius: 188px;
  width: 198px;
  height: 44px;
  background: #fffaf3;
  color: #0e302a;
}
.btnint:hover {
  background: #0e302a;
  color: #ffff;
}
.purchaat {
  border: 1px solid #cfcfcf;
  color: #000;
  background-color: #ececea;
  height: 42px;
  width: 227px;
  padding: 0 5px;

  border-radius: 8px;
  padding-top: 5px;
}
.def_add_details {
  height: 189px;
  width: 233px;
  padding: 0 12px;
}
.shippadd {
  font-size: 15px;
  font-weight: 800;
  color: #000;
}
.para {
  font-size: 14px;
  font-weight: 300;
}
.order_address {
  padding: 16px;
  border-radius: 8px;
}
@media(max-width:767px){
#mobview{
    display: flex !important;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
}
.pTop {
    padding-top: 2rem;
}
}

.order_address {
  height: 194px;
  width: 337px;
  border-radius: 10px;
  border: solid 1px #ebebeb;
  background-color: #ececea;
  margin: 15px 0;
  font-weight: 300;
  font-size: 14px;
  color: #323232;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding-right: 93px;
  padding-top: 57px;
}
.prod {
  color: #7b7979;
  font-weight: 500;
}

.paid {
  width: 189px;
}
.total {
  font-weight: 600;
}
.ord_pro_names {
  font-weight: 400;
  color: #323232;
  font-size: 15px;
}
.ord_pro_voll {
  font-size: 14px;
  font-weight: 300;
  color: #323232;
}
.mt2 {
  margin-top: 11rem;
}
@media (max-width:991px){
  .mt2 {
  margin-top: 5rem;
}

}
#backBtn {
  background-color: transparent;
  border: none;
  color: #323232;
  margin-right: 15px;
  font-size: 12px;
}
.track_btn {
    margin-right: 10px;
    padding: 6px 14px;
    border-radius: 4px;
    background-color: #000 !important;
    color: #fff !important;
    font-size: 12px;
    border: 1px solid !important;
}

.ord_pro_img {
  height: 80px;
  width: auto;
  margin-right: 15px;

}

</style>
