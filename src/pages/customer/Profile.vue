<template>
  <section class="page">
    <div class="page__wrapper">
      <section class="personal_info_sec container-fluid">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-11 col-sm-11 col-12">
              <div class="row">
                <div
                  class="col-lg-3 col-md-4 d-flex align-items-center flex-column"
                  role="tablist"
                >
                  <div id="myTab" class="w-100">
                    <div class="w-100 text-center">
                      <div class="user-img mb-2">
                        <!-- <img src="../../assets/images/ela.png" alt="" /> -->
                        <img
                          :src="image_url + customer?.avatar"
                          :alt="customer?.name"
                          class="rounded-circle w-100"
                        />
                      </div>
                      <div class="user_name">{{ customer?.name }}</div>
                      <div class="user_mobile">{{ customer?.phone }}</div>
                    </div>
                    <div class="personal_info_nav_menu" role="presentation">
                      <a
                        class="tab-link active d-flex align-items-center justify-content-between"
                        id="Information-tab"
                        data-bs-toggle="pill"
                        href="#Information"
                        role="tab"
                        aria-controls="Information"
                        aria-selected="true"
                        ><span class="tab_icon d-flex align-items-center"
                          ><i class="bi bi-person"></i> Personal
                          Information</span
                        ><i class="bi bi-chevron-right"></i
                      ></a>
                    </div>
                    <div class="personal_info_nav_menu" role="presentation">
                      <a
                        class="tab-link d-flex align-items-center justify-content-between"
                        id="Order-tab"
                        data-bs-toggle="pill"
                        href="#Order"
                        role="tab"
                        aria-controls="Order"
                        aria-selected="false"
                        @click="fetchOrderDetails"
                        ><span class="tab_icon d-flex align-items-center"
                          ><i class="bi bi-box"></i> Order History</span
                        ><i class="bi bi-chevron-right"></i
                      ></a>
                    </div>
                    <div class="personal_info_nav_menu" role="presentation">
                      <a
                        class="tab-link d-flex align-items-center justify-content-between"
                        id="Address-tab"
                        data-bs-toggle="pill"
                        href="#Address"
                        role="tab"
                        aria-controls="Address"
                        aria-selected="false"
                        @click="fetchAddresses"
                        ><span class="tab_icon d-flex align-items-center"
                          ><i class="bi bi-geo-alt"></i> Address</span
                        ><i class="bi bi-chevron-right"></i
                      ></a>
                    </div>

                    <div class="personal_info_nav_menu" role="presentation">
                      <router-link
                        class="tab-link d-flex align-items-center justify-content-between logout"
                        href="#"
                        :to="{ name: 'Login' }"
                        @click="logout"
                      >
                        <span class="tab_icon d-flex align-items-center">
                          <i class="bi bi-box-arrow-right"></i>
                          Logout
                        </span>
                      </router-link>
                    </div>
                  </div>
                </div>

                <!-- Tab content -->
                <div class="col-lg-9 col-md-8">
                  <div id="myTabContent" class="tab-content">
                    <div
                      class="tab-pane fade show active"
                      id="Information"
                      role="tabpanel"
                      aria-labelledby="Information-tab"
                    >
                      <div class="row g-3">
                        <div class="pers_info_head">Personal Information</div>
                        <div class="col-sm-6">
                          <input
      type="text"
      class="form-control"
      placeholder="First name"
      v-model="customer.name"
    />
                        </div>
                        <div class="col-sm-6">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Mobile No."
                          
                            :value="customer?.phone"
                          readonly=""
                          />
                        </div>
                        <div class="col-sm-6">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Alt Mobile No."
                           
                             v-model="customer.altphone"
                            
                          />
                        </div>
                        <div class="col-sm-6">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Email Id"
                            
                            v-model="customer.email"
                            
                          />
                        </div>
                       <div class="col-sm-6">
   <select   class="form-control" v-model="customer.gender"   :key="customer.gender">
  <option value="">Select Gender</option>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
  <option value="Other">Other</option>
