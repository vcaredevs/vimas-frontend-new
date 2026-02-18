<template>
     <!-- breadcrumb area start here  -->
    <div class="breadcrumb-area" v-if="product">
        <div class="container">
            <div class="breadcrumb-wrap text-center">
                <h2 class="page-title">{{ product.product.name }}</h2>
                <ul class="breadcrumb-pages">
                 
                  <li class="page-item"><router-link to="/shop"><a class="page-item-link" href="https://inway.com.in:443../shop/skin-care">{{ product.product.product_collections[0]?.name }}</a></router-link></li>
            
                    <li class="page-item">{{ product.product.name }}</li>
                </ul>
            </div>
        </div>
    </div>



    <!-- breadcrumb area end here  -->
     <!-- Product Loader -->
<div v-if="pageLoading" class="page-loader">
  <div class="main-spinner"></div>
</div>
        <!-- product-single-area start here  -->
    <div class="product-single-area section-top pb-5" v-else>
        <div class="container">
            <div class="product-single-details">
                <div class="row"  v-if="product">
                    <div class="col-lg-6">
                         <div class="row">
                <!-- BIG IMAGE -->
                <div class="col-lg-8">
                  <div class="main-image">
                    <img :src="activeImage" class="img-fluid" />
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


              
                    <div class="col-lg-6">
                        <div class="product-single-right">
                            <div class="product-info">
                                <h4 class="product-catagory"> {{ product.product.product_collections[0]?.name }}</h4>
                                <h3 class="product-name"> {{ product.product.name }}</h3>

                                <div class="product-price">
                                    <span class="price price-var"><del v-if="product.product.sale_price !== null"
                    >₹{{ product.product.price }}</del
                  >
                  <span
                    >₹{{
                      product.product.sale_price
                        ? product.product.sale_price
                        : product.product.price
                    }}</span
                  ></span>
                                </div>
                                <div class="product-size-area">
                                    <h4 class="size-title size-title-wt">WEIGHT : {{ product.product.weight }} grams</h4>

                                    <ul class="size-switch">
                                        <li class="single-size single-size-wt  active
			" data-var-size="300 grams" data-var-price="350">{{ product.product.weight }} grams</li>
                                    </ul>
                                </div>
                                <div class="prdouct-btn-wrapper d-flex align-items-center">
                                    <div class="cart-plus-minus">
                                        <div   @click="decrement" style="cursor: pointer;">-</div>
                                        <input class="cart-plus-minus-box cart-number" type="number" name="qtybutton" value="1" v-model="quantity" />
                                        <div  @click="increment" style="cursor: pointer;">+</div>
                                    </div>

                                </div>
                                <div class="stock-status pb-4">
                                    <span class="badge bg-info">In Stock</span>
                                </div>

                                <div class="product-bottom-button d-flex" style="cursor: pointer;">
                                    <!-- <a href="https://inway.com.in:443../checkout" class="primary-btn">Buy Now</a> -->
                                    <a  class="primary-btn addtocartbtn-prod"   @click="handleAddToCart(product)">
                                      	<span v-if="cartStore.loadingProductId === product.id" class="custom-spinner"></span>
  <span v-else>Add To Bag  <i class="icon fas fa-plus-circle" ></i></span>
                                     </a>
                                </div>
                            </div>
                            <div class="product-right-bottom">
                                <ul class="features">
                                    <li class="single-feature"><img class="icon" src="@/assets/ui/images/delivery-van-icon.svg" alt="icon" /><strong class="feature-title">Estimated Delivery:</strong><span class="feature-text">From 2 to 10 Working Days</span></li>
                                    <li class="single-feature"><img class="icon" src="@/assets/ui/images/shipping-return.svg" alt="icon" /><strong class="feature-title">Free Shipping :</strong><span class="feature-text">On all orders over 999 INR</span></li>
                                </ul>
                                <div class="guarantee-checkout-area">
                                    <h3 class="guarantee-title">Guarantee safe & secure checkout</h3>
                                    <img src="@/assets/ui/images/payment-method-image.webp" alt="payment-method-image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="product-bottom-info mt-2">
            <div class="nav-tabs-menu">
                <ul class="nav nav-tabs" id="ProductTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="Description-tab" data-bs-toggle="tab" data-bs-target="#Description" type="button" role="tab" aria-controls="Description" aria-selected="true">Description</button>
                    </li>


                </ul>
            </div>

            <div class="tab-content" id="ProductTabContent" v-if="product">

                <div class="tab-pane fade show active" id="Description" role="tabpanel" aria-labelledby="Description-tab">
                    <div class="product-description">
                        <p class="description-text">
                            <section class="product-description">
                                <h2>{{ product.product.name }}</h2>
                                <p  v-html="product?.product?.short_description"></p>
                                <h3>Ingredients:</h3>
                                <p v-html="product?.product?.ingredients"></p>
                                <h3>Direction of Use:</h3>
                                <p v-html="product?.product?.howtouse "></p>
                                <h3>Benefits:</h3>
                                <p v-html="product?.product?.for_whom "></p>
                            </section>
                        </p>
                    </div>
                </div>


                <div class="tab-pane fade" id="Shipping-Return" role="tabpanel" aria-labelledby="Shipping-Return-tab">
                    <div class="shipping-return-area">

                    </div>
                </div>

            </div>
        </div>
    </div>
    <!-- product-single-area end here  -->
</template>
<style scoped>
.page-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px; /* height of product section */
  width: 100%;
}

.main-spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #e5e5e5;
  border-top: 5px solid #0d6efd; /* primary color */
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
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
  }
}
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
    .custom-spinner {
  width: 20px;
  height: 20px;
  border: 3px solid rgb(0, 0, 0);
  border-top: 3px solid #ffffff;
  border-right: 3px solid #ffffff;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
  display: inline-block;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getProductDetails, getProducts } from "../services/apiService";
import { image_url,imageUrl } from "../config/api";

import { useUserStore } from "../assets/js/store";
import { useCartStore } from "../cartStore";
const { addDeleteWishlist } = useUserStore();
const route = useRoute();
const cartStore=useCartStore();
const slug = route.params.slug;
const product = ref(null);
// const imageUrl = "http://127.0.0.1:8000";
const products = ref([]);
const slideIndex = ref(0);
const pageLoading = ref(true);  
const quantity = ref(1);
const productList = ref([]);
const openSections = ref({
  description: false,
  benefits: false,
  ingredients: false,
});
const increment = () => quantity.value++;
const decrement = () => {
  if (quantity.value > 1) quantity.value--;
};
const handleAddToCart = (product) => {

  
 cartStore.addOrUpdateCart (product, quantity.value);
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

async function fetchProducts(page = 1, param = null) {
  try {
    const result = await getProducts(page, param);

    productList.value = result.data.data.data ?? result.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
const limitedProducts = computed(() => {
  return productList.value.slice(0, 4);
});
onMounted(async () => {
  try {
    pageLoading.value = true;

    await Promise.all([
      fetchProducById(),
      fetchProducts()
    ]);

  } catch (error) {
    console.error(error);
  } finally {
    pageLoading.value = false;
  }
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

const activeIndex = ref(0);
const images = computed(() => {
  if (!product.value?.productImages?.length) return [];

  return product.value.productImages.map(
    (img) => `${imageUrl}/storage/${img.split("#")[0]}`,
  );
});
const activeImage = computed(() => images.value[activeIndex.value]);

function setImage(index) {
  activeIndex.value = index;
}

function toggleSection(section) {
  openSections.value[section] = !openSections.value[section];
}
const addWishlist = (id, type) => {
  addDeleteWishlist(id, type);
};
</script>