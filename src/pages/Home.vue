<template>
   <!-- Hero -->
        <section class="section-cosmetic-hero-shop style-home flat-spacing-5 slider-hero-wrap">
            <ul class="hero-image">
    <li
      v-for="(image, index) in images"
      :key="index"
      class="img-thumbs"
      :class="{ active: currentIndex === index }"
    >
      <img
        loading="lazy"
        width="1416"
        height="595"
        :src="image"
        alt="Image"
      />
    </li>
  </ul>
            <div class="container-5 position-relative z-5">
                <div class="row">
                    <div class="col-sm-6 col-md-7 col-xl-9">
        <Swiper
    :modules="[Autoplay, Pagination, EffectFade]"
    effect="fade"
    :autoplay="{ delay: 3000 }"
    :pagination="{ clickable: true }"
    @slideChange="animateContent"
    class="swiper-hero-main-thumb"
  >
    <SwiperSlide v-for="(slide, i) in slides" :key="i">
      <div class="col-left hero-content">
        <h2 class="title-slide">
          <span>Exquisite Grace,</span> Accuracy
        </h2>

        <a href="#" class="btn-wrap">
          Explore Now
        </a>
      </div>
    </SwiperSlide>
  </Swiper>
                        <!-- <div dir="ltr" class="swiper swiper-hero-main-thumb slider_effect_fade">
                            <div class="swiper-wrapper">
                              
                                <div class="swiper-slide">
                                    <div class="col-left">
                                        <h2 class="title-slide text-display-1 fw-normal text-white fade-item fade-item-1">
                                            <span>Exquisite Grace,</span> Accuracy
                                        </h2>
                                        <div class="fade-item fade-item-2">
                                            <a href="shop-default.html" class="btn-wrap btn-4 btn-fill-white animate-btn animate-dark">
                                                <span class="text-body-4 fw-medium text-primary">Explore Now</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                             
                                <div class="swiper-slide">
                                    <div class="col-left">
                                        <h2 class="title-slide text-display-1 fw-normal text-white fade-item fade-item-1">
                                            <span>Exquisite Grace,</span> Accuracy
                                        </h2>
                                        <div class="fade-item fade-item-2">
                                            <a href="shop-default.html" class="btn-wrap btn-4 btn-fill-white animate-btn animate-dark">
                                                <span class="text-body-4 fw-medium text-primary">Explore Now</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                               
                                <div class="swiper-slide">
                                    <div class="col-left">
                                        <h2 class="title-slide text-display-1 fw-normal text-white fade-item fade-item-1">
                                            <span>Exquisite Grace,</span> Accuracy
                                        </h2>
                                        <div class="fade-item fade-item-2">
                                            <a href="shop-default.html" class="btn-wrap btn-4 btn-fill-white animate-btn animate-dark">
                                                <span class="text-body-4 fw-medium text-primary">Explore Now</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="sw-dot-default tf-sw-pagination"></div>
                        </div> -->
                    </div>

                </div>
                <div class="row d-flex align-items-end">
                    <div class="col-sm-6 col-xl-4">
                        <ul class="environment-list">
                          <li><i class="fas fa-leaf"></i></li>