</select>
  </div>
 

                         <div class="col-sm-6">
    <input
      type="date"
      class="form-control"
      v-model="customer.dob"
    />
  </div>
  <div class="col-12 text-end mt-3">
    <button
      class="btn btn-primary"
      @click="saveProfile"
      :disabled="loading"
    >
      {{ loading ? "Saving..." : "Save Profile" }}
    </button>
  </div>
                      </div>
                      <!-- ========= -->
                      <div class="pt-5">
                        <div class="pers_info_head">Upload image</div>

                        <div class="upload_img_sec">
                          <div class="d-flex align-items-center">
                            <div class="up_img">
                              <img
                                id="cropper-image"
                                :src="
                                  previewImage || image_url + customer?.avatar
                                "
                                class="avatar-img"
                              />
                            </div>

                            <div>
                              <div class="upload_head">Upload file</div>
                              <div class="upload_size py-2">JPG 120×120px</div>

                              <div class="choose_file">
                                <button
                                  class="choose_file_btn"
                                  @click="triggerFile"
                                >
                                  Choose file
                                </button>

                                <span v-if="selectedFile">{{
                                  selectedFile.name
                                }}</span>
                                <span v-else>No file chosen</span>

                                <input
                                  type="file"
                                  ref="fileInput"
                                  accept="image/*"
                                  hidden
                                  @change="onFileChange"
                                />
                              </div>

                              <button
                                v-if="previewImage"
                                class="btn btn-primary mt-2"
                                @click="saveAvatar"
                                :disabled="uploading"
                              >
                                <span v-if="uploading">
                                  <span
                                    class="spinner-border spinner-border-sm me-2"
                                  ></span>
                                  Uploading...
                                </span>
                                <span v-else> Save </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      class="tab-pane fade"
                      id="Order"
                      role="tabpanel"
                      aria-labelledby="Order-tab"
                    >
                      <div class="pers_info_head mb-4">Your Orders</div>
                        <div v-if="loading" class="text-center py-5">
    <div class="spinner-border text-primary" role="status"></div>
    <p class="mt-2">Loading orders...</p>
  </div>
                      <div class="row justify-content-center" v-else>
                        <div class="col-md-11 col-sm-11 col-12">
                          <div v-if="orders.data && orders.data.length === 0">
                            <p>No orders found</p>
                          </div>
                          <div v-else>
                            <div class="table-responsive d-none d-sm-block">
                              <table class="table">
                                <thead>
                                  <tr>
                                    <td scope="col">#</td>
                                    <td scope="col">
                                      <div class="ord_no">Order no</div>
                                    </td>
                                    <td scope="col">Purchase Date</td>
                                    <td scope="col">Total</td>
                                    <td scope="col">Status</td>
                                    <td scope="col">Action</td>
                                  </tr>
                                </thead>

                                <tbody>
                                  <tr
                                    v-for="(item, index) in orders.data"
                                    :key="item.id"
                                  >
                                    <td>{{ index + 1 }}</td>
                                    <td>{{ item.code }}</td>
                                    <td>{{ dateTime(item.created_at) }}</td>
                                    <td>Rs. {{ item.sub_total }}</td>
                                    <td>
                                      <div class="ord_no_status_pending">
                                        <i class="bi bi-circle-fill"></i>
                                        <span class="text-capitalize">{{
                                          item.status
                                        }}</span>
                                      </div>
                                    </td>
                                    <td>
                                      <router-link :to="`order/${item.id}`"
                                        ><button class="track_btn">
                                          Track Order
                                        </button></router-link
                                      >
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div class="d-block d-sm-none">
                              <div
                                class="order_status_wrap"
                                v-for="(item, index) in orders.data"
                                :key="item.id"
                              >
                                <div
                                  class="d-flex justify-content-between p-3 ord_pro_details"
                                >
                                  <div class="d-flex">
                                    <div>
                                      <div class="ord_pro_name">
                                        <b>Order no</b>: {{ item.code }}
                                      </div>
                                      <div class="ord_pro_name">
                                        <b> Purchase Date</b>:
                                        {{ dateTime(item.created_at) }}
                                      </div>
                                      <div class="ord_pro_name">
                                        <b>Total</b>: Rs. {{ item.sub_total }}
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="ord_no_status_completed align-items-start"
                                  >
                                    <i class="bi bi-circle-fill"></i>
                                    <span>{{ item.status }}</span>
                                  </div>
                                </div>
                                <div class="d-flex align-items-center p-3">
                                  <router-link :to="`order/${item.id}`">
                                    <button class="track_btn w-100">
                                      View Details
                                    </button></router-link
                                  >
                                </div>
                              </div>
                            </div>
                            <div
                              class="pagination-wrap"
                              v-if="orders.last_page > 1"
                            >
                              <button
                                class="page-btn"
                                :disabled="orders.current_page === 1"
                                @click="changePage(orders.current_page - 1)"
                              >
                                Prev
                              </button>

                              <button
                                v-for="page in orders.last_page"
                                :key="page"
                                class="page-btn"
                                :class="{
                                  active: page === orders.current_page,
                                }"
                                @click="changePage(page)"
                              >
                                {{ page }}
                              </button>

                              <button
                                class="page-btn"
                                :disabled="
                                  orders.current_page === orders.last_page
                                "
                                @click="changePage(orders.current_page + 1)"
                              >
                                Next
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      class="tab-pane fade"
                      id="Address"
                      role="tabpanel"
                      aria-labelledby="Address-tab"
                    >
                      <div class="pers_info_head mb-4">Address</div>
                      <div class="order_status_wrap">
                        <!-- Default address view -->
                        <div v-if="!showForm" id="addressSelect">
                          <button @click="showForm = true" id="addAddressBtn">
                            <i class="bi bi-geo-alt"></i>
                            <span>Add Address</span>
                          </button>

                          <div class="position-relative default_address">
                            <img
                              class="default_img"
                              src="@/assets/images/Default.png"
                              alt=""
                            />
                            <div v-if="defaultAddress" class="def_add_details">
                              <span class="def_name">{{
                                defaultAddress.name
                              }}</span
                              ><br />
                              Ph: {{ defaultAddress.phone }} <br />
                              {{ defaultAddress.address }} <br />
                              {{ defaultAddress.city }},
                              {{ defaultAddress.zip_code }} <br />
                              {{ defaultAddress.state }} <br />
                              {{ defaultAddress.country }}
                            </div>

                            <div v-else>No default address found.</div>

                            <!-- <div class="def_add_details" >
                            <span class="def_name">Durga V</span><br />
                            Ph: 9790488818 <br />
                            Chennai, 600058 <br />
                            Ambattur Estate <br />
                            Ambit, Sai nagar, <br />
                            12, Prince info park <br />
                          </div> -->
                          </div>
                        </div>

                        <!-- Add Address Form -->
                        <div v-else id="addressInput">
                          <div class="d-flex p-3 mb-4 add_address_head">
                            <button @click="showForm = false" id="backBtn">
                              <i class="bi bi-chevron-left"></i>
                            </button>
                            <div class="pers_info_head text-center w-100">
                              Add Address
                            </div>
                          </div>

                          <div class="row g-3 px-5 px-sm-2">
                            <div class="col-sm-6">
                              <input
                                class="form-control"
                                type="text"
                                v-model="form.firstName"
                                placeholder="First name"
                              />
                            </div>
                            <div class="col-sm-6">
                              <input
                                class="form-control"
                                type="text"
                                v-model="form.lastName"
                                placeholder="Last name"
                              />
                            </div>
                            <div class="col-sm-6">
                              <input
                                class="form-control"
                                type="text"
                                v-model="form.phone"
                                placeholder="Mobile No."
                              />
                            </div>
                            <div class="col-sm-6">
                              <input
                                class="form-control"
                                type="text"
                                v-model="form.email"
                                placeholder="Email Id"
                              />
                            </div>
                            <div class="col-sm-12">
                              <textarea
                                class="form-control"
                                id="exampleTextarea"
                                v-model="form.address"
                                rows="5"
                                placeholder="Address"
                              ></textarea>
                            </div>
                            <div class="col-sm-4">
                              <input
                                class="form-control"
                                type="text"
                                v-model="form.city"
                                placeholder="City"
                              />
                            </div>
                            <div class="col-sm-4">
                              <input
                                class="form-control"
                                type="text"
                                v-model="form.state"
                                placeholder="State"
                              />
                            </div>
                            <div class="col-sm-4">
                              <input
                                class="form-control"
                                type="text"
                                v-model="form.pincode"
                                placeholder="Pincode"
                              />
                            </div>
                            <div class="col-sm-4 mt-4 ml-3">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value="1"
                                v-model="form.is_default"
                                id="defaultAddress"
                              />
                              <label
                                class="form-check-label ml-3"
                                for="defaultAddress"
                              >
                                Set as default address
                              </label>
                            </div>
                            <div class="d-flex justify-content-center m-0">
                              <button
                                class="add_address_btn my-4"
                                @click="saveAddress"
                              >
                                Add address
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>
<script setup>
import { computed, nextTick, onMounted, ref, watch } from "vue";
import {
  getCustomerAddress,
  getCustomerDetail,
  getOrderDetails,
  postCustomerAddress,
  postCustomerDetail,
  postCustomerImage,
} from "../../services/apiService";
import { image_url } from "../../config/api";
const cropperImage = ref(null);
const activeMobileTab = ref(null);
const windowWidth = ref(window.innerWidth);

