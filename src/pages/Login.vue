<template>
    <div v-if="pageloader" class="d-flex justify-content-center align-items-center" style="height: 500px">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    <section class="login-sec" v-else>
        <div class="container-fluid">
            <div class="row p-0">
               <div class="col-lg-6 col-md-6  p-0">
                <div class="loginLeft">
                    <div class="row justify-content-center justify-content-lg-start">
                        <div class="col-xl-8 col-lg-8 col-md-10 col-12 col-sm-11 ps-lg-5">
                            <div class="login-contentbx">
                                <img src="../assets/images/vcare-light.png" class="login-logo" alt="Vcare ">
                                <h2 class="sec-title">Welcome to the VCare 
                                    Customer Portal ! 
                                </h2>
                                <p>
                                    We trust that your journey with VCare has been enjoyable so far.
                                </p>
                            </div>

                            <div class="disclaim-text d-lg-block d-md-block d-none d-sm-none">
                                <p class="">
                                    Disclaimer: This portal is exclusively for existing clients of VCare Hair &amp; Skin Clinics and is not intended for new or non-customers.
                                </p>
                            </div>
                            

                        </div>
                    </div>
                </div>
               </div>
               <div class="col-lg-6 col-md-6">
                    <div class="loginright">
                    
                        <div class="row justify-content-center justify-content-lg-start">
                            <div class="col-xl-7 col-lg-7 col-md-10 col-12 col-sm-11 ps-lg-5">
                                <div class="loginform-bx">
                                    <div id="loginDiv" class="" style="" v-if="beforeotp">
                                        <h2 class="h4-title mb-lg-4 mb-3">Register 
                                        </h2>
                                        
                                        <div class="mb-3">
                                            <label class="form-label">Mobile Number </label>
                                            <input type="text" class="form-control" id="mobile" placeholder="+91 989898 7878" v-model="mobileinput" @blur="validatePhone" @keyup.enter="sendOtp">
                                            <p id="errorMsg" class="mt-lg-2 mt-2 text-danger small-text fw-normal">{{ errorMessage }}</p>
                                        </div>
                                        <div class="mb-3">
                                            <button v-if="loading" class="btn btn-secondary w-100 d-flex justify-content-center" @click="submitOtp"><div class="loader"></div></button>
                                            <button v-else id="sendOtp" class="btn btn-secondary w-100 text-center" @click="sendOtp" :disabled="isSubmitDisabled">Send OTP</button>
                                        </div>
                                    </div>
                                    <div id="otpDiv" style="" v-else>
                                        <h2 class="h4-title mb-lg-4 mb-3">OTP Verification 
                                        </h2>
                                        <p class="small-text">Enter OTP code sent to the mobile number <span id="displayMaskedMobile">******{{ mobileinumberShow() }}</span></p>
                                        <div class="row">
                                            <input :id="'otp-input-'+index" class="input" min="0" max="9" step="1" aria-label="first digit" v-for="(otp,index ) in otpInputs" :key="index" :ref="'otp-input-' + index" type="text" maxlength="1"  v-model="otpInputs[index]" @input="onInput(index)" @paste="onPaste($event)" @keydown="onKeydown($event, index)" :disabled="isSubmitting" autocomplete="off" @keydown.enter="submitOtp">
                                            <p id="errorMsg" class="mt-lg-2 mt-2 text-danger small-text fw-normal">{{ errorMessage }}</p>
                                        </div>

                                        <p class="mt-lg-2 mt-1" v-if="timeOut">
                                            <span class="resendotp float-end  mb-lg-3 mb-2">00:{{ timeInterval }}</span>
                                        </p>
                                        <p class="mt-lg-2 mt-1" @click="resendOtp" v-else>
                                            <a href=""><span class="resendotp float-end  mb-lg-3 mb-2">Resend OTP</span></a>
                                        </p>
                                        <p class="mt-lg-3 mt-2">
                                            <button v-if="loading" class="btn btn-secondary w-100 d-flex justify-content-center" @click="submitOtp"><div class="loader"></div></button>
                                            <button v-else class="btn btn-secondary w-100" @click="submitOtp" :disabled="isSubmitting || !isOtpComplete">Verify OTP</button>
                                        </p>
                                    </div>
                                </div>
                                <div class="disclaim-text d-lg-none d-md-none d-block d-sm-block mt-lg-4 mt-3">
            
                                    <p class="">
                                        Disclaimer: This portal is exclusively for existing clients of VCare Hair &amp; Skin Clinics and is not intended for new or non-customers.
                                    </p>
                                       
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
    import { ref, nextTick, onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    import { addToCartApi, customerlogin, validateloginotp } from '../services/apiService';
    
        const router = useRouter()
        const mobileinput = ref('');
        const errorMessage = ref('');
        const successMessage = ref('');
        const beforeotp = ref(true);
        const loading = ref(false);
        const pageloader = ref(true);
        const isSubmitDisabled = ref(false);
        const otpInputs = ref(['', '', '', '']); 
        const phoneRegex = /^[0-9]{10}$/;
        const timeInterval = ref(30);
        const timeOut = ref(false);
        let timer = null;
        const mobileinumberShow = ()=>{
            return mobileinput.value.toString().slice(-4)
        }
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
        if (mobileinput.value.trim() === '') {
            errorMessage.value = 'Enter your mobile number';
            isSubmitDisabled.value = true;
        } else if (!phoneRegex.test(mobileinput.value)) {
            errorMessage.value = 'Please enter a valid 10-digit phone number.';
            isSubmitDisabled.value = true;
        } else {
            isSubmitDisabled.value = false;
            errorMessage.value = '';
            // beforeotp.value = false;
        }
        };

        const sendOtp = async ()=>{
            var val = {
                'phone':mobileinput.value,
                'type':'sms'
            }
            try{
                if(!mobileinput.value){
                    validatePhone()
                }else{
                    loading.value = true;
                    const res = await customerlogin(val);
                    loading.value = false;
                    if(res.data.status)beforeotp.value = false;
                    timeOut.value = true;
                    startInterval();
                    if(res.data.status)toast.success('OTP sent successfully!');
                }
            }catch(err){

            }
        }
        const resendOtp = async ()=>{
            var val = {
                'phone':mobileinput.value,
                'type':'sms'
            }
            const res = await customerlogin(val);
            if(res.data.status) toast.success("OTP sent successfully!", {});

        }
        const isOtpComplete = () => {
        return otpInputs.value.every(digit => digit.length === 1);
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
        const pastedData = event.clipboardData.getData('text');
        if (pastedData.length === 4) {
            otpInputs.value = pastedData.split('');
            event.preventDefault();
        }
        };

        const onKeydown = (event, index) => {
        if (event.key === 'Backspace' && otpInputs.value[index] === '') {
            if (index > 0) {
            nextTick(() => {
                const prevInput = document.querySelector(`#otp-input-${index - 1}`);
                if (prevInput) prevInput.focus();
            });
            }
        }
        };

        const submitOtp = async () => {
        
        const auth_user_id=  localStorage.getItem("auth_user_id")
        errorMessage.value = ''; 
        successMessage.value = ''; 
        const otp = otpInputs.value.join('');
            if (otp.length !== 4) {
                errorMessage.value = 'Please enter a valid 4-digit OTP.';
                return;
            }
            loading.value = true;
            isSubmitDisabled.value = true;
            var body = {
                'phone':mobileinput.value,
                'otp':otp,
                "user_id": auth_user_id
            }
            try {
                
                const response = await validateloginotp(body);
                if (response.status == 200) {
                    
                    successMessage.value = 'OTP verified successfully!';
                    loading.value = false;
                    localStorage.setItem("phone", btoa(mobileinput.value));
                    localStorage.setItem("authToken", btoa(response.data.data.token));
                    localStorage.setItem("customerType", btoa(response.data.data.customer_type));                
                    localStorage.setItem("user_id", btoa(response.data.data.user_id));        
                

 localStorage.removeItem("auth_user_id");

    router.push({ name: "Cart" });      
                } else {
                    errorMessage.value = 'Invalid OTP. Please try again.';
                    loading.value = false;
                }
            } catch (error) {
                errorMessage.value = error.response.data.msg;
                loading.value = false;
            } finally {
                isSubmitDisabled.value = false;
            }
        };
        onMounted(()=>{
            const userId = localStorage.getItem("user_id") ? atob(localStorage.getItem("user_id")) : null; 
            if(userId){
                router.push({ name: "Cart" });
            }
            setTimeout(() => {
                pageloader.value = false;
            }, 1000);
        })
    </script>