<li><i class="fas fa-spa"></i></li>
<li><i class="fas fa-seedling"></i></li>
                        </ul>
                        <p class="text-white text-body-1">
                            Transform your look, elevate your confidence with Ametic, unlocking your true potential and inner glow.
                        </p>
                    </div>
                    <div class="col-sm-6 col-md-5 col-xl-3 ms-auto">
                        <div class="">
                            <div dir="ltr" class="swiper swiper-hero-thumb">
                                <div class="swiper-wrapper">
                                    <!-- item 1 -->
                                    <div class="swiper-slide">
                                        <div class="card-product card-product-v02 type-2 bg-white">
                                            <div class="card-product_wrapper">
                                                <a href="shop-detail.html" class="product-img">
                                                    <img class="img-product" width="277" height="239"
                                                        src="../assets/images/vimas/FACIAL-SCRUB-removebg-preview.png" alt="Product">
                                                    <img class="img-hover" width="277" height="239"
                                                        src="../assets/images/vimas/FACIAL-CREAM.png" alt="Product">
                                                </a>
                                                <ul class="product-badge-list">
                                                    <li class="product-badge text-body-4">
                                                        New
                                                    </li>
                                                    <li class="product-badge text-body-4 sale">
                                                        Sale
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="card-product_info">
                                                <div class="info-left">
                                                    <p class="product__cate text-uppercase text-caption">moisturize</p>
                                                    <a href="shop-detail.html" class="product__name text-body-2 link-2 text-black">Dream
                                                        Bio Retinol</a>
                                                    <div class="product__price price-wrap text-black">
                                                        <span class="price-new text-body-2 fw-semibold">$56.00</span>
                                                    </div>
                                                </div>
                                                <div class="action-shop-list">
                                                    <div class="btn-add-shop">
                                                        <!-- <i class="fa-solid fa-plus fs-24 plus-icon"></i> -->
                                                         <i class="fa-solid fa-plus fs-24 plus-icon"></i>
                                                    </div>
                                                    <ul class="product-action-list">
                                                        <li>
                                                            <a href="#shoppingCart" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                                <!-- <span class="icon"><img src="../assets/images/cart.svg" alt=""></span> -->
                                                                <span class="icon"><img src="../assets/images/cart.svg" alt=""></span>
                                                                <span class="tooltip">Add to cart</span>
                                                            </a>
                                                        </li>
                                                        <li class="wishlist">
                                                            <a href="#;" class="action-card hover-tooltip tooltip-left">
                                                                <!-- <span class="icon"><img src="../assets/images/heart.svg" alt=""></span> -->
                                                                 <span class="icon"><img src="../assets/images/heart.svg" alt=""></span>
                                                                <span class="tooltip">Add to Wishlist</span>
                                                            </a>
                                                        </li>
                                                        <li class="compare">
                                                            <a href="#compare" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                                <!-- <span class="icon"><img src="../assets/images/eye.svg" alt=""></span> -->
                                                                 <span class="icon"><img src="../assets/images/eye.svg" alt=""></span>
                                                                <span class="tooltip">Compare</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#quickView" data-bs-toggle="modal" class="action-card hover-tooltip tooltip-left">
                                                                <!-- <span class="icon"><img src="../assets/images/arrow-clockwise.svg" alt=""></span> -->
                                                                 <span class="icon"><img src="../assets/images/arrow-clockwise.svg" alt=""></span>
                                                                <span class="tooltip">Quick view</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- item 2 -->
                                    <div class="swiper-slide">
                                        <div class="card-product card-product-v02 type-2 bg-white">
                                            <div class="card-product_wrapper">
                                                <a href="shop-detail.html" class="product-img">
                                                    <img class="img-product" width="277" height="239"
                                                        src="../assets/images/product/product-9.jpg" alt="Product">
                                                    <img class="img-hover" width="277" height="239"
                                                        src="../assets/images/product/product-9.jpg" alt="Product">
                                                </a>
                                                <ul class="product-badge-list">
                                                    <li class="product-badge text-body-4">
                                                        New
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="card-product_info">
                                                <div class="info-left">
                                                    <p class="product__cate text-uppercase text-caption">moisturize</p>
                                                    <a href="shop-detail.html" class="product__name text-body-2 link-2 text-black">Dream
                                                        Bio Retinol</a>
                                                    <div class="product__price price-wrap text-black">
                                                        <span class="price-new text-body-2 fw-semibold">$56.00</span>
                                                    </div>
                                                </div>
                                                <div class="action-shop-list">
                                                    <div class="btn-add-shop">
                                                       <i class="fa-solid fa-plus fs-24 plus-icon"></i>
                                                    </div>
                                                    <ul class="product-action-list">
                                                        <li>
                                                            <a href="#shoppingCart" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                                <span class="icon"><img src="../assets/images/cart.svg" alt=""></span>
                                                                <span class="tooltip">Add to cart</span>
                                                            </a>
                                                        </li>
                                                        <li class="wishlist">
                                                            <a href="#;" class="action-card hover-tooltip tooltip-left">
                                                                <span class="icon"><img src="../assets/images/heart.svg" alt=""></span>
                                                                <span class="tooltip">Add to Wishlist</span>
                                                            </a>
                                                        </li>
                                                        <li class="compare">
                                                            <a href="#compare" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                                <span class="icon"><img src="../assets/images/eye.svg" alt=""></span>
                                                                <span class="tooltip">Compare</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#quickView" data-bs-toggle="modal" class="action-card hover-tooltip tooltip-left">
                                                                <span class="icon"><img src="../assets/images/arrow-clockwise.svg" alt=""></span>
                                                                <span class="tooltip">Quick view</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- item 3 -->
                                    <div class="swiper-slide">
                                        <div class="card-product card-product-v02 type-2 bg-white">
                                            <div class="card-product_wrapper">
                                                <a href="shop-detail.html" class="product-img">
                                                    <img class="img-product" width="277" height="239"
                                                        src="../assets/images/product/product-8.jpg" alt="Product">
                                                    <img class="img-hover" width="277" height="239"
                                                        src="../assets/images/product/product-8.jpg" alt="Product">
                                                </a>
                                                <ul class="product-badge-list">
                                                    <li class="product-badge text-body-4">
                                                        New
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="card-product_info">
                                                <div class="info-left">
                                                    <p class="product__cate text-uppercase text-caption">moisturize</p>
                                                    <a href="shop-detail.html" class="product__name text-body-2 link-2 text-black">Dream
                                                        Bio Retinol</a>
                                                    <div class="product__price price-wrap text-black">
                                                        <span class="price-new text-body-2 fw-semibold">$56.00</span>
                                                    </div>
                                                </div>
                                                <div class="action-shop-list">
                                                    <div class="btn-add-shop">
                                                       <i class="fa-solid fa-plus fs-24 plus-icon"></i>
                                                    </div>
                                                    <ul class="product-action-list">
                                                        <li>
                                                            <a href="#shoppingCart" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                                <span class="icon"><img src="../assets/images/cart.svg" alt=""></span>
                                                                <span class="tooltip">Add to cart</span>
                                                            </a>
                                                        </li>
                                                        <li class="wishlist">
                                                            <a href="#;" class="action-card hover-tooltip tooltip-left">
                                                                <span class="icon"><img src="../assets/images/heart.svg" alt=""></span>
                                                                <span class="tooltip">Add to Wishlist</span>
                                                            </a>
                                                        </li>
                                                        <li class="compare">
                                                            <a href="#compare" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                                <span class="icon"><img src="../assets/images/eye.svg" alt=""></span>
                                                                <span class="tooltip">Compare</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#quickView" data-bs-toggle="modal" class="action-card hover-tooltip tooltip-left">
                                                                <span class="icon"><img src="../assets/images/arrow-clockwise.svg" alt=""></span>
                                                                <span class="tooltip">Quick view</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="sw-line-vertical style-2 tf-sw-pagination"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- /Hero -->
        <!-- Image Text -->
        <div class="section-cosmetic-text-image flat-spacing-4">
            <div class="container-5">
                <div class="box-text-image-wrap h3 letter-space--3 text-color-change-3">
                    We are dedicated to
                    <div class="image">
                        <img loading="lazy" width="112" height="48" src="../assets/images/section/story-1.jpg" alt="Image">
                    </div>
                    elevating
                    <div class="break"></div>
                    standards in
                    <div class="image">
                        <img loading="lazy" width="112" height="48" src="../assets/images/section/story-2.jpg" alt="Image">
                    </div>
                    beauty and care, creating
                    <div class="break"></div>
                    confidence and timeless
                    <div class="image">
                        <img loading="lazy" width="112" height="48" src="../assets/images/section/story-3.jpg" alt="Image">
                    </div>
                    elegance
                    <div class="break"></div>
                    for everyone
                </div>
                <div class="text-center">
                    <a href="demo-camping-about-us.html" class="action btn-wrap btn-4 btn-fill-primary animate-btn animate-dark">
                        <span class="text-body-4 fw-medium"> Read Our Story</span>
                    </a>
                </div>
            </div>
        </div>
        <!-- Image Text -->
        <!-- Banner Image Text -->
        <section class="section-cosmetic">
            <div class="container-5">
                <div class="row">
                    <div class="col-md-6">
                        <div class="box-image-v01 hover-img mb-md-0">
                            <div class="box-image_image img-style">
                                <img loading="lazy" width="646" height="520" src="../assets/images/section/box-1.jpg" alt="Image">
                            </div>
                            <div class="box-image_content">
                                <div class="flex-1">
                                    <p class="mini-title text-body-1 text-white">Happy Mother’s day</p>
                                </div>
                                <h2 class="title letter-space--3 text-white">
                                    <span>Best gifts for </span>
                                    <br> Your Mom
                                </h2>
                                <div class="flex-1 d-flex align-items-end">
                                    <a href="about.html" class="action btn-wrap btn-4 btn-fill-white animate-btn animate-dark">
                                        <span class="text-body-4 fw-medium text-primary">Real Our Story</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="box-image-v01 hover-img mb-0">
                            <div class="box-image_image img-style">
                                <img loading="lazy" width="646" height="520" src="../assets/images/section/box-2.jpg" alt="Image">
                            </div>
                            <div class="box-image_content ">
                                <div class="flex-1">
                                    <p class="mini-title text-body-1 text-white">Discover our creative universe</p>
                                </div>
                                <h2 class="title letter-space--3 text-white">
                                    <span>50% OFF</span>
                                    <br> Mother’s day
                                </h2>
                                <div class="flex-1 d-flex align-items-end">
                                    <a href="about.html" class="action btn-wrap btn-4 btn-fill-white animate-btn animate-dark">
                                        <span class="text-body-4 fw-medium text-primary">Real Our Story</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="infiniteslide_wrap" style="overflow: hidden;">
            <div class="infiniteSlide infiniteSlide-text-cosmetic" data-clone="3">
                <!-- clone 1 -->
                <h2 class="letter-space--3 cl-gray-20 fw-normal">Rescue Your Skin</h2>
                <div class="br-dot"></div>
                <h2 class="letter-space--3 cl-gray-20 fw-normal">Made with love</h2>
                <div class="br-dot"></div>
                <h2 class="letter-space--3 cl-gray-20 fw-normal">New Season Essential</h2>
                <div class="br-dot"></div>
                <!-- clone 2 -->
                <h2 class="letter-space--3 cl-gray-20 fw-normal">Rescue Your Skin</h2>
                <div class="br-dot"></div>
                <h2 class="letter-space--3 cl-gray-20 fw-normal">Made with love</h2>
                <div class="br-dot"></div>
                <h2 class="letter-space--3 cl-gray-20 fw-normal">New Season Essential</h2>
                <div class="br-dot"></div>
                <!-- clone 3 -->
                <h2 class="letter-space--3 cl-gray-20 fw-normal">Rescue Your Skin</h2>
                <div class="br-dot"></div>
                <h2 class="letter-space--3 cl-gray-20 fw-normal">Made with love</h2>
                <div class="br-dot"></div>
                <h2 class="letter-space--3 cl-gray-20 fw-normal">New Season Essential</h2>
                <div class="br-dot"></div>
            </div>
            </div>
            <div class="container-5">
                <div class="br-line d-flex bg-gray-20"></div>
            </div>
        </section>
        <!-- Banner Image Text -->
        <!-- Tab Product -->
        <div class="section-comestic-tab-product flat-animate-tab flat-spacing-4">
            <div class="container-5">
                <div class="s-header-2 align-items-end">
                    <ul class="tab-btn-product_list" role="tablist">
                        <li class="nav-tab-item" role="presentation">
                            <a href="#hot" data-bs-toggle="tab" class="tf-btn-tab h4 letter-space--2 fw-medium active">
                                What’s Hot
                            </a>
                            <a href="#new" data-bs-toggle="tab" class="tf-btn-tab h4 letter-space--2 fw-medium">
                                New Arrivals
                            </a>
                            <a href="#best" data-bs-toggle="tab" class="tf-btn-tab h4 letter-space--2 fw-medium">
                                Best Seller
                            </a>
                        </li>
                    </ul>
                    <a href="shop-default.html" class="tf-btn-line d-none d-md-inline-flex">
                        <span class="text-body-1 fw-medium">Shop All Products</span>
                    </a>
                </div>
                <div class="tab-content">
                    <div class="tab-pane active show" id="hot" role="tabpanel">
                        <div class="tf-grid-layout ssm-col-2 lg-col-3">
                            <div class="card-product card-product-v02">
                                <div class="card-product_wrapper">
                                    <a href="shop-detail.html" class="product-img">
                                        <img class="img-product" width="384" height="332"
                                            src="../assets/images/vimas/FACIAL-SCRUB-removebg-preview.png" alt="Product">
                                        <img class="img-hover" width="384" height="332"
                                            src="../assets/images/vimas/FACIAL-SCRUB-removebg-preview.png" alt="Product">
                                    </a>
                                    <ul class="product-badge-list">
                                        <li class="product-badge">
                                            New
                                        </li>
                                    </ul>
                                </div>
                                <div class="card-product_info">
                                    <div class="info-left">
                                        <p class="product__cate text-uppercase text-body-4">moisturize</p>
                                        <a href="shop-detail.html" class="product__name text-body-2 link-2 text-black">Dream Bio
                                            Retinol</a>
                                        <div class="product__price price-wrap text-black">
                                            <span class="price-new text-sub-head fw-medium">$56.00</span>
                                        </div>
                                    </div>
                                    <div class="action-shop-list">
                                        <div class="btn-add-shop">
                                            <i class="fa-solid fa-plus fs-24 plus-icon"></i>
                                        </div>
                                        <ul class="product-action-list">
                                            <li>
                                                <a href="#shoppingCart" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/cart.svg" alt=""></span>
                                                    <span class="tooltip">Add to cart</span>
                                                </a>
                                            </li>
                                            <li class="wishlist">
                                                <a href="#;" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/heart.svg" alt=""></span>
                                                    <span class="tooltip">Add to Wishlist</span>
                                                </a>
                                            </li>
                                            <li class="compare">
                                                <a href="#compare" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/eye.svg" alt=""></span>
                                                    <span class="tooltip">Compare</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#quickView" data-bs-toggle="modal" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/arrow-clockwise.svg" alt=""></span>
                                                    <span class="tooltip">Quick view</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="card-product card-product-v02">
                                <div class="card-product_wrapper">
                                    <a href="shop-detail.html" class="product-img">
                                        <img class="img-product" width="384" height="332"
                                            src="../assets/images/vimas/FACIAL-SCRUB-removebg-preview.png" alt="Product">
                                        <img class="img-hover" width="384" height="332"
                                            src="../assets/images/vimas/FACIAL-SCRUB-removebg-preview.png" alt="Product">
                                    </a>
                                    <ul class="product-badge-list">
                                        <li class="product-badge">
                                            New
                                        </li>
                                    </ul>
                                </div>
                                <div class="card-product_info">
                                    <div class="info-left">
                                        <p class="product__cate text-uppercase text-body-4">moisturize</p>
                                        <a href="shop-detail.html" class="product__name text-body-2 link-2 text-black">Dream Bio
                                            Retinol</a>
                                        <div class="product__price price-wrap text-black">
                                            <span class="price-new text-sub-head fw-medium">$56.00</span>
                                        </div>
                                    </div>
                                    <div class="action-shop-list">
                                        <div class="btn-add-shop">
                                            <i class="fa-solid fa-plus fs-24 plus-icon"></i>
                                        </div>
                                        <ul class="product-action-list">
                                            <li>
                                                <a href="#shoppingCart" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/cart.svg" alt=""></span>
                                                    <span class="tooltip">Add to cart</span>
                                                </a>
                                            </li>
                                            <li class="wishlist">
                                                <a href="#;" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/heart.svg" alt=""></span>
                                                    <span class="tooltip">Add to Wishlist</span>
                                                </a>
                                            </li>
                                            <li class="compare">
                                                <a href="#compare" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/eye.svg" alt=""></span>
                                                    <span class="tooltip">Compare</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#quickView" data-bs-toggle="modal" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/arrow-clockwise.svg" alt=""></span>
                                                    <span class="tooltip">Quick view</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="card-product card-product-v02">
                                <div class="card-product_wrapper">
                                    <a href="shop-detail.html" class="product-img">
                                        <img class="img-product" width="384" height="332"
                                            src="../assets/images/vimas/FACIAL-SCRUB-removebg-preview.png" alt="Product">
                                        <img class="img-hover" width="384" height="332"
                                            src="../assets/images/vimas/FACIAL-SCRUB-removebg-preview.png" alt="Product">
                                    </a>
                                    <ul class="product-badge-list">
                                        <li class="product-badge">
                                            New
                                        </li>
                                    </ul>
                                </div>
                                <div class="card-product_info">
                                    <div class="info-left">
                                        <p class="product__cate text-uppercase text-body-4">moisturize</p>
                                        <a href="shop-detail.html" class="product__name text-body-2 link-2 text-black">Dream Bio
                                            Retinol</a>
                                        <div class="product__price price-wrap text-black">
                                            <span class="price-new text-sub-head fw-medium">$56.00</span>
                                            <span class="price-old text-decoration-line-through">$56.00</span>
                                        </div>
                                    </div>
                                    <div class="action-shop-list">
                                        <div class="btn-add-shop">
                                            <i class="fa-solid fa-plus fs-24 plus-icon"></i>
                                        </div>
                                        <ul class="product-action-list">
                                            <li>
                                                <a href="#shoppingCart" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/cart.svg" alt=""></span>
                                                    <span class="tooltip">Add to cart</span>
                                                </a>
                                            </li>
                                            <li class="wishlist">
                                                <a href="#;" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/heart.svg" alt=""></span>
                                                    <span class="tooltip">Add to Wishlist</span>
                                                </a>
                                            </li>
                                            <li class="compare">
                                                <a href="#compare" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/eye.svg" alt=""></span>
                                                    <span class="tooltip">Compare</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#quickView" data-bs-toggle="modal" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/arrow-clockwise.svg" alt=""></span>
                                                    <span class="tooltip">Quick view</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="card-product card-product-v02">
                                <div class="card-product_wrapper">
                                    <a href="shop-detail.html" class="product-img">
                                        <img class="img-product" width="384" height="332"
                                            src="../assets/images/vimas/FACIAL-SCRUB-removebg-preview.png" alt="Product">
                                        <img class="img-hover" width="384" height="332"
                                            src="../assets/images/vimas/FACIAL-SCRUB-removebg-preview.png" alt="Product">
                                    </a>
                                    <ul class="product-badge-list">
                                        <li class="product-badge">
                                            New
                                        </li>
                                    </ul>
                                </div>
                                <div class="card-product_info">
                                    <div class="info-left">
                                        <p class="product__cate text-uppercase text-body-4">moisturize</p>
                                        <a href="shop-detail.html" class="product__name text-body-2 link-2 text-black">Dream Bio
                                            Retinol</a>
                                        <div class="product__price price-wrap text-black">
                                            <span class="price-new text-sub-head fw-medium">$56.00</span>
                                        </div>
                                    </div>
                                    <div class="action-shop-list">
                                        <div class="btn-add-shop">
                                            <i class="fa-solid fa-plus fs-24 plus-icon"></i>
                                        </div>
                                        <ul class="product-action-list">
                                            <li>
                                                <a href="#shoppingCart" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/cart.svg" alt=""></span>
                                                    <span class="tooltip">Add to cart</span>
                                                </a>
                                            </li>
                                            <li class="wishlist">
                                                <a href="#;" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/heart.svg" alt=""></span>
                                                    <span class="tooltip">Add to Wishlist</span>
                                                </a>
                                            </li>
                                            <li class="compare">
                                                <a href="#compare" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/eye.svg" alt=""></span>
                                                    <span class="tooltip">Compare</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#quickView" data-bs-toggle="modal" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/arrow-clockwise.svg" alt=""></span>
                                                    <span class="tooltip">Quick view</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="card-product card-product-v02">
                                <div class="card-product_wrapper">
                                    <a href="shop-detail.html" class="product-img">
                                        <img class="img-product" width="384" height="332"
                                            src="../assets/images/vimas/FACIAL-SCRUB-removebg-preview.png" alt="Product">
                                        <img class="img-hover" width="384" height="332"
                                            src="../assets/images/vimas/FACIAL-SCRUB-removebg-preview.png" alt="Product">
                                    </a>
                                    <ul class="product-badge-list">
                                        <li class="product-badge">
                                            New
                                        </li>
                                    </ul>
                                </div>
                                <div class="card-product_info">
                                    <div class="info-left">
                                        <p class="product__cate text-uppercase text-body-4">moisturize</p>
                                        <a href="shop-detail.html" class="product__name text-body-2 link-2 text-black">Dream Bio
                                            Retinol</a>
                                        <div class="product__price price-wrap text-black">
                                            <span class="price-new text-sub-head fw-medium">$56.00</span>
                                        </div>
                                    </div>
                                    <div class="action-shop-list">
                                        <div class="btn-add-shop">
                                            <i class="fa-solid fa-plus fs-24 plus-icon"></i>
                                        </div>
                                        <ul class="product-action-list">
                                            <li>
                                                <a href="#shoppingCart" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/cart.svg" alt=""></span>
                                                    <span class="tooltip">Add to cart</span>
                                                </a>
                                            </li>
                                            <li class="wishlist">
                                                <a href="#;" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/heart.svg" alt=""></span>
                                                    <span class="tooltip">Add to Wishlist</span>
                                                </a>
                                            </li>
                                            <li class="compare">
                                                <a href="#compare" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/eye.svg" alt=""></span>
                                                    <span class="tooltip">Compare</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#quickView" data-bs-toggle="modal" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/arrow-clockwise.svg" alt=""></span>
                                                    <span class="tooltip">Quick view</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="card-product card-product-v02">
                                <div class="card-product_wrapper">
                                    <a href="shop-detail.html" class="product-img">
                                        <img class="img-product" width="384" height="332"
                                            src="../assets/images/vimas/FACIAL-SCRUB-removebg-preview.png" alt="Product">
                                        <img class="img-hover" width="384" height="332"
                                            src="../assets/images/vimas/FACIAL-SCRUB-removebg-preview.png" alt="Product">
                                    </a>
                                    <ul class="product-badge-list">
                                        <li class="product-badge">
                                            New
                                        </li>
                                    </ul>
                                </div>
                                <div class="card-product_info">
                                    <div class="info-left">
                                        <p class="product__cate text-uppercase text-body-4">moisturize</p>
                                        <a href="shop-detail.html" class="product__name text-body-2 link-2 text-black">Dream Bio
                                            Retinol</a>
                                        <div class="product__price price-wrap text-black">
                                            <span class="price-new text-sub-head fw-medium">$56.00</span>
                                        </div>
                                    </div>
                                    <div class="action-shop-list">
                                        <div class="btn-add-shop">
                                            <i class="fa-solid fa-plus fs-24 plus-icon"></i>
                                        </div>
                                        <ul class="product-action-list">
                                            <li>
                                                <a href="#shoppingCart" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/cart.svg" alt=""></span>
                                                    <span class="tooltip">Add to cart</span>
                                                </a>
                                            </li>
                                            <li class="wishlist">
                                                <a href="#;" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/heart.svg" alt=""></span>
                                                    <span class="tooltip">Add to Wishlist</span>
                                                </a>
                                            </li>
                                            <li class="compare">
                                                <a href="#compare" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/eye.svg" alt=""></span>
                                                    <span class="tooltip">Compare</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#quickView" data-bs-toggle="modal" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/arrow-clockwise.svg" alt=""></span>
                                                    <span class="tooltip">Quick view</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane" id="new" role="tabpanel">
                        <div class="tf-grid-layout ssm-col-2 lg-col-3">

                            <div class="card-product card-product-v02">
                                <div class="card-product_wrapper">
                                    <a href="shop-detail.html" class="product-img">
                                        <img class="img-product" width="384" height="332"
                                            src="../assets/images/product/product-4.jpg" alt="Product">
                                        <img class="img-hover" width="384" height="332"
                                            src="../assets/images/product/product-4.jpg" alt="Product">
                                    </a>
                                    <ul class="product-badge-list">
                                        <li class="product-badge">
                                            New
                                        </li>
                                    </ul>
                                </div>
                                <div class="card-product_info">
                                    <div class="info-left">
                                        <p class="product__cate text-uppercase text-body-4">moisturize</p>
                                        <a href="shop-detail.html" class="product__name text-body-2 link-2 text-black">Dream Bio
                                            Retinol</a>
                                        <div class="product__price price-wrap text-black">
                                            <span class="price-new text-sub-head fw-medium">$56.00</span>
                                        </div>
                                    </div>
                                    <div class="action-shop-list">
                                        <div class="btn-add-shop">
                                            <i class="fa-solid fa-plus fs-24 plus-icon"></i>
                                        </div>
                                        <ul class="product-action-list">
                                            <li>
                                                <a href="#shoppingCart" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/cart.svg" alt=""></span>
                                                    <span class="tooltip">Add to cart</span>
                                                </a>
                                            </li>
                                            <li class="wishlist">
                                                <a href="#;" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/heart.svg" alt=""></span>
                                                    <span class="tooltip">Add to Wishlist</span>
                                                </a>
                                            </li>
                                            <li class="compare">
                                                <a href="#compare" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/eye.svg" alt=""></span>
                                                    <span class="tooltip">Compare</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#quickView" data-bs-toggle="modal" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/arrow-clockwise.svg" alt=""></span>
                                                    <span class="tooltip">Quick view</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="card-product card-product-v02">
                                <div class="card-product_wrapper">
                                    <a href="shop-detail.html" class="product-img">
                                        <img class="img-product" width="384" height="332"
                                            src="../assets/images/product/product-5.jpg" alt="Product">
                                        <img class="img-hover" width="384" height="332"
                                            src="../assets/images/product/product-5.jpg" alt="Product">
                                    </a>
                                    <ul class="product-badge-list">
                                        <li class="product-badge">
                                            New
                                        </li>
                                    </ul>
                                </div>
                                <div class="card-product_info">
                                    <div class="info-left">
                                        <p class="product__cate text-uppercase text-body-4">moisturize</p>
                                        <a href="shop-detail.html" class="product__name text-body-2 link-2 text-black">Dream Bio
                                            Retinol</a>
                                        <div class="product__price price-wrap text-black">
                                            <span class="price-new text-sub-head fw-medium">$56.00</span>
                                        </div>
                                    </div>
                                    <div class="action-shop-list">
                                        <div class="btn-add-shop">
                                            <i class="fa-solid fa-plus fs-24 plus-icon"></i>
                                        </div>
                                        <ul class="product-action-list">
                                            <li>
                                                <a href="#shoppingCart" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/cart.svg" alt=""></span>
                                                    <span class="tooltip">Add to cart</span>
                                                </a>
                                            </li>
                                            <li class="wishlist">
                                                <a href="#;" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/heart.svg" alt=""></span>
                                                    <span class="tooltip">Add to Wishlist</span>
                                                </a>
                                            </li>
                                            <li class="compare">
                                                <a href="#compare" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/eye.svg" alt=""></span>
                                                    <span class="tooltip">Compare</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#quickView" data-bs-toggle="modal" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/arrow-clockwise.svg" alt=""></span>
                                                    <span class="tooltip">Quick view</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="card-product card-product-v02">
                                <div class="card-product_wrapper">
                                    <a href="shop-detail.html" class="product-img">
                                        <img class="img-product" width="384" height="332"
                                            src="../assets/images/product/product-6.jpg" alt="Product">
                                        <img class="img-hover" width="384" height="332"
                                            src="../assets/images/product/product-6.jpg" alt="Product">
                                    </a>
                                    <ul class="product-badge-list">
                                        <li class="product-badge">
                                            New
                                        </li>
                                    </ul>
                                </div>
                                <div class="card-product_info">
                                    <div class="info-left">
                                        <p class="product__cate text-uppercase text-body-4">moisturize</p>
                                        <a href="shop-detail.html" class="product__name text-body-2 link-2 text-black">Dream Bio
                                            Retinol</a>
                                        <div class="product__price price-wrap text-black">
                                            <span class="price-new text-sub-head fw-medium">$56.00</span>
                                        </div>
                                    </div>
                                    <div class="action-shop-list">
                                        <div class="btn-add-shop">
                                            <i class="fa-solid fa-plus fs-24 plus-icon"></i>
                                        </div>
                                        <ul class="product-action-list">
                                            <li>
                                                <a href="#shoppingCart" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/cart.svg" alt=""></span>
                                                    <span class="tooltip">Add to cart</span>
                                                </a>
                                            </li>
                                            <li class="wishlist">
                                                <a href="#;" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/heart.svg" alt=""></span>
                                                    <span class="tooltip">Add to Wishlist</span>
                                                </a>
                                            </li>
                                            <li class="compare">
                                                <a href="#compare" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/eye.svg" alt=""></span>
                                                    <span class="tooltip">Compare</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#quickView" data-bs-toggle="modal" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/arrow-clockwise.svg" alt=""></span>
                                                    <span class="tooltip">Quick view</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="card-product card-product-v02">
                                <div class="card-product_wrapper">
                                    <a href="shop-detail.html" class="product-img">
                                        <img class="img-product" width="384" height="332"
                                            src="../assets/images/product/product-1.jpg" alt="Product">
                                        <img class="img-hover" width="384" height="332"
                                            src="../assets/images/product/product-1.jpg" alt="Product">
                                    </a>
                                    <ul class="product-badge-list">
                                        <li class="product-badge">
                                            New
                                        </li>
                                    </ul>
                                </div>
                                <div class="card-product_info">
                                    <div class="info-left">
                                        <p class="product__cate text-uppercase text-body-4">moisturize</p>
                                        <a href="shop-detail.html" class="product__name text-body-2 link-2 text-black">Dream Bio
                                            Retinol</a>
                                        <div class="product__price price-wrap text-black">
                                            <span class="price-new text-sub-head fw-medium">$56.00</span>
                                        </div>
                                    </div>
                                    <div class="action-shop-list">
                                        <div class="btn-add-shop">
                                            <i class="fa-solid fa-plus fs-24 plus-icon"></i>
                                        </div>
                                        <ul class="product-action-list">
                                            <li>
                                                <a href="#shoppingCart" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/cart.svg" alt=""></span>
                                                    <span class="tooltip">Add to cart</span>
                                                </a>
                                            </li>
                                            <li class="wishlist">
                                                <a href="#;" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/heart.svg" alt=""></span>
                                                    <span class="tooltip">Add to Wishlist</span>
                                                </a>
                                            </li>
                                            <li class="compare">
                                                <a href="#compare" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/eye.svg" alt=""></span>
                                                    <span class="tooltip">Compare</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#quickView" data-bs-toggle="modal" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/arrow-clockwise.svg" alt=""></span>
                                                    <span class="tooltip">Quick view</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="card-product card-product-v02">
                                <div class="card-product_wrapper">
                                    <a href="shop-detail.html" class="product-img">
                                        <img class="img-product" width="384" height="332"
                                            src="../assets/images/product/product-2.jpg" alt="Product">
                                        <img class="img-hover" width="384" height="332"
                                            src="../assets/images/product/product-2.jpg" alt="Product">
                                    </a>
                                    <ul class="product-badge-list">
                                        <li class="product-badge">
                                            New
                                        </li>
                                    </ul>
                                </div>
                                <div class="card-product_info">
                                    <div class="info-left">
                                        <p class="product__cate text-uppercase text-body-4">moisturize</p>
                                        <a href="shop-detail.html" class="product__name text-body-2 link-2 text-black">Dream Bio
                                            Retinol</a>
                                        <div class="product__price price-wrap text-black">
                                            <span class="price-new text-sub-head fw-medium">$56.00</span>
                                        </div>
                                    </div>
                                    <div class="action-shop-list">
                                        <div class="btn-add-shop">
                                            <i class="fa-solid fa-plus fs-24 plus-icon"></i>
                                        </div>
                                        <ul class="product-action-list">
                                            <li>
                                                <a href="#shoppingCart" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/cart.svg" alt=""></span>
                                                    <span class="tooltip">Add to cart</span>
                                                </a>
                                            </li>
                                            <li class="wishlist">
                                                <a href="#;" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/heart.svg" alt=""></span>
                                                    <span class="tooltip">Add to Wishlist</span>
                                                </a>
                                            </li>
                                            <li class="compare">
                                                <a href="#compare" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/eye.svg" alt=""></span>
                                                    <span class="tooltip">Compare</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#quickView" data-bs-toggle="modal" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/arrow-clockwise.svg" alt=""></span>
                                                    <span class="tooltip">Quick view</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="card-product card-product-v02">
                                <div class="card-product_wrapper">
                                    <a href="shop-detail.html" class="product-img">
                                        <img class="img-product" width="384" height="332"
                                            src="../assets/images/product/product-3.jpg" alt="Product">
                                        <img class="img-hover" width="384" height="332"
                                            src="../assets/images/product/product-3.jpg" alt="Product">
                                    </a>
                                    <ul class="product-badge-list">
                                        <li class="product-badge">
                                            New
                                        </li>
                                    </ul>
                                </div>
                                <div class="card-product_info">
                                    <div class="info-left">
                                        <p class="product__cate text-uppercase text-body-4">moisturize</p>
                                        <a href="shop-detail.html" class="product__name text-body-2 link-2 text-black">Dream Bio
                                            Retinol</a>
                                        <div class="product__price price-wrap text-black">
                                            <span class="price-new text-sub-head fw-medium">$56.00</span>
                                            <span class="price-old text-decoration-line-through">$56.00</span>
                                        </div>
                                    </div>
                                    <div class="action-shop-list">
                                        <div class="btn-add-shop">
                                            <i class="fa-solid fa-plus fs-24 plus-icon"></i>
                                        </div>
                                        <ul class="product-action-list">
                                            <li>
                                                <a href="#shoppingCart" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/cart.svg" alt=""></span>
                                                    <span class="tooltip">Add to cart</span>
                                                </a>
                                            </li>
                                            <li class="wishlist">
                                                <a href="#;" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/heart.svg" alt=""></span>
                                                    <span class="tooltip">Add to Wishlist</span>
                                                </a>
                                            </li>
                                            <li class="compare">
                                                <a href="#compare" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/eye.svg" alt=""></span>
                                                    <span class="tooltip">Compare</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#quickView" data-bs-toggle="modal" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/arrow-clockwise.svg" alt=""></span>
                                                    <span class="tooltip">Quick view</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane" id="best" role="tabpanel">
                        <div class="tf-grid-layout ssm-col-2 lg-col-3">
                            <div class="card-product card-product-v02">
                                <div class="card-product_wrapper">
                                    <a href="shop-detail.html" class="product-img">
                                        <img class="img-product" width="384" height="332"
                                            src="../assets/images/product/product-6.jpg" alt="Product">
                                        <img class="img-hover" width="384" height="332"
                                            src="../assets/images/product/product-6.jpg" alt="Product">
                                    </a>
                                    <ul class="product-badge-list">
                                        <li class="product-badge">
                                            New
                                        </li>
                                    </ul>
                                </div>
                                <div class="card-product_info">
                                    <div class="info-left">
                                        <p class="product__cate text-uppercase text-body-4">moisturize</p>
                                        <a href="shop-detail.html" class="product__name text-body-2 link-2 text-black">Dream Bio
                                            Retinol</a>
                                        <div class="product__price price-wrap text-black">
                                            <span class="price-new text-sub-head fw-medium">$56.00</span>
                                        </div>
                                    </div>
                                    <div class="action-shop-list">
                                        <div class="btn-add-shop">
                                            <i class="fa-solid fa-plus fs-24 plus-icon"></i>
                                        </div>
                                        <ul class="product-action-list">
                                            <li>
                                                <a href="#shoppingCart" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/cart.svg" alt=""></span>
                                                    <span class="tooltip">Add to cart</span>
                                                </a>
                                            </li>
                                            <li class="wishlist">
                                                <a href="#;" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/heart.svg" alt=""></span>
                                                    <span class="tooltip">Add to Wishlist</span>
                                                </a>
                                            </li>
                                            <li class="compare">
                                                <a href="#compare" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/eye.svg" alt=""></span>
                                                    <span class="tooltip">Compare</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#quickView" data-bs-toggle="modal" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/arrow-clockwise.svg" alt=""></span>
                                                    <span class="tooltip">Quick view</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="card-product card-product-v02">
                                <div class="card-product_wrapper">
                                    <a href="shop-detail.html" class="product-img">
                                        <img class="img-product" width="384" height="332"
                                            src="../assets/images/vimas/FACIAL-SCRUB-removebg-preview.png" alt="Product">
                                        <img class="img-hover" width="384" height="332"
                                            src="../assets/images/product/product-1.jpg" alt="Product">
                                    </a>
                                    <ul class="product-badge-list">
                                        <li class="product-badge">
                                            New
                                        </li>
                                    </ul>
                                </div>
                                <div class="card-product_info">
                                    <div class="info-left">
                                        <p class="product__cate text-uppercase text-body-4">moisturize</p>
                                        <a href="shop-detail.html" class="product__name text-body-2 link-2 text-black">Dream Bio
                                            Retinol</a>
                                        <div class="product__price price-wrap text-black">
                                            <span class="price-new text-sub-head fw-medium">$56.00</span>
                                        </div>
                                    </div>
                                    <div class="action-shop-list">
                                        <div class="btn-add-shop">
                                            <i class="fa-solid fa-plus fs-24 plus-icon"></i>
                                        </div>
                                        <ul class="product-action-list">
                                            <li>
                                                <a href="#shoppingCart" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/cart.svg" alt=""></span>
                                                    <span class="tooltip">Add to cart</span>
                                                </a>
                                            </li>
                                            <li class="wishlist">
                                                <a href="#;" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/heart.svg" alt=""></span>
                                                    <span class="tooltip">Add to Wishlist</span>
                                                </a>
                                            </li>
                                            <li class="compare">
                                                <a href="#compare" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/eye.svg" alt=""></span>
                                                    <span class="tooltip">Compare</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#quickView" data-bs-toggle="modal" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/arrow-clockwise.svg" alt=""></span>
                                                    <span class="tooltip">Quick view</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="card-product card-product-v02">
                                <div class="card-product_wrapper">
                                    <a href="shop-detail.html" class="product-img">
                                        <img class="img-product" width="384" height="332"
                                            src="../assets/images/product/product-2.jpg" alt="Product">
                                        <img class="img-hover" width="384" height="332"
                                            src="../assets/images/product/product-2.jpg" alt="Product">
                                    </a>
                                    <ul class="product-badge-list">
                                        <li class="product-badge">
                                            New
                                        </li>
                                    </ul>
                                </div>
                                <div class="card-product_info">
                                    <div class="info-left">
                                        <p class="product__cate text-uppercase text-body-4">moisturize</p>
                                        <a href="shop-detail.html" class="product__name text-body-2 link-2 text-black">Dream Bio
                                            Retinol</a>
                                        <div class="product__price price-wrap text-black">
                                            <span class="price-new text-sub-head fw-medium">$56.00</span>
                                        </div>
                                    </div>
                                    <div class="action-shop-list">
                                        <div class="btn-add-shop">
                                            <i class="fa-solid fa-plus fs-24 plus-icon"></i>
                                        </div>
                                        <ul class="product-action-list">
                                            <li>
                                                <a href="#shoppingCart" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/cart.svg" alt=""></span>
                                                    <span class="tooltip">Add to cart</span>
                                                </a>
                                            </li>
                                            <li class="wishlist">
                                                <a href="#;" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/heart.svg" alt=""></span>
                                                    <span class="tooltip">Add to Wishlist</span>
                                                </a>
                                            </li>
                                            <li class="compare">
                                                <a href="#compare" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/eye.svg" alt=""></span>
                                                    <span class="tooltip">Compare</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#quickView" data-bs-toggle="modal" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/arrow-clockwise.svg" alt=""></span>
                                                    <span class="tooltip">Quick view</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="card-product card-product-v02">
                                <div class="card-product_wrapper">
                                    <a href="shop-detail.html" class="product-img">
                                        <img class="img-product" width="384" height="332"
                                            src="../assets/images/product/product-4.jpg" alt="Product">
                                        <img class="img-hover" width="384" height="332"
                                            src="../assets/images/product/product-4.jpg" alt="Product">
                                    </a>
                                    <ul class="product-badge-list">
                                        <li class="product-badge">
                                            New
                                        </li>
                                    </ul>
                                </div>
                                <div class="card-product_info">
                                    <div class="info-left">
                                        <p class="product__cate text-uppercase text-body-4">moisturize</p>
                                        <a href="shop-detail.html" class="product__name text-body-2 link-2 text-black">Dream Bio
                                            Retinol</a>
                                        <div class="product__price price-wrap text-black">
                                            <span class="price-new text-sub-head fw-medium">$56.00</span>
                                        </div>
                                    </div>
                                    <div class="action-shop-list">
                                        <div class="btn-add-shop">
                                            <i class="fa-solid fa-plus fs-24 plus-icon"></i>
                                        </div>
                                        <ul class="product-action-list">
                                            <li>
                                                <a href="#shoppingCart" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/cart.svg" alt=""></span>
                                                    <span class="tooltip">Add to cart</span>
                                                </a>
                                            </li>
                                            <li class="wishlist">
                                                <a href="#;" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/heart.svg" alt=""></span>
                                                    <span class="tooltip">Add to Wishlist</span>
                                                </a>
                                            </li>
                                            <li class="compare">
                                                <a href="#compare" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/eye.svg" alt=""></span>
                                                    <span class="tooltip">Compare</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#quickView" data-bs-toggle="modal" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/arrow-clockwise.svg" alt=""></span>
                                                    <span class="tooltip">Quick view</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="card-product card-product-v02">
                                <div class="card-product_wrapper">
                                    <a href="shop-detail.html" class="product-img">
                                        <img class="img-product" width="384" height="332"
                                            src="../assets/images/product/product-5.jpg" alt="Product">
                                        <img class="img-hover" width="384" height="332"
                                            src="../assets/images/product/product-5.jpg" alt="Product">
                                    </a>
                                    <ul class="product-badge-list">
                                        <li class="product-badge">
                                            New
                                        </li>
                                    </ul>
                                </div>
                                <div class="card-product_info">
                                    <div class="info-left">
                                        <p class="product__cate text-uppercase text-body-4">moisturize</p>
                                        <a href="shop-detail.html" class="product__name text-body-2 link-2 text-black">Dream Bio
                                            Retinol</a>
                                        <div class="product__price price-wrap text-black">
                                            <span class="price-new text-sub-head fw-medium">$56.00</span>
                                        </div>
                                    </div>
                                    <div class="action-shop-list">
                                        <div class="btn-add-shop">
                                            <i class="fa-solid fa-plus fs-24 plus-icon"></i>
                                        </div>
                                        <ul class="product-action-list">
                                            <li>
                                                <a href="#shoppingCart" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/cart.svg" alt=""></span>
                                                    <span class="tooltip">Add to cart</span>
                                                </a>
                                            </li>
                                            <li class="wishlist">
                                                <a href="#;" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/heart.svg" alt=""></span>
                                                    <span class="tooltip">Add to Wishlist</span>
                                                </a>
                                            </li>
                                            <li class="compare">
                                                <a href="#compare" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/eye.svg" alt=""></span>
                                                    <span class="tooltip">Compare</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#quickView" data-bs-toggle="modal" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/arrow-clockwise.svg" alt=""></span>
                                                    <span class="tooltip">Quick view</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="card-product card-product-v02">
                                <div class="card-product_wrapper">
                                    <a href="shop-detail.html" class="product-img">
                                        <img class="img-product" width="384" height="332"
                                            src="../assets/images/product/product-3.jpg" alt="Product">
                                        <img class="img-hover" width="384" height="332"
                                            src="../assets/images/product/product-3.jpg" alt="Product">
                                    </a>
                                    <ul class="product-badge-list">
                                        <li class="product-badge">
                                            New
                                        </li>
                                    </ul>
                                </div>
                                <div class="card-product_info">
                                    <div class="info-left">
                                        <p class="product__cate text-uppercase text-body-4">moisturize</p>
                                        <a href="shop-detail.html" class="product__name text-body-2 link-2 text-black">Dream Bio
                                            Retinol</a>
                                        <div class="product__price price-wrap text-black">
                                            <span class="price-new text-sub-head fw-medium">$56.00</span>
                                            <span class="price-old text-decoration-line-through">$56.00</span>
                                        </div>
                                    </div>
                                    <div class="action-shop-list">
                                        <div class="btn-add-shop">
                                            <i class="fa-solid fa-plus fs-24 plus-icon"></i>
                                        </div>
                                        <ul class="product-action-list">
                                            <li>
                                                <a href="#shoppingCart" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/cart.svg" alt=""></span>
                                                    <span class="tooltip">Add to cart</span>
                                                </a>
                                            </li>
                                            <li class="wishlist">
                                                <a href="#;" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/heart.svg" alt=""></span>
                                                    <span class="tooltip">Add to Wishlist</span>
                                                </a>
                                            </li>
                                            <li class="compare">
                                                <a href="#compare" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/eye.svg" alt=""></span>
                                                    <span class="tooltip">Compare</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#quickView" data-bs-toggle="modal" class="action-card hover-tooltip tooltip-left">
                                                    <span class="icon"><img src="../assets/images/arrow-clockwise.svg" alt=""></span>
                                                    <span class="tooltip">Quick view</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Tab Product -->
        <!-- Beautiful -->
        <section class="section-cosmetic-beautiful flat-spacing-4 bg-linear mx-12 radius-28">
            <div class="container-5">
                <div class="s-header-3">
                    <div class="ic-head wow fadeIn">
                      <i class="fa-solid fa-spa wellness-icon fs-24"></i>
                    </div>
                    <h2 class="title fw-normal letter-space--3 text-black text-center wow fadeZoom">
                        <span>Conscious Beauty,</span><br> Compomised
                    </h2>
                </div>
            </div>
            <div class="wrap">
                <div class="img-item item-1">
                    <!-- <img loading="lazy" width="685" height="480" src="../assets/images/item/box-cosmetic.png" alt="Image"> -->
                     <img loading="lazy" width="685" height="480" src="../assets/images/item/box-cosmetic.png" alt="Image">
                </div>
                <div class="img-item item-2">
                    <img loading="lazy" width="424" height="345" src="../assets/images/item/leave-1.png" alt="Image">
                </div>
                <div class="img-item item-3">
                    <img loading="lazy" width="424" height="345" src="../assets/images/item/leave-2.png" alt="Image">
                </div>
                <div class="img-item item-4">
                    <img loading="lazy" width="423" height="610" src="../assets/images/item/inner-jar.png" alt="Image">
                </div>
                <div class="container-5 position-relative z-5">
                    <div class="row">
                        <div class="col-sm-6 col-md-5 col-xl-3">
                            <div class="wg-icon-2 s1">
                                <div class="ic-wrap">
                                      <i class="fa-solid fa-seedling fs-24 seedling-icon"></i>
                                </div>
                                <p class="title text-sub-head text-black">
                                    Five ingredients. <br class="d-none d-sm-block"> Nothing more
                                </p>
                                <p class="sub-title text-body-4 cl-gray-50">
                                    Targeted essentials deliver <br class="d-none d-sm-block"> real results: Repair, renew, calm, <br class="d-none d-sm-block"> hydrate, protect. No irritation, <br class="d-none d-sm-block"> no wasted money.
                                </p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-5 col-xl-3">
                            <div class="wg-icon-2 s2">
                                <div class="ic-wrap">
                                    <i class="fa-solid fa-seedling fs-24 seedling-icon"></i>
                                </div>
                                <p class="title text-sub-head text-black">
                                    Proven by <br class="d-none d-sm-block"> people like you
                                </p>
                                <p class="sub-title text-body-4 cl-gray-50">
                                    In real-world tests, 94% of users <br class="d-none d-sm-block"> experienced dramatic, noticeable <br class="d-none d-sm-block"> improvements in 28 days, leading to <br class="d-none d-sm-block"> comments from friends
                                    <br class="d-none d-sm-block">
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row row-s2">
                        <div class="col-sm-6 col-md-5 col-xl-3 ms-auto">
                            <div class="wg-icon-2 s1">
                                <div class="ic-wrap">
                                      <i class="fa-solid fa-seedling fs-24 seedling-icon"></i>
                                </div>
                                <p class="title text-sub-head text-black">
                                    Quality over <br class="d-none d-sm-block"> quantity
                                </p>
                                <p class="sub-title text-body-4 cl-gray-50">
                                    We use higher concentrations <br class="d-none d-sm-block"> of effective ingredients, not cheap <br class="d-none d-sm-block"> fillers, delivering what your skin <br class="d-none d-sm-block"> needs, precisely where
                                    it needs it. <br class="d-none d-sm-block">
                                </p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-5 col-xl-3">
                            <div class="wg-icon-2 s2 mb-0">
                                <div class="ic-wrap">
                                      <i class="fa-solid fa-seedling fs-24 seedling-icon"></i>
                                </div>
                                <p class="title text-sub-head text-black">
                                    The last skincare <br class="d-none d-sm-block"> you'll ever need
                                </p>
                                <p class="sub-title text-body-4 cl-gray-50">
                                    Essence uses five powerful, effective<br class="d-none d-sm-block"> ingredients, chosen for proven results,<br class="d-none d-sm-block"> not trends or irritants, to transform<br class="d-none d-sm-block"> your skin.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- /Beautiful -->
        <!-- Lookbook -->
        <section class="section-cosmetic-lookbook flat-spacing-4 swiper-action-wrap">
            <div class="container-5">
                <div class="row flex-wrap-reverse">
                    <div class="col-md-6">
                        <div class="col-left">
                            <div class="s-header-3">
                                <h3 class="title letter-space--4 text-black text-center wow fadeZoom">
                                    <span>Dermal</span> <br>
                                    <span class="letter-space--3 fw-medium">
                                        Repair Cream
                                    </span>
                                </h3>
                            </div>
                            <div class="tf-btn-swiper-main">
                                <div class="nav-prev-swiper">
                                   <i class="fa-solid fa-chevron-left arrow-icon"></i>
                                  
                                </div>
                                <div dir="ltr" class="swiper tf-swiper swiper-lookbook" data-space="12">
                                    <div class="swiper-wrapper">
                                        <!-- item 1 -->
                                        <div class="swiper-slide">
                                            <div class="card-product card-product-v02 bg-white">
                                                <div class="card-product_wrapper">
                                                    <a href="shop-detail.html" class="product-img">
                                                        <img class="img-product" width="384" height="332"
                                                            src="../assets/images/vimas/FACIAL-SCRUB-removebg-preview.png" alt="Product">
                                                        <img class="img-hover" width="384" height="332"
                                                            src="../assets/images/vimas/FACIAL-SCRUB-removebg-preview.png" alt="Product">
                                                    </a>
                                                    <ul class="product-badge-list">
                                                        <li class="product-badge small">
                                                            New
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="card-product_info">
                                                    <div class="info-left">
                                                        <p class="product__cate text-uppercase text-body-4">moisturize
                                                        </p>
                                                        <a href="shop-detail.html" class="product__name text-body-2 link-2 text-black">Dream
                                                            Bio Retinol</a>
                                                        <div class="product__price price-wrap text-black">
                                                            <span class="price-new text-sub-head fw-medium">$56.00</span>
                                                        </div>
                                                    </div>
                                                    <div class="action-shop-list">
                                                        <div class="btn-add-shop">
                                                            <i class="fa-solid fa-plus fs-24 plus-icon"></i>
                                                        </div>
                                                        <ul class="product-action-list">
                                                            <li>
                                                                <a href="#shoppingCart" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                                    <span class="icon"><img src="../assets/images/cart.svg" alt=""></span>
                                                                    <span class="tooltip">Add to cart</span>
                                                                </a>
                                                            </li>
                                                            <li class="wishlist">
                                                                <a href="#;" class="action-card hover-tooltip tooltip-left">
                                                                    <span class="icon"><img src="../assets/images/heart.svg" alt=""></span>
                                                                    <span class="tooltip">Add to Wishlist</span>
                                                                </a>
                                                            </li>
                                                            <li class="compare">
                                                                <a href="#compare" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                                    <span class="icon"><img src="../assets/images/eye.svg" alt=""></span>
                                                                    <span class="tooltip">Compare</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#quickView" data-bs-toggle="modal" class="action-card hover-tooltip tooltip-left">
                                                                    <span class="icon"><img src="../assets/images/arrow-clockwise.svg" alt=""></span>
                                                                    <span class="tooltip">Quick view</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- item 2 -->
                                        <div class="swiper-slide">
                                            <div class="card-product card-product-v02 bg-white">
                                                <div class="card-product_wrapper">
                                                    <a href="shop-detail.html" class="product-img">
                                                        <img class="img-product" width="277" height="239"
                                                            src="../assets/images/product/product-8.jpg" alt="Product">
                                                        <img class="img-hover" width="277" height="239"
                                                            src="../assets/images/product/product-8.jpg" alt="Product">
                                                    </a>
                                                    <ul class="product-badge-list">
                                                        <li class="product-badge">
                                                            New
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="card-product_info">
                                                    <div class="info-left">
                                                        <p class="product__cate text-uppercase text-body-4">moisturize
                                                        </p>
                                                        <a href="shop-detail.html" class="product__name text-body-2 link-2 text-black">Dream
                                                            Bio Retinol</a>
                                                        <div class="product__price price-wrap text-black">
                                                            <span class="price-new text-sub-head fw-medium">$56.00</span>
                                                        </div>
                                                    </div>
                                                    <div class="action-shop-list">
                                                        <div class="btn-add-shop">
                                                            <i class="fa-solid fa-plus fs-24 plus-icon"></i>
                                                        </div>
                                                        <ul class="product-action-list">
                                                            <li>
                                                                <a href="#shoppingCart" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                                    <span class="icon"><img src="../assets/images/cart.svg" alt=""></span>
                                                                    <span class="tooltip">Add to cart</span>
                                                                </a>
                                                            </li>
                                                            <li class="wishlist">
                                                                <a href="#;" class="action-card hover-tooltip tooltip-left">
                                                                    <span class="icon"><img src="../assets/images/heart.svg" alt=""></span>
                                                                    <span class="tooltip">Add to Wishlist</span>
                                                                </a>
                                                            </li>
                                                            <li class="compare">
                                                                <a href="#compare" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                                    <span class="icon"><img src="../assets/images/eye.svg" alt=""></span>
                                                                    <span class="tooltip">Compare</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#quickView" data-bs-toggle="modal" class="action-card hover-tooltip tooltip-left">
                                                                    <span class="icon"><img src="../assets/images/arrow-clockwise.svg" alt=""></span>
                                                                    <span class="tooltip">Quick view</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- item 3 -->
                                        <div class="swiper-slide">
                                            <div class="card-product card-product-v02 bg-white">
                                                <div class="card-product_wrapper">
                                                    <a href="shop-detail.html" class="product-img">
                                                        <img class="img-product" width="277" height="239"
                                                            src="../assets/images/product/product-9.jpg" alt="Product">
                                                        <img class="img-hover" width="277" height="239"
                                                            src="../assets/images/product/product-9.jpg" alt="Product">
                                                    </a>
                                                    <ul class="product-badge-list">
                                                        <li class="product-badge">
                                                            New
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="card-product_info">
                                                    <div class="info-left">
                                                        <p class="product__cate text-uppercase text-body-4">moisturize
                                                        </p>
                                                        <a href="shop-detail.html" class="product__name text-body-2 link-2 text-black">Dream
                                                            Bio Retinol</a>
                                                        <div class="product__price price-wrap text-black">
                                                            <span class="price-new text-sub-head fw-medium">$56.00</span>
                                                        </div>
                                                    </div>
                                                    <div class="action-shop-list">
                                                        <div class="btn-add-shop">
                                                            <i class="fa-solid fa-plus fs-24 plus-icon"></i>
                                                        </div>
                                                        <ul class="product-action-list">
                                                            <li>
                                                                <a href="#shoppingCart" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                                    <span class="icon"><img src="../assets/images/cart.svg" alt=""></span>
                                                                    <span class="tooltip">Add to cart</span>
                                                                </a>
                                                            </li>
                                                            <li class="wishlist">
                                                                <a href="#;" class="action-card hover-tooltip tooltip-left">
                                                                    <span class="icon"><img src="../assets/images/heart.svg" alt=""></span>
                                                                    <span class="tooltip">Add to Wishlist</span>
                                                                </a>
                                                            </li>
                                                            <li class="compare">
                                                                <a href="#compare" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                                    <span class="icon"><img src="../assets/images/eye.svg" alt=""></span>
                                                                    <span class="tooltip">Compare</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#quickView" data-bs-toggle="modal" class="action-card hover-tooltip tooltip-left">
                                                                    <span class="icon"><img src="../assets/images/arrow-clockwise.svg" alt=""></span>
                                                                    <span class="tooltip">Quick view</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="sw-line-vertical style-2 tf-sw-pagination"></div>
                                </div>
                                <div class="nav-next-swiper">
                                      <i class="fa-solid fa-chevron-right arrow-icon"></i>
                                    <!--  <i class="fa-solid fa-chevron-right arrow-icon"> -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="col-right">
                            <div class="banner-image-lookbook">
                                <div class="image-lookbook">
                                    <img loading="lazy" width="646" height="720" src="../assets/images/section/lookbook.jpg" alt="Image">
                                </div>
                                <div class="lookbook-item position1">
                                    <div role="dialog" class="tf-pin-btn swiper-button" data-slide="0" id="pin1">
                                        <span></span>
                                    </div>
                                    <div class="loobook-product-wrap">
                                        <div class="loobook-product">
                                            <div class="img-style">
                                                <img loading="lazy" width="108" height="108" src="../assets/images/product/product-7.jpg" alt="Image">
                                            </div>
                                            <div class="content">
                                                <div class="info">
                                                    <a href="product-detail.html" class="text-title text-line-clamp-1 text-black link">Dream Bio
                                                        Retinol</a>
                                                    <div class="price fw-medium text-black">$56.99</div>
                                                </div>
                                                <a href="#quickView" data-bs-toggle="modal" class="btn-lookbook text-black link-2">
                                                    Add to Cart
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="lookbook-item position2">
                                    <div role="dialog" class="tf-pin-btn swiper-button" data-slide="1" id="pin2">
                                        <span></span>
                                    </div>
                                    <div class="loobook-product-wrap">
                                        <div class="loobook-product">
                                            <div class="img-style">
                                                <img loading="lazy" width="108" height="108" src="../assets/images/product/product-8.jpg" alt="Image">
                                            </div>
                                            <div class="content">
                                                <div class="info">
                                                    <a href="product-detail.html" class="text-title text-line-clamp-1 text-black link">Dream Bio
                                                        Retinol</a>
                                                    <div class="price fw-medium text-black">$56.99</div>
                                                </div>
                                                <a href="#quickView" data-bs-toggle="modal" class="btn-lookbook text-black link-2">
                                                    Add to Cart
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="lookbook-item position3">
                                    <div role="dialog" class="tf-pin-btn swiper-button" data-slide="2" id="pin3">
                                        <span></span>
                                    </div>
                                    <div class="loobook-product-wrap">
                                        <div class="loobook-product">
                                            <div class="img-style">
                                                <img loading="lazy" width="108" height="108" src="../assets/images/product/product-9.jpg" alt="Image">
                                            </div>
                                            <div class="content">
                                                <div class="info">
                                                    <a href="product-detail.html" class="text-title text-line-clamp-1 text-black link">Dream Bio
                                                        Retinol</a>
                                                    <div class="price fw-medium text-black">$56.99</div>
                                                </div>
                                                <a href="#quickView" data-bs-toggle="modal" class="btn-lookbook text-black link-2">
                                                    Add to Cart
                                                </a>
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
        <!-- /Lookbook -->
        <!-- Restock -->
        <section class="section-cosmetic-restock ">
            <div class="img-item d-none d-md-flex">
                <img loading="lazy" width="1312" height="938" src="../assets/images/vimas/product.png" alt="Image" class="prodimg">
            </div>
            <div class="container-5 position-relative z-5">
                <div class="s-header-3">
                    <h3 class="title letter-space--4 text-black wow fadeInUp">
                        <span>Best Seller Product</span> <br> Now Re-Stock
                    </h3>
                    <a href="shop-default.html" class="text-black text-decoration-underline link fw-medium wow fadeInUp" data-wow-delay="0.1s">
                        <span class="text-body-1">
                            Shop All Products
                        </span>
                    </a>
                </div>
                <div class="row d-flex align-items-end">
                    <div class="col-md-5 col-lg-4">
                        <div class="col-left mb-md-0">
                            <div class="tag-list">
                                <a href="#" class="text-body-2">Niacinamide</a>
                                <a href="#" class="text-body-2">Rafinose</a>
                                <a href="#" class="text-body-2">Adenosine</a>
                                <a href="#" class="text-body-2">Agar Extract</a>
                                <a href="#" class="text-body-2">Korean Pearl Extract</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-xl-3 ms-auto tf-btn-swiper-main">
                        <div dir="ltr" class="swiper tf-swiper swiper-product-wrap" data-preview="1" data-tablet="1" data-mobile-sm="2" data-mobile="1" data-space="12">
                            <div class="swiper-wrapper">
                                <!-- item 1 -->
                                <div class="swiper-slide">
                                    <div class="card-product card-product-v02 type-2 ">
                                        <div class="card-product_wrapper">
                                            <a href="shop-detail.html" class="product-img">
                                                <img class="img-product" width="277" height="239"
                                                    src="../assets/images/vimas/FACIAL-SCRUB-removebg-preview.png" alt="Product">
                                                <img class="img-hover" width="277" height="239"
                                                    src="../assets/images/vimas/FACIAL-SCRUB-removebg-preview.png" alt="Product">
                                            </a>
                                            <ul class="product-badge-list">
                                                <li class="product-badge">
                                                    New
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="card-product_info">
                                            <div class="info-left">
                                                <p class="product__cate text-uppercase text-caption">moisturize</p>
                                                <a href="shop-detail.html" class="product__name link-2 text-black">Dream
                                                    Bio Retinol</a>
                                                <div class="product__price price-wrap text-black">
                                                    <span class="price-new text-body-2 fw-semibold">$56.00</span>
                                                </div>
                                            </div>
                                            <div class="action-shop-list">
                                                <div class="btn-add-shop">
                                                    <i class="fa-solid fa-plus fs-24 plus-icon"></i>
                                                </div>
                                                <ul class="product-action-list">
                                                    <li>
                                                        <a href="#shoppingCart" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                            <span class="icon"><img src="../assets/images/cart.svg" alt=""></span>
                                                            <span class="tooltip">Add to cart</span>
                                                        </a>
                                                    </li>
                                                    <li class="wishlist">
                                                        <a href="#;" class="action-card hover-tooltip tooltip-left">
                                                            <span class="icon"><img src="../assets/images/heart.svg" alt=""></span>
                                                            <span class="tooltip">Add to Wishlist</span>
                                                        </a>
                                                    </li>
                                                    <li class="compare">
                                                        <a href="#compare" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                            <span class="icon"><img src="../assets/images/eye.svg" alt=""></span>
                                                            <span class="tooltip">Compare</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#quickView" data-bs-toggle="modal" class="action-card hover-tooltip tooltip-left">
                                                            <span class="icon"><img src="../assets/images/arrow-clockwise.svg" alt=""></span>
                                                            <span class="tooltip">Quick view</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- item 2 -->
                                <div class="swiper-slide">
                                    <div class="card-product card-product-v02 type-2 bg-white">
                                        <div class="card-product_wrapper">
                                            <a href="shop-detail.html" class="product-img">
                                                <img class="img-product" width="277" height="239"
                                                    src="../assets/images/product/product-9.jpg" alt="Product">
                                                <img class="img-hover" width="277" height="239"
                                                    src="../assets/images/product/product-9.jpg" alt="Product">
                                            </a>
                                            <ul class="product-badge-list">
                                                <li class="product-badge">
                                                    New
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="card-product_info">
                                            <div class="info-left">
                                                <p class="product__cate text-uppercase text-caption">moisturize</p>
                                                <a href="shop-detail.html" class="product__name link-2 text-black">Dream
                                                    Bio Retinol</a>
                                                <div class="product__price price-wrap text-black">
                                                    <span class="price-new text-body-2 fw-semibold">$56.00</span>
                                                </div>
                                            </div>
                                            <div class="action-shop-list">
                                                <div class="btn-add-shop">
                                                    <i class="fa-solid fa-plus fs-24 plus-icon"></i>
                                                </div>
                                                <ul class="product-action-list">
                                                    <li>
                                                        <a href="#shoppingCart" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                            <span class="icon"><img src="../assets/images/cart.svg" alt=""></span>
                                                            <span class="tooltip">Add to cart</span>
                                                        </a>
                                                    </li>
                                                    <li class="wishlist">
                                                        <a href="#;" class="action-card hover-tooltip tooltip-left">
                                                            <span class="icon"><img src="../assets/images/heart.svg" alt=""></span>
                                                            <span class="tooltip">Add to Wishlist</span>
                                                        </a>
                                                    </li>
                                                    <li class="compare">
                                                        <a href="#compare" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                            <span class="icon"><img src="../assets/images/eye.svg" alt=""></span>
                                                            <span class="tooltip">Compare</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#quickView" data-bs-toggle="modal" class="action-card hover-tooltip tooltip-left">
                                                            <span class="icon"><img src="../assets/images/arrow-clockwise.svg" alt=""></span>
                                                            <span class="tooltip">Quick view</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- item 3 -->
                                <div class="swiper-slide">
                                    <div class="card-product card-product-v02 type-2 bg-white">
                                        <div class="card-product_wrapper">
                                            <a href="shop-detail.html" class="product-img">
                                                <img class="img-product" width="277" height="239"
                                                    src="../assets/images/product/product-8.jpg" alt="Product">
                                                <img class="img-hover" width="277" height="239"
                                                    src="../assets/images/product/product-8.jpg" alt="Product">
                                            </a>
                                            <ul class="product-badge-list">
                                                <li class="product-badge">
                                                    New
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="card-product_info">
                                            <div class="info-left">
                                                <p class="product__cate text-uppercase text-caption">moisturize</p>
                                                <a href="shop-detail.html" class="product__name link-2 text-black">Dream
                                                    Bio Retinol</a>
                                                <div class="product__price price-wrap text-black">
                                                    <span class="price-new text-body-2 fw-semibold">$56.00</span>
                                                </div>
                                            </div>
                                            <div class="action-shop-list">
                                                <div class="btn-add-shop">
                                                    <i class="fa-solid fa-plus fs-24 plus-icon"></i>
                                                </div>
                                                <ul class="product-action-list">
                                                    <li>
                                                        <a href="#shoppingCart" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                            <span class="icon"><img src="../assets/images/cart.svg" alt=""></span>
                                                            <span class="tooltip">Add to cart</span>
                                                        </a>
                                                    </li>
                                                    <li class="wishlist">
                                                        <a href="#;" class="action-card hover-tooltip tooltip-left">
                                                            <span class="icon"><img src="../assets/images/heart.svg" alt=""></span>
                                                            <span class="tooltip">Add to Wishlist</span>
                                                        </a>
                                                    </li>
                                                    <li class="compare">
                                                        <a href="#compare" data-bs-toggle="offcanvas" class="action-card hover-tooltip tooltip-left">
                                                            <span class="icon"><img src="../assets/images/eye.svg" alt=""></span>
                                                            <span class="tooltip">Compare</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#quickView" data-bs-toggle="modal" class="action-card hover-tooltip tooltip-left">
                                                            <span class="icon"><img src="../assets/images/arrow-clockwise.svg" alt=""></span>
                                                            <span class="tooltip">Quick view</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="group-nav">
                                <div class="nav-action nav-prev-swiper">
                                     <i class="fa-solid fa-chevron-left arrow-icon"></i>
                                </div>
                                <div class="nav-action nav-next-swiper">
                                     <i class="fa-solid fa-chevron-right arrow-icon"></i>
                                </div>
                            </div>
                            <!-- <div class="sw-dot-default tf-sw-pagination"></div> -->
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- /Restock -->
        <!-- Before After -->
        <section class="section-cosmetic-befor-after flat-spacing-4">
            <!-- <div class="container-5">
                <div class="s-header-3 wow fadeZoom">
                    <h3 class="fw-medium letter-space--3 text-black text-center">Before & After</h3>
                </div>
                <div class="banner-image-compare img-viewer-compare-wrap image-compare" id="image-compare">
                    <img class="img-comp" loading="lazy" width="1312" height="680" src="../assets/images/section/skin-before.jpg" alt="Image">
                    <img class="img-comp" loading="lazy" width="1312" height="680" src="../assets/images/section/skin-after.jpg" alt="Image">
                </div>
            </div> -->
  <div class="compare-wrapper">

  <div class="compare-container" id="compare">

    <img src="../assets/images/section/skin-before.jpg" >

    <div class="img-overlay" id="overlay">
         <img src="../assets/images/section/skin-after.jpg" class="img-before">
        
     
    </div>

    <div class="slider" id="slider"></div>

    <span class="label before">After</span>
    <span class="label after">Before</span>

  </div>
  

