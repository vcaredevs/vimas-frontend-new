<template>
<section class="page">
  <div class="page__wrapper">
<div class="bread-creams">
   <div class="container">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
        
        <li class="breadcrumb-item active" aria-current="page">Best Sellers</li>
    </ol>
    
   </div>
</div>
<div class="container">
    <div class="row">
        <h1 class="besrt">Best Sellers</h1>
    </div>
</div>


<!---------banner section start------------->
<section class="promo-banner d-flex align-items-center">
    <div class="container">
     <div class="row justify-content-center">
        <div class="col-lg-5">
            <div class="content">
                <h5>Existing Deals on</h5>
                <h2>Psoriasis Care Kit</h2>
                <p>Ultrices gravida dictum fusce ut placerat orci. Accumsan lacus vel facilisis volutpat est velit egestas. Vehicula ipsum a arcu cursus.</p>
                <p class="btn-product"><button class="btn btn-light">Shop Now</button></p>
              </div>
        </div>
     </div>
    </div>
</section>

<!-------banner section end----------------->
<section class="drop-sec">

</section>

<!--------best product section start-------->
<div class="bestproduct-sec">
  <div class="row">
      <div class="col-md-3">
          <div class="filter-sticky">
  <div class="card p-3">
   <div class="d-flex justify-content-between align-items-center mb-3">
  <h5 class="mb-0">Filter</h5>
  <button class="btn btn-sm btn-link text-decoration-none p-0" id="clearFilter" @click="clearFilters">
    Clear
  </button>
</div>


   

    <!-- Category -->
   <div class="mb-3">
  <button
    class="btn w-100 d-flex justify-content-between align-items-center p-0 border-0 bg-transparent"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#categoryFilter"
    aria-expanded="true"
  >
    <label class="form-label mb-0">Category</label>
    <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M6 9l6 6 6-6" />
    </svg>
  </button>

<div class="collapse show mt-2" id="categoryFilter">
  <div class="form-check" v-for="item in categories" :key="item.id">
  <input
    class="form-check-input"
    type="radio"
    name="category"
    :id="'cat-' + item.id"
    :value="item.slugable.key"
    v-model="filters.category"
    @change="onCategoryChange"
  />
  <label class="form-check-label" :for="'cat-' + item.id">
    {{ item.name }}
  </label>
</div>




</div>
  
</div>


    <!-- Price -->
       
      
      <div class="price-input">
        <div class="field">
          <span>Min</span>
          <input type="number" class="input-min" v-model.number="filters.minPrice" >
        </div>
        <div class="separator">-</div>
        <div class="field">
          <span>Max</span>
          <input type="number" class="input-max" v-model.number="filters.maxPrice">
        </div>
      </div>
      <div class="slider">
        <div class="progress" :style="{
    left: `${(filters.minPrice / maxRange) * 100}%`,
    right: `${100 - (filters.maxPrice / maxRange) * 100}%`
  }"></div>
      </div>
      <div class="range-input">
         <input
    type="range"
    class="range-min"
    min="0"
    :max="maxRange"
    step="100"
    v-model.number="filters.minPrice"
    @change="debouncedFetchProducts"
  />

  <input
    type="range"
    class="range-max"
    min="0"
    :max="maxRange"
    step="100"
    v-model.number="filters.maxPrice"
    @change="debouncedFetchProducts"
  />
      </div>
    


  
   <div class="mb-3 pt-4">
  <button
    class="btn w-100 d-flex justify-content-between align-items-center p-0 border-0 bg-transparent"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#productFilter"
    aria-expanded="true"
  >
    <span class="form-label mb-0">Products</span>
    <svg class="filter-arrow" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M6 9l6 6 6-6" />
    </svg>
  </button>
 
  <div class="collapse show mt-2" id="productFilter">
 <div class="form-check" v-for="product in productList" :key="product.id">
  <input
    class="form-check-input"
    type="radio"
    name="product"
    :value="product.id"
    v-model="filters.product"
 
  />
  <label class="form-check-label">
    {{ product.name }}
  </label>
</div>


 
  </div>
</div>

  </div>
  </div>
