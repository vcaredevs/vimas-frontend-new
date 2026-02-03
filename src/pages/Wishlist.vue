<template>
  <div class="">
    <section class="breadscrum-sec">
        <div class="container-xl">
            <div class="row">
              <div class="col-lg-12">
                <div class="breadscrum-bx">
                    <img src="../../assets/images/breadcrum.jpg" class="img-fluid" alt="">
                    <div class="breadscrum-overlay">       
                        <h2 class="sec-title">Wishlist Page</h2>                
                          <p class="d-flex">
                            
                            <a href="/">Home</a> <span class="mx-1">/</span> 
                            <span class="highlighted">Wishlist </span>
                            
                          </p>
                        
                    </div>

                </div>
              </div>
            </div>
        </div>
    </section>
    <div v-if="store.loading" class="d-flex justify-content-center align-items-center" style="height: 200px">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    <section v-else>
        <section class="cart-sec section pt-lg-5 pt-3" v-if="store.wishlistProd && store.wishlistProd.data && store.wishlistProd.data.length">
          <div class="container-xl">
            <div class="row mt-lg-3 mt-2 justify-content-center">
              <div class="col-lg-12 col-xl-12">
                <!-- cart item-->
                <div class="cart-item d-lg-none">
                  <div
                    class="row align-items-center bordersolid"
                    v-for="(item, index) in store.wishlistProd.data"
                    :key="index"
                  >
                    <div class="col-4 col-sm-3 col-md-3 col-xl-2">
                      <a href=""
                        ><img :src="image_url+item.image" class="cart-img img-fluid" alt=""
                      /></a>
                    </div>
                    <div class="col-8 col-sm-9 col-md-9 col-xl-12 ps-lg-0 ps-1">
                      <div class="row align-items-center">
                        <div class="col-12 col-lg-7">
                          <a href=""
                            ><h6 class="cart-title">{{ item.name }}</h6></a
                          >
                          <p
                            class="mb-lg-1 mb-0 mb-md-1 mb-sm-1 d-flex flex-column"
                          >
                            <span class="weight-text"
                              >Weight : {{ item.weight }} gm</span
                            >
                            <span class="c-instock" text>In stock</span>
                            <span class="weight-text">
                              {{
                                item.subscription
                                  ? "Subscription :" + item.subscription
                                  : " "
                              }}</span
                            >
                          </p>
                        </div>
    
                        <div class="col-6 col-lg-3">
                          <div class="qty-container d-flex">
                            <button class="qty-btn-minus btn-light" type="button" @click="decrement(item)">
                              <img
                                src="../../assets/images/icons/minus-icon.svg"
                                alt=""
                              />
                            </button>
                            <input
                              type="text"
                              name="qty"
                              value="0"
                              class="input-qty"
                            />
                            <button class="qty-btn-plus btn-light" type="button" @click="increment(item)">
                              <img
                                src="../../assets/images/icons/plus-icon.svg"
                                alt=""
                              />
                            </button>
                          </div>
                        </div>
                        <div class="col-6 col-lg-2 text-center">
                          <div class="d-flex justify-content-between mt-lg-1 align-items-baseline">
                            <h6 class="cart-price">₹ {{ item.sale_price !==null?item.sale_price:item.price }}</h6>
                            <p class="delete-btn float-end">
                              <img
                                src="../assets/images/delete.svg"
                                class="svg"
                                alt="Delete"
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    
                <div class="table-responsive d-none d-lg-block">
                  <table class="table align-middle">
                    <thead class="table-light">
                      <tr>
                        <th scope="col">Product</th>
                        <th scope="col" style="visibility: hidden"></th>
                        <th scope="col">Price</th>
                        <!-- <th scope="col">Quantity</th> -->
                        <th scope="col">Stock Status</th>
                        <th scope="col" style="visibility: hidden"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in store.wishlistProd.data" :key="index">
                        <td>
                            <router-link :to="item.slugable ? { name: 'ProductDetail',params :{slug:item.slugable.key} }:''">
                                <img
                                    :src="image_url+item.image"
                                    class="cart-img img-fluid"
                                    :alt="item.name"
                                    style="max-width: 80px"
                                />                            
                            </router-link>
                        </td>
                        <td>
                            <router-link :to="item.slugable ? { name: 'ProductDetail',params :{slug:item.slugable.key} }:''">
                                {{ item.name }}
                                <!-- <span class="grey-text"
                                    v-if="item.attribute != null"><br />
                                    Weight: {{ item.attribute != null ? item.attribute.title : '' }}
                                </span> -->
                                 <span class="grey-text"
                                ><br />
                                   Smooth | Nourish
                                </span>
                            </router-link>
                        </td>
                        <td>₹ {{ item.sale_price !==null?item.sale_price:item.price }}</td>
                        <!-- <td>
                          <div class="d-flex align-items-center">
                            <button
                              class="btn btn-light btn-sm me-1"
                              @click="decrement(item)"
                            >
                              <img
                                src="../../assets/images/icons/minus-icon.svg"
                                alt=""
                              />
                            </button>
                            <input
                              type="text"
                              class="form-control form-control-sm text-center"
                              style="width: 50px"
                              :value="item.quantity"
                            />
                            <button
                              class="btn btn-light btn-sm ms-1"
                              @click="increment(item)"
                            >
                              <img
                                src="../../assets/images/icons/plus-icon.svg"
                                alt=""
                              />
                            </button>
                          </div>
                        </td> -->
                        <td>
                          <span class="text-success">
                            In Stock
                          </span>
                        </td>      
    
                        <td>
                          <button class="btn add-to-cart" @click="handleAddCart(item.variations && item.variations.length ? item.variations : item)">Add to cart</button>
                          <button class="btn btn-link p-0" @click="deleteWishlist(item.id,'delete')">
                            <img
                              src="../../assets/images/icons/delete.svg"
                              alt="Delete"
                              style="width: 20px"
                            />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="row mt-lg-4 mt-3" v-if="store.wishlistProd && store.wishlistProd.data && store.wishlistProd.last_page >1">
            <div class="col-lg-12">
              <nav aria-label="Page navigation">
                <ul class="pagination d-flex justify-content-end">
                  <li class="page-item cursor-pointer" >
                    <a class="page-link" @click="changePageValue(null,currentPage - 1)" :disabled="currentPage === 1"><img src="../../assets/images/icons/leftChev.svg" class="svg" alt="Left"></a>
                  </li>
                  <template v-for="(link,i) in store.wishlistProd.links" :key="i">
                    <li class="page-item cursor-pointer"  v-if="link?.url && !link.label.includes('Next') && !link.label.includes('Previous')">
                        <a class="page-link" @click="changePageValue(null,link.label)" :disabled="currentPage === link.label" :class="{active:currentPage == link.label}">{{ link.label }}</a>
                    </li>
                  </template>
                  <li class="page-item cursor-pointer">
                    <a class="page-link" @click="changePageValue(null,currentPage + 1)" :disabled="currentPage === lastPage"><img src="../../assets/images/icons/rightChev.svg" class="svg" alt="Right"></a>
                  </li>
                </ul>
              </nav>
            </div>
        </div>
        <div class="row mb-4 text-center" style="width:300px;height:auto;margin:0 auto;" v-if="!store.wishlistProd.data.length">
            <img src="../../assets/emptywishlist.gif" alt="">
            <span class="text-center" style="font-size:20px;font-weight:500;color:black;">No product in wishlist!</span>
        </div>  
    </section>
  </div>
