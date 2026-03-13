<template>

      <!-- Shop Checkout -->
        <div class="section-checkout type-2">
            <div class="container-2">
                <div class="row">
                    <div class="col-md-7">
                        <div class="tf-checkout">
                            <form class="tf-checkout-cart-main">
                                <div class="box-ip-contact">
                                    <div class="box-title">
                                        <p class="text-sub-head fw-medium text-black">
                                            Contact
                                        </p>

                                        <a href="sign-in.html" class="action-sign text-decoration-underline fw-medium text-body-4 link">
                                            Sign in
                                        </a>
                                    </div>
                                    <div class="form-content">
                                        <fieldset>
                                            <input class="style-line-2" type="email" placeholder="Email or mobile phone number" required="">
                                        </fieldset>
                                        <div class="checkbox-wrap">
                                            <input type="checkbox" class="tf-check style-4" id="check-order">
                                            <label for="check-order" class="label text-black text-body-4">
                                                Email me with news and offers
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="box-ip-delivery">
                                    <p class="title text-sub-head fw-medium text-black">
                                        Delivery
                                    </p>
                                    <div class="form-content">
                                        <fieldset>
                                            <div class="tf-select">
                                                <label class="lb-select text-caption cl-gray-50">Country/Region</label>
                                                <select class="w-100" id="shipping-country-form" name="address[country]" data-default="">
                                                    <option disabled value=""> Country/Region</option>
                                                    <option selected value="Australia"
                                                        data-provinces='[["Australian Capital Territory","Australian Capital Territory"],["New South Wales","New South Wales"],["Northern Territory","Northern Territory"],["Queensland","Queensland"],["South Australia","South Australia"],["Tasmania","Tasmania"],["Victoria","Victoria"],["Western Australia","Western Australia"]]'>
                                                        Australia</option>
                                                    <option value="Austria" data-provinces='[]'>Austria</option>
                                                    <option value="Belgium" data-provinces='[]'>Belgium</option>
                                                    <option value="Canada"
                                                        data-provinces='[["Ontario","Ontario"],["Quebec","Quebec"]]'>
                                                        Canada
                                                    </option>
                                                    <option value="Czech Republic" data-provinces='[]'>Czechia</option>
                                                    <option value="Denmark" data-provinces='[]'>Denmark</option>
                                                    <option value="Finland" data-provinces='[]'>Finland</option>
                                                    <option value="France" data-provinces='[]'>France</option>
                                                    <option value="Germany" data-provinces='[]'>Germany</option>
                                                    <option value="United States"
                                                        data-provinces='[["Alabama","Alabama"],["California","California"],["Florida","Florida"]]'>
                                                        United States</option>
                                                    <option value="United Kingdom"
                                                        data-provinces='[["England","England"],["Scotland","Scotland"],["Wales","Wales"],["Northern Ireland","Northern Ireland"]]'>
                                                        United Kingdom</option>
                                                    <option value="India" data-provinces='[]'>India</option>
                                                    <option value="Japan" data-provinces='[]'>Japan</option>
                                                    <option value="Mexico" data-provinces='[]'>Mexico</option>
                                                    <option value="South Korea" data-provinces='[]'>South Korea</option>
                                                    <option value="Spain" data-provinces='[]'>Spain</option>
                                                    <option value="Italy" data-provinces='[]'>Italy</option>
                                                    <option value="Vietnam"
                                                        data-provinces='[["Ha Noi","Ha Noi"],["Da Nang","Da Nang"],["Ho Chi Minh","Ho Chi Minh"]]'>
                                                        Vietnam</option>
                                                </select>
                                            </div>
                                        </fieldset>
                                        <div class="tf-grid-layout sm-col-2">
                                            <fieldset>
                                                <input class="style-line-2" type="text" placeholder="First name ( optional )" required="">
                                            </fieldset>
                                            <fieldset>
                                                <input class="style-line-2" type="text" placeholder="Last name" required="">
                                            </fieldset>
                                        </div>
                                        <fieldset>
                                            <input class="style-line-2" type="text" placeholder="Address" required="">
                                        </fieldset>
                                        <fieldset>
                                            <input class="style-line-2" type="text" placeholder="Apartment, suite, etc. ( optional ) " required="">
                                        </fieldset>
                                        <div class="tf-grid-layout sm-col-2">
                                            <fieldset>
                                                <input class="style-line-2" type="text" placeholder="Postal code" required="">
                                            </fieldset>
                                            <fieldset>
                                                <input class="style-line-2" type="text" placeholder="City" required="">
                                            </fieldset>
                                        </div>
                                        <div class="checkbox-wrap">
                                            <input type="checkbox" class="tf-check style-4" id="check-save">
                                            <label for="check-save" class="label text-black text-body-4">
                                                Save this information for next time
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="box-ip-shiping">
                                    <p class="title text-black fw-medium">
                                        Shipping method
                                    </p>
                                    <div class="enter-your-ship">
                                        <p class="text-body-4 cl-gray-60 fw-medium">
                                            Enter your shipping address to view available shipping methods.
                                        </p>
                                    </div>
                                </div>
                                <div class="box-ip-payment">
                                    <div class="box-title d-grid">
                                        <p class="text-body-2 text-sub-head fw-medium text-black">
                                            Payment
                                        </p>
                                        <p class="desc cl-gray-60 text-body-4">
                                            All transactions are secure and encrypted.
                                        </p>
                                    </div>
                                    <div class="payment-body">
                                        <div class="payment-head">
                                            <span class="text-black fw-medium">
                                                Credit card
                                            </span>
                                            <div class="ic d-flex">
                                                <svg width="38" height="24" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                    <rect width="38" height="24" fill="url(#pattern0_3090_1650)" />
                                                    <defs>
                                                        <pattern id="pattern0_3090_1650"
                                                            patternContentUnits="objectBoundingBox" width="1"
                                                            height="1">
                                                            <use xlink:href="#image0_3090_1650"
                                                                transform="scale(0.0263158 0.0416667)" />
                                                        </pattern>
                                                        <image id="image0_3090_1650" width="38" height="24"
                                                            preserveAspectRatio="none"
                                                            xlink:href="data:image/png;base64,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" />
                                                    </defs>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="wrap-content">
                                            <div class="form-content">
                                                <fieldset class="tf-field-2">
                                                    <input class="style-line-2" type="text" placeholder="Apartment, suite, etc. ( optional ) " required="">
                                                    <i class="icon icon-lock"></i>
                                                </fieldset>
                                                <div class="tf-grid-layout sm-col-2">
                                                    <fieldset>
                                                        <input class="style-line-2" type="date" required="">
                                                    </fieldset>
                                                    <fieldset class="tf-field-2">
                                                        <input class="style-line-2" type="text" placeholder="Security code" required="">
                                                        <i class="icon icon-help-circle"></i>
                                                    </fieldset>
                                                </div>
                                                <fieldset>
                                                    <input class="style-line-2" type="number" placeholder="Name on card" required="">
                                                </fieldset>
                                            </div>
                                            <div class="checkbox-wrap">
                                                <input type="checkbox" class="tf-check style-4" id="check-ship">
                                                <label for="check-ship" class="label text-black text-body-4">
                                                    Use shipping address as billing address
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" class="action-payment btn-wrap btn-1 animate-btn w-100">
                                    <span class="fw-800 text-body-4 font-barlow">
                                        PAY NOW
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="content-right sticky-top">
                            <div class="box-your-order">
                                <ul class="list-order-product">
                                    <li class="order-item">
                                        <a href="#" class="img-prd">
                                            <div class="image">
                                                <img loading="lazy" width="92" height="92" src="../assets/images/product/product-1.jpg" alt="Image">
                                            </div>
                                            <span class="number-count text-body-4 fw-medium">1</span>
                                        </a>
                                        <div class="info-and-price">
                                            <div class="info-prd">
                                                <a href="#" class="name text-black link-2">
                                                    Dream Bio Retinol
                                                </a>
                                                <p class="type cl-gray-50 text-body-4">
                                                    100ml
                                                </p>
                                            </div>
                                            <p class="price-prd text-body-4 fw-medium text-black">
                                                $99.00
                                            </p>
                                        </div>
                                    </li>
                                    <li class="order-item">
                                        <a href="#" class="img-prd">
                                            <div class="image">
                                                <img loading="lazy" width="92" height="92" src="../assets/images/product/product-2.jpg" alt="Image">
                                            </div>
                                            <span class="number-count text-body-4 fw-medium">1</span>
                                        </a>
                                        <div class="info-and-price">
                                            <div class="info-prd">
                                                <a href="#" class="name text-black link-2">
                                                    Dream Bio Retinol
                                                </a>
                                                <p class="type cl-gray-50 text-body-4">
                                                    100ml
                                                </p>
                                            </div>
                                            <p class="price-prd text-body-4 fw-medium text-black">
                                                $129.00
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                                <form class="form-discount">
                                    <fieldset class="w-100">
                                        <input class="style-line-2" type="text" placeholder="Discount code" required>
                                    </fieldset>
                                    <button type="submit" class="action-submit btn-wrap animate-btn">
                                        <span class="fw-medium text-body-4">
                                            Apply
                                        </span>
                                    </button>
                                </form>
                                <ul class="list-total">
                                    <li class="total-item cl-dark-90 text-body-4">
                                        <p class="total-sub">
                                            Subtotal
                                            <span class="dot-square"></span> 3 items
                                        </p>
                                        <span>
                                            $228.00
                                        </span>
                                    </li>
                                    <li class="total-item cl-dark-90 text-body-4">
                                        <p class="total-sub">
                                            Shipping
                                            <i class="icon icon-help-circle fs-16"></i>
                                        </p>
                                        <span class="text-caption cl-gray-60 fw-medium">
                                            Enter shipping address
                                        </span>
                                    </li>
                                    <li class="total-item last-total text-black text-sub-head fw-medium">
                                        <p>
                                            Total
                                        </p>
                                        <span class="price">
                                            <span class="text-usd text-caption cl-gray-60">
                                                USD
                                            </span> $92.00
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- <div class="bg-item">
                <span class="left"></span>
                <span class="right"></span>
            </div> -->

            <!-- <div class="container-wrapper">
                <div class="col-left">
                    <div class="tf-checkout">
                        <form class="tf-checkout-cart-main">
                            <div class="box-ip-contact">
                                <div class="box-title">
                                    <p class="text-body-2 text-black fw-800 lh-22">
                                        CONTACT
                                    </p>

                                    <a href="#"
                                        class="action-sign text-decoration-underline fw-medium text-body-4 link">
                                        Sign in
                                    </a>
                                </div>
                                <div class="form-content">
                                    <fieldset>
                                        <input class="style-line-2" type="email"
                                            placeholder="Email or mobile phone number" required="">
                                    </fieldset>
                                    <div class="checkbox-wrap">
                                        <input type="checkbox" class="tf-check style-5" id="check-order">
                                        <label for="check-order" class="label text-black text-body-4">
                                            Email me with news and offers
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="box-ip-delivery">
                                <p class="title text-body-2 text-black fw-800 lh-22">
                                    DELIVERY
                                </p>
                                <div class="form-content">
                                    <fieldset>
                                        <div class="tf-select">
                                            <label class="lb-select text-caption cl-gray-50">Country/Region</label>
                                            <select class="w-100" id="shipping-country-form" name="address[country]"
                                                data-default="">
                                                <option disabled value=""> Country/Region</option>
                                                <option selected value="Australia"
                                                    data-provinces='[["Australian Capital Territory","Australian Capital Territory"],["New South Wales","New South Wales"],["Northern Territory","Northern Territory"],["Queensland","Queensland"],["South Australia","South Australia"],["Tasmania","Tasmania"],["Victoria","Victoria"],["Western Australia","Western Australia"]]'>
                                                    Australia</option>
                                                <option value="Austria" data-provinces='[]'>Austria</option>
                                                <option value="Belgium" data-provinces='[]'>Belgium</option>
                                                <option value="Canada"
                                                    data-provinces='[["Ontario","Ontario"],["Quebec","Quebec"]]'>Canada
                                                </option>
                                                <option value="Czech Republic" data-provinces='[]'>Czechia</option>
                                                <option value="Denmark" data-provinces='[]'>Denmark</option>
                                                <option value="Finland" data-provinces='[]'>Finland</option>
                                                <option value="France" data-provinces='[]'>France</option>
                                                <option value="Germany" data-provinces='[]'>Germany</option>
                                                <option value="United States"
                                                    data-provinces='[["Alabama","Alabama"],["California","California"],["Florida","Florida"]]'>
                                                    United States</option>
                                                <option value="United Kingdom"
                                                    data-provinces='[["England","England"],["Scotland","Scotland"],["Wales","Wales"],["Northern Ireland","Northern Ireland"]]'>
                                                    United Kingdom</option>
                                                <option value="India" data-provinces='[]'>India</option>
                                                <option value="Japan" data-provinces='[]'>Japan</option>
                                                <option value="Mexico" data-provinces='[]'>Mexico</option>
                                                <option value="South Korea" data-provinces='[]'>South Korea</option>
                                                <option value="Spain" data-provinces='[]'>Spain</option>
                                                <option value="Italy" data-provinces='[]'>Italy</option>
                                                <option value="Vietnam"
                                                    data-provinces='[["Ha Noi","Ha Noi"],["Da Nang","Da Nang"],["Ho Chi Minh","Ho Chi Minh"]]'>
                                                    Vietnam</option>
                                            </select>
                                        </div>
                                    </fieldset>
                                    <div class="tf-grid-layout sm-col-2">
                                        <fieldset>
                                            <input class="style-line-2" type="text"
                                                placeholder="First name ( optional )" required="">
                                        </fieldset>
                                        <fieldset>
                                            <input class="style-line-2" type="text" placeholder="Last name" required="">
                                        </fieldset>
                                    </div>
                                    <fieldset>
                                        <input class="style-line-2" type="text" placeholder="Address" required="">
                                    </fieldset>
                                    <fieldset>
                                        <input class="style-line-2" type="text"
                                            placeholder="Apartment, suite, etc. ( optional ) " required="">
                                    </fieldset>
                                    <div class="tf-grid-layout sm-col-2">
                                        <fieldset>
                                            <input class="style-line-2" type="text" placeholder="Postal code"
                                                required="">
                                        </fieldset>
                                        <fieldset>
                                            <input class="style-line-2" type="text" placeholder="City" required="">
                                        </fieldset>
                                    </div>
                                    <div class="checkbox-wrap">
                                        <input type="checkbox" class="tf-check style-5" id="check-order">
                                        <label for="check-order" class="label text-black text-body-4">
                                            Save this information for next time
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="box-ip-shiping">
                                <p class="title text-black fw-medium">
                                    Shipping method
                                </p>
                                <div class="enter-your-ship">
                                    <p class="cl-gray-60 fw-medium lh-20">
                                        Enter your shipping address to view available shipping methods.
                                    </p>
                                </div>
                            </div>
                            <div class="box-ip-payment">
                                <div class="box-title d-grid">
                                    <p class="text-body-2 text-black fw-800 lh-22">
                                        DELIVERY
                                    </p>
                                    <p class="desc cl-gray-60 text-body-4">
                                        All transactions are secure and encrypted.
                                    </p>
                                </div>
                                <div class="payment-body">
                                    <div class="payment-head">
                                        <span class="text-black fw-medium text-body-4">
                                            Credit card
                                        </span>
                                        <div class="ic d-flex">
                                            <svg width="38" height="24" viewBox="0 0 38 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink">
                                                <rect width="38" height="24" fill="url(#pattern0_3090_1650)" />
                                                <defs>
                                                    <pattern id="pattern0_3090_1650"
                                                        patternContentUnits="objectBoundingBox" width="1" height="1">
                                                        <use xlink:href="#image0_3090_1650"
                                                            transform="scale(0.0263158 0.0416667)" />
                                                    </pattern>
                                                    <image id="image0_3090_1650" width="38" height="24"
                                                        preserveAspectRatio="none"
                                                        xlink:href="data:image/png;base64,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" />
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="wrap-content">
                                        <div class="form-content">
                                            <fieldset class="tf-field-2">
                                                <input class="style-line-2" type="text"
                                                    placeholder="Apartment, suite, etc. ( optional ) " required="">
                                                <i class="icon icon-lock"></i>
                                            </fieldset>
                                            <div class="tf-grid-layout sm-col-2">
                                                <fieldset>
                                                    <input class="style-line-2" type="date"
                                                        placeholder="Expiration date (MM / YY )" required="">
                                                </fieldset>
                                                <fieldset class="tf-field-2">
                                                    <input class="style-line-2" type="text" placeholder="Security code"
                                                        required="">
                                                    <i class="icon icon-help-circle"></i>
                                                </fieldset>
                                            </div>
                                            <fieldset>
                                                <input class="style-line-2" type="number" placeholder="Name on card"
                                                    required="">
                                            </fieldset>
                                        </div>
                                        <div class="checkbox-wrap">
                                            <input type="checkbox" class="tf-check style-5" id="check-order">
                                            <label for="check-order" class="label text-black text-body-4">
                                                Use shipping address as billing address
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" class="btn-wrap btn-1 animate-btn w-100">
                                <span class="fw-800 text-body-4 font-barlow">
                                    PAY NOW
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
                <div class="col-right">
                    <div class="content-right">
                        <div class="box-your-order">
                            <ul class="list-order-product">
                                <li class="order-item">
                                    <a href="#" class="img-prd">
                                        <div class="image">
                                            <img loading="lazy" width="92" height="92"
                                                src="https://placehold.co/100x100" alt="Image">
                                        </div>
                                        <span class="number-count text-body-4 fw-medium">1</span>
                                    </a>
                                    <div class="info-and-price">
                                        <div class="info-prd">
                                            <a href="#" class="name text-black link-2">
                                                Ozark Trail 8P Family Tent
                                            </a>
                                            <p class="type cl-gray-60 fw-medium text-caption">
                                                Green & Gray
                                            </p>
                                        </div>
                                        <p class="price-prd fw-800 lh-20 text-black font-barlow">
                                            $99.00
                                        </p>
                                    </div>
                                </li>
                                <li class="order-item">
                                    <a href="#" class="img-prd">
                                        <div class="image">
                                            <img loading="lazy" width="92" height="92"
                                                src="https://placehold.co/100x100" alt="Image">
                                        </div>
                                        <span class="number-count text-body-4 fw-medium">1</span>
                                    </a>
                                    <div class="info-and-price">
                                        <div class="info-prd">
                                            <a href="#" class="name text-black link-2">
                                                Burner Propane Camping
                                            </a>
                                            <p class="type cl-gray-60 fw-medium text-caption">
                                                Green & Gray
                                            </p>
                                        </div>
                                        <p class="price-prd fw-800 lh-20 text-black font-barlow">
                                            $129.00
                                        </p>
                                    </div>
                                </li>
                            </ul>
                            <form class="form-discount">
                                <fieldset class="w-100">
                                    <input class="style-line-2" type="text" placeholder="Discount code" required>
                                </fieldset>
                                <button type="submit" class="action-submit btn-wrap animate-btn">
                                    <span class="fw-medium text-body-4">
                                        Apply
                                    </span>
                                </button>
                            </form>
                            <ul class="list-total">
                                <li class="total-item cl-dark-90 fw-medium text-body-4">
                                    <p class="total-sub">
                                        Subtotal
                                        <span class="dot-square"></span>
                                        3 items
                                    </p>
                                    <span>
                                        $228.00
                                    </span>
                                </li>
                                <li class="total-item cl-dark-90 fw-medium text-body-4">
                                    <p class="total-sub">
                                        Shipping
                                        <i class="icon icon-help-circle fs-16"></i>
                                    </p>
                                    <span class="text-caption cl-gray-60 fw-medium">
                                        Enter shipping address
                                    </span>
                                </li>
                                <li class="total-item last-total fw-800 text-black text-body-1 font-barlow">
                                    <p>
                                        ESTIMATED TOTAL
                                    </p>
                                    <span class="price">
                                        <span class="text-caption fw-medium cl-gray-60 font-main">
                                            USD
                                        </span>
                                        $228.00
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
        <!-- /Shop Checkout -->
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