<style scoped>
    .login-sec {
        position: relative;
        background: #F8F9FA;
        padding: 0px 0;
    }
    .login-sec .container-fluid {
        margin: 0;
        max-width: 100%;
    }
    .login-sec .loginLeft {
        width: 100%;
        background: url('../assets/images/login-bg.webp');
        height: 100vh;
        background-position: center;
        background-size: cover;
        padding: 20px;
        padding-top: 20%;
    }
    .login-sec .loginLeft .login-contentbx {
        color: #fff;
        padding: 0px;
    }
    .login-sec .loginLeft .disclaim-text {
        margin-top: 45%;
    }
    .disclaim-text {
        padding: 10px 0px;
        width: 100%;
        color: #fff !important;
    }
    .login-sec .loginright {
        position: relative;
        margin-top: 35%;
    }
    .h4-title {
        font-size: 20px;
        text-transform: capitalize;
        color: #161616;
        margin-bottom: 16px;
        font-weight: 500;
        font-family: "Radio Canada Big", serif;
    }
    .login-sec .loginright .loginform-bx #otpDiv p {
        font-size: 14px;
    }
    .login-sec .loginright .loginform-bx #otpDiv input {
        width: 64px;
        margin: 0 0 0 12px;
        padding: 8px 16px;
        border: #EDEBEB 1px solid;
        text-align: center;
    }
    .btn-secondary {
        background: #1B79A8;
        color: #f4f4f4;
        padding: 8px 14px;
        font-weight: 400;
        border: #1B79A8 1px solid !important;
        font-size: 14px;
        text-transform: capitalize;
        box-shadow: none !important;
    }
    .btn-secondary:hover{
        background: #1B79A8;
    }
    .login-sec .loginLeft .login-contentbx .login-logo {
      margin-left: -16px;
      margin-bottom: 16px; 
    }
    @media screen and (min-width: 576px) and (max-width: 991px) {
        .sec-title {
            font-size: 28px;
            margin-bottom: 20px;
            line-height: 36px;
        }
    }
    @media screen and (min-width: 576px) and (max-width: 991px) {
        .h4-title {
            font-size: 18px;
        }
    }
    @media screen and (min-width: 576px) and (max-width: 991px) {
        .h4-title {
            font-size: 18px;
        }
    }
    @media screen and (max-width: 767px) {
        .login-sec {
            width: 100%;
            padding-bottom: 30px;
            background: url('../assets/images/login-bg1.webp');
            padding: 0;
            height: 100vh;
            background-position: center;
            background-size: cover;
        }
    }
    @media screen and (max-width: 767px) {
        .login-sec .loginLeft {
            padding-top: 1%;
            background: none;
            height: auto;
        }
    }
    @media screen and (max-width: 767px) {
        .login-sec .loginLeft .login-contentbx {
            top: auto;
            height: 100%;
        }
    }
    @media screen and (max-width: 575px) {
        .sec-title {
            font-size: 22px;
            padding: 0 !important;
            line-height: 26px;
        }
    }
    @media screen and (max-width: 767px) {
        .login-sec .loginright {
            margin-top: auto;
        }
    }
    @media screen and (max-width: 767px) {
        .login-sec .loginright .loginform-bx {
            background: #fff;
            border-radius: 10px;
            padding: 20px 16px 10px 16px;
        }
    }
    @media screen and (max-width: 575px) {
        .h4-title {
            font-size: 16px;
        }
    }
    .login-sec .loginLeft .login-contentbx .sec-title {
        color: #f4f4f4;
        font-weight: 400;
        text-transform: inherit;
    }
    .loader {
        border: 4px solid #f3f3f3;
        border-top: 4px solid #3490dc;
        border-radius: 50%;
        width: 23px;
        height: 23px;
        animation: spin 1s linear infinite;
    }
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>