const isMobile = computed(() => windowWidth.value < 768);

const fileInput = ref(null);
const selectedFile = ref(null);
const previewImage = ref(null);
const cropper = ref(null);
const showForm = ref(false);
const customer = ref({
    gender: "",
  id: null,
  name: "",
  email: "",
  phone: "",
  altphone: "",
 avatar: "",
  dob: ""
});
const loading = ref(false);
const uploading = ref(false);
const addresses = ref([]);
const route = useRoute();
const openOrderTab = () => {
  const orderTab = document.querySelector("#Order-tab");

  if (window.bootstrap?.Tab && orderTab) {
    new window.bootstrap.Tab(orderTab).show();
  }

  fetchOrderDetails();
  openMobileTab("Order");
};

// const openOrderTab = () => {
//   const orderTab = document.querySelector("#Order-tab");

//   if (!orderTab) return;

//   if (window.bootstrap && window.bootstrap.Tab) {
//     const tab = new window.bootstrap.Tab(orderTab);
//     tab.show();
//     fetchOrderDetails();
//   } else {
//     console.error("Bootstrap Tab not available");
//   }
// };
const openMobileTab = (tab) => {
  if (isMobile.value) {
    activeMobileTab.value = tab;
  }
};

const goBackMenu = () => {
  activeMobileTab.value = null;
};

onMounted(() => {
  if (route.query.tab === "order") {
    openOrderTab();
  }
});
onMounted(() => {
  window.addEventListener("resize", () => {
    windowWidth.value = window.innerWidth;
  });
});

watch(
  () => route.query.tab,
  (tab) => {
    if (tab === "order") {
      openOrderTab();
    }
  },
);
const userId = atob(localStorage.getItem("user_id"));
const orders = ref({
  data: [],
  current_page: 1,
  last_page: 1,
});

import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { useRoute } from "vue-router";
const currentPage = ref(null);
const lastPage = ref(null);
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