</div>
            <div class="infiniteSlide infiniteSlide-text-cosmetic" data-clone="3">
                <!-- clone 1 -->
                <h2 class="letter-space--3 cl-gray-20 fw-normal">Rescue Your Skin</h2>
                <div class="br-dot"></div>
                <h2 class="letter-space--3 cl-gray-20 fw-normal">Made with love</h2>
                <div class="br-dot"></div>
                <h2 class="letter-space--3 cl-gray-20 fw-normal">New Season Essential</h2>
                <div class="br-dot"></div>
                <!-- clone 2 -->
                <h2 class="letter-space--3 cl-gray-20 fw-normal">Rescue Your Skin</h2>
                <div class="br-dot"></div>
                <h2 class="letter-space--3 cl-gray-20 fw-normal">Made with love</h2>
                <div class="br-dot"></div>
                <h2 class="letter-space--3 cl-gray-20 fw-normal">New Season Essential</h2>
                <div class="br-dot"></div>
                <!-- clone 3 -->
                <h2 class="letter-space--3 cl-gray-20 fw-normal">Rescue Your Skin</h2>
                <div class="br-dot"></div>
                <h2 class="letter-space--3 cl-gray-20 fw-normal">Made with love</h2>
                <div class="br-dot"></div>
                <h2 class="letter-space--3 cl-gray-20 fw-normal">New Season Essential</h2>
                <div class="br-dot"></div>
            </div>
            <div class="container-5">
                <div class="br-line d-flex bg-gray-20"></div>
            </div>
        </section>
        <!-- /Before After -->
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
                                <img loading="lazy" width="424" height="600" src="../assets/images/section/skin-1.jpg" alt="Image">
                                <video autoplay muted loop playsinline>
                                    <source src="../assets/images/video/best-2.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div class="product-content">
                                <div class="left">
                                    <div class="product_image">
                                        <img loading="lazy" width="92" height="92" src="../assets/images/product/product-7.jpg" alt="Image">
                                    </div>
                                    <div class="product_info">
                                        <p class="info__cate text-body-4 cl-gray-40">MOISTURIZE</p>
                                        <a href="shop-detail.html" class="info__name text-body-2 text-black link">
                                            Dream Bio Retinol
                                        </a>
                                        <p class="infor__price text-black fw-medium text-sub-head">$56.00</p>
                                    </div>
                                </div>
                                <a href="#shoppingCart" data-bs-toggle="offcanvas" class="action tf-btn-icon rounded-circle">
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
                                <img loading="lazy" width="424" height="600" src="../assets/images/section/skin-2.jpg" alt="Image">
                                <video autoplay muted loop playsinline>
                                    <source src="../assets/images/video/best-2.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div class="product-content">
                                <div class="left">
                                    <div class="product_image">
                                        <img loading="lazy" width="92" height="92" src="../assets/images/product/product-8.jpg" alt="Image">
                                    </div>
                                    <div class="product_info">
                                        <p class="info__cate text-body-4 cl-gray-40">MOISTURIZE</p>
                                        <a href="shop-detail.html" class="info__name text-body-2 text-black link">
                                            Dream Bio Retinol
                                        </a>
                                        <p class="infor__price text-black fw-medium text-sub-head">$56.00</p>
                                    </div>
                                </div>
                                <a href="#shoppingCart" data-bs-toggle="offcanvas" class="action tf-btn-icon rounded-circle">
                                     <img src="../assets/images/cart.svg" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                    <!-- item 3 -->
                    <div class="swiper-slide">
                        <div class="card-best-product">
                            <div class="product-image-preview">
                                <img loading="lazy" width="424" height="600" src="../assets/images/section/skin-3.jpg" alt="Image">
                                <video autoplay muted loop playsinline>
                                    <source src="../assets/images/video/best-2.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div class="product-content">
                                <div class="left">
                                    <div class="product_image">
                                        <img loading="lazy" width="92" height="92" src="../assets/images/product/product-9.jpg" alt="Image">
                                    </div>
                                    <div class="product_info">
                                        <p class="info__cate text-body-4 cl-gray-40">MOISTURIZE</p>
                                        <a href="shop-detail.html" class="info__name text-body-2 text-black link">
                                            Dream Bio Retinol
                                        </a>
                                        <p class="infor__price text-black fw-medium text-sub-head">$56.00</p>
                                    </div>
                                </div>
                                <a href="#shoppingCart" data-bs-toggle="offcanvas" class="action tf-btn-icon rounded-circle">
                                     <img src="../assets/images/cart.svg" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                    <!-- item 4 -->
                    <div class="swiper-slide">
                        <div class="card-best-product">
                            <div class="product-image-preview">
                                <img loading="lazy" width="424" height="600" src="../assets/images/section/skin-4.jpg" alt="Image">
                                <video autoplay muted loop playsinline>
                                    <source src="../assets/images/video/best-2.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div class="product-content">
                                <div class="left">
                                    <div class="product_image">
                                        <img loading="lazy" width="92" height="92" src="../assets/images/product/product-10.jpg" alt="Image">
                                    </div>
                                    <div class="product_info">
                                        <p class="info__cate text-body-4 cl-gray-40">MOISTURIZE</p>
                                        <a href="shop-detail.html" class="info__name text-body-2 text-black link">
                                            Dream Bio Retinol
                                        </a>
                                        <p class="infor__price text-black fw-medium text-sub-head">$56.00</p>
                                    </div>
                                </div>
                                <a href="#shoppingCart" data-bs-toggle="offcanvas" class="action tf-btn-icon rounded-circle">
                                     <img src="../assets/images/cart.svg" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                    <!-- item 5 -->
                    <div class="swiper-slide">
                        <div class="card-best-product">
                            <div class="product-image-preview">
                                <img loading="lazy" width="424" height="600" src="../assets/images/section/skin-5.jpg" alt="Image">
                                <video autoplay muted loop playsinline>
                                    <source src="../assets/images/video/best-2.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div class="product-content">
                                <div class="left">
                                    <div class="product_image">
                                        <img loading="lazy" width="92" height="92" src="../assets/images/product/product-7.jpg" alt="Image">
                                    </div>
                                    <div class="product_info">
                                        <p class="info__cate text-body-4 cl-gray-40">MOISTURIZE</p>
                                        <a href="shop-detail.html" class="info__name text-body-2 text-black link">
                                            Dream Bio Retinol
                                        </a>
                                        <p class="infor__price text-black fw-medium text-sub-head">$56.00</p>
                                    </div>
                                </div>
                                <a href="#shoppingCart" data-bs-toggle="offcanvas" class="action tf-btn-icon rounded-circle">
                                     <img src="../assets/images/cart.svg" alt="">
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- item 1 -->
                    <div class="swiper-slide">
                        <div class="card-best-product">
                            <div class="product-image-preview">
                                <img loading="lazy" width="424" height="600" src="../assets/images/section/skin-1.jpg" alt="Image">
                                <video autoplay muted loop playsinline>
                                    <source src="../assets/images/video/best-2.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div class="product-content">
                                <div class="left">
                                    <div class="product_image">
                                        <img loading="lazy" width="92" height="92" src="../assets/images/product/product-7.jpg" alt="Image">
                                    </div>
                                    <div class="product_info">
                                        <p class="info__cate text-body-4 cl-gray-40">MOISTURIZE</p>
                                        <a href="shop-detail.html" class="info__name text-body-2 text-black link">
                                            Dream Bio Retinol
                                        </a>
                                        <p class="infor__price text-black fw-medium text-sub-head">$56.00</p>
                                    </div>
                                </div>
                                <a href="#shoppingCart" data-bs-toggle="offcanvas" class="action tf-btn-icon rounded-circle">
                                     <img src="../assets/images/cart.svg" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                    <!-- item 2 -->
                    <div class="swiper-slide">
                        <div class="card-best-product">
                            <div class="product-image-preview">
                                <img loading="lazy" width="424" height="600" src="../assets/images/section/skin-2.jpg" alt="Image">
                                <video autoplay muted loop playsinline>
                                    <source src="../assets/images/video/best-5.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div class="product-content">
                                <div class="left">
                                    <div class="product_image">
                                        <img loading="lazy" width="92" height="92" src="../assets/images/product/product-8.jpg" alt="Image">
                                    </div>
                                    <div class="product_info">
                                        <p class="info__cate text-body-4 cl-gray-40">MOISTURIZE</p>
                                        <a href="shop-detail.html" class="info__name text-body-2 text-black link">
                                            Dream Bio Retinol
                                        </a>
                                        <p class="infor__price text-black fw-medium text-sub-head">$56.00</p>
                                    </div>
                                </div>
                                <a href="#shoppingCart" data-bs-toggle="offcanvas" class="action tf-btn-icon rounded-circle">
                                     <img src="../assets/images/cart.svg" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                    <!-- item 3 -->
                    <div class="swiper-slide">
                        <div class="card-best-product">
                            <div class="product-image-preview">
                                <img loading="lazy" width="424" height="600" src="../assets/images/section/skin-3.jpg" alt="Image">
                                <video autoplay muted loop playsinline>
                                    <source src="../assets/images/video/best-3.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div class="product-content">
                                <div class="left">
                                    <div class="product_image">
                                        <img loading="lazy" width="92" height="92" src="../assets/images/product/product-9.jpg" alt="Image">
                                    </div>
                                    <div class="product_info">
                                        <p class="info__cate text-body-4 cl-gray-40">MOISTURIZE</p>
                                        <a href="shop-detail.html" class="info__name text-body-2 text-black link">
                                            Dream Bio Retinol
                                        </a>
                                        <p class="infor__price text-black fw-medium text-sub-head">$56.00</p>
                                    </div>
                                </div>
                                <a href="#shoppingCart" data-bs-toggle="offcanvas" class="action tf-btn-icon rounded-circle">
                                     <img src="../assets/images/cart.svg" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                    <!-- item 4 -->
                    <div class="swiper-slide">
                        <div class="card-best-product">
                            <div class="product-image-preview">
                                <img loading="lazy" width="424" height="600" src="../assets/images/section/skin-4.jpg" alt="Image">
                                <video autoplay muted loop playsinline>
                                    <source src="../assets/images/video/best-4.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div class="product-content">
                                <div class="left">
                                    <div class="product_image">
                                        <img loading="lazy" width="92" height="92" src="../assets/images/product/product-10.jpg" alt="Image">
                                    </div>
                                    <div class="product_info">
                                        <p class="info__cate text-body-4 cl-gray-40">MOISTURIZE</p>
                                        <a href="shop-detail.html" class="info__name text-body-2 text-black link">
                                            Dream Bio Retinol
                                        </a>
                                        <p class="infor__price text-black fw-medium text-sub-head">$56.00</p>
                                    </div>
                                </div>
                                <a href="#shoppingCart" data-bs-toggle="offcanvas" class="action tf-btn-icon rounded-circle">
                                     <img src="../assets/images/cart.svg" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                    <!-- item 5 -->
                    <div class="swiper-slide">
                        <div class="card-best-product">
                            <div class="product-image-preview">
                                <img loading="lazy" width="424" height="600" src="../assets/images/section/skin-5.jpg" alt="Image">
                                <video autoplay muted loop playsinline>
                                    <source src="../assets/images/video/best-1.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div class="product-content">
                                <div class="left">
                                    <div class="product_image">
                                        <img loading="lazy" width="92" height="92" src="../assets/images/product/product-7.jpg" alt="Image">
                                    </div>
                                    <div class="product_info">
                                        <p class="info__cate text-body-4 cl-gray-40">MOISTURIZE</p>
                                        <a href="shop-detail.html" class="info__name text-body-2 text-black link">
                                            Dream Bio Retinol
                                        </a>
                                        <p class="infor__price text-black fw-medium text-sub-head">$56.00</p>
                                    </div>
                                </div>
                                <a href="#shoppingCart" data-bs-toggle="offcanvas" class="action tf-btn-icon rounded-circle">
                                     <img src="../assets/images/cart.svg" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
        <!-- /Best Product -->
        <!-- Testimonial -->
        <div class="section-cosmetic-testimonial flat-spacing-4">
            <div class="text-item wow fadeZoom">
                What they <br> are saying
            </div>
            <div class="container-5">
                <div class="row">
                    <div class="col-sm-6 col-md-5 col-lg-4 col-xl-3">
                        <div class="testimonial-v05 s1">
                            <ul class="rate-wrap">
                                <li><i class="fa-regular fa-star star-icon "></i></li>
                                <li><i class="fa-regular fa-star star-icon "></i></li>
                                <li><i class="fa-regular fa-star star-icon "></i></li>
                                <li><i class="fa-regular fa-star star-icon "></i></li>
                                <li><i class="fa-regular fa-star star-icon "></i></li>
                            </ul>
                            <p class="tes-text cl-gray-60">
                                I'm on planes constantly and my skin was so dehydrated and angry. The travel size is perfect for my carry-on and actually WORKS, unlike all the other travel-sized stuff I've tried.
                            </p>
                            <div class="tes-author">
                                <div class="author_image">
                                    <img loading="lazy" width="48" height="48" src="../assets/images/avatar/avatar-1.jpg" alt="Image">
                                </div>
                                <div class="author_info">
                                    <p class="info__name text-body-2 text-black">Kai Tanaka</p>
                                    <p class="info__duty text-body-4 cl-gray-50">Frequent Traveler</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-5 col-lg-4 col-xl-3 ms-auto">
                        <div class="testimonial-v05 s2">
                            <ul class="rate-wrap">
                                <li><i class="fa-regular fa-star star-icon "></i></li>
                                <li><i class="fa-regular fa-star star-icon "></i></li>
                                <li><i class="fa-regular fa-star star-icon "></i></li>
                                <li><i class="fa-regular fa-star star-icon "></i></li>
                                <li><i class="fa-regular fa-star star-icon "></i></li>
                            </ul>
                            <p class="tes-text cl-gray-60">
                                I'm on planes constantly and my skin was so dehydrated and angry. The travel size is perfect for my carry-on and actually WORKS, unlike all the other travel-sized stuff I've tried.
                            </p>
                            <div class="tes-author">
                                <div class="author_image">
                                    <img loading="lazy" width="48" height="48" src="../assets/images/avatar/avatar-1.jpg" alt="Image">
                                </div>
                                <div class="author_info">
                                    <p class="info__name text-body-2 text-black">Kai Tanaka</p>
                                    <p class="info__duty text-body-4 cl-gray-50">Frequent Traveler</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-1 offset-xl-4 d-none d-xl-block"></div>
                    <div class="col-sm-6 col-md-5 col-lg-4 col-xl-3 mx-auto m-xl-0">
                        <div class="testimonial-v05 s3">
                            <ul class="rate-wrap">
                                <li><i class="fa-regular fa-star star-icon "></i></li>
                                <li><i class="fa-regular fa-star star-icon "></i></li>
                                <li><i class="fa-regular fa-star star-icon "></i></li>
                                <li><i class="fa-regular fa-star star-icon "></i></li>
                                <li><i class="fa-regular fa-star star-icon "></i></li>
                            </ul>
                            <p class="tes-text cl-gray-60">
                                I'm on planes constantly and my skin was so dehydrated and angry. The travel size is perfect for my carry-on and actually WORKS, unlike all the other travel-sized stuff I've tried.
                            </p>
                            <div class="tes-author">
                                <div class="author_image">
                                    <img loading="lazy" width="48" height="48" src="../assets/images/avatar/avatar-1.jpg" alt="Image">
                                </div>
                                <div class="author_info">
                                    <p class="info__name text-body-2 text-black">Kai Tanaka</p>
                                    <p class="info__duty text-body-4 cl-gray-50">Frequent Traveler</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 col-md-5 col-lg-4 col-xl-3">
                        <div class="testimonial-v05 s4">
                            <ul class="rate-wrap">
                                <li><i class="fa-regular fa-star star-icon "></i></li>
                                <li><i class="fa-regular fa-star star-icon "></i></li>
                                <li><i class="fa-regular fa-star star-icon "></i></li>
                                <li><i class="fa-regular fa-star star-icon "></i></li>
                                <li><i class="fa-regular fa-star star-icon "></i></li>
                            </ul>
                            <p class="tes-text cl-gray-60">
                                I'm on planes constantly and my skin was so dehydrated and angry. The travel size is perfect for my carry-on and actually WORKS, unlike all the other travel-sized stuff I've tried.
                            </p>
                            <div class="tes-author">
                                <div class="author_image">
                                    <img loading="lazy" width="48" height="48" src="../assets/images/avatar/avatar-1.jpg" alt="Image">
                                </div>
                                <div class="author_info">
                                    <p class="info__name text-body-2 text-black">Kai Tanaka</p>
                                    <p class="info__duty text-body-4 cl-gray-50">Frequent Traveler</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-5 col-lg-4 col-xl-3 ms-auto">
                        <div class="testimonial-v05 s5">
                            <ul class="rate-wrap">
                                <li><i class="fa-regular fa-star star-icon "></i></li>
                                <li><i class="fa-regular fa-star star-icon "></i></li>
                                <li><i class="fa-regular fa-star star-icon "></i></li>
                                <li><i class="fa-regular fa-star star-icon "></i></li>
                                <li><i class="fa-regular fa-star star-icon "></i></li>
                            </ul>
                            <p class="tes-text cl-gray-60">
                                I'm on planes constantly and my skin was so dehydrated and angry. The travel size is perfect for my carry-on and actually WORKS, unlike all the other travel-sized stuff I've tried.
                            </p>
                            <div class="tes-author">
                                <div class="author_image">
                                    <img loading="lazy" width="48" height="48" src="../assets/images/avatar/avatar-1.jpg" alt="Image">
                                </div>
                                <div class="author_info">
                                    <p class="info__name text-body-2 text-black">Kai Tanaka</p>
                                    <p class="info__duty text-body-4 cl-gray-50">Frequent Traveler</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-1 offset-xl-4 d-none d-xl-block"></div>
                    <div class="col-sm-6 col-md-5 col-lg-4 col-xl-3 mx-auto m-xl-0">
                        <div class="testimonial-v05 s6">
                            <ul class="rate-wrap">
                                <li><i class="fa-regular fa-star star-icon "></i></li>
                                <li><i class="fa-regular fa-star star-icon "></i></li>
                                <li><i class="fa-regular fa-star star-icon "></i></li>
                                <li><i class="fa-regular fa-star star-icon "></i></li>
                                <li><i class="fa-regular fa-star star-icon "></i></li>
                            </ul>
                            <p class="tes-text cl-gray-60">
                                I'm on planes constantly and my skin was so dehydrated and angry. The travel size is perfect for my carry-on and actually WORKS, unlike all the other travel-sized stuff I've tried.
                            </p>
                            <div class="tes-author">
                                <div class="author_image">
                                    <img loading="lazy" width="48" height="48" src="../assets/images/avatar/avatar-1.jpg" alt="Image">
                                </div>
                                <div class="author_info">
                                    <p class="info__name text-body-2 text-black">Kai Tanaka</p>
                                    <p class="info__duty text-body-4 cl-gray-50">Frequent Traveler</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Testimonial -->
        <!-- Blog -->
        <section class="section-cosmetic-article">
            <div class="container-5">
                <div class="tf-grid-layout sm-col-2 gap-20">
                    <div class="article-blog-v04 style-large hover-img wd-full">
                        <a href="blog-single.html" class="blog-image img-style">
                            <img loading="lazy" width="1312" height="560" src="../assets/images/blog/blog-large.jpg" alt="Image">
                        </a>
                        <div class="blog-content">
                            <div class="entry-badge_list">
                                <div class="tag-badge style-2 bg-white">
                                    <span class="text-body-4 fw-medium text-black">Trends</span>
                                </div>
                            </div>
                            <div class="blog_entry">
                                <p class="entry-date text-white">Mar 18, 2025</p>
                                <h6 class="fw-normal letter-space--1">
                                    <a href="blog-single.html" class="entry-name text-white link-2">Why
                                        fewer ingredients work
                                        better.</a>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div class="article-blog-v04 hover-img">
                        <a href="blog-single.html" class="blog-image img-style">
                            <img loading="lazy" width="646" height="400" src="../assets/images/blog/blog-1.jpg" alt="Image">
                        </a>
                        <div class="blog-content">
                            <div class="entry-badge_list">
                                <div class="tag-badge style-2 bg-white">
                                    <span class="text-body-4 fw-medium text-black">Trends</span>
                                </div>
                            </div>
                            <div class="blog_entry">
                                <p class="entry-date text-white">Mar 18, 2025</p>
                                <h6 class="fw-normal letter-space--1">
                                    <a href="blog-single.html" class="entry-name text-white link">The
                                        power of simplifying routine.</a>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div class="article-blog-v04 hover-img">
                        <a href="blog-single.html" class="blog-image img-style">
                            <img loading="lazy" width="646" height="400" src="../assets/images/blog/blog-2.jpg" alt="Image">
                        </a>
                        <div class="blog-content">
                            <div class="entry-badge_list">
                                <div class="tag-badge style-2 bg-white">
                                    <span class="text-body-4 fw-medium text-black">Trends</span>
                                </div>
                            </div>
                            <div class="blog_entry">
                                <p class="entry-date text-white">Mar 18, 2025</p>
                                <h6 class="fw-normal letter-space--1">
                                    <a href="blog-single.html" class="entry-name text-white link">Fewer
                                        products, Better skin.</a>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- /Blog -->
        <!-- FAQ -->
        <section class="section-cosmetic-faq flat-spacing-4">
            <div class="container-5">
                <div class="s-header-3">
                    <h3 class="title fw-normal letter-space--3 text-black text-center wow fadeZoom">
                        <span>Got Questions?</span><br>
                        <span class="fw-medium letter-space--3">
                            We’ve Got Answers
                        </span>
                    </h3>
                </div>

                <div class="cosmetic-faq" id="cosmetic-faq">
                    <div class="faq-accordion_item-5 " role="presentation">
                        <div class="accordion-action" data-bs-target="#faq-1" role="button" data-bs-toggle="collapse" aria-controls="faq-1" aria-expanded="true">
                            <p class="text">
                                What types of skin conditions can your clinic help with, and are your treatments customized?
                            </p>
                            <div class="ic-wrap">
                                <span class="icon ic-accordion-custom"></span>
                            </div>
                        </div>
                        <div id="faq-1" class="collapse show" data-bs-parent="#cosmetic-faq">
                            <div class="accordion-content cl-gray-60">
                                <p class="text-body-4">
                                    We treat a comprehensive range of skin conditions, including acne, eczema, psoriasis, rosacea, and skin cancer, alongside addressing cosmetic concerns such as wrinkles, dark spots, uneven skin tone, and scars. Our expert team ensures personalized care
                                    for every need.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="faq-accordion_item-5 " role="presentation">
                        <div class="accordion-action collapsed" data-bs-target="#faq-2" role="button" data-bs-toggle="collapse" aria-controls="faq-2" aria-expanded="true">
                            <p class="text">
                                How do I book an appointment at your clinic, and what is the process?
                            </p>
                            <div class="ic-wrap">
                                <span class="icon ic-accordion-custom"></span>
                            </div>
                        </div>
                        <div id="faq-2" class="collapse" data-bs-parent="#cosmetic-faq">
                            <div class="accordion-content cl-gray-60">
                                <p class="text-body-4">
                                    We treat a comprehensive range of skin conditions, including acne, eczema, psoriasis, rosacea, and skin cancer, alongside addressing cosmetic concerns such as wrinkles, dark spots, uneven skin tone, and scars. Our expert team ensures personalized care
                                    for every need.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="faq-accordion_item-5 " role="presentation">
                        <div class="accordion-action collapsed" data-bs-target="#faq-3" role="button" data-bs-toggle="collapse" aria-controls="faq-3" aria-expanded="true">
                            <p class="text">
                                Do I need to follow any special instructions to prepare for my treatment?
                            </p>
                            <div class="ic-wrap">
                                <span class="icon ic-accordion-custom"></span>
                            </div>
                        </div>
                        <div id="faq-3" class="collapse" data-bs-parent="#cosmetic-faq">
                            <div class="accordion-content cl-gray-60">
                                <p class="text-body-4">
                                    We treat a comprehensive range of skin conditions, including acne, eczema, psoriasis, rosacea, and skin cancer, alongside addressing cosmetic concerns such as wrinkles, dark spots, uneven skin tone, and scars. Our expert team ensures personalized care
                                    for every need.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="faq-accordion_item-5 " role="presentation">
                        <div class="accordion-action collapsed" data-bs-target="#faq-4" role="button" data-bs-toggle="collapse" aria-controls="faq-4" aria-expanded="true">
                            <p class="text">
                                Are the treatments safe for people with sensitive or reactive skin types?
                            </p>
                            <div class="ic-wrap">
                                <span class="icon ic-accordion-custom"></span>
                            </div>
                        </div>
                        <div id="faq-4" class="collapse" data-bs-parent="#cosmetic-faq">
                            <div class="accordion-content cl-gray-60">
                                <p class="text-body-4">
                                    We treat a comprehensive range of skin conditions, including acne, eczema, psoriasis, rosacea, and skin cancer, alongside addressing cosmetic concerns such as wrinkles, dark spots, uneven skin tone, and scars. Our expert team ensures personalized care
                                    for every need.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="faq-accordion_item-5 " role="presentation">
                        <div class="accordion-action collapsed" data-bs-target="#faq-5" role="button" data-bs-toggle="collapse" aria-controls="faq-5" aria-expanded="true">
                            <p class="text">
                                How long does it usually take to see noticeable results?
                            </p>
                            <div class="ic-wrap">
                                <span class="icon ic-accordion-custom"></span>
                            </div>
                        </div>
                        <div id="faq-5" class="collapse" data-bs-parent="#cosmetic-faq">
                            <div class="accordion-content cl-gray-60">
                                <p class="text-body-4">
                                    We treat a comprehensive range of skin conditions, including acne, eczema, psoriasis, rosacea, and skin cancer, alongside addressing cosmetic concerns such as wrinkles, dark spots, uneven skin tone, and scars. Our expert team ensures personalized care
                                    for every need.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- /FAQ -->
        <!-- Gallery -->
        <section class="section-cosmetic-gallery flat-spacing-4 pt-0">
            <div class="container-5">
                <div class="cosmetic-gallery-grid tf-grid-layout sm-col-2 md-col-3">
                    <div class="gallery-item hover-img hover-overlay">
                        <div class="image img-style">
                            <img loading="lazy" width="424" height="424" src="../assets/images/gallery/gallery-1.jpg" alt="Image">
                        </div>
                        <a href="product-detail.html" class="box-icon hover-tooltip">
                            <!-- <img src="../assets/images/instagram.svg" alt=""> -->
                                <img src="../assets/images/instagram.svg" alt="">
                            <span class="tooltip">View product</span>
                        </a>
                    </div>
                    <div class="gallery-item hover-img hover-overlay">
                        <div class="image img-style">
                            <img loading="lazy" width="424" height="424" src="../assets/images/gallery/gallery-2.jpg" alt="Image">
                        </div>
                        <a href="product-detail.html" class="box-icon hover-tooltip">
                            <img src="../assets/images/instagram.svg" alt="">
                            <span class="tooltip">View product</span>
                        </a>
                    </div>
                    <div class="gallery-item hover-img hover-overlay">
                        <div class="image img-style">
                            <img loading="lazy" width="424" height="424" src="../assets/images/gallery/gallery-3.jpg" alt="Image">
                        </div>
                        <a href="product-detail.html" class="box-icon hover-tooltip">
                            <img src="../assets/images/instagram.svg" alt="">
                            <span class="tooltip">View product</span>
                        </a>
                    </div>
                    <div class="gallery-item hover-img hover-overlay">
                        <div class="image img-style">
                            <img loading="lazy" width="424" height="424" src="../assets/images/gallery/gallery-4.jpg" alt="Image">
                        </div>
                        <a href="product-detail.html" class="box-icon hover-tooltip">
                            <img src="../assets/images/instagram.svg" alt="">
                            <span class="tooltip">View product</span>
                        </a>
                    </div>
                    <div class="gallery-ins">
                        <h6 class="fw-normal title wow fadeZoom">
                            <span>Join Us for Skincare</span> <br class="d-none d-xl-block"> Tips on Instagram
                        </h6>
                        <a href="#" class=" action btn-wrap btn-4 stroke wow fadeInUp">
                            <span class="text-body-4">
                                Visit Instagram
                            </span>
                        </a>
                    </div>
                    <div class="gallery-item hover-img hover-overlay">
                        <div class="image img-style">
                            <img loading="lazy" width="424" height="424" src="../assets/images/gallery/gallery-5.jpg" alt="Image">
                        </div>
                        <a href="product-detail.html" class="box-icon hover-tooltip">
                            <img src="../assets/images/instagram.svg" alt="">
                            <span class="tooltip">View product</span>
                        </a>
                    </div>
                    <div class="gallery-item hover-img hover-overlay">
                        <div class="image img-style">
                            <img loading="lazy" width="424" height="424" src="../assets/images/gallery/gallery-6.jpg" alt="Image">
                        </div>
                        <a href="product-detail.html" class="box-icon hover-tooltip">
                            <img src="../assets/images/instagram.svg" alt="">
                            <span class="tooltip">View product</span>
                        </a>
                    </div>
                    <div class="gallery-item hover-img hover-overlay">
                        <div class="image img-style">
                            <img loading="lazy" width="424" height="424" src="../assets/images/gallery/gallery-7.jpg" alt="Image">
                        </div>
                        <a href="product-detail.html" class="box-icon hover-tooltip">
                            <img src="../assets/images/instagram.svg" alt="">
                            <span class="tooltip">View product</span>
                        </a>
                    </div>
                    <div class="gallery-item hover-img hover-overlay">
                        <div class="image img-style">
                            <img loading="lazy" width="424" height="424" src="../assets/images/gallery/gallery-8.jpg" alt="Image">
                        </div>
                        <a href="product-detail.html" class="box-icon hover-tooltip">
                            <img src="../assets/images/instagram.svg" alt="">
                            <span class="tooltip">View product</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <!-- /Gallery -->
        <!-- Brand -->
        <div class="section-brand-2">
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
import hero1 from "@/assets/images/section/hero-1.jpg"
import hero2 from "@/assets/images/section/hero-2.jpg"
const images = [
  hero1,
  hero2
];