</div>

    <div class="col-md-9" >
       <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-6">
           <div class="paret" v-if="productList.length==0">
          <h6>No Products found</h6>
        </div>
        <div class="paret" v-else>
          <h6>{{ productList.length }} Products found</h6>
        </div>
      </div>
      <!-- <div class="col-lg-6">
        <div class="dropdown">
          <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
            Shop by : Featured
          </button>
          <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Most recent</a></li>
              <li><a class="dropdown-item" href="#">Highest rating</a></li>
              <li><a class="dropdown-item" href="#">Lowest rating</a></li>
          </ul>
      </div>
      </div> -->
    </div>
  </div>
       <div class="container my-5">
        <div class="row justify-content-center">
          
          <div class="col-md-4 "   v-for="product in productList"  :key="product.id">
            <div class="product-card">
              <div class="product-image">
               
              <router-link :to="product.slug?{name: 'ProductDetail',params :{slug:product.slug.key}}:''">  <img class="zoom_image" :src="image_url+product.image" :alt="product.name" ></router-link>
              </div>
              <button  @click="addToCart(product)" class="btn btn-dark mt-2" style="background-color: #09302a !important;">
                <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.03857 2.29251C2.8508 2.22647 2.64448 2.23773 2.46501 2.32381C2.28554 2.40989 2.14761 2.56374 2.08157 2.75151C2.01553 2.93928 2.02679 3.1456 2.11287 3.32507C2.19895 3.50454 2.3528 3.64247 2.54057 3.70851L2.80257 3.79951C3.46957 4.03451 3.90857 4.18951 4.23157 4.34851C4.53457 4.49751 4.66857 4.61851 4.75657 4.74651C4.84657 4.87851 4.91657 5.06051 4.95657 5.42351C4.99657 5.80351 4.99757 6.29851 4.99757 7.03851V9.64051H20.7226C21.0526 7.98251 21.2076 7.14051 20.7746 6.57751C20.3306 6.00051 18.8136 6.00051 17.1286 6.00051H6.49057C6.48599 5.75401 6.47131 5.50781 6.44657 5.26251C6.39357 4.76551 6.27657 4.31251 5.99457 3.90051C5.71057 3.48451 5.33257 3.21851 4.89257 3.00151C4.48057 2.79951 3.95657 2.61551 3.33957 2.39851L3.03857 2.29251Z" fill="white"></path><path opacity="0.5" d="M20.2 12.1876L20.7 9.76362L20.724 9.64062H5C5 12.5816 5.063 13.5526 5.93 14.4666C6.796 15.3806 8.19 15.3806 10.98 15.3806H16.282C17.843 15.3806 18.624 15.3806 19.175 14.9306C19.727 14.4806 19.885 13.7166 20.2 12.1876Z" fill="white"></path><path d="M7.5 18C7.89782 18 8.27936 18.158 8.56066 18.4393C8.84196 18.7206 9 19.1022 9 19.5C9 19.8978 8.84196 20.2794 8.56066 20.5607C8.27936 20.842 7.89782 21 7.5 21C7.10218 21 6.72064 20.842 6.43934 20.5607C6.15804 20.2794 6 19.8978 6 19.5C6 19.1022 6.15804 18.7206 6.43934 18.4393C6.72064 18.158 7.10218 18 7.5 18ZM16.5 18C16.8978 18 17.2794 18.158 17.5607 18.4393C17.842 18.7206 18 19.1022 18 19.5C18 19.8978 17.842 20.2794 17.5607 20.5607C17.2794 20.842 16.8978 21 16.5 21C16.1022 21 15.7206 20.842 15.4393 20.5607C15.158 20.2794 15 19.8978 15 19.5C15 19.1022 15.158 18.7206 15.4393 18.4393C15.7206 18.158 16.1022 18 16.5 18Z" fill="white"></path></svg>
                    <div class="button-text">Add to cart</div>
                  </div>
            </button> 
              <div class="product-details">
                <div class="product-rating"><svg role="presentation" fill="none" focusable="false"  width="20" height="20" class="rating__star icon icon-rating-star" viewBox="0 0 15 15">
                  <path d="M7.5 0L9.58587 5.2731L15 5.72949L10.875 9.44483L12.1353 15L7.5 12.0231L2.86475 15L4.125 9.44483L0 5.72949L5.41414 5.2731L7.5 0Z" fill="currentColor"></path>
                </svg> 4.5 (100 reviews)</div>
                <h5 class="product-title">{{ product.name }}</h5>
                <p>Smooth | Nourish</p>
              <div class="product-price">
                            <del v-if="product.sale_price !== null">₹{{ product.price }}</del> <span>₹{{ product.sale_price?product.sale_price:product.price
                              }}</span>
                          </div>
                  
              </div>
            </div>
          </div>
        
        </div>
          
          
</div>
    </div>
  </div>
   
<!-------best product section end----------->

 </div>
  </div>
</section>
</template>
<style>
  .filter-sticky {
  position: sticky;
  top: 128px;  
}


.filter-sticky .card {
  border-radius: 10px;
  background-color:#fffaf3;
}
.bread-creams{
  padding-top: 9rem;
}

      
header h2 {
  font-size: 24px;
  font-weight: 600;
}
header p {
  margin-top: 5px;
  font-size: 16px;
}
.price-input {
  width: 100%;
  display: flex;
  margin: 30px 0 35px;
}
.price-input .field {
  display: flex;
  width: 100%;
  height: 45px;
  align-items: center;
}
.field input {
  width: 100%;
    height: 78%;
    outline: none;
    font-size: 10px;
    margin-left: 7px;
    border-radius: 6px;
    text-align: center;
    border: 1px solid #999;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.form-check-input:checked {
    background-color: #0E302A;
    border-color: #0E302A;
}