</template>
<style scoped>  
table {
  font-family: RadioCanadaBig-Regular;
}
.add-to-cart {
  padding: 5px 19px;
  margin-right: 10px;
  background-color: #1b79a8;
  color: #ffffff;
  border-radius: 5px;
}
.add-to-cart:hover{
    background-color: #1b79a8;
    color: #ffffff;
}
.cart-price {
  margin-top: 10px;
}
.delete-btn {
  margin-top: 6px;
}
.cart-item h6 {
  color: #161616;
}
span,
.weight-text {
  margin-bottom: 10px;
}
.cart-item p {
  font-family: Poppins-Regular;
}
.cart-item {
  border-bottom: none;
}

.bordersolid {
  border-bottom: 1px solid #878788 !important;
  margin-bottom: 22px;
}

.cart-item .qty-container {
  max-width: 120px;
  font-size: 14px;
}
.qty-container {
  border: #878788 1px solid;
  border-radius: 5px;
  margin: 0px 0 0 0;
  justify-content: center;
  padding: 5px 10px;
}
.cart-item .qty-container .qty-btn-plus,
.cart-item .qty-container .qty-btn-minus {
  box-shadow: none !important;
}
.qty-container .input-qty {
  width: 30px;
  text-align: center;
  border: none;
}
.qty-container .qty-btn-minus,
.qty-container .qty-btn-plus {
  border: none;
  box-shadow: none;
  background: transparent;
}