async function saveAddress() {
  try {
    loading.value = true;

    const payload = {
      name: `${form.value.firstName || ""} ${form.value.lastName || ""}`.trim(),
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
    toast.success("Address added successfully");
    // alert("Address added successfully ");
    await fetchAddresses();

    resetForm();
  } catch (err) {
    console.error("Failed to save address", err);

    const message =
      err?.response?.data?.msg ||
      err?.response?.data?.message ||
      "Failed to save address";

    toast.error(message);
    // alert("Failed to save address ");
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

    const res = await getCustomerAddress(userId);

    addresses.value = res.data.data.data;
    console.log("addresses.value ", addresses.value);
  } catch (err) {
    console.error("Failed to fetch addresses", err);
  } finally {
    loading.value = false;
  }
}
const defaultAddress = computed(() => {
  if (!Array.isArray(addresses.value)) return null;
  return addresses.value.find((addr) => addr.is_default === 1) || null;
});

// =================================
const triggerFile = () => {
  fileInput.value.click();
};
const onFileChange = (event) => {
  const file = event.target.files[0];
  if (!file) return;

  selectedFile.value = file;

  const reader = new FileReader();
  reader.onload = async (e) => {
    previewImage.value = e.target.result;

    await nextTick();

    if (cropper.value) {
      cropper.value.destroy();
      cropper.value = null;
    }

    const image = document.getElementById("cropper-image");

    image.onload = () => {
      if (cropper.value) {
        cropper.value.destroy();
        cropper.value = null;
      }

      cropper.value = new Cropper(image, {
        aspectRatio: 1,
        viewMode: 1,
        autoCropArea: 1,
        background: false,
        responsive: true,
        zoomOnWheel: false,
      });
    };
  };
  reader.readAsDataURL(file);
};
const saveAvatar = async () => {
  if (!cropper.value) {
    console.error("No cropper instance!");
    return;
  }
  if (!selectedFile.value) {
    console.error("No file selected!");
    return;
  }

  const cropData = cropper.value.getData(true);

  cropper.value.getCroppedCanvas().toBlob(async (blob) => {
    if (!blob) {
      console.error(" Failed to create cropped image blob!");
      loading.value = false;
      return;
    }
    const file = new File([blob], "avatar.jpg", { type: "image/jpeg" });
    console.log("file", file);

    const formData = new FormData();
    formData.append("user_id", customer.value.id);
    formData.append("avatar_file", file);
    formData.append(
      "avatar_data",
      JSON.stringify({
        x: cropData.x,
        y: cropData.y,
        width: cropData.width,
        height: cropData.height,
      }),
    );
    console.log("formData", formData);

    try {
      uploading.value = true;
      const res = await postCustomerImage(formData);

      // refresh customer details after save
      const refreshed = await getCustomerDetail(customer.value.phone);
      customer.value = refreshed.data.data.customer;

      // clear cropper
      cropper.value.destroy();
      cropper.value = null;
      previewImage.value = null;
      selectedFile.value = null;
      toast.success("Profile photo uploaded successfully");
    } catch (err) {
      console.error("Upload failed", err.response?.data || err);
    } finally {
      uploading.value = false;
    }
  }, "image/jpeg");
};
const saveProfile = async () => {
  try {
    loading.value = true;

    const payload = {
      user_id: customer.value.id,
      name: customer.value.name,
      email: customer.value.email,
       dob: customer.value.dob,
       altphone: customer.value.altphone,
       phone: customer.value.phone,
       gender: customer.value.gender,
    };

    await postCustomerDetail(payload);

    toast.success("Profile updated successfully");

  } catch (err) {
    console.error(err);
    toast.error("Update failed");
  } finally {
    loading.value = false;
  }
};

  async function getCustomerDetails() {
    const phone = atob(localStorage.getItem("phone"));
    try {
      loading.value = true;
      const res = await getCustomerDetail(phone);
      const data = res.data.data.customer;

     customer.value = {
  id: data.id ?? null,
  name: data.name ?? "",
  email: data.email ?? "",
  phone: data.phone ?? "",
  altphone: data.altphone ?? "",
  gender: data.gender ?? "",
  dob: data.dob ?? "",
   avatar: data.avatar ?? "",
};

  
    } catch (err) {
      console.error(err);
    } finally {
      loading.value = false;
    }
  }
const fetchOrderDetails = async (user, page = 1) => {
  loading.value = true;

  try {
    const orderDetailRes = await getOrderDetails(userId, page);
    orders.value = orderDetailRes.data.data;
    // currentPage.value = orderDetailRes.data.data.current_page;
    // lastPage.value = orderDetailRes.data.data.last_page;
  } catch (err) {
    console.error("Error fetching faq details:", err);
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
const logout = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("phone");
  localStorage.removeItem("user_id");
  localStorage.removeItem("customerType");
};
const changePage = (page) => {
  if (page < 1 || page > orders.value.last_page) return;
  fetchOrderDetails(userId, page);
};

onMounted(() => {
  getCustomerDetails();
});
</script>

<style scoped>
.form-check-input[type="checkbox"] {
  padding: 5px !important;
  border-radius: 50% !important;
  /* margin-left: 6px !important; */
}
.user-img {
  margin: auto;
  width: 100px;
}
.spinner-border {
  width: 3rem;
  height: 3rem;
}

#cropper-image {
  width: 150px !important;
}
.upload_img_sec {
  margin: 30px 0px !important;
}
@media (max-width: 768px) {
  .personal_info_sec {
    padding-top: 10rem !important;
  }
}
@media (max-width: 768px) {
  .personal_info_nav_menu .tab-link {
    padding: 20px 0px;
  }
}
li.breadcrumb-item a {
  color: #000;
}

li.breadcrumb-item.active {
  color: #adb5bd !important;
}

.bread-creams {
  padding: 20px 0px;
}

h1.besrt {
  text-align: center;
  padding: 20px 0px;
  font-size: 40px;
  font-weight: 600;
}

/*********banner section css************/
.promo-banner {
  background-image: url("../images/product/product-banner.webp");
  background-size: cover;
  background-position: center;
  padding: 90px 20px;
  color: #333;
  text-align: left;
}

.promo-banner .content {
  padding: 20px;
  border-radius: 8px;
}

.promo-banner h5 {
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #212529;
  font-family: var(--font-body);
  text-align: center;
}

.promo-banner h2 {
  font-weight: 500;
  font-size: 2rem;
  text-align: center;
  font-family: var(--font-body);
  padding: 10px 0px;
}

.promo-banner p {
  color: #555;
  margin-bottom: 20px;
  text-align: center;
}

.promo-banner .btn {
  background-color: transparent;
  border: 1px solid #000;
  color: #333;
  padding: 7px 30px;
  font-weight: 400;
  border-radius: 0px;
  font-size: 22px;
}

p.btn-product {
  margin-top: 30px;
}

button.btn.btn-dark.mt-2 {
  margin-top: -30px !important;
}

@media (max-width: 767px) {
  .promo-banner .content {
    max-width: 100%;
  }

  .promo-banner h2 {
    font-size: 1.5rem;
  }
}

/**********products details page css*************/
section.related-sec {
  padding: 70px 0px;
}

section.how-sec {
  background: #f3f3f3;
  padding: 60px 0px;
}

section.how-sec img {
  width: 100%;
}

.section-item {
  position: relative;
  color: #fff;
  width: 75%;
}

.section-item h4 {
  font-size: 20px;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  font-family: var(--font-body);
  padding-bottom: 5px;
}

.section-item p {
  font-size: 15px;
  line-height: 30px;
  max-height: 60px;
  overflow: hidden;
  transition: max-height 0.3s ease;
  margin-top: 10px;
  color: #fff;
  font-weight: 300;
}

.section-item.active p {
  max-height: 500px;
  /* Expands the content on click */
}

.section-item .toggle-icon {
  transition: transform 0.3s ease;
}

.section-item.active .toggle-icon {
  transform: rotate(180deg);
}

section.content-sec {
  /* background-image: url(../images/product/contentt-bck.png); */
  background-image: url("../images/product/content-back.png");
  background-size: cover;
  background-position: center;
  padding: 50px 20px;
}

@media (max-width: 768px) {
  .scrollable-section {
    overflow-x: auto;
    white-space: nowrap;
  }

  .thumbnail-container {
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    padding: 10px 0;
  }

  .thumbnail-container .demo {
    width: 80px;
    margin-right: 10px;
    opacity: 0.6;
    cursor: pointer;
  }

  .thumbnail-container .demo.active {
    opacity: 1;
  }
}

/* Desktop view: fixed layout with vertical scrolling thumbnails */
@media (min-width: 769px) {
  .mySlides-container {
    position: relative;
  }

  .mySlides {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
  }

  .thumbnail-container {
    max-height: 600px;
    overflow-y: auto;
  }

  .thumbnail-container .demo {
    width: 100%;
    opacity: 0.4;
    cursor: pointer;
    margin-bottom: 10px;
  }

  .thumbnail-container .demo.active {
    opacity: 1;
  }
}

.thumbnail-container::-webkit-scrollbar-track {
  box-shadow: inset 0 0 2px #fff;
  border-radius: 10px;
}

.thumbnail-container::-webkit-scrollbar-thumb {
  background: #fff;
  border-radius: 10px;
}

.thumbnail-container::-webkit-scrollbar-thumb:hover {
  background: #fff;
}

.thumbnail-container::-webkit-scrollbar {
  width: 5px;
}

img.demo.cursor {
  width: 130px;
  height: auto;
  object-fit: contain;
}

section.details-sec {
  padding-top: 9rem;
  padding-bottom: 80px;
}

.details-sec .breadcrumb-item + .breadcrumb-item::before {
  float: left;
  padding-right: var(--bs-breadcrumb-item-padding-x);
  color: var(--bs-breadcrumb-divider-color);
  content: none !important;
}

.details-sec li.breadcrumb-item a {
  color: #656161;
}

i.bi.bi-chevron-right {
  padding-left: 5px;
}

section.details-sec h3 {
  font-family: var(--font-body);
  font-size: 32px;
  font-weight: 400;
  padding-bottom: 5px;
}

p.text-muted {
  color: #8b9096bf !important;
  font-weight: 400;
  margin-bottom: 5px;
}

span.spenter {
  font-weight: 300;
}

.offer-zone {
  background: #fff;
  padding: 22px 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  width: 75%;
}

.underline {
  border-bottom: 2px solid #eae7e7;
  padding-bottom: 15px;
}

.offer-zone span {
  font-size: 20px;
  font-weight: 400;
}

.offer-zone p {
  margin-bottom: 0px;
  padding-top: 10px;
}

span.price.me-2 {
  color: #dc3545;
  margin-right: 5px;
  text-decoration: line-through;
  font-size: 18px;
}

.align-items-baseline {
  align-items: baseline !important;
  padding: 10px 0px;
}

span.discounted-price {
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.6px;
}

.quant-sec.mb-4 {
  display: flex;
  gap: 20px;
  padding-bottom: 20px;
  align-items: center;
}

label.form-label {
  font-family: var(--font-body);
  font-size: 20px;
  font-weight: 400;
}

.actions.mb-3 {
  margin-top: 30px !important;
}

.actions button.btn.btn-dark.mt-2 {
  padding: 12px 35px;
  margin-top: 10px;
}

.actions .button-text {
  font-size: 20px;
}

button.buybtn.btn.btn-dark.mt-2 {
  margin-left: 20px;
}

.additional-options {
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 5px 0px;
  margin-top: 20px;
  display: flex;
  text-align: center;
  align-items: center;
  gap: 80px;
}

a.add-divider {
  border-left: 1px solid #b8b8b8;
  height: 36px;
  width: 1px;
  background: #b8b8b8;
}

i.bi.bi-heart {
  color: red;
  padding-right: 5px;
  font-size: 20px;
  font-weight: 600;
}

i.bi.bi-share {
  padding-right: 5px;
  font-size: 20px;
  font-weight: 600;
  color: #000;
}

.additional-options a {
  color: #5a5858;
  font-weight: 400;
  letter-spacing: 0.5px;
}

section.drop-sec {
  padding-top: 60px;
}

.drop-sec .row {
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
}

.dropdown {
  float: inline-end;
}

button.btn.btn-outline-secondary.dropdown-toggle {
  border: none !important;
  text-align: end;
}

.dropdown .btn.show:focus-visible,
.btn:first-child:active:focus-visible {
  box-shadow: none !important;
  background: #fff !important;
  color: #686464 !important;
}

/* .dropdown .btn.show, .btn:first-child:active, :not(.btn-check)+.btn:active {
  color: #000 !important;
  background-color: #fff !important;
  border-color: none !important;
} */
.dropdown .btn:hover {
  color: #000 !important;
  background-color: #fff !important;
  border-color: none !important;
}

.paret h6 {
  font-size: 18px;
  font-family: var(--font-body);
  color: #7a7777;
  letter-spacing: 0.6px;
}

button.btn.btn-outline-secondary.dropdown-toggle {
  font-size: 18px;
  font-family: var(--font-body);
  color: #000;
  letter-spacing: 0.5px;
}

.rating {
  color: #fbc02d;
}

.review-summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.review-summary .rating-breakdown {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #666;
}

.review-summary .write-review-btn {
  background-color: #333;
  color: #fff;
}

.review__wrapper .single__progress__bar {
  position: relative;
}

.review__wrapper .single__progress__bar .rating__text {
  display: inline-block;
  position: relative;
  top: 19px;
}

.review__wrapper .single__progress__bar .progress {
  max-width: 45%;
  margin-left: 128px;
  height: 7px;
  background: #eeeeee;
}

.review__wrapper .single__progress__bar .progress .progress-bar {
  background-color: #0e302a;
}

.review__wrapper .single__progress__bar span {
  position: absolute;
  right: 0;
  top: 50%;
}

.col-divider {
  border-left: 1px solid #b8b8b8;
  height: 155px;
  width: 1px;
  background: #b8b8b8;
  align-items: center;
  justify-content: center;
  /* margin-left: 22px; */
}

.col-divider1 {
  border-left: 1px solid #b8b8b8;
  height: 155px;
  width: 1px;
  background: #b8b8b8;
  align-items: center;
  justify-content: center;
  margin-left: 70px;
}

button.btn.write-review-btn {
  overflow: hidden;
  border: none;
  color: #fff;
  padding: 12px 30px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 2px;
  /* padding: 0.5rem 2rem; */
  margin-top: 1rem;
  background: #332929;
  font-weight: 500;
  float: inline-end;
  background-color: #0e302a;
}

button.btn.write-review-btn:hover {
  color: #fff;
  padding: 12px 30px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 2px;
  /* padding: 0.5rem 2rem; */
  margin-top: 1rem;
  background: #332929;
  font-weight: 500;
  float: inline-end;
}

.rating strong {
  padding-left: 10px;
  color: #6d6d6d;
  letter-spacing: 0.3px;
  font-weight: 500;
  padding-bottom: 26px;
}

.customer-sec small {
  font-size: 18px;
  line-height: 32px;
  font-weight: 400;
  color: #6d6d6d;
  margin-top: 10px !important;
}

section.customer-sec {
  padding-top: 70px;
  padding-bottom: 20px;
}

.review-card {
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 20px;
}

.review-card .profile-icon {
  font-size: 24px;
  background-color: #e0e0e0;
  border-radius: 50%;
  padding: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
}

.review-card .review-date {
  color: #888;
  font-size: 14px;
}

.review-card .review-title {
  font-weight: bold;
  margin-top: 0px;
}

.review-card .review-text {
  font-size: 16px;
  color: #555;
}

.review-card img {
  width: 100px;
  margin-top: 10px;
}

.d-flex.drett {
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 5px 0px;
}

.colmebt {
  margin-bottom: 20px;
}

.review-card .rating {
  padding-bottom: 20px;
}

.review-card.p-3 {
  margin-top: 20px;
}

/*****************cart page css**********/
.section_header1 h2 {
  font-size: 36px;
  font-weight: 600;
  padding-bottom: 21px;
}

.cart-table th,
.cart-table td {
  vertical-align: middle;
}

.cart-item-img {
  width: 80px;
  height: auto;
  border-radius: 5px;
}

.order-summary {
  border: 1px solid #ddd;
  border-radius: 5px;
}

.order-summary h5 {
  margin-bottom: 20px;
}

.apply-coupon input {
  border-radius: 5px 0 0 5px;
}

.apply-coupon button {
  border-radius: 0 5px 5px 0;
  background-color: #09302a;
  color: #fff;
}
.apply-coupon button:hover {
  background-color: #226a5f;
  color: #fff;
}

.checkout-btn {
  background-color: #09302a;
  color: #fff !important;
  width: 100%;
  border-radius: 5px;
  padding: 10px;
  font-weight: 600;
  letter-spacing: 0.4px;
  font-size: 18px;
  border: 1px solid;
}
.checkout-btn:hover {
  background-color: #226a5f;
  color: #fff !important;
}

.quantity-btn {
  border: none;
  background-color: #f0f0f0;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
}

.remove-link {
  color: #888;
  font-size: 14px;
  text-decoration: none;
}

.remove-link:hover {
  color: #333;
}

.table > :not(caption) > * > * {
  padding: 20px 0px !important;
  color: #060e0d;
}

small.p1 {
  font-family: "Lexend" !important;
  color: #3a3838;
  font-size: 15px;
  letter-spacing: 0.4px;
}

.order-sec {
  border-top: 1px solid #ddd;
  padding: 26px;
  border-bottom: 1px solid #ddd;
}

.order-summary h5 {
  margin-bottom: 0px;
  padding: 20px 20px 10px;
  font-family: var(--font-body);
  font-size: 18px;
  color: #060e0d;
}

.order-summary label.form-label {
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 400;
  padding-bottom: 7px;
}

.d-flex.align-items-center.mt-3 {
  padding: 10px 25px;
}

.mt-4.p-2.text-muted {
  display: flex;
  align-items: center;
  justify-content: center;
}

.saving.bg-light {
  padding: 10px 38px;
  width: 70%;
  text-align: center;
}

a.back-to-cart.mb-3 {
  margin-left: 10px;
}

.d-flex.justify-content-between.mt-3,
.d-flex.justify-content-between.total-amount.mt-3,
button#payNow {
  width: 70%;
  font-family: Lexend !important;
}

