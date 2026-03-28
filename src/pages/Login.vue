<template>
  <!-- Loader -->
  <div
    v-if="pageloader"
    class="d-flex justify-content-center align-items-center vh-100 mt10"
  >
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>

  <!-- Login Section -->
  <section v-else class="login-sec-new mt10">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-xl-9 col-lg-10">
          <div class="login-card shadow-lg rounded-4 overflow-hidden">
            <div class="row g-0">
              <!-- Left Content -->
              <div class="col-md-6 login-left d-none d-md-flex">
                <div class="p-5 text-white">
                  <h2 class="fw-bold mb-3">
                    Welcome to<br />Vimas
                  </h2>
                  <p class="opacity-75">
                    We’re glad to have you back. Manage your treatments and
                    appointments seamlessly.
                  </p>

                  <div class="mt-4 small opacity-75">
                    Disclaimer: This portal is exclusively for existing clients
                    of VCare Hair & Skin Clinics.
                  </div>
                </div>
              </div>

              <!-- Right Form -->
              <div class="col-md-6 bg-white">
                <div class="p-4 p-lg-5">
                  <!-- Mobile -->
                  <div v-if="beforeotp">
                    <h4 class="fw-bold mb-4">Register</h4>

                    <div class="mb-3">
                      <label class="form-label">Mobile Number</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="+91 98989 87878"
                        v-model="mobileinput"
                        @blur="validatePhone"
                        @keyup.enter="sendOtp"
                      />
                      <p class="text-danger small mt-2 errormsg">
                        {{ errorMessage }}
                      </p>
                    </div>

                    <button v-if="loading" class="btn btn-primary w-100 py-2">
                      <div class="loader"></div>
                    </button>

                    <button
                      v-else
                      class="btn w-100 py-2 sendotp"
                      @click="sendOtp"
                      :disabled="isSubmitDisabled"
                    >
                      <span v-if="loading" class="loader"></span>
                      <span v-else>Send OTP</span>
                    </button>
                  </div>

                  <!-- OTP -->
                  <div v-else>
                    <h4 class="fw-bold mb-3">OTP Verification</h4>

                    <p class="text-muted small mb-4">
                      Enter OTP sent to ******{{ mobileinumberShow() }}
                    </p>

                    <div class="d-flex gap-2 justify-content-between mb-3">
                      <input
                        v-for="(otp, index) in otpInputs"
                        :key="index"
                        :id="'otp-input-' + index"
                        :ref="'otp-input-' + index"
                        v-model="otpInputs[index]"
                        type="text"
                        maxlength="1"
                        class="otp-box"
                        @input="onInput(index)"
                        @paste="onPaste($event)"
                        @keydown="onKeydown($event, index)"
                        :disabled="isSubmitting"
                        autocomplete="off"
                        @keydown.enter="submitOtp"
                      />
                    </div>

                    <p class="text-danger small">
                      {{ errorMessage }}
                    </p>

                    <div class="d-flex justify-content-end mb-3">
                      <span v-if="timeOut" class="text-muted small">
                        00:{{ timeInterval }}
                      </span>
                      <a
                        v-else
                        href="javascript:void(0)"
                        class="small"
                        @click="resendOtp"
                      >
                        Resend OTP
                      </a>
                    </div>

                    <button v-if="loading" class="btn btn-primary w-100 py-2">
                      <div class="loader"></div>
                    </button>

                    <button
                      v-else
                      class="btn btn-primary w-100 py-2"
                      @click="submitOtp"
                      :disabled="isSubmitting || !isOtpComplete"
                    >
                      <span v-if="loading" class="loader"></span>
                      <span v-else>Verify OTP</span>
                    </button>
                  </div>

                  <!-- Mobile Disclaimer -->
                  <div class="d-block d-md-none mt-4 text-muted small">
                    Disclaimer: This portal is exclusively for existing clients
                    of VCare Hair & Skin Clinics.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, nextTick, onMounted } from "vue";
import { useRouter } from "vue-router";
import {
  addToCartApi,
  customerlogin,
  validateloginotp,
} from "../services/apiService";

const router = useRouter();
const mobileinput = ref("");
const errorMessage = ref("");
const successMessage = ref("");
const beforeotp = ref(true);
const loading = ref(false);
const pageloader = ref(true);
const isSubmitDisabled = ref(false);
const otpInputs = ref(["", "", "", ""]);
const phoneRegex = /^[0-9]{10}$/;
const timeInterval = ref(30);
const timeOut = ref(false);
let timer = null;
const mobileinumberShow = () => {
  return mobileinput.value.toString().slice(-4);
};
function startInterval() {
  if (timer) clearInterval(timer);
  timeInterval.value = 30;
  timeOut.value = true;

  timer = setInterval(() => {
    if (timeInterval.value > 0) {
      timeInterval.value--;
    } else {
      clearInterval(timer);
      timeOut.value = false;
    }
  }, 1000);
}
const validatePhone = () => {
  if (mobileinput.value.trim() === "") {
    errorMessage.value = "Enter your mobile number";
    isSubmitDisabled.value = true;
  } else if (!phoneRegex.test(mobileinput.value)) {
    errorMessage.value = "Please enter a valid 10-digit phone number.";
    isSubmitDisabled.value = true;
  } else {
    isSubmitDisabled.value = false;
    errorMessage.value = "";
    // beforeotp.value = false;
  }
};

