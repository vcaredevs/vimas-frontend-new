<template>
  <section class="page">
    <div class="page__wrapper">
      <section class="details-sec" v-if="product">
        <div class="container">
          <div class="row align-items-center">
           <div class="col-lg-7 scrollable-section">
  <div class="row">

    <!-- BIG IMAGE -->
    <div class="col-lg-8">
      <div class="main-image">
        <img
          :src="activeImage"
          class="img-fluid"
        />
      </div>
    </div>

    <!-- THUMBNAILS -->
    <div class="col-lg-4">
      <div class="thumbnail-container">
        <img
          v-for="(img, index) in images"
          :key="index"
          :src="img"
          class="thumbnail"
          :class="{ active: index === activeIndex }"
          @click="setImage(index)"
        />
      </div>
    </div>

  </div>
</div>

            <!-- <div class="col-lg-7 scrollable-section">
              <div class="row">
              
                <div class="col-lg-8 mySlides-container">
                  <div
                    class="mySlides"
                    v-for="(img, index) in product.productImages"
                    :key="img.id"
                    v-show="slideIndex === index"
                  >
                    <img
                      :src="`${baseUrl}/storage${img}`"
                      style="width: 100%"
                    />
                  </div>
                </div>

            
                <div class="col-lg-4">
                  <div class="thumbnail-container">
                    <img
                      v-for="(img, index) in product.productImages"
                      :key="img.id"
                      class="demo cursor"
                      :class="{ active: slideIndex === index }"
                      :src="`${baseUrl}/storage${img}`"
                      @click="slideIndex = index"
                    />
                  </div>
                </div>
              </div>
            </div> -->

            <div class="col-lg-5">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">Home</li>
                <li class="breadcrumb-item">Best Sellers</li>
                <li class="breadcrumb-item active">
                  {{ product.product.name }}
                </li>
              </ol>

              <h3>{{ product.product.name }}</h3>