.d-flex.justify-content-center.align-items-center.head-start.text-center {
  height: 70px;
}

.total {
  margin-bottom: 0px;
  padding: 13px 20px;
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 300;
  color: #060e0d;
}

section.cart-sec h2 {
  margin-bottom: 0px !important;
  font-size: 36px;
  font-weight: 600;
}

table.table.cart-table th {
  font-family: "Lexend" !important;
  font-size: 18px;
  font-weight: 400;
  color: #060e0d;
}

/***************checkout page css****************/
.checkout-title {
  font-family: Lexend;
  font-weight: bold;
  font-size: 24px;
  margin-top: 20px;
}

.card1 {
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.payment-details,
.order-summary {
  padding-bottom: 25px;
  height: 100%;
}

.order-summary img {
  width: 60px;
  height: auto;
  border-radius: 5px;
}

.address-card {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  margin-right: 15px;
  text-align: left;
  background-color: #edefe1;
  height: 162px;
  width: auto;

  color: #2d2d2d;
}

.address-card h6 {
  font-size: 14px;
  font-family: Lexend;
  color: #2d2d2d;
}

.address-card p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  font-size: 16px;
  font-weight: 300;
  font-family: Lexend;
  color: #323232;
}

.add-new-address {
  border: 3px dashed #ddd;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  color: #777;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.add-address-plus {
  font-size: 25px;
  color: #000;
}

