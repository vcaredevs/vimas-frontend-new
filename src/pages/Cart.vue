<template>
    
<section class="page">
  <div class="page__wrapper">
<!--------cart section start---------->
<section class="cart-sec">
    <div class="container my-5">
        <h2 class="mb-4">Cart</h2>
        <div class="row align-items-center">
            <!-- Cart Items Table -->
            <div class="col-lg-8">
                <table class="table cart-table">
                    <thead>
                        <tr>
                            <th>PRODUCT</th>
                            <th>PRICE</th>
                            <th>QUANTITY</th>
                            <th>TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Cart Item 1 -->
                        <tr class="cart-inner">
                            <td class="d-flex align-items-center">
                                <img src="../assets/images/product/product12.png" alt="Product Image" class="cart-item-img me-3">
                                <div>
                                    <strong>Teloloc Hair Lotion</strong><br>
                                    <small class="p1">Skin Type: Oil</small><br>
                                    <small class="p1">Item Volume: 100 Millilitres</small>
                                </div>
                            </td>
                            <td>Rs. <span class="price">450.00</span></td>
                            <td>
                                <button class="quantity-btn" onclick="decreaseQuantity(this)">-</button>
                                <span class="quantity mx-2">2</span>
                                <button class="quantity-btn" onclick="increaseQuantity(this)">+</button>
                            </td>
                            <td>Rs. <span class="total">900.00</span> <a href="#" class="remove-link d-block mt-2">Remove</a></td>
                        </tr>
                        <!-- Cart Item 2 -->
                        <tr class="cart-inner">
                            <td class="d-flex align-items-center">
                                <img src="../assets/images/product/product11.png" alt="Product Image" class="cart-item-img me-3">
                                <div>
                                    <strong>Scalp Ezy Spray</strong><br>
                                    <small class="p1">Skin Type: Oil</small><br>
                                    <small class="p1">Item Volume: 100 Millilitres</small>
                                </div>
                            </td>
                            <td>Rs. <span class="price">450.00</span></td>
                            <td>
                                <button class="quantity-btn" onclick="decreaseQuantity(this)">-</button>
                                <span class="quantity mx-2">1</span>
                                <button class="quantity-btn" onclick="increaseQuantity(this)">+</button>
                            </td>
                            <td>Rs. <span class="total">450.00</span> <a href="#" class="remove-link d-block mt-2">Remove</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
    
            <!-- Order Summary -->
            <div class="col-lg-4">
                <div class="order-summary">
                    <h5>Order Summary</h5>
                  <div class="order-sec">
                    <div class="d-flex justify-content-between mb-2">
                        <span>Sub Total</span>
                        <span>Rs. <span id="subtotal">1350.00</span></span>
                    </div>
                    <div class="d-flex justify-content-between mb-3">
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                    <div class="apply-coupon mb-3">
                        <label for="coupon" class="form-label">Apply Coupon codes</label>
                        <div class="input-group">
                            <input type="text" id="coupon" class="form-control" placeholder="Enter coupon code">
                            <button class="btn">Apply</button>
                        </div>
                    </div>
                  </div>
                    <div class="total d-flex justify-content-between">
                        <strong>Total Payable</strong>
                        <strong>Rs. <span id="totalPayable">1350.00</span></strong>
                    </div>
                   
                </div>

               <router-link to="/checkout"> <button class="checkout-btn mt-4 text-white">Check Out</button></router-link>
            </div>
        </div>
    </div>


    
</section>
<!--------card section start---------->

