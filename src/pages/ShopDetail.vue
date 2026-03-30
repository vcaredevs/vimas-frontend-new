<template>

    <!-- Product Detail -->
    <section class="section-cosmetic-product-detail tf-main-product section-image-zoom flat-spacing-6">
        <div class="container-5">
            <div class="row">
                <!-- Product Image -->
                <div class="col-md-6">
                    <div id="app">
                        <div class="container container-space">


                            <div> <img class="img-fluid" :src="bannerImage" alt="" />
                                <div class="product_tags">
                                    <span>New</span><span>Moisturize</span>
                                </div>
                            </div>

                            <div class="product-thumbnails">
                                <ul>
                                    <li v-for="(image, index) in productImages"
                                        :class="[activeClass == index ? 'thumbnail-active' : '']" :key="index"><img
                                            @click="currentThumnail(image.imageUrl, index)" :src="image.imageUrl"
                                            alt="" /></li>
                                </ul>
                            </div>



                        </div>
                    </div>
                </div>
                <!-- /Product Info -->
                <div class="col-md-6">

                    <div class="tf-product-info-wrap">
                        <div class="tf-zoom-main sticky-top"></div>
                        <div class="tf-product-info-list ver-2">
                            <div class="tf-product-info_heading">
                                <div class="product-info__category text-body-4 text-uppercase">moisturize</div>
                                <h5 class="product-info__name fw-normal letter-space--2">
                                    Dream Bio Retinol
                                </h5>
                                <div class="product-info__rate">
                                    <ul class="rate-wrap">
                                        <li><i class="fa-solid fa-star fa-fade" style="color: rgb(246, 148, 1);"></i>
                                        </li>
                                        <li><i class="fa-solid fa-star fa-fade" style="color: rgb(246, 148, 1);"></i>
                                        </li>
                                        <li><i class="fa-solid fa-star fa-fade" style="color: rgb(246, 148, 1);"></i>
                                        </li>
                                        <li><i class="fa-solid fa-star fa-fade" style="color: rgb(246, 148, 1);"></i>
                                        </li>
                                        <li><i class="fa-solid fa-star fa-fade" style="color: rgb(246, 148, 1);"></i>
                                        </li>
                                    </ul>
                                    <span class="count-review text-body-4 text-black">
                                        32 reviews
                                    </span>
                                </div>
                                <p class="product-info__price text-black ">
                                    <span class="price-on-sale text-sub-head fw-medium">
                                        $56.00
                                    </span>
                                </p>
                                <p class="product-info__desc text-caption text-black">
                                    Shipping and discounts calculated at checkout.
                                </p>
                                <div class="br-line"></div>
                                <!-- <p class="product-info__desc-2 text-body-4 cl-gray-60">
                                    This demo store does not offer goods for purchase. You can purchase similar products
                                    on
                                    <span class="text-black">Alpha H</span>
                                </p> -->
                            </div>
                            <div class="tf-product-info_variant">
                                <div class="variant-picker-item variant-unit">
                                    <div class="variant-picker-label">
                                        <div class="text-body-4 text-black " style="font-weight: 500;">
                                            SIZE:
                                            <span class="variant-picker-label-value value-currentUnit"
                                                style="font-weight: 400;">100ML</span>
                                        </div>
                                    </div>
                                    <div class="variant-picker-values">
                                        <span class="unit-btn text-body-4 active" data-unit="100ML"
                                            data-price="55.99">100ML</span>
                                        <span class="unit-btn text-body-4" data-unit="250ML"
                                            data-price="109.99">250ML</span>
                                        <span class="unit-btn text-body-4" data-unit="500ML"
                                            data-price="149.99">500ML</span>
                                    </div>
                                </div>
                                <p class="product-info__only text-body-4">
                                    <span class="ic-wrap">
                                        <i class="fa-solid fa-circle-check"
                                            style="color: rgb(42, 156, 0);    font-size: 16px;"></i>
                                    </span> 25 Items in stock
                                </p>
                                <div class="d-grid">
                                    <p class="text-body-4 text-black mb-md-15 mb-10 " style="font-weight: 500;">
                                        QUANTITY
                                    </p>
                                    <div class="product-info__quantity">
                                        <div class="wg-quantity style-2">
                                            <button class="btn-quantity btn-decrease"><i class="fa-solid fa-minus"
                                                    style="color: rgb(133 133 133);font-size: 13px;"></i></button>
                                            <input class="quantity-product" type="number" name="number" value="1">
                                            <button class="btn-quantity btn-increase"><i class="fa-solid fa-plus"
                                                    style="color: rgb(133 133 133);font-size: 13px;"></i></button>
                                        </div>
                                        <a href="#shoppingCart" data-bs-toggle="offcanvas"
                                            class="btn-wrap btn-4 stroke w-100">
                                            <span class="text-body-4 fw-medium"> Add To Cart</span>
                                        </a>
                                    </div>
                                    <a href="#shoppingCart" data-bs-toggle="offcanvas"
                                        class="btn_buy btn-wrap btn-4 btn-fill-black text-body-4 animate-btn w-100">
                                        Buy with
                                        <svg width="49" height="20" viewBox="0 0 49 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M43.7275 12.814H43.7617L46.5635 5.78076H48.5332L42.4785 19.8823H40.6104L42.8613 14.9497L38.8887 5.78076H40.8584L43.7275 12.814ZM34.252 5.4624C35.5912 5.4624 36.6492 5.82805 37.4258 6.54736C38.2021 7.26666 38.585 8.27136 38.585 9.53857V15.5786H36.8516V14.2192H36.7734C36.0194 15.3382 35.0285 15.8979 33.7793 15.8979C32.7215 15.8979 31.8213 15.5783 31.1123 14.939C30.4146 14.3453 30.0206 13.4662 30.043 12.5415C30.043 11.5253 30.4257 10.7257 31.1797 10.1206C31.9337 9.51548 32.9466 9.21826 34.207 9.21826C35.2874 9.21826 36.1655 9.42381 36.8633 9.81201V9.39014C36.8633 8.76217 36.5928 8.16836 36.1201 7.75732C35.6362 7.32348 35.0174 7.08353 34.376 7.0835C33.3631 7.0835 32.5637 7.51751 31.9785 8.38525L30.3809 7.36865C31.2362 6.10152 32.5303 5.46242 34.252 5.4624ZM25.665 1.26025C26.8242 1.23746 27.95 1.68236 28.7715 2.50439C30.4144 4.05714 30.5152 6.67173 28.9736 8.3501L28.7715 8.55615C27.9275 9.36677 26.8917 9.7778 25.665 9.77783H22.6709V15.5776H20.8594V1.26025H25.665ZM34.4893 10.7026C33.7576 10.7026 33.1378 10.8858 32.6426 11.2397C32.1588 11.5937 31.9111 12.0392 31.9111 12.5757C31.9112 13.055 32.1366 13.4999 32.5078 13.7739C32.913 14.0936 33.4085 14.2648 33.915 14.2534C34.6803 14.2534 35.4119 13.9458 35.9521 13.3979C36.5487 12.8271 36.8525 12.1529 36.8525 11.3765C36.2898 10.9199 35.502 10.6913 34.4893 10.7026ZM22.6709 8.01904H25.71C26.3853 8.04188 27.0385 7.76782 27.5 7.27686C28.4454 6.2835 28.4226 4.68512 27.4434 3.72607C26.9819 3.26939 26.3628 3.01807 25.71 3.01807H22.6709V8.01904Z"
                                                fill="white" />
                                            <path
                                                d="M16.4172 8.52196C16.4172 7.9625 16.3722 7.40303 16.2822 6.85498H8.64062V10.0177H13.0185C12.8384 11.0339 12.2532 11.9473 11.3979 12.5182V14.5733H14.0088C15.5394 13.1461 16.4172 11.0339 16.4172 8.52196Z"
                                                fill="#4285F4" />
                                            <path
                                                d="M8.63971 16.5597C10.823 16.5597 12.6687 15.8289 14.0079 14.573L11.397 12.5178C10.6655 13.0202 9.73136 13.3056 8.63971 13.3056C6.52394 13.3056 4.73454 11.8556 4.09305 9.91455H1.40332V12.0382C2.77632 14.8127 5.5786 16.5597 8.63971 16.5597Z"
                                                fill="#34A853" />
                                            <path
                                                d="M4.09386 9.91444C3.75618 8.89826 3.75618 7.79075 4.09386 6.76315V4.65088H1.4037C0.24434 6.96867 0.24434 9.70892 1.4037 12.0267L4.09386 9.91444Z"
                                                fill="#FBBC04" />
                                            <path
                                                d="M8.63972 3.37222C9.79889 3.34938 10.913 3.79467 11.7459 4.60533L14.0642 2.25328C12.5899 0.860323 10.6542 0.0953373 8.63972 0.118173C5.5786 0.118173 2.77632 1.8765 1.40332 4.651L4.09305 6.77469C4.73454 4.82227 6.52394 3.37222 8.63972 3.37222Z"
                                                fill="#EA4335" />
                                        </svg>

                                    </a>

                                    <div class="product-info__pickup">
                                        <i class="fa-regular fa-truck" style="color: rgb(118 118 118);"></i>
                                        <div class="store-info d-grid">
                                            <p class="address-avaiable text-body-4 text-black">Pickup available at
                                                <a href="https://www.google.com/maps?q=345+Geogre+st" target="_blank"
                                                    class="link fw-bold text-black">
                                                    Paries Store
                                                </a>
                                            </p>
                                            <p class="address-ready text-body-4 cl-gray-60">Usually ready in 24 hours
                                            </p>
                                            <a href="#" class="link text-black text-caption">
                                                View store information
                                            </a>
                                        </div>
                                    </div>
                                    <div class="br-line line-2 bg-gray-20 d-flex"></div>
                                </div>
                                <div class="product-info__accordion">
                                    <div class="product-accordion">
                                        <div class="accordion-title text-black collapsed" data-bs-target="#description"
                                            data-bs-toggle="collapse" aria-expanded="false" aria-controls="description"
                                            role="button">
                                            <span class="name-wrap">
                                                <i class="fa-regular fa-file" style="color: rgb(118 118 118);"></i>
                                                <span class="text-body-4">DESCRIPTION</span>
                                            </span>
                                            <span class="icon d-flex">
                                                <i class="fa-solid fa-chevron-right"
                                                    style="color: rgb(185 183 183);"></i>
                                            </span>
                                        </div>
                                        <div id="description" class="collapse">
                                            <div class="accordion-body">
                                                <p class="text-body-4 text-black">
                                                    Link what you love. This sterling silver link chain holds endless
                                                    styling potential. Featuring two openable links, groups of four
                                                    static links between each one and a carabiner closure. Customise
                                                    your link chain – then remix it with meaningful charms.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-accordion">
                                        <div class="accordion-title text-black collapsed"
                                            data-bs-target="#description-2" data-bs-toggle="collapse"
                                            aria-expanded="false" aria-controls="description-2" role="button">
                                            <span class="name-wrap">
                                                <i class="fa-solid fa-cubes-stacked"
                                                    style="color: rgb(118 118 118);"></i>
                                                <span class="text-body-4">ingredients</span>
                                            </span>
                                            <span class="icon d-flex">
                                                <i class="fa-solid fa-chevron-right"
                                                    style="color: rgb(185 183 183);"></i>
                                            </span>
                                        </div>
                                        <div id="description-2" class="collapse">
                                            <div class="accordion-body">
                                                <p class="text-body-4 text-black">
                                                    Link what you love. This sterling silver link chain holds endless
                                                    styling potential. Featuring two openable links, groups of four
                                                    static links between each one and a carabiner closure. Customise
                                                    your link chain – then remix it with meaningful charms.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-accordion">
                                        <div class="accordion-title text-black collapsed"
                                            data-bs-target="#description-3" data-bs-toggle="collapse"
                                            aria-expanded="false" aria-controls="description-3" role="button">
                                            <span class="name-wrap">
                                                <i class="fa-regular fa-circle-question"
                                                    style="color: rgb(118 118 118);"></i>
                                                <span class="text-body-4">Direction of Use</span>
                                            </span>
                                            <span class="icon d-flex">
                                                <i class="fa-solid fa-chevron-right"
                                                    style="color: rgb(185 183 183);"></i>
                                            </span>
                                        </div>
                                        <div id="description-3" class="collapse">
                                            <div class="accordion-body">
                                                <p class="text-body-4 text-black">
                                                    Link what you love. This sterling silver link chain holds endless
                                                    styling potential. Featuring two openable links, groups of four
                                                    static links between each one and a carabiner closure. Customise
                                                    your link chain – then remix it with meaningful charms.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-accordion">
                                        <div class="accordion-title text-black collapsed"
                                            data-bs-target="#description-4" data-bs-toggle="collapse"
                                            aria-expanded="false" aria-controls="description-4" role="button">
                                            <span class="name-wrap">
                                                <i class="fa-solid fa-bag-shopping"
                                                    style="color: rgb(118 118 118);"></i>
                                                <span class="text-body-4">Benefits</span>
                                            </span>
                                            <span class="icon d-flex">
                                                <i class="fa-solid fa-chevron-right"
                                                    style="color: rgb(185 183 183);"></i>
                                            </span>
                                        </div>
                                        <div id="description-4" class="collapse">
                                            <div class="accordion-body">
                                                <p class="text-body-4 text-black">
                                                    Link what you love. This sterling silver link chain holds endless
                                                    styling potential. Featuring two openable links, groups of four
                                                    static links between each one and a carabiner closure. Customise
                                                    your link chain – then remix it with meaningful charms.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul class="tf-social-icon-2 style-5 mt-2">
                                <li>
                                    <a href="#" target="_blank" class="social-link">
                                        <i class="fa-brands fa-facebook-f" style="color: rgb(0, 0, 0);"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank" class="social-link">
                                        <i class="fa-brands fa-instagram" style="color: rgb(0, 0, 0);"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank" class="social-link">
                                        <i class="fa-brands fa-twitter" style="color: rgb(0, 0, 0);"></i>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <!-- /Product Detail -->

    <!-- Customer Review -->
    <!-- <section class="section-business-customer-review flat-spacing-10">
        <div class="container-5">
            <div class="s-header-3 wow fadeZoom">
                <h3 class="title fw-normal letter-space--4 text-black text-center">
                    <span>Customer</span>
                    <span class="fw-medium letter-space--3">Reviews</span>
                </h3>
            </div>
            <div class="box-customer-review tf-grid-layout md-col-2 lg-col-3">
                <div class="left">
                    <div class="review-based">
                        <div class="based_head">
                            <ul class="rate-wrap style-2">
                                <li><i class="fa-solid fa-star fa-fade" style="color: rgb(246, 148, 1);"></i></li>
                                <li><i class="fa-solid fa-star fa-fade" style="color: rgb(246, 148, 1);"></i></li>
                                <li><i class="fa-solid fa-star fa-fade" style="color: rgb(246, 148, 1);"></i></li>
                                <li><i class="fa-solid fa-star fa-fade" style="color: rgb(246, 148, 1);"></i></li>
                                <li><i class="fa-solid fa-star fa-fade" style="color: rgb(246, 148, 1);"></i></li>
                            </ul>
                            <span class="text-black text-body-4">
                                5.00 out of 5
                            </span>
                        </div>
                        <span class="text-black text-body-4">
                            Based on 3 reviews
                        </span>
                    </div>
                </div>
                <div class="midle">
                    <div class="review-progress-list">
                        <div class="rate-progress-star">
                            <ul class="rate-wrap style-2">
                                <li><i class="fa-solid fa-star fa-fade" style="color: rgb(246, 148, 1);"></i></li>
                                <li><i class="fa-solid fa-star fa-fade" style="color: rgb(246, 148, 1);"></i></li>
                                <li><i class="fa-solid fa-star fa-fade" style="color: rgb(246, 148, 1);"></i></li>
                                <li><i class="fa-solid fa-star fa-fade" style="color: rgb(246, 148, 1);"></i></li>
                                <li><i class="icon-star-solid "></i></li>
                            </ul>
                            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0"
                                aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar" style="width: 60%;"></div>
                            </div>
                            <span class="text-black">5</span>
                        </div>
                        <div class="rate-progress-star">
                            <ul class="rate-wrap style-2">
                                <li><i class="fa-solid fa-star fa-fade" style="color: rgb(246, 148, 1);"></i></li>
                                <li><i class="fa-solid fa-star fa-fade" style="color: rgb(246, 148, 1);"></i></li>
                                <li><i class="fa-solid fa-star fa-fade" style="color: rgb(246, 148, 1);"></i></li>
                                <li><i class="fa-solid fa-star fa-fade" style="color: rgb(246, 148, 1);"></i></li>
                                <li><i class="icon-star-solid cl-gray-30"></i></li>
                            </ul>
                            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0"
                                aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar"></div>
                            </div>
                            <span class="text-black">0</span>
                        </div>
                        <div class="rate-progress-star">
                            <ul class="rate-wrap style-2">
                                <li><i class="fa-solid fa-star fa-fade" style="color: rgb(246, 148, 1);"></i></li>
                                <li><i class="fa-solid fa-star fa-fade" style="color: rgb(246, 148, 1);"></i></li>
                                <li><i class="fa-solid fa-star fa-fade" style="color: rgb(246, 148, 1);"></i></li>
                                <li><i class="icon-star-solid cl-gray-30"></i></li>
                                <li><i class="icon-star-solid cl-gray-30"></i></li>
                            </ul>
                            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0"
                                aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar"></div>
                            </div>
                            <span class="text-black">0</span>
                        </div>

                        <div class="rate-progress-star">
                            <ul class="rate-wrap style-2">
                                <li><i class="fa-solid fa-star fa-fade" style="color: rgb(246, 148, 1);"></i></li>
                                <li><i class="fa-solid fa-star fa-fade" style="color: rgb(246, 148, 1);"></i></li>
                                <li><i class="icon-star-solid cl-gray-30"></i></li>
                                <li><i class="icon-star-solid cl-gray-30"></i></li>
                                <li><i class="icon-star-solid cl-gray-30"></i></li>
                            </ul>
                            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0"
                                aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar"></div>
                            </div>
                            <span class="text-black">0</span>
                        </div>
                        <div class="rate-progress-star">
                            <ul class="rate-wrap style-2">
                                <li><i class="fa-solid fa-star fa-fade" style="color: rgb(246, 148, 1);"></i></li>
                                <li><i class="icon-star-solid cl-gray-30"></i></li>
                                <li><i class="icon-star-solid cl-gray-30"></i></li>
                                <li><i class="icon-star-solid cl-gray-30"></i></li>
                                <li><i class="icon-star-solid cl-gray-30"></i></li>
                            </ul>
                            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0"
                                aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar"></div>
                            </div>
                            <span class="text-black">0</span>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <a href="#" class="btn-wrap btn-4 stroke h-xl-52">
                        Write A Review
                    </a>
                </div>
            </div>
            <div class="sort-by">
                <div class="select-wrap select-sort-comment text-black">
                    <select class="text-body-4">
                        <option value="1" selected="">Most Recent</option>
                        <option value="2">Last Week</option>
                        <option value="3">Today</option>
                    </select>

                    <i class="fa-solid fa-chevron-down fs-16" style="color: rgb(0, 0, 0);"></i>
                </div>
            </div>
            <div class="customer-review-list">
                <div class="wg-customer-review">
                    <div class="customer-head">
                        <div class="review_rate">
                            <ul class="rate-wrap style-2">
                                <li><i class="fa-solid fa-star fa-fade" style="color: rgb(246, 148, 1);"></i></li>
                                <li><i class="fa-solid fa-star fa-fade" style="color: rgb(246, 148, 1);"></i></li>
                                <li><i class="fa-solid fa-star fa-fade" style="color: rgb(246, 148, 1);"></i></li>
                                <li><i class="fa-solid fa-star fa-fade" style="color: rgb(246, 148, 1);"></i></li>
                                <li><i class="fa-solid fa-star fa-fade" style="color: rgb(246, 148, 1);"></i></li>
                            </ul>
                            <p class="reivew_date text-body-4 cl-gray-60">
                                3/7/2024
                            </p>
                        </div>
                        <div class="review_author">
                            <div class="author__image">
                                <img loading="lazy" width="36" height="36" src="../assets/images/avatar/avatar-1.jpg"
                                    alt="Image">
                            </div>
                            <p class="author__name text-black">
                                Rebbeca
                            </p>
                        </div>
                    </div>
                    <div class="customer-content">
                        <p class="customer_title fw-medium text-black">Awesome product</p>
                        <p class="customer_text text-body-4 cl-gray-60">
                            Absolutely love this bikini! The fit is perfect, and the fabric feels high-quality. The
                            colors are just as vibrant as pictured. Definitely my go-to for summer days!
                        </p>
                        <div class="customer_image_list">
                            <div class="customer_image">
                                <img loading="lazy" width="80" height="112"
                                    src="../assets/images/product/feedback/feedback.jpg" alt="Image">
                            </div>
                            <div class="customer_image">
                                <img loading="lazy" width="80" height="112"
                                    src="../assets/images/product/feedback/feedback.jpg" alt="Image">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="wg-customer-review">
                    <div class="customer-head">
                        <div class="review_rate">
                            <ul class="rate-wrap style-2">
                                <li><i class="fa-solid fa-star fa-fade" style="color: rgb(246, 148, 1);"></i></li>
                                <li><i class="fa-solid fa-star fa-fade" style="color: rgb(246, 148, 1);"></i></li>
                                <li><i class="fa-solid fa-star fa-fade" style="color: rgb(246, 148, 1);"></i></li>
                                <li><i class="fa-solid fa-star fa-fade" style="color: rgb(246, 148, 1);"></i></li>
                                <li><i class="fa-solid fa-star fa-fade" style="color: rgb(246, 148, 1);"></i></li>
                            </ul>
                            <p class="reivew_date text-body-4 cl-gray-60">
                                3/7/2024
                            </p>
                        </div>
                        <div class="review_author">
                            <div class="author__image">
                                <img loading="lazy" width="36" height="36" src="../assets/images/avatar/avatar-1.jpg"
                                    alt="Image">
                            </div>
                            <p class="author__name text-black">
                                Annie
                            </p>
                        </div>
                    </div>
                    <div class="customer-content">
                        <p class="customer_title fw-medium text-black">Extremely satisfied with this product!
                            Recommended.
                        </p>
                        <p class="customer_text text-body-4 cl-gray-60 mb-0">
                            In today's fast-paced world, finding the perfect blend of comfort and style can be a
                            challenge. But I recently discovered a dress that embodies both beautifully. This dress is a
                            true gem, designed with comfort in mind. Its soft, breathable fabric drapes
                            gracefully,...
                        </p>
                    </div>
                </div>
                <div class="wg-customer-review">
                    <div class="customer-head">
                        <div class="review_rate">
                            <ul class="rate-wrap style-2">
                                <li><i class="fa-solid fa-star fa-fade" style="color: rgb(246, 148, 1);"></i></li>
                                <li><i class="fa-solid fa-star fa-fade" style="color: rgb(246, 148, 1);"></i></li>
                                <li><i class="fa-solid fa-star fa-fade" style="color: rgb(246, 148, 1);"></i></li>
                                <li><i class="fa-solid fa-star fa-fade" style="color: rgb(246, 148, 1);"></i></li>
                                <li><i class="fa-solid fa-star fa-fade" style="color: rgb(246, 148, 1);"></i></li>
                            </ul>
                            <p class="reivew_date text-body-4 cl-gray-60">
                                3/7/2024
                            </p>
                        </div>
                        <div class="review_author">
                            <div class="author__image">
                                <img loading="lazy" width="36" height="36" src="../assets/images/avatar/avatar-1.jpg"
                                    alt="Image">
                            </div>
                            <p class="author__name text-black">
                                Sussan
                            </p>
                        </div>
                    </div>
                    <div class="customer-content">
                        <p class="customer_title fw-medium text-black">Best product that i ever bought</p>
                        <p class="customer_text text-body-4 cl-gray-60 mb-0">
                            I’m satisfied with this product and i has been purchase it 2 items, one for me and one to
                            gift for my mother. Super exfoliating treatmentv
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section> -->
    <!-- /Customer Review -->
    <!-- Best Product -->
    <section class="section-cosmetic-best-product">
        <div class="container-5">
            <div class="s-header-3">
                <h3 class="title fw-normal letter-space--4 text-black text-center wow fadeZoom">
                    <span>Best Skincare</span>
                    <span class="fw-medium letter-space--3">
                        Products
                    </span>
                </h3>
            </div>

        </div>
        <div dir="ltr" class="swiper swiper-best">
            <div class="swiper-wrapper">
                <!-- item 1 -->
                <div class="swiper-slide">
                    <div class="card-best-product">
                        <div class="product-image-preview">
                            <img loading="lazy" width="424" height="600" src="../assets/images/section/aloveralook.png"
                                alt="Image">
                            <video autoplay muted loop playsinline>
                                <source src="../assets/images/video/best-2.mp4 " type="video/mp4">
                            </video>
                        </div>
                        <div class="product-content">
                            <div class="left">
                                <div class="product_image">
                                    <img loading="lazy" width="92" height="92"
                                        src="../assets/images/product/aloevera.png" alt="Image">
                                </div>
                                <div class="product_info">
                                    <p class="info__cate text-body-4 cl-gray-40">MOISTURIZE</p>
                                    <a href="shop-detail.html" class="info__name text-body-2 text-black link">
                                        Dream Bio Retinol
                                    </a>
                                    <p class="infor__price text-black fw-medium text-sub-head">$56.00</p>
                                </div>
                            </div>
                            <a href="#shoppingCart" data-bs-toggle="offcanvas"
                                class="action tf-btn-icon rounded-circle">
                                <!--  <img src="../assets/images/cart.svg" alt=""> -->
                                <img src="../assets/images/cart.svg" alt="">
                            </a>
                        </div>
                    </div>
                </div>
                <!-- item 2 -->
                <div class="swiper-slide">
                    <div class="card-best-product">
                        <div class="product-image-preview">
                            <img loading="lazy" width="424" height="600" src="../assets/images/section/aloveralook.png"
                                alt="Image">
                            <video autoplay muted loop playsinline>
                                <source src="../assets/images/video/best-2.mp4 " type="video/mp4">
                            </video>
                        </div>
                        <div class="product-content">
                            <div class="left">
                                <div class="product_image">
                                    <img loading="lazy" width="92" height="92"
                                        src="../assets/images/product/aloevera.png" alt="Image">
                                </div>
                                <div class="product_info">
                                    <p class="info__cate text-body-4 cl-gray-40">MOISTURIZE</p>
                                    <a href="shop-detail.html" class="info__name text-body-2 text-black link">
                                        Dream Bio Retinol
                                    </a>
                                    <p class="infor__price text-black fw-medium text-sub-head">$56.00</p>
                                </div>
                            </div>
                            <a href="#shoppingCart" data-bs-toggle="offcanvas"
                                class="action tf-btn-icon rounded-circle">
                                <img src="../assets/images/cart.svg" alt="">
                            </a>
                        </div>
                    </div>
                </div>
                <!-- item 3 -->
                <div class="swiper-slide">
                    <div class="card-best-product">
                        <div class="product-image-preview">
                            <img loading="lazy" width="424" height="600" src="../assets/images/section/aloveralook.png"
                                alt="Image">
                            <video autoplay muted loop playsinline>
                                <source src="../assets/images/video/best-2.mp4 " type="video/mp4">
                            </video>
                        </div>
                        <div class="product-content">
                            <div class="left">
                                <div class="product_image">
                                    <img loading="lazy" width="92" height="92"
                                        src="../assets/images/product/aloevera.png" alt="Image">
                                </div>
                                <div class="product_info">
                                    <p class="info__cate text-body-4 cl-gray-40">MOISTURIZE</p>
                                    <a href="shop-detail.html" class="info__name text-body-2 text-black link">
                                        Dream Bio Retinol
                                    </a>
                                    <p class="infor__price text-black fw-medium text-sub-head">$56.00</p>
                                </div>
                            </div>
                            <a href="#shoppingCart" data-bs-toggle="offcanvas"
                                class="action tf-btn-icon rounded-circle">
                                <img src="../assets/images/cart.svg" alt="">
                            </a>
                        </div>
                    </div>
                </div>
                <!-- item 4 -->
                <div class="swiper-slide">
                    <div class="card-best-product">
                        <div class="product-image-preview">
                            <img loading="lazy" width="424" height="600" src="../assets/images/section/aloveralook.png"
                                alt="Image">
                            <video autoplay muted loop playsinline>
                                <source src="../assets/images/video/best-2.mp4 " type="video/mp4">
                            </video>
                        </div>
                        <div class="product-content">
                            <div class="left">
                                <div class="product_image">
                                    <img loading="lazy" width="92" height="92"
                                        src="../assets/images/product/aloevera.png" alt="Image">
                                </div>
                                <div class="product_info">
                                    <p class="info__cate text-body-4 cl-gray-40">MOISTURIZE</p>
                                    <a href="shop-detail.html" class="info__name text-body-2 text-black link">
                                        Dream Bio Retinol
                                    </a>
                                    <p class="infor__price text-black fw-medium text-sub-head">$56.00</p>
                                </div>
                            </div>
                            <a href="#shoppingCart" data-bs-toggle="offcanvas"
                                class="action tf-btn-icon rounded-circle">
                                <img src="../assets/images/cart.svg" alt="">
                            </a>
                        </div>
                    </div>
                </div>
                <!-- item 5 -->
                <div class="swiper-slide">
                    <div class="card-best-product">
                        <div class="product-image-preview">
                            <img loading="lazy" width="424" height="600" src="../assets/images/section/aloveralook.png"
                                alt="Image">
                            <video autoplay muted loop playsinline>
                                <source src="../assets/images/video/best-2.mp4 " type="video/mp4">
                            </video>
                        </div>
                        <div class="product-content">
                            <div class="left">
                                <div class="product_image">
                                    <img loading="lazy" width="92" height="92"
                                        src="../assets/images/product/aloevera.png" alt="Image">
                                </div>
                                <div class="product_info">
                                    <p class="info__cate text-body-4 cl-gray-40">MOISTURIZE</p>
                                    <a href="shop-detail.html" class="info__name text-body-2 text-black link">
                                        Dream Bio Retinol
                                    </a>
                                    <p class="infor__price text-black fw-medium text-sub-head">$56.00</p>
                                </div>
                            </div>
                            <a href="#shoppingCart" data-bs-toggle="offcanvas"
                                class="action tf-btn-icon rounded-circle">
                                <img src="../assets/images/cart.svg" alt="">
                            </a>
                        </div>
                    </div>
                </div>

                <!-- item 1 -->
                <div class="swiper-slide">
                    <div class="card-best-product">
                        <div class="product-image-preview">
                            <img loading="lazy" width="424" height="600" src="../assets/images/section/aloveralook.png"
                                alt="Image">
                            <video autoplay muted loop playsinline>
                                <source src="../assets/images/video/best-2.mp4 " type="video/mp4">
                            </video>
                        </div>
                        <div class="product-content">
                            <div class="left">
                                <div class="product_image">
                                    <img loading="lazy" width="92" height="92"
                                        src="../assets/images/product/aloevera.png" alt="Image">
                                </div>
                                <div class="product_info">
                                    <p class="info__cate text-body-4 cl-gray-40">MOISTURIZE</p>
                                    <a href="shop-detail.html" class="info__name text-body-2 text-black link">
                                        Dream Bio Retinol
                                    </a>
                                    <p class="infor__price text-black fw-medium text-sub-head">$56.00</p>
                                </div>
                            </div>
                            <a href="#shoppingCart" data-bs-toggle="offcanvas"
                                class="action tf-btn-icon rounded-circle">
                                <img src="../assets/images/cart.svg" alt="">
                            </a>
                        </div>
                    </div>
                </div>
                <!-- item 2 -->
                <div class="swiper-slide">
                    <div class="card-best-product">
                        <div class="product-image-preview">
                            <img loading="lazy" width="424" height="600" src="../assets/images/section/aloveralook.png"
                                alt="Image">
                            <video autoplay muted loop playsinline>
                                <source src="../assets/images/video/best-5.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="product-content">
                            <div class="left">
                                <div class="product_image">
                                    <img loading="lazy" width="92" height="92"
                                        src="../assets/images/product/aloevera.png" alt="Image">
                                </div>
                                <div class="product_info">
                                    <p class="info__cate text-body-4 cl-gray-40">MOISTURIZE</p>
                                    <a href="shop-detail.html" class="info__name text-body-2 text-black link">
                                        Dream Bio Retinol
                                    </a>
                                    <p class="infor__price text-black fw-medium text-sub-head">$56.00</p>
                                </div>
                            </div>
                            <a href="#shoppingCart" data-bs-toggle="offcanvas"
                                class="action tf-btn-icon rounded-circle">
                                <img src="../assets/images/cart.svg" alt="">
                            </a>
                        </div>
                    </div>
                </div>
                <!-- item 3 -->
                <div class="swiper-slide">
                    <div class="card-best-product">
                        <div class="product-image-preview">
                            <img loading="lazy" width="424" height="600" src="../assets/images/section/aloveralook.png"
                                alt="Image">
                            <video autoplay muted loop playsinline>
                                <source src="../assets/images/video/best-3.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="product-content">
                            <div class="left">
                                <div class="product_image">
                                    <img loading="lazy" width="92" height="92"
                                        src="../assets/images/product/aloevera.png" alt="Image">
                                </div>
                                <div class="product_info">
                                    <p class="info__cate text-body-4 cl-gray-40">MOISTURIZE</p>
                                    <a href="shop-detail.html" class="info__name text-body-2 text-black link">
                                        Dream Bio Retinol
                                    </a>
                                    <p class="infor__price text-black fw-medium text-sub-head">$56.00</p>
                                </div>
                            </div>
                            <a href="#shoppingCart" data-bs-toggle="offcanvas"
                                class="action tf-btn-icon rounded-circle">
                                <img src="../assets/images/cart.svg" alt="">
                            </a>
                        </div>
                    </div>
                </div>
                <!-- item 4 -->
                <div class="swiper-slide">
                    <div class="card-best-product">
                        <div class="product-image-preview">
                            <img loading="lazy" width="424" height="600" src="../assets/images/section/aloveralook.png"
                                alt="Image">
                            <video autoplay muted loop playsinline>
                                <source src="../assets/images/video/best-4.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="product-content">
                            <div class="left">
                                <div class="product_image">
                                    <img loading="lazy" width="92" height="92"
                                        src="../assets/images/product/aloevera.png" alt="Image">
                                </div>
                                <div class="product_info">
                                    <p class="info__cate text-body-4 cl-gray-40">MOISTURIZE</p>
                                    <a href="shop-detail.html" class="info__name text-body-2 text-black link">
                                        Dream Bio Retinol
                                    </a>
                                    <p class="infor__price text-black fw-medium text-sub-head">$56.00</p>
                                </div>
                            </div>
                            <a href="#shoppingCart" data-bs-toggle="offcanvas"
                                class="action tf-btn-icon rounded-circle">
                                <img src="../assets/images/cart.svg" alt="">
                            </a>
                        </div>
                    </div>
                </div>
                <!-- item 5 -->
                <div class="swiper-slide">
                    <div class="card-best-product">
                        <div class="product-image-preview">
                            <img loading="lazy" width="424" height="600" src="../assets/images/section/aloveralook.png"
                                alt="Image">
                            <video autoplay muted loop playsinline>
                                <source src="../assets/images/video/best-1.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="product-content">
                            <div class="left">
                                <div class="product_image">
                                    <img loading="lazy" width="92" height="92"
                                        src="../assets/images/product/aloevera.png" alt="Image">
                                </div>
                                <div class="product_info">
                                    <p class="info__cate text-body-4 cl-gray-40">MOISTURIZE</p>
                                    <a href="shop-detail.html" class="info__name text-body-2 text-black link">
                                        Dream Bio Retinol
                                    </a>
                                    <p class="infor__price text-black fw-medium text-sub-head">$56.00</p>
                                </div>
                            </div>
                            <a href="#shoppingCart" data-bs-toggle="offcanvas"
                                class="action tf-btn-icon rounded-circle">
                                <img src="../assets/images/cart.svg" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
    <!-- /Best Product -->
    <!-- Brand -->
    <div class="section-brand-2 mt-5">
        <div class="container-5">
            <div class="br-line bg-black-10 d-flex"></div>
        </div>
        <div class="inf-slide-brand-2">
            <div class="infiniteSlide">
                <div class="img-brand">
                    <img loading="lazy" width="196" height="76" src="../assets/images/brand/brand-1.svg" alt="brand">
                </div>
                <div class="img-brand">
                    <img loading="lazy" width="196" height="76" src="../assets/images/brand/brand-2.svg" alt="brand">
                </div>
                <div class="img-brand">
                    <img loading="lazy" width="196" height="76" src="../assets/images/brand/brand-3.svg" alt="brand">
                </div>
                <div class="img-brand">
                    <img loading="lazy" width="196" height="76" src="../assets/images/brand/brand-4.svg" alt="brand">
                </div>
                <div class="img-brand">
                    <img loading="lazy" width="196" height="76" src="../assets/images/brand/brand-5.svg" alt="brand">
                </div>
                <div class="img-brand">
                    <img loading="lazy" width="196" height="76" src="../assets/images/brand/brand-6.svg" alt="brand">
                </div>
                <div class="img-brand">
                    <img loading="lazy" width="196" height="76" src="../assets/images/brand/brand-7.svg" alt="brand">
                </div>
            </div>
        </div>
    </div>
    <!-- /Brand -->