const currentIndex = ref(0);

onMounted(() => {
  setInterval(() => {
    currentIndex.value =
      (currentIndex.value + 1) % images.length;
  }, 3500); 
});
onMounted(() => {
 new Swiper(".swiper-best", {
    slidesPerView: 4.5,
    spaceBetween: 20,
    loop: true,
     centeredSlides: true,
    initialSlide: 2,
   slideToClickedSlide: true, 
 })
})

onMounted(() => {

  const slider = document.getElementById("slider");
const overlay = document.getElementById("overlay");
const container = document.getElementById("compare");

let active = false;

slider.addEventListener("mousedown", () => active = true);
window.addEventListener("mouseup", () => active = false);

window.addEventListener("mousemove", (e) => {

  if(!active) return;

  const rect = container.getBoundingClientRect();
  let x = e.clientX - rect.left;

  if(x < 0) x = 0;
  if(x > rect.width) x = rect.width;

  const percent = (x / rect.width) * 100;

  overlay.style.width = percent + "%";
  slider.style.left = percent + "%";

});

});
</script>
<style scoped>


.hero-image li {
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}

.hero-image li.active {
  opacity: 1;
  z-index: 2;
}

.hero-image img {
  width: 100%;
  height: auto;
}
.hero-content {
  opacity: 0;
}