<p class="text-muted" v-html="product.product.short_description"></p>

            
              <div class="offer-zone">
                <span>Offer zone</span>
                <p>
                  <img
                    class="offer"
                    src="./assets/images/product/offer.png"
                  />Get 10% off on your first order
                  <strong class="stro">Use code: V6HAIR</strong>
                </p>
              </div>

              <div class="d-flex align-items-baseline my-3">
                <span class="price me-2"> ₹{{ price.original }} </span>
                <span class="discounted-price"> ₹{{ price.sale }} </span>
              </div>

              <div class="quant-sec mb-4">
                <label class="form-label">Quantity</label>
                <div class="input-group" style="width: 120px">
                  <button class="btn btn-outline-secondary" @click="decrement">
                    -
                  </button>
                  <input
                    type="number"
                    class="form-control text-center"
                    v-model="quantity"
                    min="1"
                  />
                  <button class="btn btn-outline-secondary" @click="increment">
                    +
                  </button>
                </div>
              </div>

              <div class="actions mb-3">
                <button class="btn btn-dark mt-2" @click="handleAddToCart(product)" >Add to cart</button>

                <button class="buybtn btn btn-dark mt-2">Buy now</button>
              </div>
               <div class="additional-options">
                    <a @click="addWishlist(product.product.id,'add')"><i class="bi bi-heart" ></i> Add to wishlist</a>
                    <a class="add-divider"></a>
                    <a href="#"><i class="bi bi-share"></i> Share this product</a>
                  </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Loader -->
      <div v-else class="text-center py-5">Loading product...</div>

      <!--------details section start------------->
      <!-- <section class="details-sec">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-7 scrollable-section">
                <div class="row">
                  <div class="col-lg-8 mySlides-container">
                  
                    <div class="mySlides">
                      <img src="../assets/images/product/v6product22.png" style="width:100%">
                    </div>
                  
                    <div class="mySlides">
                      <img src="../assets/images/product/v6product22.png" style="width:100%">
                    </div>
                  
                    <div class="mySlides">
                      <img src="../assets/images/product/v6product33.png" style="width:100%">
                    </div>
                      
                    <div class="mySlides">
                      <img src="../assets/images/product/v6product44.png" style="width:100%">
                    </div>
                  </div>
            
               
                  <div class="col-lg-4">
                    <div class="thumbnail-container">
                      <img class="demo cursor" src="../assets/images/product/v6product11.png" onclick="currentSlide(1)" alt="The Woods">
                      <img class="demo cursor" src="../assets/images/product/v6product22.png" onclick="currentSlide(2)" alt="Cinque Terre">
                      <img class="demo cursor" src="../assets/images/product/v6product33.png" onclick="currentSlide(3)" alt="Mountains and fjords">
                      <img class="demo cursor" src="../assets/images/product/v6product44.png" onclick="currentSlide(4)" alt="Northern Lights">
                    </div>
                  </div>
                </div>
              </div>
            <div class="col-lg-5">
                <div aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item"><a href="#">Home</a><i class="bi bi-chevron-right"></i></li>
                      <li class="breadcrumb-item"><a href="#">Best Sellers</a><i class="bi bi-chevron-right"></i></li>
                      <li class="breadcrumb-item active" aria-current="page">{{ product.product.name }}</li>
                    </ol>
                  </div>
                  <h3>{{ product.product.name }}</h3>
                  <p class="text-muted">Reduces Hair Fall | Strengthens Hair | Softens Hair</p>
                  <div class="underline d-flex align-items-center mb-3">
                    <span class="badge  text-dark me-2"><svg role="presentation" fill="none" focusable="false" width="20" height="20" class="rating__star icon icon-rating-star" viewBox="0 0 15 15">
                        <path d="M7.5 0L9.58587 5.2731L15 5.72949L10.875 9.44483L12.1353 15L7.5 12.0231L2.86475 15L4.125 9.44483L0 5.72949L5.41414 5.2731L7.5 0Z" fill="currentColor"></path>
                      </svg><svg role="presentation" fill="none" focusable="false" width="20" height="20" class="rating__star icon icon-rating-star" viewBox="0 0 15 15">
                        <path d="M7.5 0L9.58587 5.2731L15 5.72949L10.875 9.44483L12.1353 15L7.5 12.0231L2.86475 15L4.125 9.44483L0 5.72949L5.41414 5.2731L7.5 0Z" fill="currentColor"></path>
                      </svg><svg role="presentation" fill="none" focusable="false" width="20" height="20" class="rating__star icon icon-rating-star" viewBox="0 0 15 15">
                        <path d="M7.5 0L9.58587 5.2731L15 5.72949L10.875 9.44483L12.1353 15L7.5 12.0231L2.86475 15L4.125 9.44483L0 5.72949L5.41414 5.2731L7.5 0Z" fill="currentColor"></path>
                      </svg><svg role="presentation" fill="none" focusable="false" width="20" height="20" class="rating__star icon icon-rating-star" viewBox="0 0 15 15">
                        <path d="M7.5 0L9.58587 5.2731L15 5.72949L10.875 9.44483L12.1353 15L7.5 12.0231L2.86475 15L4.125 9.44483L0 5.72949L5.41414 5.2731L7.5 0Z" fill="currentColor"></path>
                      </svg><svg role="presentation" fill="none" focusable="false" width="20" height="20" class="rating__star icon icon-rating-star" viewBox="0 0 15 15">
                        <path d="M7.5 0L9.58587 5.2731L15 5.72949L10.875 9.44483L12.1353 15L7.5 12.0231L2.86475 15L4.125 9.44483L0 5.72949L5.41414 5.2731L7.5 0Z" fill="currentColor"></path>
                      </svg></span>
                    <span class="spenter">4.68 (100 reviews)</span>
                  </div>
                  <div class="offer-zone">
                    <span>Offer zone</span>
                    <p><img class="offer" src="./assets/images/product/offer.png" />Get 10% off on your first order <strong class="stro">Use code: V6HAIR</strong></p>
                  </div>
                  <div class="d-flex align-items-baseline my-3">
                    <span class="price me-2">₹450.00</span>
                    <span class="discounted-price">₹350.00</span>
                  </div>
                  <div class="quant-sec mb-4">
                    <label for="quantity" class="form-label">Quantity</label>
                    <div class="input-group" style="width: 120px;">
                      <button class="btn btn-outline-secondary qun_min" type="button" onclick="decrementQuantity()">-</button>
                      <input type="number" id="quantity" class="form-control text-center" value="1" min="1">
                      <button class="btn btn-outline-secondary qun_add" type="button" onclick="incrementQuantity()">+</button>
                    </div>
                  </div>
                  <div class="actions mb-3">
                    <button class="btn btn-dark mt-2">
                        <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.03857 2.29251C2.8508 2.22647 2.64448 2.23773 2.46501 2.32381C2.28554 2.40989 2.14761 2.56374 2.08157 2.75151C2.01553 2.93928 2.02679 3.1456 2.11287 3.32507C2.19895 3.50454 2.3528 3.64247 2.54057 3.70851L2.80257 3.79951C3.46957 4.03451 3.90857 4.18951 4.23157 4.34851C4.53457 4.49751 4.66857 4.61851 4.75657 4.74651C4.84657 4.87851 4.91657 5.06051 4.95657 5.42351C4.99657 5.80351 4.99757 6.29851 4.99757 7.03851V9.64051H20.7226C21.0526 7.98251 21.2076 7.14051 20.7746 6.57751C20.3306 6.00051 18.8136 6.00051 17.1286 6.00051H6.49057C6.48599 5.75401 6.47131 5.50781 6.44657 5.26251C6.39357 4.76551 6.27657 4.31251 5.99457 3.90051C5.71057 3.48451 5.33257 3.21851 4.89257 3.00151C4.48057 2.79951 3.95657 2.61551 3.33957 2.39851L3.03857 2.29251Z" fill="white"></path><path opacity="0.5" d="M20.2 12.1876L20.7 9.76362L20.724 9.64062H5C5 12.5816 5.063 13.5526 5.93 14.4666C6.796 15.3806 8.19 15.3806 10.98 15.3806H16.282C17.843 15.3806 18.624 15.3806 19.175 14.9306C19.727 14.4806 19.885 13.7166 20.2 12.1876Z" fill="white"></path><path d="M7.5 18C7.89782 18 8.27936 18.158 8.56066 18.4393C8.84196 18.7206 9 19.1022 9 19.5C9 19.8978 8.84196 20.2794 8.56066 20.5607C8.27936 20.842 7.89782 21 7.5 21C7.10218 21 6.72064 20.842 6.43934 20.5607C6.15804 20.2794 6 19.8978 6 19.5C6 19.1022 6.15804 18.7206 6.43934 18.4393C6.72064 18.158 7.10218 18 7.5 18ZM16.5 18C16.8978 18 17.2794 18.158 17.5607 18.4393C17.842 18.7206 18 19.1022 18 19.5C18 19.8978 17.842 20.2794 17.5607 20.5607C17.2794 20.842 16.8978 21 16.5 21C16.1022 21 15.7206 20.842 15.4393 20.5607C15.158 20.2794 15 19.8978 15 19.5C15 19.1022 15.158 18.7206 15.4393 18.4393C15.7206 18.158 16.1022 18 16.5 18Z" fill="white"></path></svg>
                            <div class="button-text">Add to cart</div>
                          </div>
                    </button> 
                    <button class="buybtn btn btn-dark mt-2">
                        <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.03857 2.29251C2.8508 2.22647 2.64448 2.23773 2.46501 2.32381C2.28554 2.40989 2.14761 2.56374 2.08157 2.75151C2.01553 2.93928 2.02679 3.1456 2.11287 3.32507C2.19895 3.50454 2.3528 3.64247 2.54057 3.70851L2.80257 3.79951C3.46957 4.03451 3.90857 4.18951 4.23157 4.34851C4.53457 4.49751 4.66857 4.61851 4.75657 4.74651C4.84657 4.87851 4.91657 5.06051 4.95657 5.42351C4.99657 5.80351 4.99757 6.29851 4.99757 7.03851V9.64051H20.7226C21.0526 7.98251 21.2076 7.14051 20.7746 6.57751C20.3306 6.00051 18.8136 6.00051 17.1286 6.00051H6.49057C6.48599 5.75401 6.47131 5.50781 6.44657 5.26251C6.39357 4.76551 6.27657 4.31251 5.99457 3.90051C5.71057 3.48451 5.33257 3.21851 4.89257 3.00151C4.48057 2.79951 3.95657 2.61551 3.33957 2.39851L3.03857 2.29251Z" fill="white"></path><path opacity="0.5" d="M20.2 12.1876L20.7 9.76362L20.724 9.64062H5C5 12.5816 5.063 13.5526 5.93 14.4666C6.796 15.3806 8.19 15.3806 10.98 15.3806H16.282C17.843 15.3806 18.624 15.3806 19.175 14.9306C19.727 14.4806 19.885 13.7166 20.2 12.1876Z" fill="white"></path><path d="M7.5 18C7.89782 18 8.27936 18.158 8.56066 18.4393C8.84196 18.7206 9 19.1022 9 19.5C9 19.8978 8.84196 20.2794 8.56066 20.5607C8.27936 20.842 7.89782 21 7.5 21C7.10218 21 6.72064 20.842 6.43934 20.5607C6.15804 20.2794 6 19.8978 6 19.5C6 19.1022 6.15804 18.7206 6.43934 18.4393C6.72064 18.158 7.10218 18 7.5 18ZM16.5 18C16.8978 18 17.2794 18.158 17.5607 18.4393C17.842 18.7206 18 19.1022 18 19.5C18 19.8978 17.842 20.2794 17.5607 20.5607C17.2794 20.842 16.8978 21 16.5 21C16.1022 21 15.7206 20.842 15.4393 20.5607C15.158 20.2794 15 19.8978 15 19.5C15 19.1022 15.158 18.7206 15.4393 18.4393C15.7206 18.158 16.1022 18 16.5 18Z" fill="white"></path></svg>
                            <div class="button-text">Buy now</div>
                          </div>
                    </button> 
                  </div>
                  <div class="additional-options">
                    <a href="#"><i class="bi bi-heart"></i> Add to wishlist</a>
                    <a class="add-divider"></a>
                    <a href="#"><i class="bi bi-share"></i> Share this product</a>
                  </div>
            </div>
        </div>
          </div>