const sendOtp = async () => {
  var val = {
    phone: mobileinput.value,
    type: "sms",
  };
  try {
    if (!mobileinput.value) {
      validatePhone();
    } else {
      loading.value = true;
      const res = await customerlogin(val);
      loading.value = false;
      if (res.data.status) beforeotp.value = false;
      timeOut.value = true;
      startInterval();
      if (res.data.status) toast.success("OTP sent successfully!");
    }
  } catch (err) {}
};
const resendOtp = async () => {
  var val = {
    phone: mobileinput.value,
    type: "sms",
  };
  const res = await customerlogin(val);
  if (res.data.status) toast.success("OTP sent successfully!", {});
};
const isOtpComplete = () => {
  return otpInputs.value.every((digit) => digit.length === 1);
};

const onInput = (index) => {
  if (otpInputs.value[index].length === 1 && index < 3) {
    nextTick(() => {
      const nextInput = document.querySelector(`#otp-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    });
  }
};

const onPaste = (event) => {
  const pastedData = event.clipboardData.getData("text");
  if (pastedData.length === 4) {
    otpInputs.value = pastedData.split("");
    event.preventDefault();
  }
};

const onKeydown = (event, index) => {
  if (event.key === "Backspace" && otpInputs.value[index] === "") {
    if (index > 0) {
      nextTick(() => {
        const prevInput = document.querySelector(`#otp-input-${index - 1}`);
        if (prevInput) prevInput.focus();
      });
    }
  }
};

const submitOtp = async () => {
  const auth_user_id = localStorage.getItem("auth_user_id");
  errorMessage.value = "";
  successMessage.value = "";
  const otp = otpInputs.value.join("");
  if (otp.length !== 4) {
    errorMessage.value = "Please enter a valid 4-digit OTP.";
    return;
  }
  loading.value = true;
  isSubmitDisabled.value = true;
  var body = {
    phone: mobileinput.value,
    otp: otp,
    user_id: auth_user_id,
  };
  try {
    const response = await validateloginotp(body);
    if (response.status == 200) {
      successMessage.value = "OTP verified successfully!";
      loading.value = false;
      localStorage.setItem("phone", btoa(mobileinput.value));
      localStorage.setItem("authToken", btoa(response.data.data.token));
      localStorage.setItem(
        "customerType",
        btoa(response.data.data.customer_type),
      );
      localStorage.setItem("user_id", btoa(response.data.data.user_id));

      localStorage.removeItem("auth_user_id");

      router.push({ name: "Cart" });
    } else {
      errorMessage.value = "Invalid OTP. Please try again.";
      loading.value = false;
    }
  } catch (error) {
    errorMessage.value = error.response.data.msg;
    loading.value = false;
  } finally {
    isSubmitDisabled.value = false;
  }
};
onMounted(() => {
  const userId = localStorage.getItem("user_id")
    ? atob(localStorage.getItem("user_id"))
    : null;
  if (userId) {
    router.push({ name: "Cart" });
  }
  setTimeout(() => {
    pageloader.value = false;
  }, 1000);
});
</script>

<style scoped>
/* .btn-btn-secondary {
  background-color: #0e302a;
  color: #fff;
}
.btn-btn-secondary:hover {
  background: #1b6a63;
  color: #fff;
}
.loader {
  margin: auto;
  width: 20px;
  height: 20px;
  border: 2px solid #fff;
  border-top: 2px solid transparent;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.mt10 {
  margin: 8rem 0 3rem 0;
}
@media(max-width:991px){
 .mt10 {
  margin-top: 10rem;
}   
}
.login-card {
  background: #fff;
}

.login-left,
.btn {
  background: #0e302a;
  color: #fff !important;
}

.otp-box {
  width: 48px;
  height: 52px;
  text-align: center;
  font-size: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
}
h2,
p {
  color: #fff !important;
}
.errormsg {
  color: #b02a37 !important;
} */

 :root {
  --primary: #b23a3a;        /* soft red */
  --secondary: #f5e6dc;      /* beige */
  --text-dark: #3b2f2f;      /* dark brown */
  --white: #ffffff;
}
.login-card {
  border-radius: 20px;
  background: var(--white);
  box-shadow: 0 10px 40px rgba(0,0,0,0.08);
  overflow: hidden;
}
.login-left {
background: url(../assets/images/product/bgimage.png);
  position: relative;
}

/* Optional overlay glow */
.login-left::before {
  content: "";
  position: absolute;
  inset: 0;
  background:url(../assets/images/product/bgimage.png);
 /* background: linear-gradient(135deg, #FFE3DA, #FFC3B3); */
  opacity: 0.1;
}
.login-left h2 {
  font-size: 32px;
    color: #635454;
}

.login-left p {
  font-size: 14px;
}
.form-control {
  border-radius: 12px;
  border: 1px solid #eee;
  padding: 12px;
  font-size: 14px;
}

.form-control:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 0.1rem rgba(178, 58, 58, 0.2);
}
.btn {
  border-radius: 12px;
  background: var(--primary);
  color: #fff;
  font-weight: 500;
  transition: 0.3s;
}

.btn:hover {
  background: #922f2f;
}
.otp-box {
  width: 45px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #ddd;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
}

.otp-box:focus {
  border-color: var(--primary);
  box-shadow: 0 0 5px rgba(178, 58, 58, 0.3);
  outline: none;
}
.mt10 {
  margin: 8rem 0 3rem 0;
}
.sendotp{
  background-color: #e9471a;
}
.text-white{
  color: rgb(57 45 45) !important;
}
</style>
