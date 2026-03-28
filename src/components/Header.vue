<script setup lang="ts">
import { routerKey } from 'vue-router';

</script>

<template>
    <div class="tf-header-block-height d-none"></div>
    <header class="tf-header-5 style-abs header-fixed scrolling">
        <div class="header-inner">
            <div class="container-5">
                <div class="row">
                    <div class="col-6 col-lg-3">
                        <a href="index.html" class="logo-site">
                            <img loading="lazy" width="98" height="20" src="../assets/images/vimas/logo.png"
                                alt="Image">
                        </a>
                    </div>
                    <div class="col-lg-6 d-none d-lg-block">
                        <div class="header-center">
                            <nav class="box-navigation">
                                <ul class="box-nav-menu">
                                    <li class="menu-item">
                                        <router-link to="/">
                                            <a href="#" class="item-link">
                                                Home
                                            </a>
                                        </router-link>
                                    </li>
                                    <li class="menu-item has-sub_menu">
                                        <router-link to="/shop-default">
                                            <a href="#" class="item-link">
                                                Shop
                                            </a>
                                        </router-link>
                                        <div class="sub-menu">
                                            <ul class="sub-menu_list">
                                                <li>
                                                    <router-link to="/shop-default">
                                                        <a href="#" class="sub-menu_link">Shop
                                                            Default</a>
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/shop-detail">
                                                        <a href="#" class="sub-menu_link">Shop
                                                            Details</a>
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/shop-cart">
                                                        <a href="#" class="sub-menu_link">Shop
                                                            Cart</a>
                                                    </router-link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="menu-item">
                                        <router-link to="/about-us">
                                            <a href="#" class="item-link">
                                                About
                                            </a>
                                        </router-link>
                                    </li>
                                    <li class="menu-item has-sub_menu">
                                        <router-link to="/blog">
                                            <a href="#" class="item-link">
                                                Blog
                                            </a>
                                        </router-link>
                                        <div class="sub-menu">
                                            <ul class="sub-menu_list">
                                                <li>

                                                    <router-link to="/blog">
                                                        <a href="#" class="sub-menu_link">Blog
                                                            Stardard</a>
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/blog-detail">
                                                        <a href="#" class="sub-menu_link">Blog Single</a>
                                                    </router-link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="col-6 col-lg-3">
                        <div class="header-right">
                            <ul class="nav-icon">
                                <li>
                                    <a href="sign-in.html" class="nav-icon_link link-2">
                                        <i class="fa-solid fa-user fs-24 "></i>
                                    </a>
                                </li>
                                <li class="br-line type-vertical"></li>
                                <li>
                                    <a href="#shoppingCart" data-bs-toggle="offcanvas"
                                        class="nav-icon_link link-2 btn-open-shop">
                                        <i class="fa-solid fa-bag-shopping fs-24 "></i>
                                        <span class="number-count">2</span>
                                    </a>
                                </li>
                            </ul>
                            <a href="#mobileMenu" data-bs-toggle="offcanvas"
                                class="btn-mobile-menu-2 style-white d-lg-none">
                                <span></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-5">
            <div class="br-line bottom d-flex"></div>
        </div>
        <!-- Shoping Cart -->
        <div class="offcanvas offcanvas-end offcanvas-shop-cart type-2" id="shoppingCart">
            <div class="canvas-wrapper">
                <div class="canvas-header">
                    <p class="text-body-2 text-black fw-medium">
                        Your Cart
                    </p>
                    <span class="icon-close-popup" data-bs-dismiss="offcanvas">
                        <img src="../assets/images/close.svg" alt="">
                    </span>
                </div>
                <div class="wrap list-file-delete">
                    <div class="tf-mini-cart-threshold">
                        <p class="text fw-normal text-body-4 cl-gray-60">
                            Spend <span class="fw-medium text-black">$158.00</span> more and get free shipping!
                        </p>
                        <div class="tf-progress-bar tf-progress-ship">
                            <div class="value" style="width: 0%;" data-progress="75">
                            </div>
                        </div>
                    </div>
                    <div class="tf-mini-cart-wrap">
                        <div class="tf-mini-cart-main">
                            <div class="tf-mini-cart-sroll">
                                <ul class="tf-mini-cart-items">
                                    <li class="tf-mini-cart-item file-delete">
                                        <div class="tf-mini-cart-image">
                                            <img loading="lazy" width="96" height="120"
                                                src="../assets/images/product/product-1.jpg" alt="Image">
                                        </div>
                                        <div class="tf-mini-cart-info">
                                            <a href="#" class="prd-name link text-body-1 text-black">
                                                Dream Bio Retinol
                                            </a>
                                            <p class="type-select text-body-4 cl-gray-50">
                                                100ml
                                            </p>
                                            <div class="prd-quantity">
                                                <div class="wg-quantity style-3 radius-60">
                                                    <button class="btn-quantity minus-btn">
                                                        <img src="../assets/images/dash.svg" alt="">
                                                    </button>
                                                    <input class="quantity-product fw-normal" type="number"
                                                        name="number" value="1">
                                                    <button class="btn-quantity plus-btn">
                                                        <img src="../assets/images/plus.svg" alt="">
                                                    </button>
                                                </div>
                                                <div class="remove cs-pointer d-flex cl-gray-60">
                                                    <span class="text-decoration-underline text-caption">
                                                        Remove
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="price-wrap">
                                            <span class="price-new">$46.00</span>
                                        </div>
                                    </li>
                                    <li class="tf-mini-cart-item file-delete">
                                        <div class="tf-mini-cart-image">
                                            <img loading="lazy" width="96" height="120"
                                                src="../assets/images/product/product-2.jpg" alt="Image">
                                        </div>
                                        <div class="tf-mini-cart-info">
                                            <a href="#" class="prd-name link text-body-1 text-black">
                                                Dream Bio Retinol
                                            </a>
                                            <p class="type-select text-body-4 cl-gray-50">
                                                100ml
                                            </p>
                                            <div class="prd-quantity">
                                                <div class="wg-quantity style-3 radius-60">
                                                    <button class="btn-quantity minus-btn"> <img
                                                            src="../assets/images/dash.svg" alt=""></button>
                                                    <input class="quantity-product fw-normal" type="number"
                                                        name="number" value="1">
                                                    <button class="btn-quantity plus-btn">
                                                        <img src="../assets/images/plus.svg" alt="">
                                                    </button>
                                                </div>
                                                <div class="remove cs-pointer d-flex cl-gray-60">
                                                    <span class="text-decoration-underline text-caption">
                                                        Remove
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="price-wrap">
                                            <span class="price-new">$46.00</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="tf-mini-cart-bottom">
                            <div class="tf-cart-totals-discounts">
                                <p class="title fw-medium text-body-4 text-black text-decoration-underline text-center">
                                    Add order note
                                </p>
                                <p class="desc cl-gray-50 text-body-4 text-center">
                                    Taxes and <span class="text-black text-decoration-underline">shipping</span>
                                    calculated at checkout
                                </p>
                            </div>
                            <div class="tf-mini-cart-view-checkout">
                                <a href="checkout.html"
                                    class="action-checkout btn-wrap btn-1 animate-btn w-100 text-body-4 radius-30">
                                    <span>Check Out</span>
                                    <span class="br-line bg-white"></span>
                                    <span>$92.00 USD</span>
                                </a>
                                <a href="shop-cart.html" class="btn-wrap btn-1 stroke radius-30 w-100">
                                    <span class="text-body-4 fw-medium">View Cart</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Shoping Cart -->
        <!-- Mobile Menu -->
        <div class="offcanvas offcanvas-start canvas-mb cv-mb-d5" id="mobileMenu">
            <div class="canvas-header">
                <a href="#" class="logo-site">
                    <img loading="lazy" width="98" height="20" src="../assets/images/logo/logo.svg" alt="LOGO">
                </a>
                <span class="icon-close-popup" data-bs-dismiss="offcanvas">
                    <i class="fa-solid fa-xmark" style="color: rgb(0, 0, 0);"></i>
                </span>
            </div>
            <div class="canvas-body">
                <div class="mb-content-top">
                    <!-- <ul class="nav-ul-mb" id="wrapper-menu-navigation">
                
                </ul> -->
                    <ul class="nav-ul-mb">
                        <li class="nav-mb-item"><a href="/" class="mb-menu-link "><span>Home</span></a></li>
                        <li class="nav-mb-item"><a href="/" class="mb-menu-link "><span>Blog</span></a></li>
                        <li class="nav-mb-item"><a href="/" class="mb-menu-link "><span>About</span></a></li>


                        <li class="nav-mb-item">
                            <a href="#dropdown-menu-1" class="collapsed mb-menu-link " data-bs-toggle="collapse"
                                aria-expanded="false" aria-controls="dropdown-menu-1">
                                <span>Shop</span>
                                <span class="icon icon-arrow-caret-down"></span>
                            </a>
                            <div id="dropdown-menu-1" class="collapse ">
                                <ul class="sub-nav-menu">
                                    <li><a href="/shop-default" class="sub-nav-link ">Shop Default</a></li>
                                    <li><a href="#" class="sub-nav-link ">Shop Default</a></li>
                                    <li><a href="/shop-detail" class="sub-nav-link ">Shop Details</a></li>
                                    <li><a href="#" class="sub-nav-link ">Shop Details</a></li>
                                    <li><a href="/shop-cart" class="sub-nav-link ">Shop Cart</a></li>
                                    <li><a href="#" class="sub-nav-link ">Shop Cart</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="canvas-bottom">
                <ul class="tf-social-icon style-small">
                    <li>
                        <a href="https://www.facebook.com/" target="_blank" class="social-facebook">
                            <span class="icon"><i class="fa-brands fa-facebook" style="color: rgb(0, 0, 0);"></i></span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/" target="_blank" class="social-instagram">
                            <span class="icon"><i class="fa-brands fa-instagram"
                                    style="color: rgb(0, 0, 0);"></i></span>
                        </a>
                    </li>
                    <li>
                        <a href="https://x.com/" target="_blank" class="social-x">
                            <span class="icon"><i class="fa-brands fa-twitter" style="color: rgb(0, 0, 0);"></i></span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.tiktok.com/" target="_blank" class="social-tiktok">
                            <span class="icon"><i class="fa-brands fa-youtube" style="color: rgb(0, 0, 0);"></i></span>
                        </a>
                    </li>
                </ul>
                <div class="tf-list">
                    <a href="#" class="text-black fw-medium letter-space-2 text-body-4">
                        Privacy Policy
                    </a>
                    <a href="#" class="text-black fw-medium letter-space-2 text-body-4">
                        Terms of use
                    </a>
                </div>
            </div>
        </div>
        <!-- /Mobile Menu -->
    </header>
</template>
