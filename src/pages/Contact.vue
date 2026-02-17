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
                        <form method="POST" action="https://inway.com.in:443../contacts" id="contactForm" role="form" novalidate class="row">
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
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- contact us area end here  -->

</template>