.add-new-address p {
  text-align: center;
}

.delivery-info h5,
.payment-details h5 {
  font-family: Lexend;
  padding: 25px 25px 10px;
}

.delivery-info hr,
.payment-details hr,
.order-summary hr {
  color: gray;
}

.delivery-info .d-flex {
  padding: 25px 25px 40px;
}

.add-new-address:hover {
  background-color: #e9e9e9;
}

label.ms-3 {
  font-size: 18px;
}

span.text-muted {
  font-size: 14px;
  margin-left: 10px;
}

.payment-option {
  padding: 0 15px;
}

.total-amount {
  font-weight: bold;
}

.pay-now-btn {
  font-family: Lexend;
  padding: 16px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.logout {
  color: red !important;
}
.back-to-cart {
  color: #888;
  text-decoration: none;
  font-size: 14px;
  display: inline-block;
  margin-top: 15px;
}

.back-to-cart:hover {
  color: #333;
}

.payment-option.d-flex.align-items-center {
  margin: 25px;
  position: relative;
  border-radius: 6px;
  background-color: #edefe1;
  height: 66px;
}

.payment-option input,
.payment-option label {
  cursor: pointer;
}

:root {
  accent-color: black;
}

[type="radio"] {
  font-size: inherit;
  width: 0.75em;
  height: 0.75em;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

button.btn.btn-outline-secondary.qun_add,
button.btn.btn-outline-secondary.qun_min,
input#quantity {
  border: none;
  background-color: #fffaf3;
}

.input-group {
  border: 1px solid grey;
  border-radius: 6px;
}

button.btn.btn-outline-secondary.qun_add {
  border-left: 1px solid grey;
}

button.btn.btn-outline-secondary.qun_min {
  border-right: 1px solid grey;
}

.product-card button.btn.btn-dark.mt-2 {
  margin-top: 20px !important;
}

.bestproduct-sec {
  padding-top: 0px;
  padding-bottom: 30px;
}

.faq_head {
  position: relative;
  font-size: 30px;
  display: inline-block;
  font-family: "Inria Serif";
  color: #fff;
  text-align: left;
}

.faq_banner {
  padding-top: 4rem;
  background-image: url(../images/faq-ban.png);
  height: 40vh;
  background-repeat: no-repeat;
  background-size: cover;
}

.faq-breadcrumb,
.faq-breadcrumb a {
  font-size: 12px;
  font-weight: 300;
  color: #fff;
}

.general-queries {
  font-size: 15px;
  font-weight: 300;
  color: #999;
  text-align: left;
}
@media (max-width: 991px) {
  .personal_info_sec {
    padding-top: 10rem !important;
  }
}
.faq_sub_head {
  font-size: 30px;
  color: #2d2d2d;
}

.accordion-item {
  margin: 10px 0;
  background-color: #edefe1;
  border: none !important;
}

.faq_cont_sec {
  padding: 50px 0;
}

button.accordion-button,
.accordion-button:not(.collapsed) {
  background: #edefe1 !important;
  font-size: 16px;
  font-family: Lexend;
  color: #2d2d2d !important;
  border-radius: 0 !important;
  border: none !important;
  box-shadow: none !important;
}

button.accordion-button.collapsed {
  height: 80px;
}

.accordion-body {
  background: #edefe1;
  font-size: 15px;
  line-height: 24px;
  font-weight: 300;
  font-family: Lexend;
  color: #323232;
}

.accordion-button:focus {
  box-shadow: none !important;
}

.accordion-body,
.accordion-collapse {
  background: #edefe1;

  transition: opacity 0.5s ease-in-out;
  opacity: 0;
}

.accordion-collapse.show .accordion-body,
.accordion-collapse {
  opacity: 1;
}

@media (max-width: 767px) {
  .faq_head {
    font-size: 18px;
  }

  .faq_cont_sec {
    padding: 0;
  }

  .general-queries {
    margin: 10px 0;
    text-align: center;
  }

  .faq_sub_head {
    text-align: center;
    font-size: 25px;
  }
}

.results_sec {
  padding: 50px 0;
}

.results_sec #myTab a {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f3f3;
  height: 60px;
}

.result-breadcrumb a,
.result-breadcrumb i {
  font-size: 12px;
  font-weight: 300;
  color: #323232;
}

.testi_head {
  font-size: 30px;
  font-family: "Inria Serif";
  color: #2d2d2d;
  padding: 20px 0 30px;
}

.testimonial_sec {
  padding: 0 100px !important;
}

.owl-theme .owl-nav {
  display: flex;
  justify-content: space-between;
  position: relative;
  top: -150px;
  margin: -15px;
}

button.owl-prev,
button.owl-next {
  height: 30px;
  width: 30px;
  border-radius: 50% !important;
}

.video-icon {
  top: 40%;
  left: 43%;
}

.tab-link {
  color: #000;
}

p.review_location {
  margin: 0;
}