</template>


<script setup>
import { ref, onMounted } from "vue";
import { Navigation, Pagination, Autoplay } from 'swiper/modules'



const bannerImage = ref("https://i.imgur.com/Nmuu6Jh.jpg")

const productImages = ref([
    {
        id: 3435,
        imageUrl: "https://i.imgur.com/Nmuu6Jh.jpg"
    },
    {
        id: 3436,
        imageUrl: "https://i.imgur.com/VFcTYyU.jpg"
    }
])

const cart = ref(0)
const stockAvailability = ref(true)
const activeClass = ref(0)

function addToCart() {
    cart.value++
}

function currentThumnail(image, index) {
    bannerImage.value = image
    activeClass.value = index
}
onMounted(() => {
    new Swiper(".swiper-best", {
        modules: [Navigation, Pagination, Autoplay],
        loop: true,
        centeredSlides: true,
        initialSlide: 2,
        slideToClickedSlide: true,
        spaceBetween: 20,

        // ✅ responsive breakpoints
        breakpoints: {
            0: {
                slidesPerView: 1.2,    // ✅ mobile — 1 slide
                spaceBetween: 10,

            },
            576: {
                slidesPerView: 1.2,    // tablet small
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 3,    // tablet
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 4,  // ✅ desktop — 4.5 slides
                spaceBetween: 20,
            },
        }
    })
})
</script>
<style scoped>
.product-thumbnails {
    display: flex;
    margin-top: 2rem;
}

.product-thumbnails>ul {
    display: flex;
    list-style: none;
    padding-left: 0;
}

.product-thumbnails>li {
    margin-right: 10px;
}

.product-thumbnails>ul>li>img {
    width: 100px;
    cursor: pointer;
}

.thumbnail-active {
    border: 2px solid #ff9169;
}

.nav-link>img {
    width: 40px;
    border-radius: 8px;
    margin-right: 10px;
}

.btn-custom-color {
    border: 2px solid #4fc08d;
    color: #4fc08d;
}

.btn-custom-color:hover {
    border: 2px solid #4fc08d;
    background-color: #4fc08d;
    color: #ffffff;
}

.product_tags span {
    font-size: 12px;
    color: black;
    background-color: white;
    padding: 5px 14px;
    border-radius: 50px;
    margin-right: 3px;
}

.product_tags {
    position: absolute;
    top: 14px;
    left: 23px;
}
</style>