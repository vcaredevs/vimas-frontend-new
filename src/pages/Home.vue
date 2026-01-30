<template>
  <section class="page">
    <div class="page__wrapper">
      <!-- Hero Section -->
      <section class="hero-section text-center text-lg-start">
        <div id="carouselExampleIndicators" class="carousel slide topbanner">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div
                class="container d-flex flex-column flex-lg-row align-items-center"
              >
                <div class="col-lg-6">
                  <div class="hero-des text-center">
                    <h1 class="display-4 fw-bold">Products made with love.</h1>
                    <h2 class="lead text-muted">
                      That’s what you get from us.
                    </h2>
                    <p class="text-secondary text-center">
                      sapien gravida elit. ex scelerisque risus sit non. ac quam
                      nisl. Qu, commodo ipsum tincidunt dolor id dolor viverra
                      nisl.
                    </p>
                    <p class="btn btn-dark mt-3"><a>Shop now</a></p>
                  </div>
                </div>

                <div class="col-lg-6 text-center fade-in mt-5 mt-lg-0">
                  <img
                    src="../assets/images/v6-banner.png"
                    alt="Product Image"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div
                class="container d-flex flex-column flex-lg-row align-items-center"
              >
                <div class="col-lg-6">
                  <div class="hero-des text-center">
                    <h1 class="display-4 fw-bold">Products made with love.</h1>
                    <h2 class="lead text-muted">
                      That’s what you get from us.
                    </h2>
                    <p class="text-secondary text-center">
                      sapien gravida elit. ex scelerisque risus sit non. ac quam
                      nisl. Qu, commodo ipsum tincidunt dolor id dolor viverra
                      nisl.
                    </p>
                    <p class="btn btn-dark mt-3"><a>Shop now</a></p>
                  </div>
                </div>

                <div class="col-lg-6 text-center fade-in mt-5 mt-lg-0">
                  <img
                    src="../assets/images/v6-banner.png"
                    alt="Product Image"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div
                class="container d-flex flex-column flex-lg-row align-items-center"
              >
                <div class="col-lg-6">
                  <div class="hero-des text-center">
                    <h1 class="display-4 fw-bold">Products made with love.</h1>
                    <h2 class="lead text-muted">
                      That’s what you get from us.
                    </h2>
                    <p class="text-secondary text-center">
                      sapien gravida elit. ex scelerisque risus sit non. ac quam
                      nisl. Qu, commodo ipsum tincidunt dolor id dolor viverra
                      nisl.
                    </p>
                    <p class="btn btn-dark mt-3"><a>Shop now</a></p>
                  </div>
                </div>

                <div class="col-lg-6 text-center fade-in mt-5 mt-lg-0">
                  <img
                    src="../assets/images/v6-banner.png"
                    alt="Product Image"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <!-- Features Section -->
      <section class="bg-dark-gray text-white py-4">
        <div
          class="container d-flex flex-column flex-md-row justify-content-around text-center feature-icons"
        >
          <div
            v-for="(item, index) in features"
            :key="index"
            class="feature-item"
            :style="{ animationDelay: `${index * 0.2}s` }"
            ref="items"
          >
            <img :src="item.img" :alt="item.text" />
            <p class="fw-light">{{ item.text }}</p>
          </div>
        </div>

        <!-- <div class="container d-flex flex-column flex-md-row justify-content-around text-center feature-icons">
        <div>
            <img src="../assets/images/icon_1.webp" alt="Vegan Icon">
            <p class="fw-light">VEGAN</p>
        </div>
        <div>
            <img src="../assets/images/Group.webp" alt="Chemicals Free Icon">
            <p class="fw-light">CHEMICALS FREE</p>
        </div>
        <div>
            <img src="../assets/images/icon_3.webp" alt="Not Tested Icon">
            <p class="fw-light">NOT TESTED ON ANIMALS</p>
        </div>
        <div>
            <img src="../assets/images/icon_4.webp" alt="Paraben Free Icon">
            <p class="fw-light">PARABEN FREE</p>
        </div>
        <div>
            <img src="../assets/images/icon_5.webp" alt="Organic Icon">
            <p class="fw-light">% 100 ORGANIC</p>
        </div>
    </div> -->
      </section>

      <!----------Popular section start-------->
      <section class="popular-sec">
        <div class="bg-img-one">
          <img src="../assets/images/sec-3-1-bg.png" alt="" />
        </div>
        <div class="bg-img-two">
          <img src="../assets/images/sec-3-bg.png" alt="" />
        </div>
        <div class="container">
          <div class="row">
            <div class="section_header">
              <h2>Popular Categories</h2>
              <img
                src="../assets/images/heading-underline.png"
                class="heading_image"
              />
            </div>
          </div>
          <!-- <div class="categories_card_main">
            <div class="category_card"  v-for="(item,index) in categories"  :key="index"> 
        <router-link class="btn"        :to="{
        name: 'ProductCategories',
        params: {
          slug: item.slugable.key ? item.slugable.key.replace('/product-categories/', '') : '',
        },
      }">
                  <div class="category_image_animation">
                    <div class="image_1_bg" style="background-color: #edefe1;"></div>
                    <img :src="image_url+item.image" :alt="item.name">
                  </div>
                  <h4 class="h4">{{ item.name }}</h4>
                </router-link> 
           </div>
       

        </div> -->

          <div class="categories_card_main">
            <swiper
              v-if="categories?.length"
              :slides-per-view="4"
              :space-between="30"
              :pagination="{ clickable: true }"
              :autoplay="{ delay: 3000, disableOnInteraction: false }"
              :modules="[Autoplay]"
              class="mySwiper"
              :breakpoints="{
                0: { slidesPerView: 1 },
                576: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
              }"
            >
              <swiper-slide v-for="(item, index) in categories" :key="index">
                <div class="category_card">
                  <router-link
                    class="btn"
                    :to="{
                      name: 'ProductCategories',
                      params: {
                        slug: item.slugable?.key
                          ? item.slugable.key.replace(
                              '/product-categories/',
                              '',
                            )
                          : '',
                      },
                    }"
                  >
                    <div class="category_image_animation">
                      <div
                        class="image_1_bg"
                        style="background-color: #edefe1"
                      ></div>
                      <img :src="image_url + item.image" :alt="item.name" />
                    </div>
                    <h4 class="h4">{{ item.name }}</h4>
                  </router-link>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </section>

      <!----------about section start-------->

      <section class="about-sec">
        <div class="abt-head">100% Original & Organic</div>

        <div class="abt-para">
          Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
          SedMaecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
          libero venenatis faucibus. Nullam quis ante. Maecenas nec odio et ante
          tincidunt tempus.
        </div>
      </section>

      <!----------about section end-------->

      <!--------best product section start-------->
      <div class="bestproduct-sec">
        <div class="container my-5">
          <div class="row justify-content-center">
            <div class="section_header">
              <h2>Best Seller</h2>
              <img
                src="../assets/images/heading-underline.png"
                class="heading_image"
              />
            </div>
            <div class="col-lg-11">
              <div class="row g-4">
                <!-- Product Card 1 -->
                <div
                  class="col-md-4"
                  v-for="product in sellingProducts.slice(0, 3)"
                  :key="product.id"
                >
                  <div class="product-card">
                    <div class="product-image">
                      <!-- <span class="discount-badge">Save ₹100.00</span> -->
                      <router-link
                        :to="
                          product.slugable
                            ? {
                                name: 'ProductDetail',
                                params: { slug: product.slugable.key },
                              }
                            : ''
                        "
                      >
                        <img
                          class="zoom_image"
                          :src="image_url + product.image"
                          :alt="product.name"
                      /></router-link>
                    </div>
                    <div class="product-details">
                      <div class="product-rating">
                        <svg
                          role="presentation"
                          fill="none"
                          focusable="false"
                          width="20"
                          height="20"
                          class="rating__star icon icon-rating-star"
                          viewBox="0 0 15 15"
                        >
                          <path
                            d="M7.5 0L9.58587 5.2731L15 5.72949L10.875 9.44483L12.1353 15L7.5 12.0231L2.86475 15L4.125 9.44483L0 5.72949L5.41414 5.2731L7.5 0Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        4.5 (100 reviews)
                      </div>
                      <h5 class="product-title">
                        <a href="productdetails.html">{{ product.name }}</a>
                      </h5>
                      <p>Smooth | Nourish</p>
                      <div class="product-price">
                        <del v-if="product.sale_price !== null"
                          >₹{{ product.price }}</del
                        >
                        <span
                          >₹{{
                            product.sale_price
                              ? product.sale_price
                              : product.price
                          }}</span
                        >
                      </div>
                      <button
                        class="btn btn-dark mt-2"
                        @click="addToCart(product)"
                      >
                        <div>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M3.03857 2.29251C2.8508 2.22647 2.64448 2.23773 2.46501 2.32381C2.28554 2.40989 2.14761 2.56374 2.08157 2.75151C2.01553 2.93928 2.02679 3.1456 2.11287 3.32507C2.19895 3.50454 2.3528 3.64247 2.54057 3.70851L2.80257 3.79951C3.46957 4.03451 3.90857 4.18951 4.23157 4.34851C4.53457 4.49751 4.66857 4.61851 4.75657 4.74651C4.84657 4.87851 4.91657 5.06051 4.95657 5.42351C4.99657 5.80351 4.99757 6.29851 4.99757 7.03851V9.64051H20.7226C21.0526 7.98251 21.2076 7.14051 20.7746 6.57751C20.3306 6.00051 18.8136 6.00051 17.1286 6.00051H6.49057C6.48599 5.75401 6.47131 5.50781 6.44657 5.26251C6.39357 4.76551 6.27657 4.31251 5.99457 3.90051C5.71057 3.48451 5.33257 3.21851 4.89257 3.00151C4.48057 2.79951 3.95657 2.61551 3.33957 2.39851L3.03857 2.29251Z"
                              fill="white"
                            ></path>
                            <path
                              opacity="0.5"
                              d="M20.2 12.1876L20.7 9.76362L20.724 9.64062H5C5 12.5816 5.063 13.5526 5.93 14.4666C6.796 15.3806 8.19 15.3806 10.98 15.3806H16.282C17.843 15.3806 18.624 15.3806 19.175 14.9306C19.727 14.4806 19.885 13.7166 20.2 12.1876Z"
                              fill="white"
                            ></path>
                            <path
                              d="M7.5 18C7.89782 18 8.27936 18.158 8.56066 18.4393C8.84196 18.7206 9 19.1022 9 19.5C9 19.8978 8.84196 20.2794 8.56066 20.5607C8.27936 20.842 7.89782 21 7.5 21C7.10218 21 6.72064 20.842 6.43934 20.5607C6.15804 20.2794 6 19.8978 6 19.5C6 19.1022 6.15804 18.7206 6.43934 18.4393C6.72064 18.158 7.10218 18 7.5 18ZM16.5 18C16.8978 18 17.2794 18.158 17.5607 18.4393C17.842 18.7206 18 19.1022 18 19.5C18 19.8978 17.842 20.2794 17.5607 20.5607C17.2794 20.842 16.8978 21 16.5 21C16.1022 21 15.7206 20.842 15.4393 20.5607C15.158 20.2794 15 19.8978 15 19.5C15 19.1022 15.158 18.7206 15.4393 18.4393C15.7206 18.158 16.1022 18 16.5 18Z"
                              fill="white"
                            ></path>
                          </svg>
                          <div class="button-text">Add to cart</div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center btn-view-all">
              <router-link to="/product"
                ><button class="btn btn-dark">
                  View all products
                </button></router-link
              >
            </div>
          </div>
        </div>
      </div>
      <!-------best product section end----------->

      <!---------grid section start------------>
      <section class="hair-care-collect">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-8 col-md-12 col-12">
              <div class="row">
                <!-- Dandruff Care -->
                <div class="col-lg-6 col-md-6 col-12">
                  <div class="collect-item">
                    <div class="img-wrapper">
                      <img
                        src="../assets/images/grid1.webp"
                        alt="Dandruff Care"
                        class="zoom_image"
                      />
                    </div>
                    <div class="collect-text collect-text-right">
                      <h3>Dandruff care</h3>
                      <a href="#">View collection</a>
                    </div>
                  </div>
                </div>

                <!-- Hairfall -->
                <div class="col-lg-6 col-md-6 col-12">
                  <div class="collect-item">
                    <div class="img-wrapper">
                      <img
                        src="../assets/images/grid2.webp"
                        alt="Hairfall"
                        class="zoom_image"
                      />
                    </div>
                    <div class="collect-text collect-text-right">
                      <h3>Hairfall</h3>
                      <a href="#">View collection</a>
                    </div>
                  </div>
                </div>

                <!-- Anti Lice Kit -->
                <div class="col-lg-6 col-md-6 col-12">
                  <div class="collect-item">
                    <div class="img-wrapper">
                      <img
                        src="../assets/images/grid3.webp"
                        alt="Anti Lice Kit"
                        class="zoom_image"
                      />
                    </div>
                    <div class="collect-text collect-text-left">
                      <h3>Anti lice kit</h3>
                      <a href="#">View collection</a>
                    </div>
                  </div>
                </div>

                <!-- Grey Hair -->
                <div class="col-lg-6 col-md-6 col-12">
                  <div class="collect-item">
                    <div class="img-wrapper">
                      <img
                        src="../assets/images/grid4.webp"
                        alt="Grey Hair"
                        class="zoom_image"
                      />
                    </div>
                    <div class="collect-text collect-text-left">
                      <h3>Grey hair</h3>
                      <a href="#">View collection</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-12 col-12">
              <div class="row">
                <!-- Patchy Hairloss -->
                <div class="col-12">
                  <div class="collect-item">
                    <div class="img-wrapper">
                      <img
                        src="../assets/images/grid5.webp"
                        alt="Grey Hair"
                        class="patchy_hairloss_image zoom_image"
                      />
                    </div>
                    <div class="collect-text collect-text-left">
                      <h3>Patchy hairloss</h3>
                      <a href="#">View collection</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!---------grid section end------------->

      <!----------summer section start----------->
      <div class="bestproduct-sec">
        <div class="container my-3">
          <div class="row justify-content-center">
            <div class="section_header">
              <h2>Summer Favourites</h2>
              <img
                src="../assets/images/heading-underline.png"
                class="heading_image"
              />
            </div>
            <div class="col-lg-11">
              <div class="row g-4">
                <!-- Product Card 1 -->
                <div
                  class="col-md-4"
                  v-for="product in summerProducts.slice(0, 3)"
                  :key="product.id"
                >
                  <div class="product-card">
                    <div class="product-image">
                      <!-- <span class="discount-badge">Save ₹100.00</span> -->
                      <router-link
                        :to="
                          product.slugable
                            ? {
                                name: 'ProductDetail',
                                params: { slug: product.slugable.key },
                              }
                            : ''
                        "
                        ><img
                          class="zoom_image"
                          :src="image_url + product.image"
                          alt="Scalp Ezy Lotion"
                      /></router-link>
                    </div>
                    <div class="product-details">
                      <div class="product-rating">
                        <svg
                          role="presentation"
                          fill="none"
                          focusable="false"
                          width="20"
                          height="20"
                          class="rating__star icon icon-rating-star"
                          viewBox="0 0 15 15"
                        >
                          <path
                            d="M7.5 0L9.58587 5.2731L15 5.72949L10.875 9.44483L12.1353 15L7.5 12.0231L2.86475 15L4.125 9.44483L0 5.72949L5.41414 5.2731L7.5 0Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        4.5 (100 reviews)
                      </div>
                      <h5 class="product-title">
                        <a href="productdetails.html">{{ product.name }}</a>
                      </h5>
                      <p>Smooth | Nourish</p>
                      <div class="product-price">
                        <del v-if="product.sale_price !== null"
                          >₹{{ product.price }}</del
                        >
                        <span
                          >₹{{
                            product.sale_price
                              ? product.sale_price
                              : product.price
                          }}</span
                        >
                      </div>
                      <button
                        class="btn btn-dark mt-2"
                        @click="addToCart(product)"
                      >
                        <div>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M3.03857 2.29251C2.8508 2.22647 2.64448 2.23773 2.46501 2.32381C2.28554 2.40989 2.14761 2.56374 2.08157 2.75151C2.01553 2.93928 2.02679 3.1456 2.11287 3.32507C2.19895 3.50454 2.3528 3.64247 2.54057 3.70851L2.80257 3.79951C3.46957 4.03451 3.90857 4.18951 4.23157 4.34851C4.53457 4.49751 4.66857 4.61851 4.75657 4.74651C4.84657 4.87851 4.91657 5.06051 4.95657 5.42351C4.99657 5.80351 4.99757 6.29851 4.99757 7.03851V9.64051H20.7226C21.0526 7.98251 21.2076 7.14051 20.7746 6.57751C20.3306 6.00051 18.8136 6.00051 17.1286 6.00051H6.49057C6.48599 5.75401 6.47131 5.50781 6.44657 5.26251C6.39357 4.76551 6.27657 4.31251 5.99457 3.90051C5.71057 3.48451 5.33257 3.21851 4.89257 3.00151C4.48057 2.79951 3.95657 2.61551 3.33957 2.39851L3.03857 2.29251Z"
                              fill="white"
                            ></path>
                            <path
                              opacity="0.5"
                              d="M20.2 12.1876L20.7 9.76362L20.724 9.64062H5C5 12.5816 5.063 13.5526 5.93 14.4666C6.796 15.3806 8.19 15.3806 10.98 15.3806H16.282C17.843 15.3806 18.624 15.3806 19.175 14.9306C19.727 14.4806 19.885 13.7166 20.2 12.1876Z"
                              fill="white"
                            ></path>
                            <path
                              d="M7.5 18C7.89782 18 8.27936 18.158 8.56066 18.4393C8.84196 18.7206 9 19.1022 9 19.5C9 19.8978 8.84196 20.2794 8.56066 20.5607C8.27936 20.842 7.89782 21 7.5 21C7.10218 21 6.72064 20.842 6.43934 20.5607C6.15804 20.2794 6 19.8978 6 19.5C6 19.1022 6.15804 18.7206 6.43934 18.4393C6.72064 18.158 7.10218 18 7.5 18ZM16.5 18C16.8978 18 17.2794 18.158 17.5607 18.4393C17.842 18.7206 18 19.1022 18 19.5C18 19.8978 17.842 20.2794 17.5607 20.5607C17.2794 20.842 16.8978 21 16.5 21C16.1022 21 15.7206 20.842 15.4393 20.5607C15.158 20.2794 15 19.8978 15 19.5C15 19.1022 15.158 18.7206 15.4393 18.4393C15.7206 18.158 16.1022 18 16.5 18Z"
                              fill="white"
                            ></path>
                          </svg>
                          <div class="button-text">Add to cart</div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="text-center btn-view-all">
                <button class="btn btn-dark">View all products</button>
              </div> -->
          </div>
        </div>
      </div>
      <!----------summer section end-------------->

      <!----------V6 Journey section start--------->
      <section class="journey-sevice">
        <div class="container">
          <div class="row justify-content-center">
            <div class="section_header">
              <h2>The Trichella Journey</h2>
              <img
                src="../assets/images/heading-underline.png"
                class="heading_image"
              />
            </div>
            <div class="col-lg-11 col-md-12">
              <div class="row">
                <div class="col-lg-4">
                  <div class="component-57-wrap jou-shine">
                    <div class="component-57">
                      <div class="component-57-inner">
                        <div class="component-57-inner">
                          <div class="group-child"></div>

                          <div class="group-inner"></div>
                          <div class="step-1">STEP 1</div>
                        </div>
                      </div>
                    </div>
                    <div class="component-content">
                      <img
                        src="http://192.168.1.120/yourshands/storage/step-icon1.png"
                        width=""
                        height=""
                        class="icon-test"
                        alt=""
                      />
                      <h3>Take test</h3>

                      <p class="para-step">
                        Begin your journey by taking a personalized hair test.
                        This helps us understand your hair type, concerns, and
                        goals, allowing us to recommend the best care solutions
                        tailored specifically to you.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 jou-shine">
                  <div class="component-57-wrap">
                    <div class="component-57">
                      <div class="component-57-inner">
                        <div class="component-57-inner">
                          <div class="group-child"></div>

                          <div class="group-inner"></div>
                          <div class="step-1">STEP 2</div>
                        </div>
                      </div>
                    </div>
                    <div class="component-content">
                      <img
                        src="http://192.168.1.120/yourshands/storage/step-icon2.png"
                        width=""
                        height=""
                        class="icon-test"
                        alt=""
                      />
                      <h3 class="plan">Buy Plan</h3>
                      <p class="para-step">
                        Once we’ve analyzed your hair profile, choose a
                        customized hair care plan that suits your needs. Our
                        plans offer premium products and treatments designed to
                        help you achieve healthy, beautiful hair.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 jou-shine">
                  <div class="component-57-wrap">
                    <div class="component-57">
                      <div class="component-57-inner">
                        <div class="component-57-inner">
                          <div class="group-child"></div>

                          <div class="group-inner"></div>
                          <div class="step-1">STEP 3</div>
                        </div>
                      </div>
                    </div>
                    <div class="component-content">
                      <img
                        src="http://192.168.1.120/yourshands/storage/step-icon3.png"
                        width=""
                        height=""
                        class="icon-test"
                        alt=""
                      />
                      <h3 class="plan">Get Consultation</h3>
                      <p class="para-step">
                        After purchasing your plan, receive expert advice from
                        our professional hair specialists. They’ll guide you
                        through the process, ensuring you get the best results
                        with ongoing support and care to you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!----------V6 Journey section end--------->

      <!----------2nd strip section start------------>
      <section class="2nd-strip">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-11">
              <div class="strip-banner">
                <div class="stripbanner-overlay">
                  <div class="stripbanner-text">
                    <h3>
                      Awesome Total Sale -50% Off For All Cosmetics<br />
                      Kaline From Only $25
                    </h3>
                    <p>Discover ➡</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!----------2nd strip section end------------>

      <!----------image-section start--------------->
      <section class="image-sec">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <div class="row align-items-center">
                <div class="col-lg-6">
                  <div class="bg-img-three">
                    <img src="../assets/images/leaf-bg.png" alt="" />
                  </div>
                  <div class="img-wrapper">
                    <img class="zoom_image" src="../assets/images/image.webp" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="px-lg-4">
                    <div class="image-des">
                      <h3>Psoriacare Head and body shampoo</h3>
                      <p>
                        All are Herbal Cosmetics and it is formulated, using
                        various permissible herbal cosmetic ingredients which
                        are 100% safe & pure Herbal products. <b>Starts from</b>
                        <span>₹450</span>
                      </p>
                      <p>View Product ➡</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row image-ret align-items-center">
                <div class="col-lg-6">
                  <div class="px-lg-4">
                    <div class="image-des">
                      <h3>Psoriacare Head and body shampoo</h3>
                      <p>
                        All are Herbal Cosmetics and it is formulated, using
                        various permissible herbal cosmetic ingredients which
                        are 100% safe & pure Herbal products. <b>Starts from</b>
                        <span>₹450</span>
                      </p>
                      <p>View Product ➡</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="img-wrapper">
                    <img
                      class="zoom_image"
                      src="../assets/images/image1.webp"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!----------image-section end--------------->

      <!---------testimonial section start------------->
      <section class="testimonials_section">
        <div class="container">
          <div class="section_header">
            <h2 class="h2">Testimonials</h2>
            <img
              src="../assets/images/heading-underline.png"
              class="heading_image"
            />
          </div>

          <Swiper
            :modules="[Autoplay, Pagination]"
            :slides-per-view="3"
            :slides-per-group="1"
            :space-between="30"
            :loop="true"
            :autoplay="{ delay: 3000, disableOnInteraction: false }"
            :pagination="{ clickable: true }"
            class="mySwiper"
          >
            <SwiperSlide v-for="(item, index) in 6" :key="index">
              <div class="testimonial-card">
                <img src="../assets/images/testmi.webp" class="one1" />

                <div class="icon-main122">
                  <div class="Ellipse">
                    <h3 class="reviewer_name">Divya</h3>
                    <img src="../assets/images/client.webp" class="icon-test" />
                  </div>

                  <div class="main-para">
                    <img src="../assets/images/review.png" />
                    <span
                      >Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit</span
                    >
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <!-- <section class="testimonials_section">
  <div class="container">

    <div class="section_header">
      <h2 class="h2">Testimonials</h2>
      <img src="../assets/images/heading-underline.png" class="heading_image" >
    </div>

    <div class="row justify-content-center">
      <div class="col-lg-11">
        <div class="swiper mySwiper">
          <div class="swiper-wrapper"><div class="swiper-slide">
                <img src="../assets/images/testmi.webp" width="" height="" class="one1" alt="">
                <div style="position: absolute;">
                  <div class="icon-main122">
                    <div class="Ellipse">
                      <h3 class="reviewer_name">Divya</h3>
                      <img src="../assets/images/client.webp" width="" height="" class="icon-test" alt="">
                    </div>
                    <div class="main-para">
                      <img src="../assets/images/review.png" width="" height="" alt="">
                      <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</span>
                    </div>
                  </div>
                </div>
              </div><div class="swiper-slide">
                <img src="../assets/images/testmi.webp" width="" height="" class="one1" alt="">
                <div style="position: absolute;">
                  <div class="icon-main122">
                    <div class="Ellipse">
                      <h3 class="reviewer_name">Divya</h3>
                      <img src="../assets/images/client.webp" width="" height="" class="icon-test" alt="">
                    </div>
                    <div class="main-para">
                      <img src="../assets/images/review.png" width="" height="" alt="">
                      <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</span>
                    </div>
                  </div>
                </div>
              </div><div class="swiper-slide">
                <img src="../assets/images/testmi.webp" width="" height="" class="one1" alt="">
                <div style="position: absolute;">
                  <div class="icon-main122">
                    <div class="Ellipse">
                      <h3 class="reviewer_name">Divya</h3>
                      <img src="../assets/images/client.webp" width="" height="" class="icon-test" alt="">
                    </div>
                    <div class="main-para">
                      <img src="../assets/images/review.png" width="" height="" alt="">
                      <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</span>
                    </div>
                  </div>
                </div>
              </div><div class="swiper-slide">
                <img src="../assets/images/testmi.webp" width="" height="" class="one1" alt="">
                <div style="position: absolute;">
                  <div class="icon-main122">
                    <div class="Ellipse">
                      <h3 class="reviewer_name">Divya</h3>
                      <img src="../assets/images/client.webp" width="" height="" class="icon-test" alt="">
                    </div>
                    <div class="main-para">
                      <img src="../assets/images/review.png" width="" height="" alt="">
                      <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</span>
                    </div>
                  </div>
                </div>
              </div></div>
         
        </div>
      </div>
    </div>   
  </div>