.ti-star.f {
  background-image: url(https://www.vcaretrichology.com/landing/hair-and-skin-sample/assets/image/f.svg);
  width: 16px;
  height: 16px;
  display: inline-block;
  margin: 0 !important;
  margin-right: 1px !important;
  background-size: contain;
  background-repeat: no-repeat;
}

img.img-fluid.dp_img {
  width: 50px;
}

.para::-webkit-scrollbar-track {
  /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
  border-radius: 10px;
  background-color: #f5f5f5;
}

.para::-webkit-scrollbar {
  width: 5px;
  background-color: #f5f5f5;
}

.para::-webkit-scrollbar-thumb {
  border-radius: 10px;
  /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3); */
  background-color: #555;
}

.testimonial-sec .owl-nav .owl-prev {
  top: 100% !important;
  position: absolute;
  left: 44%;
  margin-top: 20px !important;
}

.testimg img {
  width: 50px !important;
  height: 50px !important;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 10px;
}

.bg-white1.p-3 {
  /* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px; */
  margin: 5px;
  cursor: pointer;
  align-items: flex-start;
  padding: 12px 24px 32px;
  gap: 20px;
  width: 96%;
  background: #fff;
  border-radius: 5px;
  flex-direction: column;
  display: flex;
}

.owl-next,
.owl-prev {
  background-color: #ededed !important;
}

h2.display-4 {
  font-size: 35px;
}

@media (max-width: 767px) {
  .vcgmbpara {
    font-size: 14px;
  }
}

h2.display-4 {
  font-size: 35px;
  color: #ec518c;
  font-weight: 500;
}

.para {
  overflow: auto !important;
  height: 125px !important;
}

@media (max-width: 767px) {
  .testimonial_sec {
    padding: 0 !important;
  }

  .tab-link {
    color: #000;
    margin: 10px 0;
  }

  .results_sec #myTab a {
    height: 45px;
    font-size: 12px;
  }
}

/* pending upload */

.contact_detail_card {
  background-color: #fff;
  height: 150px;
  padding: 25px;
}

.contact_detail_card p {
  font-size: 15px;
  line-height: 24px;
  font-weight: 300;
  color: #323232;
}

.contact_detail_card i {
  font-size: 20px;
}

.contact_detail_card div {
  font-size: 20px;
  gap: 10px;
  color: #2d2d2d;
  margin-bottom: 15px;
}

.get_in_touch_sec {
  background-color: #fff;
  padding: 50px;
}

.get_in_touch_head div {
  font-size: 20px;
  color: #2d2d2d;
  text-align: center;
  margin-bottom: 10px;
}

.get_in_touch_head p {
  text-align: center;
  font-size: 15px;
  line-height: 24px;
  font-weight: 300;
  color: #323232;
}

.get_in_touch_form input,
.get_in_touch_form textarea,
.personal_info_sec input,
.personal_info_sec select {
  padding: 20px !important;
  border: 1px solid #e9e9e9 !important;
  border-radius: 2px !important;
}

.sent_btn {
  border-radius: 4px;
  background-color: #171717;
  height: 49px;
  font-size: 18px;
  color: #fff;
  padding: 0 60px;
  border: none;
}

.form-control::placeholder {
  color: #999 !important;
  font-weight: 300;
}

.form-control {
  color: #7e7e7e !important;
  font-size: 15px !important;
}

.personal_info_nav_menu .tab-link.active[data-v-7e425539] {
  background-color: #ececea;
  transition: 0.5s;
}

.personal_info_sec {
  padding-top: 17rem;
}

.user_name {
  font-size: 16px;
  color: #2d2d2d;
  text-align: center;
}

.user_mobile {
  font-size: 13px;
  font-weight: 300;
  font-family: Lexend;
  color: #323232;
  text-align: center;
  border-bottom: solid 1px #d3d3d3;
  padding-bottom: 20px;
}

.personal_info_nav_menu {
  width: 100%;
  /* padding: 20px 30px; */
  font-size: 14px;
  font-family: Lexend;
  color: #2d2d2d;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px #d3d3d3;
}

.personal_info_nav_menu .tab-link {
  width: 100%;
  padding: 20px 30px;
  margin: 0;
}

.personal_info_nav_menu .tab_icon i {
  background-color: #ececea;
  color: #2d2d2d !important;
  font-size: 20px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  padding: 0 !important;
}

.personal_info_sec #myTab {
  background-color: #fff;
  border-radius: 10px;
  padding: 30px 0 0;
}

.personal_info_nav_menu .tab-link.active {
  background-color: #ececea;
  transition: 0.5s;
}

.personal_info_nav_menu .tab-link.active .tab_icon i {
  transition: 0.5s;
  background-color: #fff;
}

.personal_info_sec #myTabContent #Information,
#myTabContent #Order,
#myTabContent #Address,
#myTabContent #Wishlist {
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  height: 100%;
}

.personal_info_sec #myTabContent {
  height: 100%;
}

.personal_info_sec #myTabContent #Tracking {
  background-color: #fff;
  border-radius: 10px;
  height: 100%;
}

.personal_info_sec #myTabContent #Tracking .row {
  background-color: #edefe1;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}

/* Custom dropdown arrow */
.custom-select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding-right: 30px;
  /* Adjust to leave space for the arrow */
  background-image: url("../images/drop-arw.png");
  /* Bootstrap icon chevron-down */
  background-repeat: no-repeat;
  background-position: right 10px center;
  /* Position the icon to the right */
  background-size: 16px;
  /* Size of the icon */
}

.custom-select-date {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding-right: 30px;
  /* Adjust to leave space for the arrow */
  background-image: url("../images/calendar.svg");
  /* Bootstrap icon chevron-down */
  background-repeat: no-repeat;
  background-position: right 10px center;
  /* Position the icon to the right */
  background-size: 16px;
  /* Size of the icon */
}

.pers_info_head {
  font-size: 20px;
  color: #060e0d;
  display: flex;
  align-items: baseline;
}
.pers_info_head i {
  font-size: 20px;
  color: #060e0d !important;
  margin-right: 10px;
}

.upload_img_sec {
  margin: 30px 20px;
}

.upload_head {
  font-size: 14px;
  color: #323232;
}

.upload_size {
  font-size: 13px;
  font-weight: 300;
  color: #999;
  font-size: 13px;
}

.choose_file {
  border: 1px solid #e9e9e9;
  padding: 8px;
  font-size: 13px;
  font-weight: 300;
  color: #999;
}

.choose_file button {
  border: none;
  padding: 5px 10px;
  font-size: 13px;
  color: #323232;
  font-weight: 300;
}

.up_img {
  margin-right: 15px;
}

.personal_info_sec #Order .tab-link {
  font-size: 14px;
  color: #2d2d2d;
}