</section> -->

      <!--------details section end----------------->

      <!-------content section start------->
        <section class="content-sec">
            <div class="container">
            <div class="row">
                <div class="col-lg-4">
                <div class="section-item"  :class="{ active: openSections.description }"
  @click="toggleSection('description')">
                    <h4>
                    Description
                    <span class="toggle-icon"
                        ><i class="bi bi-chevron-down"></i
                    ></span>
                    </h4>
                    <div
    class="description-text"
      :class="{ expanded: openSections.description }"
    v-html="product?.product?.description"
    ></div>

                </div>
                </div>
                <div class="col-lg-4">
                <div class="section-item"  :class="{ active: openSections.description }"
  @click="toggleSection('description')">
                    <h4>
                    Benefits
                    <span class="toggle-icon"
                        ><i class="bi bi-chevron-down"></i
                    ></span>
                    </h4>
                    <div
    class="description-text"
      :class="{ expanded: openSections.description }"
    v-html="product?.product?.description"
    ></div>

                </div>
                </div>
                 <div class="col-lg-4">
               <div
  class="section-item"
  :class="{ active: openSections.ingredients }"
  @click="toggleSection('ingredients')"
>
  <h4>
    Ingredients
    <span class="toggle-icon">
      <i
        class="bi"
        :class="openSections.ingredients ? 'bi-chevron-up' : 'bi-chevron-down'"
      ></i>
    </span>
  </h4>

  <div
    class="description-text"
    :class="{ expanded: openSections.ingredients }"
    v-html="product?.product?.ingredients"
  ></div>