<!-----------buy section start---------->
<div class="bestproduct-sec">
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="section_header1">
                <h2>People also bought</h2>
                <!-- <img src="../assets/images/heading-underline.png" class="heading_image"> -->
            </div>
            <div class="col-md-3">
                <div class="product-card">
                  <div class="product-image">
                    <!-- <span class="discount-badge">Save ₹100.00</span> -->
                    <img class="zoom_image" src="../assets/images/bestproduct.webp" alt="Scalp Ezy Lotion">
                  </div>
                  <div class="product-details">
                    <div class="product-rating"><svg role="presentation" fill="none" focusable="false"  width="20" height="20" class="rating__star icon icon-rating-star" viewBox="0 0 15 15">
                      <path d="M7.5 0L9.58587 5.2731L15 5.72949L10.875 9.44483L12.1353 15L7.5 12.0231L2.86475 15L4.125 9.44483L0 5.72949L5.41414 5.2731L7.5 0Z" fill="currentColor"></path>
                    </svg> 4.5 (100 reviews)</div>
                    <h5 class="product-title">Scalp Ezy Lotion</h5>
                    <p>Smooth | Nourish</p>
                    <div class="product-price">
                      <del>₹550</del> <span>₹450</span>
                    </div>
                      <button class="btn btn-dark mt-2">
                          <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.03857 2.29251C2.8508 2.22647 2.64448 2.23773 2.46501 2.32381C2.28554 2.40989 2.14761 2.56374 2.08157 2.75151C2.01553 2.93928 2.02679 3.1456 2.11287 3.32507C2.19895 3.50454 2.3528 3.64247 2.54057 3.70851L2.80257 3.79951C3.46957 4.03451 3.90857 4.18951 4.23157 4.34851C4.53457 4.49751 4.66857 4.61851 4.75657 4.74651C4.84657 4.87851 4.91657 5.06051 4.95657 5.42351C4.99657 5.80351 4.99757 6.29851 4.99757 7.03851V9.64051H20.7226C21.0526 7.98251 21.2076 7.14051 20.7746 6.57751C20.3306 6.00051 18.8136 6.00051 17.1286 6.00051H6.49057C6.48599 5.75401 6.47131 5.50781 6.44657 5.26251C6.39357 4.76551 6.27657 4.31251 5.99457 3.90051C5.71057 3.48451 5.33257 3.21851 4.89257 3.00151C4.48057 2.79951 3.95657 2.61551 3.33957 2.39851L3.03857 2.29251Z" fill="white"></path><path opacity="0.5" d="M20.2 12.1876L20.7 9.76362L20.724 9.64062H5C5 12.5816 5.063 13.5526 5.93 14.4666C6.796 15.3806 8.19 15.3806 10.98 15.3806H16.282C17.843 15.3806 18.624 15.3806 19.175 14.9306C19.727 14.4806 19.885 13.7166 20.2 12.1876Z" fill="white"></path><path d="M7.5 18C7.89782 18 8.27936 18.158 8.56066 18.4393C8.84196 18.7206 9 19.1022 9 19.5C9 19.8978 8.84196 20.2794 8.56066 20.5607C8.27936 20.842 7.89782 21 7.5 21C7.10218 21 6.72064 20.842 6.43934 20.5607C6.15804 20.2794 6 19.8978 6 19.5C6 19.1022 6.15804 18.7206 6.43934 18.4393C6.72064 18.158 7.10218 18 7.5 18ZM16.5 18C16.8978 18 17.2794 18.158 17.5607 18.4393C17.842 18.7206 18 19.1022 18 19.5C18 19.8978 17.842 20.2794 17.5607 20.5607C17.2794 20.842 16.8978 21 16.5 21C16.1022 21 15.7206 20.842 15.4393 20.5607C15.158 20.2794 15 19.8978 15 19.5C15 19.1022 15.158 18.7206 15.4393 18.4393C15.7206 18.158 16.1022 18 16.5 18Z" fill="white"></path></svg>
                              <div class="button-text">Add to cart</div>
                            </div>
                      </button> 
                  </div>
                </div>
              </div>
            
              <div class="col-md-3">
                <div class="product-card">
                  <div class="product-image">
                    <!-- <span class="discount-badge">Save ₹100.00</span> -->
                    <img class="zoom_image" src="../assets/images/bestproduct1.webp" alt="Scalp Ezy Hair Tonic">
                  </div>
                  <div class="product-details">
                    <div class="product-rating"><svg role="presentation" fill="none" focusable="false"  width="20" height="20" class="rating__star icon icon-rating-star" viewBox="0 0 15 15">
                      <path d="M7.5 0L9.58587 5.2731L15 5.72949L10.875 9.44483L12.1353 15L7.5 12.0231L2.86475 15L4.125 9.44483L0 5.72949L5.41414 5.2731L7.5 0Z" fill="currentColor"></path>
                    </svg> 4.5 (101 reviews)</div>
                    <h5 class="product-title">Scalp Ezy Hair Tonic</h5>
                    <p>Smooth | Nourish</p>
                    <div class="product-price">
                      <del>₹550</del> <span>₹450</span>
                    </div>
                    <button class="btn btn-dark mt-2">
                      <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.03857 2.29251C2.8508 2.22647 2.64448 2.23773 2.46501 2.32381C2.28554 2.40989 2.14761 2.56374 2.08157 2.75151C2.01553 2.93928 2.02679 3.1456 2.11287 3.32507C2.19895 3.50454 2.3528 3.64247 2.54057 3.70851L2.80257 3.79951C3.46957 4.03451 3.90857 4.18951 4.23157 4.34851C4.53457 4.49751 4.66857 4.61851 4.75657 4.74651C4.84657 4.87851 4.91657 5.06051 4.95657 5.42351C4.99657 5.80351 4.99757 6.29851 4.99757 7.03851V9.64051H20.7226C21.0526 7.98251 21.2076 7.14051 20.7746 6.57751C20.3306 6.00051 18.8136 6.00051 17.1286 6.00051H6.49057C6.48599 5.75401 6.47131 5.50781 6.44657 5.26251C6.39357 4.76551 6.27657 4.31251 5.99457 3.90051C5.71057 3.48451 5.33257 3.21851 4.89257 3.00151C4.48057 2.79951 3.95657 2.61551 3.33957 2.39851L3.03857 2.29251Z" fill="white"></path><path opacity="0.5" d="M20.2 12.1876L20.7 9.76362L20.724 9.64062H5C5 12.5816 5.063 13.5526 5.93 14.4666C6.796 15.3806 8.19 15.3806 10.98 15.3806H16.282C17.843 15.3806 18.624 15.3806 19.175 14.9306C19.727 14.4806 19.885 13.7166 20.2 12.1876Z" fill="white"></path><path d="M7.5 18C7.89782 18 8.27936 18.158 8.56066 18.4393C8.84196 18.7206 9 19.1022 9 19.5C9 19.8978 8.84196 20.2794 8.56066 20.5607C8.27936 20.842 7.89782 21 7.5 21C7.10218 21 6.72064 20.842 6.43934 20.5607C6.15804 20.2794 6 19.8978 6 19.5C6 19.1022 6.15804 18.7206 6.43934 18.4393C6.72064 18.158 7.10218 18 7.5 18ZM16.5 18C16.8978 18 17.2794 18.158 17.5607 18.4393C17.842 18.7206 18 19.1022 18 19.5C18 19.8978 17.842 20.2794 17.5607 20.5607C17.2794 20.842 16.8978 21 16.5 21C16.1022 21 15.7206 20.842 15.4393 20.5607C15.158 20.2794 15 19.8978 15 19.5C15 19.1022 15.158 18.7206 15.4393 18.4393C15.7206 18.158 16.1022 18 16.5 18Z" fill="white"></path></svg>
                          <div class="button-text">Add to cart</div>
                        </div>
                  </button> 
                  </div>
                </div>
              </div>
              
              <div class="col-md-3">
                <div class="product-card">
                  <div class="product-image">
                    <!-- <span class="discount-badge">Save ₹100.00</span> -->
                    <img class="zoom_image" src="../assets/images/bestproduct2.webp" alt="Scalp Ezy Oil">
                  </div>
                  <div class="product-details">
                    <div class="product-rating"><svg role="presentation" fill="none" focusable="false" width="20" height="20" class="rating__star icon icon-rating-star" viewBox="0 0 15 15">
                      <path d="M7.5 0L9.58587 5.2731L15 5.72949L10.875 9.44483L12.1353 15L7.5 12.0231L2.86475 15L4.125 9.44483L0 5.72949L5.41414 5.2731L7.5 0Z" fill="currentColor"></path>
                    </svg> 4.5 (105 reviews)</div>
                    <h5 class="product-title">Scalp Ezy Oil</h5>
                    <p>Smooth | Nourish</p>
                    <div class="product-price">
                      <del>₹550</del> <span>₹450</span>
                    </div>
                    <button class="btn btn-dark mt-2">
                      <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.03857 2.29251C2.8508 2.22647 2.64448 2.23773 2.46501 2.32381C2.28554 2.40989 2.14761 2.56374 2.08157 2.75151C2.01553 2.93928 2.02679 3.1456 2.11287 3.32507C2.19895 3.50454 2.3528 3.64247 2.54057 3.70851L2.80257 3.79951C3.46957 4.03451 3.90857 4.18951 4.23157 4.34851C4.53457 4.49751 4.66857 4.61851 4.75657 4.74651C4.84657 4.87851 4.91657 5.06051 4.95657 5.42351C4.99657 5.80351 4.99757 6.29851 4.99757 7.03851V9.64051H20.7226C21.0526 7.98251 21.2076 7.14051 20.7746 6.57751C20.3306 6.00051 18.8136 6.00051 17.1286 6.00051H6.49057C6.48599 5.75401 6.47131 5.50781 6.44657 5.26251C6.39357 4.76551 6.27657 4.31251 5.99457 3.90051C5.71057 3.48451 5.33257 3.21851 4.89257 3.00151C4.48057 2.79951 3.95657 2.61551 3.33957 2.39851L3.03857 2.29251Z" fill="white"></path><path opacity="0.5" d="M20.2 12.1876L20.7 9.76362L20.724 9.64062H5C5 12.5816 5.063 13.5526 5.93 14.4666C6.796 15.3806 8.19 15.3806 10.98 15.3806H16.282C17.843 15.3806 18.624 15.3806 19.175 14.9306C19.727 14.4806 19.885 13.7166 20.2 12.1876Z" fill="white"></path><path d="M7.5 18C7.89782 18 8.27936 18.158 8.56066 18.4393C8.84196 18.7206 9 19.1022 9 19.5C9 19.8978 8.84196 20.2794 8.56066 20.5607C8.27936 20.842 7.89782 21 7.5 21C7.10218 21 6.72064 20.842 6.43934 20.5607C6.15804 20.2794 6 19.8978 6 19.5C6 19.1022 6.15804 18.7206 6.43934 18.4393C6.72064 18.158 7.10218 18 7.5 18ZM16.5 18C16.8978 18 17.2794 18.158 17.5607 18.4393C17.842 18.7206 18 19.1022 18 19.5C18 19.8978 17.842 20.2794 17.5607 20.5607C17.2794 20.842 16.8978 21 16.5 21C16.1022 21 15.7206 20.842 15.4393 20.5607C15.158 20.2794 15 19.8978 15 19.5C15 19.1022 15.158 18.7206 15.4393 18.4393C15.7206 18.158 16.1022 18 16.5 18Z" fill="white"></path></svg>
                          <div class="button-text">Add to cart</div>
                        </div>
                  </button> 
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                  <div class="product-card">
                    <div class="product-image">
                      <!-- <span class="discount-badge">Save ₹100.00</span> -->
                      <img class="zoom_image" src="../assets/images/bestproduct1.webp" alt="Scalp Ezy Hair Tonic">
                    </div>
                    <div class="product-details">
                      <div class="product-rating"><svg role="presentation" fill="none" focusable="false"  width="20" height="20" class="rating__star icon icon-rating-star" viewBox="0 0 15 15">
                        <path d="M7.5 0L9.58587 5.2731L15 5.72949L10.875 9.44483L12.1353 15L7.5 12.0231L2.86475 15L4.125 9.44483L0 5.72949L5.41414 5.2731L7.5 0Z" fill="currentColor"></path>
                      </svg> 4.5 (101 reviews)</div>
                      <h5 class="product-title">Scalp Ezy Hair Tonic</h5>
                      <p>Smooth | Nourish</p>
                      <div class="product-price">
                        <del>₹550</del> <span>₹450</span>
                      </div>
                      <button class="btn btn-dark mt-2">
                        <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.03857 2.29251C2.8508 2.22647 2.64448 2.23773 2.46501 2.32381C2.28554 2.40989 2.14761 2.56374 2.08157 2.75151C2.01553 2.93928 2.02679 3.1456 2.11287 3.32507C2.19895 3.50454 2.3528 3.64247 2.54057 3.70851L2.80257 3.79951C3.46957 4.03451 3.90857 4.18951 4.23157 4.34851C4.53457 4.49751 4.66857 4.61851 4.75657 4.74651C4.84657 4.87851 4.91657 5.06051 4.95657 5.42351C4.99657 5.80351 4.99757 6.29851 4.99757 7.03851V9.64051H20.7226C21.0526 7.98251 21.2076 7.14051 20.7746 6.57751C20.3306 6.00051 18.8136 6.00051 17.1286 6.00051H6.49057C6.48599 5.75401 6.47131 5.50781 6.44657 5.26251C6.39357 4.76551 6.27657 4.31251 5.99457 3.90051C5.71057 3.48451 5.33257 3.21851 4.89257 3.00151C4.48057 2.79951 3.95657 2.61551 3.33957 2.39851L3.03857 2.29251Z" fill="white"></path><path opacity="0.5" d="M20.2 12.1876L20.7 9.76362L20.724 9.64062H5C5 12.5816 5.063 13.5526 5.93 14.4666C6.796 15.3806 8.19 15.3806 10.98 15.3806H16.282C17.843 15.3806 18.624 15.3806 19.175 14.9306C19.727 14.4806 19.885 13.7166 20.2 12.1876Z" fill="white"></path><path d="M7.5 18C7.89782 18 8.27936 18.158 8.56066 18.4393C8.84196 18.7206 9 19.1022 9 19.5C9 19.8978 8.84196 20.2794 8.56066 20.5607C8.27936 20.842 7.89782 21 7.5 21C7.10218 21 6.72064 20.842 6.43934 20.5607C6.15804 20.2794 6 19.8978 6 19.5C6 19.1022 6.15804 18.7206 6.43934 18.4393C6.72064 18.158 7.10218 18 7.5 18ZM16.5 18C16.8978 18 17.2794 18.158 17.5607 18.4393C17.842 18.7206 18 19.1022 18 19.5C18 19.8978 17.842 20.2794 17.5607 20.5607C17.2794 20.842 16.8978 21 16.5 21C16.1022 21 15.7206 20.842 15.4393 20.5607C15.158 20.2794 15 19.8978 15 19.5C15 19.1022 15.158 18.7206 15.4393 18.4393C15.7206 18.158 16.1022 18 16.5 18Z" fill="white"></path></svg>
                            <div class="button-text">Add to cart</div>
                          </div>
                    </button> 
                    </div>
                  </div>
                </div>
            <!-- <div class="text-center btn-view-all">
                <button class="btn btn-dark">View all products</button>
              </div> -->
        </div>
      </div>
</div>
<!--------buy section end------------->
</div>
</section>
</template>