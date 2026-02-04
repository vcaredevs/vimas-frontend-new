<template>
  <section class="page">
    <div class="page__wrapper">
      <section class="personal_info_sec container-fluid">
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
                       <img :src="image_url+customer?.avatar" :alt="customer?.name"  class="rounded-circle"/>
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
                        ><i class="bi bi-person"></i> Personal Information</span
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

                      class="tab-link d-flex align-items-center justify-content-between"
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
                      <div class="pers_info_head">
                        <button class="bck_tab_link">
                          <i class="bi bi-chevron-left"></i>
                        </button>
                        Personal Information
                      </div>
                      <div class="col-sm-6">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="First name"
                          aria-label="First name"
                          :value="customer?.name"
                          readonly
                        />
                      </div>
                      <div class="col-sm-6">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Mobile No."
                          aria-label="Mobile"
                          :value="customer?.phone"
                          readonly
                        />
                      </div>
                      <div class="col-sm-6">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Mobile No."
                          aria-label="Mobile"
                          :value="customer?.phone"
                          readonly
                        />
                      </div>
                      <div class="col-sm-6">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Email Id"
                          aria-label="Email"
                          :value="customer?.email"
                          readonly
                        />
                      </div>
                      <div class="col-sm-6">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Gender"
                          aria-label="Gender"
                          :value="customer?.gender"
                          readonly
                        />
                      </div>
                      <div class="col-sm-6">
                        <input
                          type="text"
                          class="form-control custom-select-date"
                          placeholder="Date of Birth"
                          aria-label="Date of Birth"
                          :value="customer?.dob"
                          readonly
                        />
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
            :src="previewImage || (image_url + customer?.avatar)"
            class="avatar-img"
          />
        </div>

        <div>
          <div class="upload_head">Upload file</div>
          <div class="upload_size py-2">JPG 120×120px</div>

          <div class="choose_file">
            <button class="choose_file_btn" @click="triggerFile">
              Choose file
            </button>

            <span v-if="selectedFile">{{ selectedFile.name }}</span>
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
          >
            Save
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
                    <div class="pers_info_head mb-4">
                      <button class="bck_tab_link">
                        <i class="bi bi-chevron-left"></i>
                      </button>
                      Your Orders
                    </div>
                    <div class="row justify-content-center">
                      <div class="col-md-11 col-sm-11 col-12">
                        <div class="table-responsive">
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
                             <div v-if="orders.data && orders.data.length === 0">   
                    <p>No orders found</p>
                </div>
                            <tbody  v-else>
                              <tr v-for="(item,index) in orders.data" :key="item.id">
                               <td>{{ index+1 }}</td>
                                 <td>{{ item.code }}</td>
                                 <td>{{ dateTime(item.created_at)}}</td>
                                <td>Rs. {{ item.sub_total }}</td>
                                <td>
                                  <div class="ord_no_status_pending">
                                    <i class="bi bi-circle-fill"></i>
                                    <span class="text-capitalize">{{ item.status }}</span>
                                  </div>
                                </td>
                                <td>
                               <router-link :to="`order/${item.id}`"><button class="track_btn">Track Order</button></router-link>   
                                </td>
                              </tr>
                             
                            </tbody>
                          </table>
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
                    <div class="pers_info_head mb-4">
                      <button class="bck_tab_link">
                        <i class="bi bi-chevron-left"></i>
                      </button>
                      Address
                    </div>
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
                            src="../../assets/images/Default.png"
                            alt=""
                          />
                          <div v-if="defaultAddress" class="def_add_details">
  <span class="def_name">{{ defaultAddress.name }}</span><br />
  Ph: {{ defaultAddress.phone }} <br />
  {{ defaultAddress.address }} <br />
  {{ defaultAddress.city }}, {{ defaultAddress.zip_code }} <br />
  {{ defaultAddress.state }} <br />
  {{ defaultAddress.country }}
</div>

<div v-else>
  No default address found.
</div>

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
                          <div class="col-sm-4 mt-4">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="1"
                              v-model="form.is_default"
                              id="defaultAddress"
                            />
                            <label
                              class="form-check-label"
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
  postCustomerImage,
} from "../../services/apiService";
import { image_url } from "../../config/api";

const fileInput = ref(null);
const selectedFile = ref(null);
const previewImage = ref(null);
const cropper = ref(null);
const showForm = ref(false);
const customer = ref(null);
const loading = ref(false);
const uploading = ref(false);
const addresses = ref([]);
const userId = atob(localStorage.getItem("user_id"));
const orders = ref([]);
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
const currentPage = ref(null)
const lastPage = ref(null)
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
toast.success("Address added successfully")
    // alert("Address added successfully ");
    await fetchAddresses();

    resetForm();
  } catch (err) {
    console.error("Failed to save address", err);
    toast.success("Failed to save address")
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
  return addresses.value.find(addr => addr.is_default === 1) || null;
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

    if (cropper.value) cropper.value.destroy();

    const image = document.getElementById("cropper-image");
    image.addEventListener("load", () => {
      cropper.value = new Cropper(image, {
        aspectRatio: 1,
        viewMode: 1,
        autoCropArea: 1,
        background: false,
        responsive: true,
        zoomOnWheel: false,
      });
    });
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
console.log("file",file);

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
toast.success("Profile photo uploaded successfully")
     
    } catch (err) {
      console.error("Upload failed", err.response?.data || err);
    } finally {
      uploading.value = false;
    }
  }, "image/jpeg");
};

async function getCustomerDetails() {
  const phone = atob(localStorage.getItem("phone"));
  try {
    loading.value = true;
    const res = await getCustomerDetail(phone);
    customer.value = res.data.data.customer;
  } catch (err) {
    console.error(err);
  } finally {
    loading.value = false;
  }
}
const fetchOrderDetails = async(user,page=1)=>{
    if (!orders.value.length) {
      loading.value = true;
    }
    try {
      const orderDetailRes = await getOrderDetails(userId,page);
      orders.value = orderDetailRes.data.data;
      // currentPage.value = orderDetailRes.data.data.current_page;
      // lastPage.value = orderDetailRes.data.data.last_page;
    } catch (err) {
        console.error('Error fetching faq details:', err)
    }finally {
      if (loading.value) loading.value = false;
    }
}
const dateTime = (date) => {
  if (!date) return "-";

  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();

  return `${day}-${month}-${year}`;
};
const logout = ()=>{

  localStorage.removeItem('authToken');
  localStorage.removeItem('phone');
  localStorage.removeItem('user_id');
  localStorage.removeItem('customerType');          
}
onMounted(() => {
 
  getCustomerDetails();
});
</script>

<style scoped>
.form-check-input[type="checkbox"] {
  padding: 5px;
  border-radius: 50% !important;
  margin-right: 6px;
}
.user-img{
      margin: auto;
    width: 100px;
}
#cropper-image{
  width: 150px !important;
}
.upload_img_sec {
  margin: 30px 0px !important;
}
</style>