</div>

                </div>
            </div>
            </div>
        </section>
      <!-------content section end------->

      <!----------how section start----------->
      <section class="how-sec">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <div class="row align-items-center">
                <div class="col-lg-6">
                  <img src="../assets/images/product/v6-use.png" />
                </div>
                <div class="col-lg-6">
                  <div class="px-lg-4">
                    <div class="how-des">
                      <h4>How to use?</h4>
                   <div
  class="description-text"
  :class="{ expanded: isOpen }"
  v-html="product?.product?.howtouse"
></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!----------how section end----------->

      <!---------related products section start---------->
      <section class="related-sec">
        <div class="container">
          <div class="row">
            <div class="section_header">
              <h2>Related Products</h2>
              <img
                src="../assets/images/heading-underline.png"
                class="heading_image"
              />
            </div>
          </div>
         <div class="row justify-content-center">
          
          <div class="col-md-3 "   v-for="product in limitedProducts"  :key="product.id">
            <div class="product-card">
              <div class="product-image">
               
              <router-link :to="product.slug?{name: 'ProductDetail',params :{slug:product.slug.key}}:''">  <img class="zoom_image" :src="image_url+product.image" :alt="product.name" ></router-link>
              </div>
              <button @click="addToCart(product)" class="btn btn-dark mt-2" style="background-color: #09302a !important;">
                <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.03857 2.29251C2.8508 2.22647 2.64448 2.23773 2.46501 2.32381C2.28554 2.40989 2.14761 2.56374 2.08157 2.75151C2.01553 2.93928 2.02679 3.1456 2.11287 3.32507C2.19895 3.50454 2.3528 3.64247 2.54057 3.70851L2.80257 3.79951C3.46957 4.03451 3.90857 4.18951 4.23157 4.34851C4.53457 4.49751 4.66857 4.61851 4.75657 4.74651C4.84657 4.87851 4.91657 5.06051 4.95657 5.42351C4.99657 5.80351 4.99757 6.29851 4.99757 7.03851V9.64051H20.7226C21.0526 7.98251 21.2076 7.14051 20.7746 6.57751C20.3306 6.00051 18.8136 6.00051 17.1286 6.00051H6.49057C6.48599 5.75401 6.47131 5.50781 6.44657 5.26251C6.39357 4.76551 6.27657 4.31251 5.99457 3.90051C5.71057 3.48451 5.33257 3.21851 4.89257 3.00151C4.48057 2.79951 3.95657 2.61551 3.33957 2.39851L3.03857 2.29251Z" fill="white"></path><path opacity="0.5" d="M20.2 12.1876L20.7 9.76362L20.724 9.64062H5C5 12.5816 5.063 13.5526 5.93 14.4666C6.796 15.3806 8.19 15.3806 10.98 15.3806H16.282C17.843 15.3806 18.624 15.3806 19.175 14.9306C19.727 14.4806 19.885 13.7166 20.2 12.1876Z" fill="white"></path><path d="M7.5 18C7.89782 18 8.27936 18.158 8.56066 18.4393C8.84196 18.7206 9 19.1022 9 19.5C9 19.8978 8.84196 20.2794 8.56066 20.5607C8.27936 20.842 7.89782 21 7.5 21C7.10218 21 6.72064 20.842 6.43934 20.5607C6.15804 20.2794 6 19.8978 6 19.5C6 19.1022 6.15804 18.7206 6.43934 18.4393C6.72064 18.158 7.10218 18 7.5 18ZM16.5 18C16.8978 18 17.2794 18.158 17.5607 18.4393C17.842 18.7206 18 19.1022 18 19.5C18 19.8978 17.842 20.2794 17.5607 20.5607C17.2794 20.842 16.8978 21 16.5 21C16.1022 21 15.7206 20.842 15.4393 20.5607C15.158 20.2794 15 19.8978 15 19.5C15 19.1022 15.158 18.7206 15.4393 18.4393C15.7206 18.158 16.1022 18 16.5 18Z" fill="white"></path></svg>
                    <div class="button-text" >Add to cart</div>
                  </div>
            </button> 
              <div class="product-details">
                <div class="product-rating"><svg role="presentation" fill="none" focusable="false"  width="20" height="20" class="rating__star icon icon-rating-star" viewBox="0 0 15 15">
                  <path d="M7.5 0L9.58587 5.2731L15 5.72949L10.875 9.44483L12.1353 15L7.5 12.0231L2.86475 15L4.125 9.44483L0 5.72949L5.41414 5.2731L7.5 0Z" fill="currentColor"></path>
                </svg> 4.5 (100 reviews)</div>
                <h5 class="product-title">{{ product.name }}</h5>
                <p>Smooth | Nourish</p>
                <div class="product-price">
                  <del>{{ product.original_price }}</del> <span>{{ product.front_sale_price }}</span>
                </div>
                  
              </div>
            </div>
          </div>
        
        </div>
        </div>
      </section>
      <!---------related products section end---------->
      <!------strip section start--------->
      <section class="promo-banner d-flex align-items-center">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-5">
              <div class="content">
                <h5>Existing Deals on</h5>
                <h2>Psoriasis Care Kit</h2>
                <p>
                  Ultrices gravida dictum fusce ut placerat orci. Accumsan lacus
                  vel facilisis volutpat est velit egestas. Vehicula ipsum a
                  arcu cursus.
                </p>
                <p class="btn-product">
                  <button class="btn btn-light">Shop Now</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-----strip section end-------------->

      <!-------customer reviews section start----------->
      <section class="customer-sec">
        <div class="container">
          <div class="section_header">
            <h2>Customer Reviews</h2>
            <img
              src="./assets/images/heading-underline.png"
              class="heading_image"
            />
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-8 colmebt">
              <div class="row align-items-center">
                <div class="col-lg-3">
                  <div class="customer-rate">
                    <div class="rating">
                      <span>⭐️⭐️⭐️⭐️⭐️</span> <strong>4.75 out of 5</strong>
                    </div>
                    <small>Based on the reviews</small>
                  </div>
                </div>
                <div class="col-lg-1">
                  <div class="col-divider"></div>
                </div>
                <div class="col-lg-4">
                  <div class="review__wrapper">
                    <div class="single__progress__bar">
                      <div class="rating__text">⭐⭐⭐⭐⭐</div>
                      <div class="progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style="width: 100%"
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span class="rating-value">10</span>
                    </div>
                    <div class="single__progress__bar">
                      <div class="rating__text">⭐⭐⭐⭐</div>
                      <div class="progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style="width: 80%"
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span class="rating-value">5</span>
                    </div>
                    <div class="single__progress__bar">
                      <div class="rating__text">⭐⭐⭐</div>
                      <div class="progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style="width: 60%"
                          aria-valuenow="60"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span class="rating-value">3</span>
                    </div>
                    <div class="single__progress__bar">
                      <div class="rating__text">⭐⭐</div>
                      <div class="progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style="width: 30%"
                          aria-valuenow="30"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span class="rating-value">2</span>
                    </div>
                    <div class="single__progress__bar">
                      <div class="rating__text">⭐</div>
                      <div class="progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style="width: 10%"
                          aria-valuenow="10"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span class="rating-value">1</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-1">
                  <div class="col-divider1"></div>
                </div>
                <div class="col-lg-3">
                  <button class="btn write-review-btn">Write a review</button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="d-flex drett justify-content-between align-items-center mt-4 mb-3"
          >
            <div class="dropdown">
              <button
                class="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                Most recent
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Most recent</a></li>
                <li><a class="dropdown-item" href="#">Highest rating</a></li>
                <li><a class="dropdown-item" href="#">Lowest rating</a></li>
              </ul>
            </div>
          </div>
          <div class="row">
            <!-- Card 1 -->
            <div class="col-md-6">
              <div class="review-card p-3">
                <div class="rating">⭐️⭐️⭐️⭐️⭐️</div>
                <div class="d-flex justify-content-between">
                  <div class="d-flex">
                    <span class="profile-icon me-2">👤</span>
                    <div>
                      <h6>Leela</h6>
                      <p class="mb-1 review-title">Goodbye Dryness</p>
                    </div>
                  </div>
                  <span class="review-date">06/04/24</span>
                </div>
                <p class="review-text">
                  I've been using V6 hair lotion as a part of my haircare
                  routine and now my hair feels smooth and soft. This duo
                  cleanses scalp and rejuvenates it and keeps my hair on point.
                </p>
              </div>
            </div>
            <!-- Card 2 -->
            <div class="col-md-6">
              <div class="review-card p-3">
                <div class="rating">⭐️⭐️⭐️⭐️⭐️</div>
                <div class="d-flex justify-content-between">
                  <div class="d-flex">
                    <span class="profile-icon me-2">👤</span>
                    <div>
                      <h6>Hema</h6>
                      <p class="mb-1 review-title">Excellent Product</p>
                    </div>
                  </div>
                  <span class="review-date">06/04/24</span>
                </div>
                <p class="review-text">
                  I've been using V6 hair lotion as a part of my haircare
                  routine and now my hair feels smooth and soft.
                </p>
              </div>
            </div>
            <!-- Card 3 -->
            <div class="col-md-6">
              <div class="review-card p-3">
                <div class="rating">⭐️⭐️⭐️⭐️⭐️</div>
                <div class="d-flex justify-content-between">
                  <div class="d-flex">
                    <span class="profile-icon me-2">👤</span>
                    <div>
                      <h6>Uma</h6>
                      <p class="mb-1 review-title">Goodbye Dryness</p>
                    </div>
                  </div>
                  <span class="review-date">06/04/24</span>
                </div>
                <p class="review-text">Excellent product</p>
                <img
                  src="./assets/images/product/product11.png"
                  alt="Product image"
                />
              </div>
            </div>
            <!-- Card 4 -->
            <div class="col-md-6">
              <div class="review-card p-3">
                <div class="rating">⭐️⭐️⭐️⭐️⭐️</div>
                <div class="d-flex justify-content-between">
                  <div class="d-flex">
                    <span class="profile-icon me-2">👤</span>
                    <div>
                      <h6>Leela</h6>
                      <p class="mb-1 review-title">Nice product</p>
                    </div>
                  </div>
                  <span class="review-date">06/04/24</span>
                </div>
                <p class="review-text">
                  This duo cleanses scalp and rejuvenates it and keeps my hair
                  on point.
                </p>
                <img
                  src="./assets/images/product/product12.png"
                  alt="Product image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-------customer reviews section end----------->

      <!------shipping section start----------->
      <section class="shipping-sec">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <div class="row">
                <div class="col-lg-3">
                  <div class="ship-des">
                    <img src="../assets/images/shipp1.webp" />
                    <h4>Free shipping</h4>
                    <p>Free shipping for orders above 500</p>
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="ship-des">
                    <img src="../assets/images/shipp.webp" />
                    <h4>Return</h4>
                    <p>within 10 days exchange</p>
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="ship-des">
                    <img src="../assets/images/shipp2.webp" />
                    <h4>Flexible Payment</h4>
                    <p>pay with multiple credit cards</p>
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="ship-des">
                    <img src="../assets/images/shipp3.webp" />
                    <h4>Online Support</h4>
                    <p>7 days a week</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!------shipping section end----------->
    </div>
  </section>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getProductDetails, getProducts } from "../services/apiService";
