<template>


    <!-- Product Area Start -->
    <div class="product-area section">
        <div class="container">
            <div class="product-section-top">
                <div class="row align-items-center">
                    <div class="col-md-4"></div>
                    <div class="col-md-8">
                        <div class="product-filter">
                           <form>
  <select
    class="form-select"
    v-model="selectedCategory"
  @change="onCategoryChange"
  >
    <option value="">
      ----------------- All Products -----------------
    </option>

    <option
      v-for="item in categoryList"
      :key="item.id"
      :value="item.id"
    >
      {{ item.name }}
    </option>
  </select>
</form>

                        </div>
                    </div>
                </div>
            </div>

            <div class="row position-relative">
                 <div v-if="pageLoading" class="grid-overlay-loader">
        <div class="main-spinner"></div>
      </div>
                <div class="col-md-3 col-sm-6 mt-4"  v-for="product in productList"
    :key="product.id"  >
                    <div class="product-item shop-product card h-100 shadow-sm border-0"  
                 >

                        <!-- Product Image -->
                         <a :href="`/vimas/product/${product.slug?.key || product.slugable?.key}`" class="product_image d-block text-center p-3">
                        <!-- <a  class="product_image d-block text-center p-3"> -->
							<img class="product-thumbnal img-fluid rounded" 
                             :src="image_url + product.image"
                          :alt="product.name"
							      />
						</a>

                        <!-- Product Info -->
                        <div class="card-body text-center">
                            <h6 class="product_name mb-2">
                                <a class="product-link text-dark text-decoration-none fw-bold" href="https://inway.com.in:443../product/aloevera-facial-gel">
									{{ product.name }}
								</a>
                            </h6>

                            <div class="product_price mb-2">
                                <span class="price fw-bold text-primary"> <del v-if="product.sale_price !== null"
                          >₹{{ product.price }}</del
                        >
                        <span
                          >₹{{
                            product.sale_price
                              ? product.sale_price
                              : product.price
                          }}</span
                        ></span>
                            </div>

                            <!-- Stock Status -->
                            <span class="badge bg-success mb-3">In Stock</span>

                            <!-- Add to Bag Button -->
                            <a title="Add To Bag" class="btn btn-primary w-100 add_to_cart_button fw-semibold" 
                            :disabled="cartStore.loadingProductId === product.id"

                            @click="cartStore.addToCartList(product)">
								<span v-if="cartStore.loadingProductId === product.id" class="custom-spinner"></span>
  <span v-else>Add To Bag</span>

								</a>
                        </div>
                    </div>
                </div>
               <nav
  v-if="lastPage > 1 && !selectedCategory"
  aria-label="Page navigation example "
>

                <!-- <nav aria-label="Page navigation example "> -->
              <ul class="pagination  d-flex justify-content-center gap-2">
                <li
                  class="page-item"
                  :disabled="currentPage === 1"
                  @click="fetchAllProducts(currentPage - 1)"
                >
                  <a class="page-link"
                    ><</a>
                </li>
                <li
                  v-for="page in lastPage"
                  :key="page"
                  class="page-item"
                  :class="page === currentPage ? 'activecolor' : 'basiccolor'"
                  @click="fetchAllProducts(page)"
                >
                  <a class="page-link"> {{ page }}</a>

                  
                </li>
                <li
                  class="page-item"
                  :disabled="currentPage === lastPage"
                  @click="fetchAllProducts(currentPage + 1)"
                >
                  <a class="page-link"
                    >></a>
                </li>
              </ul>
            </nav>
            </div>
            
        </div>
    </div>

  

</template>
  <!-- Modern Customer-Friendly Styles -->
    <style scoped>
    .grid-overlay-loader {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.main-spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #eee;
  border-top: 5px solid #0d6efd;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
.page-item{
    cursor: pointer;
}
    .section{
        padding: 17rem 0 !important;
    }
    @media(max-width:991px){

.section{
    padding: 10rem 0 !important;
}
}
        .product-item {
            border-radius: 12px;
            transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .product-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
        }

        .product_image img {
            max-height: 200px;
            object-fit: contain;
        }

        .add_to_cart_button {
            background: black;
            border: none;
            border-radius: 8px;
            padding: 10px 14px;
            color: #fff !important;
            text-transform: uppercase;
            transition: all 0.25s ease;
        }

        .add_to_cart_button:hover {
            background: black;
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
        }
        .pagination{
          padding-top: 8rem;
        }
    .custom-spinner {
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
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
.btn:disabled {
  background-color: #0d6efd !important; 
  border-color: #0d6efd !important;
  opacity: 0.9;
}
    </style>
    <script setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {  getCategory, getCategoryList, getCategoryListById, getCategoryProducts, getCollectionList, getCollectionListById, getProducts } from '../services/apiService';
import { image_url } from '../config/api';
import { useCartStore } from '../cartStore';
const cartStore=useCartStore();
const productList = ref([]);
const collectionList = ref([]);
const pageLoading = ref(true);
const categoryList=ref([]);
const selectedCategory = ref("");
const currentPage = ref(1);
const lastPage = ref(1);
const route = useRoute();
const router=useRouter();
const fetchAllProducts = async (page = 1) => {
  try {
    const res = await getProducts(page);
    const paginator = res.data.data ?? res.data;

    productList.value = paginator.data ?? [];
    currentPage.value = paginator.current_page ?? 1;
    lastPage.value = paginator.last_page ?? 1;
  } catch (err) {
    console.error("Error fetching products:", err);
    productList.value = [];
  }
};
const fetchCategoryProducts = async (categoryId) => {

  try {
    const res = await getCategoryListById(categoryId);
console.log("category products",res);


    productList.value = res.data.data ?? res.data;
      currentPage.value = 1;
    lastPage.value = 1;
  } catch (err) {
    console.error("Error fetching category products:", err);
    productList.value = [];
  }
};
const onCategoryChange = () => {
  const categoryId = selectedCategory.value;

  if (categoryId) {
   
    const category = categoryList.value.find(
      c => c.id === categoryId
    );
    console.log("category",category);
    
  if (!category || !category.slugable) {
    console.warn("Category slug not found", category);
    return;
  }
    router.push({
      name: "ShopCategory",
      params: {
        slug: category.slugable.key
      }
    });

  } else {
  
    router.push("/shop");
  }
}


    const getCategories = async () => {
    
  try {
    const res = await getCategory();
    categoryList.value = res.data.data;
    console.log("CATEGORY+>", categoryList.value);
    
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};
    
const loadProducts=async()=>{
  const slug=route.params.slug;
  console.log("slug=>",slug);
  
try {
   if (!slug) {
      await fetchAllProducts(1);
      return;
    }
  const res=await getCategoryProducts(slug,1,null)
   productList.value = res.data.data ?? res.data;
    currentPage.value = 1;
    lastPage.value = 1;
} catch (error) {
   console.error(error);
    productList.value = [];
}
}
watch(
  [() => route.params.slug, categoryList],
  ([slug, categories]) => {

    if (!slug || !categories.length) {
      selectedCategory.value = "";
      return;
    }

    const category = categories.find(
      c => c.slugable?.key === slug
    );

    selectedCategory.value = category?.id || "";
    loadProducts();
  },
  { immediate: true }
);




onMounted(async () => {
  try {
    await getCategories();  
    await loadProducts();   
  } finally {
    pageLoading.value = false;
  }
 
});
</script>