.cart-item .c-instock {
  font-size: 14px;
  color: #068743;
  display: inline-block;
  margin: 4px 0;
}
.highlighted {
  color: #004987;
}
.overlay-text {
  text-align: center;
  position: relative;
  z-index: 1; /* Ensure text is above the overlay */
}
th {
  background-color: transparent !important;
  font-weight: 100;
}
.grey-text {
  font-size: 13px;
  margin-top: 10px;
  color: #8a8686 !important;
}
a{
    color:#000000;
}
@media screen and (max-width: 767.98px) {
    .cart-item .cart-img {
        border-radius: 6px;
        width: 100%;
    }
}
@media screen and (max-width: 767.98px) {
    .cart-item .cart-title {
        font-size: 14px;
        margin-bottom: 5px;
        font-weight: 500;
    }
}
@media screen and (max-width: 767.98px) {
    .cart-item .weight-text, .cart-item .c-instock {
        font-size: 12px;
    }
}
@media screen and (max-width: 767.98px) {
    .cart-item .weight-text, .cart-item .c-instock {
        font-size: 12px;
    }
}
@media screen and (max-width: 767px) {
    .qty-container {
        border: #161616 1px solid;
        border-radius: 3px;
        width: 90px !important;
        padding: 4px 4px;
        margin-top: 1px;
        font-size: 15px;
    }
}
@media screen and (max-width: 767.98px) {
    .cart-item .qty-container {
        max-width: 140px;
        padding: 1px 10px;
        font-size: 13px;
    }
}
.qty-container .qty-btn-minus, .qty-container .qty-btn-plus {
    border: none;
    box-shadow: none;
    background: transparent;
}
@media screen and (max-width: 767px) {
    .qty-container .qty-btn-minus img, .qty-container .qty-btn-plus img {
        width: 15px !important;
    }
}
.cart-item .cart-price {
    font-size: 16px;
    margin-top: 3px;
    margin-bottom: 10px;
}
.active{
    background-color: #1B79A8 !important;
    border: 1px solid #1B79A8 !important;
    color: #FFFFFF !important;
}
</style>

<script setup>

import {onMounted, ref, watch} from 'vue';

import { useRoute } from "vue-router";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { image_url } from '../config/api';
import { useUserStore } from "../assets/js/store";
import { addToCart } from '../services/cartService';
const route = useRoute();
  const currentPage = ref(0);
  const lastPage = ref(0);
  const loading = ref(false);
const {store,addDeleteWishlist,fetchwishlistDetails} = useUserStore();
const deleteWishlist= (id,type)=>{
    addDeleteWishlist(id,type)
}
async function handleAddCart(item) {
  const result = addToCart(item, 1);
}
async function decrement(item) {
  const prevQty = Number(item.qty || 1)
  if (prevQty <= 1) return
  const userId = localStorage.getItem('user_id') ? atob(localStorage.getItem('user_id')) : null;
  const newQty = prevQty - 1
  item.qty = newQty

  try {
    const payload = {
      user_id: userId,
      product_id: item.id,
      qty: item.qty
    }
    await updateCartList(payload)
     toast.success("Cart Updated Successfully", {});
    cartStore.updateQty(item.id, item.qty)

  } catch (err) {
    console.error(err)
    item.qty = prevQty
  }
}
async function increment(item) {
    const userId = atob(localStorage.getItem("user_id")) || 10; 
    const prevQty = Number(item.qty || 1)
    const newQty = prevQty + 1
   

    try{
        const payload={
            "user_id":userId ? parseInt(userId) : null,
            "product_id" : item.id,
            "qty": newQty
        }
        const res=await updateCartList(payload);
        toast.success("Cart Updated Successfully", {});
        item.qty = newQty;
        const ok = cartStore.updateQty(item.id, item.qty)
        if (!ok)   cartStore.setItems(products.value)
    }catch (err){
      toast.error(err.response.data.msg , {});
      // console.error(err);
    }
  
}
function changePageValue(id = null, page) {
  currentPage.value = page;
}
watch(currentPage, async (newPage) => {
  loading.value = true;
  await fetchwishlistDetails(newPage);
  loading.value = false;
});
watch(
  () => store.wishlistProd,
  (val) => {
    if (val?.current_page && val?.last_page) {
      currentPage.value = val.current_page;
      lastPage.value = val.last_page;
    }
  },
  { deep: true }
);


onMounted(async () => {
  loading.value = true;
  await fetchwishlistDetails(currentPage.value);
  loading.value = false;
});


</script>