.price-input .separator {
  width: 130px;
  display: flex;
  font-size: 19px;
  align-items: center;
  justify-content: center;
}
.slider {
  height: 5px;
  position: relative;
  background: #ddd;
  border-radius: 5px;
}
.slider .progress {
  height: 100%;
  left: 4%;
  right: 25%;
  position: absolute;
  border-radius: 5px;
  background: #09302a;
}
.range-input {
  position: relative;
}
.range-input input {
  position: absolute;
  width: 100%;
  height: 5px;
  top: -5px;
  background: none;
  pointer-events: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
input[type="range"]::-webkit-slider-thumb {
  height: 17px;
  width: 17px;
  border-radius: 50%;
  background: #09302a;
  pointer-events: auto;
  -webkit-appearance: none;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
}
input[type="range"]::-moz-range-thumb {
  height: 17px;
  width: 17px;
  border: none;
  border-radius: 50%;
  background: #09302a;
  pointer-events: auto;
  -moz-appearance: none;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
}
button[aria-expanded="true"] svg {
  transform: rotate(180deg);
  transition: 0.3s;
}

button svg {
  transition: 0.3s;
}

#clearFilter {
  font-size: 13px;
  color: #0d6efd;
}

#clearFilter:hover {
  text-decoration: underline;
}
#clearFilter {
  font-size: 13px;
  color: red;
}

.filter-arrow {
  transition: transform 0.3s ease;
}

button[aria-expanded="true"] .filter-arrow {
  transform: rotate(180deg);
}
  
    </style>
    <script setup>
     
import { computed, onMounted, ref, watch } from 'vue';
import { getProducts ,getCategoryProducts,getCategory} from '../services/apiService';
import { image_url } from '../config/api';
import { addToCart } from '../services/cartService';
import { useRoute,useRouter } from 'vue-router';
const categories = ref([]);
const route=useRoute();
const router=useRouter();
const allProducts = ref([])
const productList=ref([]);
let priceDebounceTimer = null;
const category = computed(() => route.params.slug);
const filters = ref({
  category: route.params.slug || null,
  product: null,
  minPrice: 0,
  maxPrice: 7500,
});
async function fetchProducts(page = 1) {
  try {
    let result;

    if (filters.value.category) {
      result = await getCategoryProducts(filters.value.category, page);
    } else {
      result = await getProducts(page);
    }

    allProducts.value = result.data.data ?? result.data;
    applyFilters(); 
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
function applyFilters() {
  let filtered = [...allProducts.value];


  if (filters.value.product) {
    filtered = filtered.filter(
      p => p.id === filters.value.product
    );
  }


  filtered = filtered.filter(p => {
    const price = p.front_sale_price || p.sale_price || 0;
    return (
      price >= filters.value.minPrice &&
      price <= filters.value.maxPrice
    );
  });

  productList.value = filtered;
}

// async function fetchProducts(page = 1,param=null) {
//   try {
//     const params = {
//       page,
//       min_price: filters.value.minPrice,
//       max_price: filters.value.maxPrice,
//       product: filters.value.product,
//     };

//     let result;

//     if (filters.value.category) {
//       result = await getCategoryProducts(
//         filters.value.category,page,
//         params
//       );
//     } else {
//       result = await getProducts(page,param);
//     }

//     productList.value = result.data.data ?? result.data;
//   } catch (error) {
//     console.error("Error fetching products:", error);
//   }
// }
function onCategoryChange() {
  router.push({
    name: 'ProductCategories',
    params: { slug: filters.value.category }
  });
}


  const fetchCategories = async ()=>{
      
        
        try {
            const res = await getCategory();
            categories.value = res.data.data;
           
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };
  async  function clearFilters() {
  filters.value = {
    category: null,
    product: null,
    minPrice: 0,
    maxPrice: 7500,
  };

 await router.replace({ name: 'Product' });
}

watch(
  () => route.params.slug,
  (slug, oldSlug) => {
    if (slug === oldSlug) return;

    filters.value.category = slug || null;
    fetchProducts(1);
  },
  { immediate: false  }
);

watch(
  () => [filters.value.minPrice, filters.value.maxPrice, filters.value.product],
  () => {
    applyFilters();
  }
);
function debouncedFetchProducts() {
  if (priceDebounceTimer) {
    clearTimeout(priceDebounceTimer);
  }

  priceDebounceTimer = setTimeout(() => {
    fetchProducts(1);
  }, 500); 
}
const minGap = 500;
const maxRange = 10000;

watch(
  () => [filters.value.minPrice, filters.value.maxPrice],
  ([min, max]) => {
  
    if (min < 0) filters.value.minPrice = 0;
    if (max > maxRange) filters.value.maxPrice = maxRange;


    if (max - min < minGap) {
      if (min === filters.value.minPrice) {
        filters.value.minPrice = max - minGap;
      } else {
        filters.value.maxPrice = min + minGap;
      }
    }

    debouncedFetchProducts();
  }
);


onMounted(()=>{
  fetchCategories();
  fetchProducts(1);
  
})

    </script>