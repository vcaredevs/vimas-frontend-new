<template>
 


    <!-- breadcrumb area start here  -->
    <div class="breadcrumb-area">
        <div class="container">
            <div class="breadcrumb-wrap text-center">
                <h2 class="page-title">Contact Us</h2>
                <ul class="breadcrumb-pages">
                    <li class="page-item">
                      <router-link to="/">    <a class="page-item-link">Home</a></router-link>
                    </li>
                    <li class="page-item">Contact Us</li>
                </ul>
            </div>
        </div>
    </div>
    <!-- breadcrumb area end here  -->

    <!-- contact us area start here  -->
    <div class="contact-us-area section-bottom">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 offset-lg-1">
                    <div class="contact-us-top">
                        <div class="row">

                            <div class="col-lg-4 col-md-4 col-sm-6">
                                <div class="single-contact-info border-0 text-center">
                                    <img class="contact-info-icon" src="@/assets/ui/images/contact-info-1.webp" alt="contact-info" />
                                    <h3 class="contact-info-title">Message</h3>
                                    <p class="contact-info-content">Send us a text & an ambassador will respond +919944536363</p>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-4 col-sm-6">
                                <div class="single-contact-info text-center">
                                    <img class="contact-info-icon" src="@/assets/ui/images/contact-info-2.webp" alt="contact-info" />
                                    <h3 class="contact-info-title">Address</h3>
                                    <p class="contact-info-content">no.15,new giri road, T nagar, ,Chennai, 600017,India</p>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-4 col-sm-6">
                                <div class="single-contact-info text-center">
                                    <img class="contact-info-icon" src="@/assets/ui/images/contact-info-3.webp" alt="contact-info" />
                                    <h3 class="contact-info-title">We're Open</h3>
                                    <p class="contact-info-content">Our store has opened for shopping, exchanges Every day 11am to 7pm</p>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div class="contact-form-area">
                        <div class="contct-form-top text-center">
                            <h2 class="form-title">Got any questions?</h2>
                            <p class="form-subtitle">Use the form below to get in touch with the sales team</p>
                        </div>
                        <form
  id="contactForm"
  class="row"
  @submit.prevent="submitForm"
>
  <div class="row">
    <div class="col-md-6">
        <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="First Name"
        v-model="form.first_name"
      />
     
      <small class="text-danger">{{ errors.first_name }}</small>
       </div>
    </div>

    <div class="col-md-6">
         <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="Last Name"
        v-model="form.last_name"
      />
      
      <small class="text-danger">{{ errors.last_name }}</small>
      </div>
    </div>

    <div class="col-md-6">
         <div class="form-group">
      <input
        type="email"
        class="form-control"
        placeholder="Email Address"
        v-model="form.email"
      />
     
      <small class="text-danger">{{ errors.email }}</small>
       </div>
    </div>

    <div class="col-md-6">
        <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="Contact Number"
        v-model="form.contact_number"
      />
      
      <small class="text-danger">{{ errors.contact_number }}</small>
      </div>
    </div>

    <div class="col-md-12">
      <!-- textarea NOT required -->
      <textarea
        class="form-control message-box"
        rows="8"
        placeholder="Type Message Here...."
        v-model="form.message"
      ></textarea>

      <div class="form-button text-center mt-3">
        <button type="submit" class="form-btn submit" :disabled="loading">
          <span v-if="loading">Sending...</span>
          <span v-else>Send Message</span>
        </button>
      </div>
    </div>
  </div>
</form>

                        <!-- <form method="POST"  id="contactForm" role="form" novalidate class="row">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="FirstName" name="FirstName" placeholder="First Name" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="LastName" name="LastName" placeholder="Last Name" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="email" class="form-control" id="EmailAddress" name="EmailAddress" placeholder="Email Address" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="ContactNumber" name="ContactNumber" placeholder="Contact Number" />
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <textarea class="form-control message-box" id="Message" name="Message" rows="3" placeholder="Type Message Here...."></textarea>
                                    </div>
                                    <div class="form-button text-center">
                                        <button type="submit" class="form-btn submit">Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </form> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- contact us area end here  -->

</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { BASE_URL } from "../config/api";

const loading = ref(false);

const form = ref({
  first_name: "",
  last_name: "",
  email: "",
  contact_number: "",
  message: "",
});

const errors = ref({});

const validate = () => {
  errors.value = {};

  if (!form.value.first_name)
    errors.value.first_name = "First name is required";

  if (!form.value.last_name)
    errors.value.last_name = "Last name is required";

  if (!form.value.email)
    errors.value.email = "Email is required";
  else if (!/^\S+@\S+\.\S+$/.test(form.value.email))
    errors.value.email = "Invalid email";

  if (!form.value.contact_number)
    errors.value.contact_number = "Contact number is required";

  return Object.keys(errors.value).length === 0;
};

const submitForm = async () => {
  if (!validate()) return;

  loading.value = true;

  try {
    await axios.post(
      `${BASE_URL}/contact-submit`,
      form.value
    );

    alert("Message sent successfully!");

    form.value = {
      first_name: "",
      last_name: "",
      email: "",
      contact_number: "",
      message: "",
    };
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
};
</script>