.slide-up {
  animation: slideUp 0.9s ease forwards;
}

@keyframes slideUp {
  from {
    transform: translateY(80px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.prodimg{
    width: 50%;
}
.plus-icon{
  color:#e9471a;
  transition: all 0.3s ease;
}

.plus-icon:hover{
  rotate: 45deg;
}
.wishlist-icon{
  color: black;
  
}
.seedling-icon{
  color: #5b5858;
  text-shadow: 0 0 6px #e9471a;
}
.arrow-icon{
    color: #918c87;
}
.compare-wrapper{
  max-width:1200px;
  margin:auto;
}

.compare-container{
  position:relative;
  width:100%;
  overflow:hidden;
  border-radius:20px;
}

.compare-container img{
  width:100%;
  display:block;
}

.img-overlay{
  position:absolute;
  top:0;
  left:0;
  width:50%;
  height:100%;
  overflow:hidden;
}

.img-overlay img{
  width:100%;
  height:100%;
  object-fit:cover;
}

.slider{
  position:absolute;
  top:0;
  left:50%;
  width:2px;
  height:100%;
  background:white;
  cursor:ew-resize;
}

.slider::after{
  content:"";
  position:absolute;
  top:50%;
  left:-15px;
  width:30px;
  height:30px;
  background:white;
  border-radius:50%;
  transform:translateY(-50%);
}

.label{
  position:absolute;
  top:20px;
  background:white;
  padding:8px 16px;
  border-radius:8px;
  font-size:14px;
}

.before{
  left:20px;
}

.after{
  right:20px;
}
.product-image-preview{
    cursor: pointer;
}
</style>