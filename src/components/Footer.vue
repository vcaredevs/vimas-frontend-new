<template>
       <!-- footer area start here -->
    <footer class="footer-area">
        <div class="footer-widget-area">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                        <div class="single-widget about-widget">
                            <!-- 							<a class="footer-brand-logo mb-25" href="https://inway.com.in:443.">
								<img src="./image-130-34/uploads_setting_uploads-setting-vimas-logo-png-1.png" 
									 alt="Quick Ecommerce" />
							</a>
												 -->
                            <p class="address-text">no.15,new giri road, T nagar, <br />Chennai, 600017 <br />India</p>
                            <div class="block-content mb-30">
                                <p class="contact">Call us: +919944536363</p>
                                <p class="contact">Email: info@vimasprofessionals.com</p>
                            </div>
                            <ul class="social-media">
                                <li class="social-media-item">
                                    <a class="social-media-link" href="https://www.facebook.com/yourusername">
									<i class="fab fa-facebook-f"></i>
								</a>
                                </li>
                                <li class="social-media-item">
                                    <a class="social-media-link" href="skype:yourusername?chat">
									<i class="fab fa-skype"></i>
								</a>
                                </li>
                                <li class="social-media-item">
                                    <a class="social-media-link" href="https://twitter.com/yourusername">
									<i class="fab fa-twitter"></i>
								</a>
                                </li>
                                <li class="social-media-item">
                                    <a class="social-media-link" href="https://www.linkedin.com/in/yourusername">
									<i class="fab fa-linkedin-in"></i>
								</a>
                                </li>
                                <li class="social-media-item">
                                    <a class="social-media-link" href="https://www.instagram.com/yourusername">
									<i class="fab fa-instagram"></i>
								</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                        <div class="row">

                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="single-widget">
                                    <h3 class="widget-title">Information</h3>
                                    <ul class="widget-menu">
                                       <router-link to="/">
<li class="menu-item"><a class="menu-link" href="https://inway.com.in./">Home</a></li>
                                       </router-link> 
                                         <router-link to="/about-us">
<li class="menu-item"><a class="menu-link" href="https://inway.com.in./page/about-us">About us</a></li>
                                       </router-link>
                                         <router-link to="/shop">
 <li class="menu-item"><a class="menu-link" href="https://inway.com.in./shop">Shop</a></li>
                                       </router-link>
                                         <router-link to="/contact-us">
<li class="menu-item"><a class="menu-link" href="https://inway.com.in./contact">Contact us</a></li>
                                       </router-link>
                                       
                                        
                                       
                                        
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="single-widget">
                                    <h3 class="widget-title">Customer Service</h3>
                                    <ul class="widget-menu">
                                        <li class="menu-item"><a class="menu-link" href="page/terms-&-conditions">Terms of Conditions</a></li>
                                        <li class="menu-item"><a class="menu-link" href="page/privacy-policy">Privacy Policy</a></li>
                                        <li class="menu-item"><a class="menu-link" href="page/returns-and-policy">Shipping Return</a></li>
                                        <li class="menu-item"><a class="menu-link" href="page/shipping-policy">Shipping Policy</a></li>
                                        <li class="menu-item"><a class="menu-link" href="contact.html">Contact us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Footer Column: Map -->
                    <div class="footer-col footer-col--map">
                        <h4 class="footer-title">Find Us</h4>
                        <div class="footer-map"><iframe class="footer-map__frame" title="VIMAS Professionals Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.5905072485225!2d80.23969547507775!3d13.047162587275244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52665aa6c9d50b%3A0x65a8f3675800b1ab!2s15%2C%20New%20Giri%20Rd%2C%20opp.%20Hotel%20Accord%20Metropolitan%2C%20Thirumurthy%20Nagar%2C%20Satyamurthy%20Nagar%2C%20T.%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu%20600017!5e1!3m2!1sen!2sin!4v1758011220629!5m2!1sen!2sin"
                                allowfullscreen="allowfullscreen" loading="lazy">
    </iframe></div>
                    </div>

                  
                </div>
            </div>
        </div>

    </footer>
    <!-- Footer -->
</template>
  <style scoped >
                        /* Make footer columns equal height and let the map fill its column */

                        .footer-widgets,
                        .footer-row,
                        .footer-columns {
                            display: flex;
                            gap: 32px;
                            align-items: stretch;
                            /* equal height columns */
                        }

                        /* Generic column behavior – adjust selector names to match yours */

                        .footer-col {
                            flex: 1 1 0;
                        }

                        /* Map column layout */

                        .footer-col--map {
                            display: flex;
                            flex-direction: column;
                        }

                        .footer-title {
                            margin: 0 0 12px;
                            font-weight: 700;
                        }

                        /* Responsive map box that fills available height */

                        .footer-map {
                            flex: 1;
                            /* take remaining height */
                            min-height: 260px;
                            /* mobile safety */
                            border-radius: 12px;
                            overflow: hidden;
                            background: #f6f6f6;
                            /* subtle bg while map loads */
                        }

                        /* Make iframe fill the box */

                        .footer-map__frame {
                            width: 100%;
                            height: 100%;
                            border: 0;
                            display: block;
                        }

                        /* Optional: tweak heights on larger screens */

                        @media (min-width: 992px) {
                            .footer-map {
                                min-height: 320px;
                            }
                        }
                    </style>