</section> -->
      <!--------testimonial section end--------------->

      <!----------our feed section start------------>
      <section class="feed-sec">
        <div class="container">
          <div class="row">
            <div class="section_header">
              <h2 class="h2">Tag Us on Instagram</h2>
              <img
                src="../assets/images/heading-underline.png"
                class="heading_image"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-sm-6 col-md-3">
              <div class="image-container">
                <img src="../assets/images/insta.webp" alt="Image 1" />
                <a href="https://www.instagram.com/" target="_blank">
                  <div class="overlay">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="48"
                      height="48"
                      viewBox="0 0 64 64"
                    >
                      <path
                        d="M 31.820312 12 C 13.439312 12 12 13.439312 12 31.820312 L 12 32.179688 C 12 50.560688 13.439312 52 31.820312 52 L 32.179688 52 C 50.560688 52 52 50.560688 52 32.179688 L 52 32 C 52 13.452 50.548 12 32 12 L 31.820312 12 z M 28 16 L 36 16 C 47.129 16 48 16.871 48 28 L 48 36 C 48 47.129 47.129 48 36 48 L 28 48 C 16.871 48 16 47.129 16 36 L 16 28 C 16 16.871 16.871 16 28 16 z M 41.994141 20 C 40.889141 20.003 39.997 20.900859 40 22.005859 C 40.003 23.110859 40.900859 24.003 42.005859 24 C 43.110859 23.997 44.003 23.099141 44 21.994141 C 43.997 20.889141 43.099141 19.997 41.994141 20 z M 31.976562 22 C 26.454563 22.013 21.987 26.501437 22 32.023438 C 22.013 37.545437 26.501437 42.013 32.023438 42 C 37.545437 41.987 42.013 37.498562 42 31.976562 C 41.987 26.454563 37.498562 21.987 31.976562 22 z M 31.986328 26 C 35.299328 25.992 37.992 28.673328 38 31.986328 C 38.007 35.299328 35.326672 37.992 32.013672 38 C 28.700672 38.008 26.008 35.327672 26 32.013672 C 25.992 28.700672 28.673328 26.008 31.986328 26 z"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-3">
              <div class="image-container">
                <img src="../assets/images/insta1.webp" alt="Image 1" />
                <a href="https://www.instagram.com/" target="_blank">
                  <div class="overlay">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="48"
                      height="48"
                      viewBox="0 0 64 64"
                    >
                      <path
                        d="M 31.820312 12 C 13.439312 12 12 13.439312 12 31.820312 L 12 32.179688 C 12 50.560688 13.439312 52 31.820312 52 L 32.179688 52 C 50.560688 52 52 50.560688 52 32.179688 L 52 32 C 52 13.452 50.548 12 32 12 L 31.820312 12 z M 28 16 L 36 16 C 47.129 16 48 16.871 48 28 L 48 36 C 48 47.129 47.129 48 36 48 L 28 48 C 16.871 48 16 47.129 16 36 L 16 28 C 16 16.871 16.871 16 28 16 z M 41.994141 20 C 40.889141 20.003 39.997 20.900859 40 22.005859 C 40.003 23.110859 40.900859 24.003 42.005859 24 C 43.110859 23.997 44.003 23.099141 44 21.994141 C 43.997 20.889141 43.099141 19.997 41.994141 20 z M 31.976562 22 C 26.454563 22.013 21.987 26.501437 22 32.023438 C 22.013 37.545437 26.501437 42.013 32.023438 42 C 37.545437 41.987 42.013 37.498562 42 31.976562 C 41.987 26.454563 37.498562 21.987 31.976562 22 z M 31.986328 26 C 35.299328 25.992 37.992 28.673328 38 31.986328 C 38.007 35.299328 35.326672 37.992 32.013672 38 C 28.700672 38.008 26.008 35.327672 26 32.013672 C 25.992 28.700672 28.673328 26.008 31.986328 26 z"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-3">
              <div class="image-container">
                <img src="../assets/images/insta2.webp" alt="Image 1" />
                <a href="https://www.instagram.com/" target="_blank">
                  <div class="overlay">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="48"
                      height="48"
                      viewBox="0 0 64 64"
                    >
                      <path
                        d="M 31.820312 12 C 13.439312 12 12 13.439312 12 31.820312 L 12 32.179688 C 12 50.560688 13.439312 52 31.820312 52 L 32.179688 52 C 50.560688 52 52 50.560688 52 32.179688 L 52 32 C 52 13.452 50.548 12 32 12 L 31.820312 12 z M 28 16 L 36 16 C 47.129 16 48 16.871 48 28 L 48 36 C 48 47.129 47.129 48 36 48 L 28 48 C 16.871 48 16 47.129 16 36 L 16 28 C 16 16.871 16.871 16 28 16 z M 41.994141 20 C 40.889141 20.003 39.997 20.900859 40 22.005859 C 40.003 23.110859 40.900859 24.003 42.005859 24 C 43.110859 23.997 44.003 23.099141 44 21.994141 C 43.997 20.889141 43.099141 19.997 41.994141 20 z M 31.976562 22 C 26.454563 22.013 21.987 26.501437 22 32.023438 C 22.013 37.545437 26.501437 42.013 32.023438 42 C 37.545437 41.987 42.013 37.498562 42 31.976562 C 41.987 26.454563 37.498562 21.987 31.976562 22 z M 31.986328 26 C 35.299328 25.992 37.992 28.673328 38 31.986328 C 38.007 35.299328 35.326672 37.992 32.013672 38 C 28.700672 38.008 26.008 35.327672 26 32.013672 C 25.992 28.700672 28.673328 26.008 31.986328 26 z"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-3">
              <div class="image-container">
                <img src="../assets/images/insta3.webp" alt="Image 1" />
                <a href="https://www.instagram.com/" target="_blank">
                  <div class="overlay">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="48"
                      height="48"
                      viewBox="0 0 64 64"
                    >
                      <path
                        d="M 31.820312 12 C 13.439312 12 12 13.439312 12 31.820312 L 12 32.179688 C 12 50.560688 13.439312 52 31.820312 52 L 32.179688 52 C 50.560688 52 52 50.560688 52 32.179688 L 52 32 C 52 13.452 50.548 12 32 12 L 31.820312 12 z M 28 16 L 36 16 C 47.129 16 48 16.871 48 28 L 48 36 C 48 47.129 47.129 48 36 48 L 28 48 C 16.871 48 16 47.129 16 36 L 16 28 C 16 16.871 16.871 16 28 16 z M 41.994141 20 C 40.889141 20.003 39.997 20.900859 40 22.005859 C 40.003 23.110859 40.900859 24.003 42.005859 24 C 43.110859 23.997 44.003 23.099141 44 21.994141 C 43.997 20.889141 43.099141 19.997 41.994141 20 z M 31.976562 22 C 26.454563 22.013 21.987 26.501437 22 32.023438 C 22.013 37.545437 26.501437 42.013 32.023438 42 C 37.545437 41.987 42.013 37.498562 42 31.976562 C 41.987 26.454563 37.498562 21.987 31.976562 22 z M 31.986328 26 C 35.299328 25.992 37.992 28.673328 38 31.986328 C 38.007 35.299328 35.326672 37.992 32.013672 38 C 28.700672 38.008 26.008 35.327672 26 32.013672 C 25.992 28.700672 28.673328 26.008 31.986328 26 z"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!----------our feed section end------------>

      <!------------news letter section start---------->
      <section class="news-sec">
        <div class="container">
          <div class="row align-items-center text-center">
            <div class="col-md-5">
              <h5>Follow us</h5>
              <p>Don’t miss promotions, follow us for the latest news</p>
              <div class="social-icons">
                <a href="#" class="text-decoration-none"
                  ><img src="../assets/images/instagram.png"
                /></a>
                <a href="#" class="text-decoration-none"
                  ><img src="../assets/images/facebook.png"
                /></a>
              </div>
            </div>
            <div class="col-md-2 d-none d-md-flex justify-content-center">
              <div class="footer-divider"></div>
            </div>
            <div class="col-md-5">
              <h5>We Don’t Keep Our Beauty Secrets</h5>
              <p>Subscribe now and thank us later</p>
              <form class="d-flex">
                <input
                  type="email"
                  class="form-control subscribe-input me"
                  placeholder="Enter email id"
                />
                <button class="btn btn-outline-light" type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <!------------news letter section end---------->

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
                    <h4>Returns</h4>
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
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import {
  getCategory,
  getSellingProducts,
  getSummerProducts,
} from "../services/apiService";
import { onMounted, ref } from "vue";
import { image_url } from "../config/api";
import { addToCart } from "../services/cartService";
const categories = ref([]);
const sellingProducts = ref([]);
const summerProducts = ref([]);
const items = ref([]);
import icon1 from "../assets/images/icon_1.webp";
import icon2 from "../assets/images/Group.webp";
import icon3 from "../assets/images/icon_3.webp";
import icon4 from "../assets/images/icon_4.webp";
import icon5 from "../assets/images/icon_5.webp";
const features = [
  { img: icon1, text: "VEGAN" },
  { img: icon2, text: "CHEMICALS FREE" },
  { img: icon3, text: "NOT TESTED ON ANIMALS" },
  { img: icon4, text: "PARABEN FREE" },
  { img: icon5, text: "100% ORGANIC" },
];
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    { threshold: 0.2 },
  );

  items.value.forEach((el) => observer.observe(el));
});
const fetchCategories = async () => {
  try {
    const res = await getCategory();
    categories.value = res.data.data;
    console.log("categories.value", categories.value);
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};
const fetchSellingProducts = async () => {
  try {
    const res = await getSellingProducts();
    if (res.data.status) {
      sellingProducts.value = res.data.data;
    }
  } catch (error) {
    console.error("Error fetching trending products", error);
  }
};
const fetchSummerProducts = async () => {
  try {
    const res = await getSummerProducts();
    if (res.data.status) {
      summerProducts.value = res.data.data.products;
    }
  } catch (error) {
    console.error("Error fetching trending products", error);
  }
};
onMounted(() => {
  fetchCategories();
  fetchSellingProducts();
  fetchSummerProducts();
});
</script>
<style scoped>
.feature-item {
  opacity: 0;
  transform: translateY(40px);
  animation: fadeUp 0.6s ease forwards;
  animation-play-state: paused;
}

.feature-item.animate {
  animation-play-state: running;
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