import { image_url } from "../config/api";
import { addOrUpdateCart, addToCart } from "../services/cartService";
import { useUserStore } from "../assets/js/store";
 const {addDeleteWishlist  } = useUserStore();
const route = useRoute();
const slug = route.params.slug;
const product = ref(null);
const imageUrl = "http://127.0.0.1:8000";
 const products = ref([]);
const slideIndex = ref(0);
const quantity = ref(1);
const productList=ref([]);
const openSections = ref({
  description: false,
  benefits: false,
  ingredients: false,
})
const increment = () => quantity.value++;
const decrement = () => {
  if (quantity.value > 1) quantity.value--;
};
const handleAddToCart = (product) => {
  addOrUpdateCart(product, quantity.value);
};


async function fetchProducById() {
  try {
    const res = await getProductDetails(slug);
    
    product.value = res.data.data ?? res.data;
    
    console.log(" product.value", product.value);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

async function fetchProducts(page = 1,param=null) {
  try {

    const result = await getProducts(page,param);
   
  productList.value = result.data.data ?? result.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
const limitedProducts = computed(() => {
  return productList.value.slice(0, 4)
})
onMounted(() => {
  fetchProducById();
  fetchProducts()
});
const price = computed(() => {
  if (product.value?.productVariation) {
    return {
      original: product.value.productVariation.original_price,
      sale: product.value.productVariation.front_sale_price,
    };
  }

  return {
    original: product.value?.product?.original_price,
    sale: product.value?.product?.front_sale_price,
  };
});


const activeIndex = ref(0)
const images = computed(() => {
  if (!product.value?.productImages?.length) return []

  return product.value.productImages.map(img =>
    `${imageUrl}/storage/${img.split('#')[0]}`
  )
})
const activeImage = computed(() => images.value[activeIndex.value])

function setImage(index) {
  activeIndex.value = index
}

function toggleSection(section) {
  openSections.value[section] = !openSections.value[section]
}
  const addWishlist = (id, type) => {
     addDeleteWishlist(id, type);
    };
</script>
<style>
.demo {
  opacity: 0.6;
  cursor: pointer;
}
.demo.active {
  opacity: 1;
  border: 2px solid #000;
}
.main-image img {
  width: 100%;
  border-radius: 12px;
}

.thumbnail-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
@media (max-width: 768px) {
    .thumbnail-container {
        flex-direction: row;
    }}
.thumbnail {
  width: 130px;
  cursor: pointer;
  opacity: 0.6;
  border-radius: 10px;
  transition: 0.3s;
}

.thumbnail:hover,
.thumbnail.active {
  opacity: 1;
  border: 2px solid #1b5e20;
}
.section-item p {
  margin-top: 10px;
}

.section-item {
  cursor: pointer;
}
.description-text {
  display: -webkit-box;
  -webkit-line-clamp: 2;     
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: all 0.3s ease;
}

.description-text.expanded {
  -webkit-line-clamp: unset;
}

</style>
