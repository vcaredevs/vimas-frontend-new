<template>
  <transition name="slide-down">
    <div v-if="open" class="search-drawer">
      <div class="search-header">
        <input
          v-model="query"
          type="text"
          placeholder="Search products..."
          autofocus
        />
        <button @click="$emit('close')">✕</button>
      </div>

      <div v-if="loading" class="loading-msg">Searching...</div>

      <div v-if="products.length" class="product-row">
          <div class="product-card" v-for="product in products" :key="product.id">
                            <div class="product-image">
                              <!-- <span class="discount-badge">Save ₹100.00</span> -->
                         <router-link :to="product.slug?{name: 'ProductDetail',params :{slug:product.slug}}:''"> <img class="zoom_image" :src="image_url+product.image" :alt="product.name"></router-link>
                            </div>
                        <div class="product-details">
                          <div class="product-rating"><svg role="presentation" fill="none" focusable="false"  width="20" height="20" class="rating__star icon icon-rating-star" viewBox="0 0 15 15">
                            <path d="M7.5 0L9.58587 5.2731L15 5.72949L10.875 9.44483L12.1353 15L7.5 12.0231L2.86475 15L4.125 9.44483L0 5.72949L5.41414 5.2731L7.5 0Z" fill="currentColor"></path>
                          </svg> 4.5 (100 reviews)</div>
                          <h5 class="product-title"><a href="productdetails.html">{{ product.productName }}</a></h5>
                          <p>Smooth | Nourish</p>
                          <div class="product-price">
                            <del v-if="product.sale_price !== null">₹{{ product.price }}</del> <span>₹{{ product.sale_price?product.sale_price:product.price
                              }}</span>
                          </div>
                            <button class="btn btn-dark mt-2" @click="addToCart(product)">
                                <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.03857 2.29251C2.8508 2.22647 2.64448 2.23773 2.46501 2.32381C2.28554 2.40989 2.14761 2.56374 2.08157 2.75151C2.01553 2.93928 2.02679 3.1456 2.11287 3.32507C2.19895 3.50454 2.3528 3.64247 2.54057 3.70851L2.80257 3.79951C3.46957 4.03451 3.90857 4.18951 4.23157 4.34851C4.53457 4.49751 4.66857 4.61851 4.75657 4.74651C4.84657 4.87851 4.91657 5.06051 4.95657 5.42351C4.99657 5.80351 4.99757 6.29851 4.99757 7.03851V9.64051H20.7226C21.0526 7.98251 21.2076 7.14051 20.7746 6.57751C20.3306 6.00051 18.8136 6.00051 17.1286 6.00051H6.49057C6.48599 5.75401 6.47131 5.50781 6.44657 5.26251C6.39357 4.76551 6.27657 4.31251 5.99457 3.90051C5.71057 3.48451 5.33257 3.21851 4.89257 3.00151C4.48057 2.79951 3.95657 2.61551 3.33957 2.39851L3.03857 2.29251Z" fill="white"></path><path opacity="0.5" d="M20.2 12.1876L20.7 9.76362L20.724 9.64062H5C5 12.5816 5.063 13.5526 5.93 14.4666C6.796 15.3806 8.19 15.3806 10.98 15.3806H16.282C17.843 15.3806 18.624 15.3806 19.175 14.9306C19.727 14.4806 19.885 13.7166 20.2 12.1876Z" fill="white"></path><path d="M7.5 18C7.89782 18 8.27936 18.158 8.56066 18.4393C8.84196 18.7206 9 19.1022 9 19.5C9 19.8978 8.84196 20.2794 8.56066 20.5607C8.27936 20.842 7.89782 21 7.5 21C7.10218 21 6.72064 20.842 6.43934 20.5607C6.15804 20.2794 6 19.8978 6 19.5C6 19.1022 6.15804 18.7206 6.43934 18.4393C6.72064 18.158 7.10218 18 7.5 18ZM16.5 18C16.8978 18 17.2794 18.158 17.5607 18.4393C17.842 18.7206 18 19.1022 18 19.5C18 19.8978 17.842 20.2794 17.5607 20.5607C17.2794 20.842 16.8978 21 16.5 21C16.1022 21 15.7206 20.842 15.4393 20.5607C15.158 20.2794 15 19.8978 15 19.5C15 19.1022 15.158 18.7206 15.4393 18.4393C15.7206 18.158 16.1022 18 16.5 18Z" fill="white"></path></svg>
                                    <div class="button-text" >Add to cart</div>
                                  </div>
                            </button> 
                        </div>
                      </div>
        <!-- <div class="product-card" v-for="product in products" :key="product.id">
          <img :src="image_url + product.image" alt="product.name" />
          <h6>{{ product.productName }}</h6>
          <span>{{ product.price }}</span>
        </div> -->
      </div>

      <p v-if="query && !loading && !products.length">
        No products found
      </p>
    </div>
  </transition>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import { debounce } from "lodash";
import { getsearchDetails } from "../services/apiService";
import { image_url } from "../config/api";
import { addToCart } from "../services/cartService";


const props = defineProps({
  open: Boolean, // controls drawer visibility
});

const emit = defineEmits(["close"]);

const query = ref("");
const products = ref([]);
const loading = ref(false);



const debouncedSearch = debounce(async () => {
  if (!query.value) {
    products.value = [];
    return;
  }

  loading.value = true;
  try {
    const payload = { searchText: query.value, category: 0 };
    const res = await getsearchDetails(payload);

    if (res.data.data.length) {
      products.value = res.data.data;
    } else {
      products.value = [];
    }
  } catch (err) {
    console.error("Search error:", err);
    products.value = [];
  } finally {
    loading.value = false;
  }
}, 500);

watch(query, () => debouncedSearch());
</script>

<style scoped>
.search-drawer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 100vh;
  background: #fff;
  z-index: 1050;
  overflow-y: auto;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  padding: 1rem;
}

.search-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.search-header input {
  flex: 1;
  padding: 0.5rem 0.75rem;
  font-size: 16px;
}

.search-header button {
  font-size: 20px;
  background: none;
  border: none;
  cursor: pointer;
}

.product-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}



.loading-msg {
  font-weight: 500;
  text-align: center;
  padding: 1rem 0;
}
</style>
