<template>

    <!-- Shop Cart -->
    <section class="section-camping-shop-cart type-2 flat-spacing-8 each-list-prd">
        <div class="container-2">
            <div class="heading text-center">
                <h1 class="title letter-space--6 fw-normal text-black">
                    Your Cart
                </h1>
                <div class="box-spend">
                    <p class="text cl-gray-60 lh-20">
                        Spend <span class="text-black fw-medium">$22.00</span> more to reach free shipping!
                    </p>
                    <span class="line-prg">
                        <span class="line" style="--w: 80%;"></span>
                    </span>
                </div>
            </div>

            <div class="overflow-auto">
                <table class="table-shop-cart style-2">
                    <thead>
                        <tr>
                            <th class="text-body-2 cl-gray-60 fw-medium">Product</th>
                            <th class="text-body-2 cl-gray-60 fw-medium">Price</th>
                            <th class="text-body-2 cl-gray-60 fw-medium">Quantity</th>
                            <th class="text-body-2 cl-gray-60 fw-medium">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="tf-cart_item each-prd file-delete">
                            <td>
                                <div class="cart_product">
                                    <a href="#" class="img-prd">
                                        <img loading="lazy" width="96" height="120"
                                            src="../assets/images/product/product-1.jpg" alt="Image">
                                    </a>
                                    <div class="info-prd">
                                        <a href="#" class="name text-body-1 text-black link-2">
                                            Dream Bio Retinol
                                        </a>
                                        <p class="type text-body-4 cl-gray-50">
                                            Size: 100ml
                                        </p>
                                        <div
                                            class="cart_remove remove cs-pointer text-caption text-decoration-underline  cl-gray-60 link">
                                            Remove
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span class="cart_price each-price text-black">
                                    $99.00
                                </span>
                            </td>
                            <td>
                                <div class="wg-quantity">
                                    <button class="btn-quantity minus-quantity"><i class="fa-solid fa-minus"
                                            style="color: rgb(133, 133, 133); font-size: 13px;"></i></button>
                                    <input class="quantity-product fw-normal" type="number" name="number" value="1">
                                    <button class="btn-quantity plus-quantity"><i class="fa-solid fa-plus"
                                            style="color: rgb(133, 133, 133); font-size: 13px;"></i></button>
                                </div>
                            </td>
                            <td>
                                <div class="cart_total">
                                    <span class="each-subtotal-price text-black">
                                        $99.00
                                    </span>
                                </div>
                            </td>
                        </tr>
                        <tr class="tf-cart_item each-prd file-delete">
                            <td>
                                <div class="cart_product">
                                    <a href="#" class="img-prd">
                                        <img loading="lazy" width="96" height="96"
                                            src="../assets/images/product/product-2.jpg" alt="Image">
                                    </a>
                                    <div class="info-prd">
                                        <a href="#" class="name text-body-1 text-black link-2">
                                            Burner Propane Camping
                                        </a>
                                        <p class="type text-body-4 cl-gray-50">
                                            Orange
                                        </p>
                                        <div
                                            class="cart_remove remove cs-pointer text-caption text-decoration-underline  cl-gray-60 link">
                                            Remove
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span class="cart_price each-price text-black">
                                    $129.00
                                </span>
                            </td>
                            <td>
                                <div class="wg-quantity">
                                    <button class="btn-quantity minus-quantity"><i class="fa-solid fa-minus"
                                            style="color: rgb(133, 133, 133); font-size: 13px;"></i></button>
                                    <input class="quantity-product fw-normal" type="number" name="number" value="1">
                                    <button class="btn-quantity plus-quantity"><i class="fa-solid fa-plus"
                                            style="color: rgb(133, 133, 133); font-size: 13px;"></i></button>
                                </div>
                            </td>
                            <td>
                                <div class="cart_total">
                                    <span class="each-subtotal-price text-black">
                                        $129.00
                                    </span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="box-order-summary">
                <div class="checkbox-wrap">
                    <input type="checkbox" class="tf-check style-4" id="check-order">
                    <label for="check-order" class="label text-black text-body-4">
                        For $1.00, please wrap the products in this order.
                    </label>
                </div>
                <div
                    class="total-order fw-medium text-body-2 text-black d-flex justify-content-between align-items-center">
                    <span>Estimated total</span>
                    <span>
                        <span class="total each-total-price">$228.00</span>
                        <span>USD</span>
                    </span>
                </div>
                <a href="#" class="text-tax text-black text-body-4">
                    Taxes and <span class="text-decoration-underline">shipping</span> calculated at checkout
                </a>
                <a href="checkout.html"
                    class="action-checkout btn-wrap btn-4 btn-fill-primary animate-btn animate-dark w-100">
                    <span class="text-body-4 fw-medium">
                        Check Out
                    </span>
                </a>
            </div>
        </div>
    </section>
    <!-- /Shop Cart -->
    <!-- Related Product -->
    <section class="flat-spacing-4 pt-0">
        <div class="container-5">
            <div class="s-header-3">
                <h3 class="title fw-normal letter-space--4 text-black text-center wow fadeZoom">
                    <span>Related</span>
                    <span class="fw-medium letter-space--3">
                        Products
                    </span>
                </h3>
            </div>
            <div class="swiper tf-swiper" data-preview="3" data-tablet="2" data-mobile-sm="2" data-mobile="1"
                data-space-lg="20" data-space-md="15" data-space="15" data-pagination="1" data-pagination-sm="2"
                data-pagination-md="2" data-pagination-lg="3">
                <div class="swiper-wrapper">
                    <!-- slide 1 -->
                    <div class="swiper-slide">
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
                                    <a href="shop-detail.html" class="product__name text-body-2 link-2 text-black">Dream
                                        Bio
                                        Retinol</a>
                                    <div class="product__price price-wrap text-black">
                                        <span class="price-new text-sub-head fw-medium">$56.00</span>
                                    </div>
                                </div>
                                <div class="action-shop-list">
                                    <div class="btn-add-shop">
                                        <i class="icon icon-plus-solid"></i>
                                    </div>
                                    <ul class="product-action-list">
                                        <li>
                                            <a href="#shoppingCart" data-bs-toggle="offcanvas"
                                                class="action-card hover-tooltip tooltip-left">
                                                <span class="icon icon-add-cart"></span>
                                                <span class="tooltip">Add to cart</span>
                                            </a>
                                        </li>
                                        <li class="wishlist">
                                            <a href="#;" class="action-card hover-tooltip tooltip-left">
                                                <span class="icon icon-heart"></span>
                                                <span class="tooltip">Add to Wishlist</span>
                                            </a>
                                        </li>
                                        <li class="compare">
                                            <a href="#compare" data-bs-toggle="offcanvas"
                                                class="action-card hover-tooltip tooltip-left">
                                                <span class="icon icon-compare1"></span>
                                                <span class="tooltip">Compare</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#quickView" data-bs-toggle="modal"
                                                class="action-card hover-tooltip tooltip-left">
                                                <span class="icon icon-view"></span>
                                                <span class="tooltip">Quick view</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- slide 2 -->
                    <div class="swiper-slide">
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
                                    <a href="shop-detail.html" class="product__name text-body-2 link-2 text-black">Dream
                                        Bio
                                        Retinol</a>
                                    <div class="product__price price-wrap text-black">
                                        <span class="price-new text-sub-head fw-medium">$56.00</span>
                                    </div>
                                </div>
                                <div class="action-shop-list">
                                    <div class="btn-add-shop">
                                        <i class="icon icon-plus-solid"></i>
                                    </div>
                                    <ul class="product-action-list">
                                        <li>
                                            <a href="#shoppingCart" data-bs-toggle="offcanvas"
                                                class="action-card hover-tooltip tooltip-left">
                                                <span class="icon icon-add-cart"></span>
                                                <span class="tooltip">Add to cart</span>
                                            </a>
                                        </li>
                                        <li class="wishlist">
                                            <a href="#;" class="action-card hover-tooltip tooltip-left">
                                                <span class="icon icon-heart"></span>
                                                <span class="tooltip">Add to Wishlist</span>
                                            </a>
                                        </li>
                                        <li class="compare">
                                            <a href="#compare" data-bs-toggle="offcanvas"
                                                class="action-card hover-tooltip tooltip-left">
                                                <span class="icon icon-compare1"></span>
                                                <span class="tooltip">Compare</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#quickView" data-bs-toggle="modal"
                                                class="action-card hover-tooltip tooltip-left">
                                                <span class="icon icon-view"></span>
                                                <span class="tooltip">Quick view</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- slide 3 -->
                    <div class="swiper-slide">
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
                                    <a href="shop-detail.html" class="product__name text-body-2 link-2 text-black">Dream
                                        Bio
                                        Retinol</a>
                                    <div class="product__price price-wrap text-black">
                                        <span class="price-new text-sub-head fw-medium">$56.00</span>
                                        <span class="price-old text-decoration-line-through">$56.00</span>
                                    </div>
                                </div>
                                <div class="action-shop-list">
                                    <div class="btn-add-shop">
                                        <i class="icon icon-plus-solid"></i>
                                    </div>
                                    <ul class="product-action-list">
                                        <li>
                                            <a href="#shoppingCart" data-bs-toggle="offcanvas"
                                                class="action-card hover-tooltip tooltip-left">
                                                <span class="icon icon-add-cart"></span>
                                                <span class="tooltip">Add to cart</span>
                                            </a>
                                        </li>
                                        <li class="wishlist">
                                            <a href="#;" class="action-card hover-tooltip tooltip-left">
                                                <span class="icon icon-heart"></span>
                                                <span class="tooltip">Add to Wishlist</span>
                                            </a>
                                        </li>
                                        <li class="compare">
                                            <a href="#compare" data-bs-toggle="offcanvas"
                                                class="action-card hover-tooltip tooltip-left">
                                                <span class="icon icon-compare1"></span>
                                                <span class="tooltip">Compare</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#quickView" data-bs-toggle="modal"
                                                class="action-card hover-tooltip tooltip-left">
                                                <span class="icon icon-view"></span>
                                                <span class="tooltip">Quick view</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sw-dot-pagination tf-sw-pagination d-xl-none"></div>
            </div>
        </div>
    </section>
    <!-- /Related Product -->
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