.underline {
  position: absolute;
  bottom: -4px;
  left: 0;
  height: 1px;
  width: 50px;
  /* Default width, will be updated dynamically */
  background-color: black;
  transition: all 0.3s ease-in-out;
  padding: 1px;
}

#Order .tab {
  /* padding: 10px 20px; */
  height: 40px;
  cursor: pointer;
  position: relative;
  font-size: 16px;
  display: flex;
  align-items: center;
}

#myTabContainer {
  border-bottom: solid 2px #e9e9e9;
  padding: 0 10px;
}

.order_status_wrap {
  border: 1px solid #e9e9e9;
  margin: 20px 0;
  /* padding: 15px; */
}

.ord_pro_img {
  height: 80px;
  width: auto;
  margin-right: 15px;
}

.in_stock,
.ord_pro_name,
.ord_pro_pri,
.ord_no_status_pending,
.ord_no_status_completed,
.ord_no_status_cancelled {
  font-size: 14px;
  font-weight: 300;
  color: #060e0d;
}

.ord_pro_type,
.ord_pro_vol {
  font-size: 12px;
  font-weight: 300;
  color: #060e0d;
}

.ord_no_status_completed {
  display: flex;
  align-items: center;
  gap: 5px;
}

.ord_no {
  font-size: 14px;
  color: #060e0d;
}

.ord_no_status_completed span,
.ord_no_status_completed i {
  color: #608d16 !important;
  font-weight: 400;
}

.ord_no_status_pending span,
.ord_no_status_pending i {
  color: #e87b38 !important;
  font-weight: 400;
}

.ord_no_status_cancelled span,
.ord_no_status_cancelled i {
  color: #c30010 !important;
  font-weight: 400;
}

.ord_no_status_pending i,
.ord_no_status_completed i,
.ord_no_status_cancelled i {
  margin-right: 5px;
  font-size: 10px;
}

.ord_pro_details {
  border-bottom: 1px solid #e9e9e9;
  border-top: 1px solid #e9e9e9;
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
.track_btn:hover {
  scale: 1.1;
}

.wish_add_cart_btn {
  margin-right: 10px;
  padding: 6px 14px;
  border-radius: 4px;
  background-color: #171717;
  color: #fff;
  font-size: 12px;
  border: none;
}

.cancel_btn,
.write_btn,
.view_btn {
  padding: 6px 14px;
  border-radius: 4px;
  background-color: #e9e9e9;
  color: #323232;
  font-size: 12px;
  border: none;
}

.view_btn {
  margin-right: 10px;
}

.cancel_date {
  font-size: 15px;
  font-weight: 300;
  color: #323232;
}

.cancel_reason {
  font-size: 12px;
  font-weight: 300;
  color: #323232;
}

#addressSelect {
  display: flex;
  align-items: center;
}

button#addAddressBtn {
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  /* padding: 15px; */
  height: 200px;
  width: 180px;
  background: #fff;
  border: solid 1px #ebebeb;
  margin: 15px;
  font-size: 14px;
  color: #323232;
}

.default_address {
  height: 200px;
  width: 180px;
  border-radius: 10px;
  border: solid 1px #ebebeb;
  background-color: #ececea;
  margin: 15px;
  font-weight: 300;
  font-size: 14px;
  color: #323232;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.add_address_head {
  border-bottom: solid 1px #ebebeb;
}

.add_address_btn {
  padding: 8px 80px;
  border-radius: 2px;
  background-color: #000;
  color: #fff;
  font-size: 16px;
  border: none;
  width: auto !important;
}

.def_name {
  font-weight: 400;
}

.default_img {
  position: absolute;
  top: -46px;
  left: -49px;
  width: 128.7px;
  height: 130.1px;
  object-fit: contain;
}

#backBtn {
  background-color: transparent;
  border: none;
  color: #323232;
  margin-right: 15px;
  font-size: 12px;
}

#Wishlist i {
  color: #c30010;
}

#Wishlist .ord_pro_img {
  height: 100px;
  width: auto;
  margin-right: 15px;
}

#Wishlist .mar_bottom {
  border-bottom: solid 1px #ebebeb;
}

.ord_track_head span {
  font-size: 20px;
  color: #2d2d2d;
}

.ord_track_head {
  font-size: 14px;
}

.del_guy {
  width: auto;
  overflow: hidden;
  height: 239px;
}

#Tracking .track_btn {
  border-radius: 5px;
  background-color: #171717;
  padding: 6px 12px;
  border: none;
  font-weight: 500;
  font-size: 16px;
}

.bck_tab_link {
  background-color: transparent;
  border: none;
  display: none;
  font-size: 18px;
}

@media (max-width: 767px) {
  .personal_info_nav_menu .tab-link.active {
    background-color: #fff;
    transition: 0.5s;
  }

  .personal_info_nav_menu .tab-link.active .tab_icon i {
    transition: 0.5s;
    background-color: #edefe1;
  }

  /* #myTabContent {
    display: none;
  } */

  .personal_info_sec {
    padding: 0;
  }

  .bck_tab_link {
    display: block;
    margin: 20px 0 10px;
  }

  .personal_info_sec #myTabContent #Information,
  #myTabContent #Order,
  #myTabContent #Address,
  #myTabContent #Wishlist {
    padding: 0;
    height: auto;
  }

  .personal_info_sec #myTabContent #Tracking {
    height: auto;
    padding: 20px;
  }

  .personal_info_sec {
    background-color: #fff;
  }
}

@media (max-width: 650px) {
  .pers_info_head {
    margin-bottom: 0 !important;
  }
  .del_guy {
    width: -webkit-fill-available;
    height: auto;
  }
}
@media (max-width: 500px) {
  #addressSelect {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .default_address {
    margin: 0;
  }

  button#addAddressBtn,
  .default_address {
    width: 75%;
  }

  .ord_track_head span {
    font-size: 16px;
  }

  .ord_track_head {
    font-size: 10px;
  }
  .personal_info_sec input {
    width: 100% !important;
  }
}
.pagination-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 30px;
  flex-wrap: wrap;
}

.page-btn {
  min-width: 38px;
  height: 38px;
  padding: 0 12px;
  border: 1px solid #e0e0e0;
  background: #ffffff;
  color: #333;
  font-size: 14px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.25s ease;
}

.page-btn:hover:not(:disabled) {
  background-color: #f5f5f5;
  border-color: #d4d4d4;
}

.page-btn.active {
  background-color: #111827; /* dark theme */
  color: #ffffff;
  border-color: #111827;
  font-weight: 600;
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: #f3f4f6;
}

.page {
  background-color: #fdf9f9;
  padding-bottom: 3rem;
  font-family: "Poppins", sans-serif;
}
.tab_icon {
  font-family: "Poppins";
}
</style>
