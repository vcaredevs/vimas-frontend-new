<template>
     <section class="page">
        <div class="page__wrapper">
 <!-- Navbar -->
 <div class="d-flex justify-content-center align-items-center head-start  text-center" >
    <img src="../assets/images/Trichella Logo-02 2.png" alt="">
 </div>

<!--------checkout section start------------>
<section class="check-sec">
    <div class="container my-5">
        <div class="checkout-title">CHECK OUT</div>
        
        <div class="row mt-4">
            <!-- Delivery Info -->
            <div class="col-lg-7">
                <div class="card1 mb-4">
                    <div class="delivery-info">
                        <h5>Delivery Info</h5>


                        <hr>
                        <div class="d-flex">
                            <div class="address-card">
                                <h6>Add 1</h6>
                                <p>Durga V<br>12, Prince info park<br>Ambit, Sai nagar,<br>Ambattur Estate<br>Chennai, 600058<br>Ph: 9790488818</p>
                            </div>
                            <div class="add-new-address">
                                <p><span class="add-address-plus">+</span><br>Add new address</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
    
                <!-- Payment Details -->
                <div class="card1 ">
                    <div class="payment-details">
                        <h5>Payment Details</h5>
                        <hr>

                        <div class="payment-option d-flex align-items-center">
                            <input type="radio" name="payment" id="razorpay" checked>
                            <label for="razorpay" class="ms-3">
                                Razorpay Secure <span class="text-muted">Free Shipping above Rs.299.00</span>
                            </label>
                        </div>
                        <div class="payment-option d-flex align-items-center">
                            <input type="radio" name="payment" id="cod">
                            <label for="cod" class="ms-3">
                                Cash on delivery <span class="text-muted">Delivery Charges: Rs.99.00</span>
                            </label>
                        </div>
                    </div>
                </div>
    
            </div>
    
            <!-- Order Summary -->
            <div class="col-lg-5">
                <div class="card1 h-100">
                    <div class="order-summary">
                        <h5>Order Summary</h5>
                        <hr>
                        <div class="d-flex align-items-center mt-3">
                            <img src="../assets/images/product/product11.png" alt="Product Image">
                            <div class="ms-3">
                                <strong>Scalp Ezy Shampoo</strong><br>
                                Qty: 1<br>
                                ₹ 450
                            </div>
                        </div>
                        <hr>
                        <div class="d-flex align-items-center mt-3">
                            <img src="../assets/images/product/product12.png" alt="Product Image">
                            <div class="ms-3">
                                <strong>Nutrissence spray</strong><br>
                                Qty: 1<br>
                                ₹ 450
                            </div>
                        </div>
                        <hr>
    
                        <div class="mt-4 p-2 w-100 text-muted">
                            <div class="saving bg-light">You are saving <span>₹0</span> on this order</div> 
                        </div>
                        <div class="d-flex justify-content-center flex-column align-items-center">
                            <div class="d-flex justify-content-between mt-3">
                                <span>Sub Total</span>
                                <span>₹900</span>
                            </div>
                            <div class="d-flex justify-content-between">
                                <span>Shipping cost</span>
                                <span>₹0</span>
                            </div>
                            <div class="d-flex justify-content-between total-amount mt-3">
                                <strong>Total</strong>
                                <strong>₹900</strong>
                            </div>
                            <p style="width: 70%;">including all taxes</p>
                            <button class="pay-now-btn mt-4" id="payNow">Pay now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <a href="cart.html" class="back-to-cart mb-3">&lt; Back to cart</a>

</section>
<!------checkout section end------------->
 
  
  
        </div>
    </section>
</template>