<template>
        <div v-if="store.loading" class="d-flex justify-content-center align-items-center mt8" style="height: 200px">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
    </div>
       <section class="page mt8" v-else>
        <div class="page__wrapper container" v-if="store.wishlistProd && store.wishlistProd.data && store.wishlistProd.data.length">
        

                <div class="d-md-block d-none">
                    <div class="row py-4 mar_bottom" >
                        <div class="col-sm-1">
                
                        </div>
                        <div class="col-sm-5">
                            Products
                        </div>
                        <div class="col-sm-2">
                            price
                        </div>
                        <div class="col-sm-2">
                            Stock Details
                        </div>
                        <div class="col-sm-2">
                
                        </div>
                
                
                    </div>
                    <div class="row d-flex align-items-center mar_bottom"  v-for="(item, index) in store.wishlistProd.data"
                    :key="index">
                
                        <div class="col-sm-1 text-center" @click="deleteWishlist(item.id,'delete')">
                            <i class="bi bi-trash" style="color: red;"></i>
                        </div>
                        <div class="col-sm-5">
                            <div class="d-flex justify-content-between p-3 ">
                                <div class="d-flex align-items-center">
                                    <div>
                                        <img class="ord_pro_img" :src="image_url+item.image" alt="">
                                    </div>
                                    <div>
                                        <div class="ord_pro_name">
                                           {{ item.name }}
                                        </div>
                                        <div class="ord_pro_type">
                                            Smooth | Nourish
                                        </div>
                                        <div class="ord_pro_vol">
                                            Item Volume :{{ item.weight }}
                                        </div>
                                    </div>
                
                
                                </div>
                
                            </div>
                        </div>
                        <div class="col-sm-2">
                            <div class="ord_pro_pri">
                                Rs. {{ item.sale_price !==null?item.sale_price:item.price }}
                            </div>
                        </div>
                        <div class="col-sm-2">
                            <div class="in_stock">
                                In stock
                            </div>
                        </div>
                        <div class="col-sm-2">
                            <button class="wish_add_cart_btn wish-add-list "  @click="handleAddCart(item.variations && item.variations.length ? item.variations : item)">Add to cart</button>
                
                        </div>
                    </div>
                 
                  
                </div>
                <div class="d-md-none d-block">
                    
                    
                    <div class="order_status_wrap" v-for="(item, index) in store.wishlistProd.data"
                    :key="index">
                       
                        <div class="d-flex justify-content-between p-3 ord_pro_details">
                            <div class="d-flex">
                                <div>
                            <router-link :to="item.slugable ? { name: 'ProductDetail',params :{slug:item.slugable.key} }:''">       
                            <img class="ord_pro_img" :src="image_url+item.image"  :alt="item.name">
                            </router-link> 
                                </div>
                                <div>
                                    <div class="ord_pro_name">
                                        {{ item.name }}
                                    </div>
                                    <div class="ord_pro_type">
                                        Skin Type:&nbsp;Oil
                                    </div>
                                    <div class="ord_pro_vol">
                                        Item Volume :{{ item.weight }}
                                    </div>
                                </div>


                            </div>
                            <div class="ord_pro_pri">
                                Rs. {{ item.sale_price !==null?item.sale_price:item.price }}
                            </div>
                        </div>
                        <div class="d-flex align-items-center p-3">
                            <button class="track_btn" @click="handleAddCart(item.variations && item.variations.length ? item.variations : item)">Add Cart</button>
                            <button class="cancel_btn" @click="deleteWishlist(item.id,'delete')">Remove</button>
                        </div>

                    </div>
                    
                    
                    
                </div>
            </div>


  <div class="row mb-4 text-center" style="width:300px;height:auto;margin:0 auto;" v-if="!store.wishlistProd.data.length">
            <img src="../../assets/emptywishlist.gif" alt="">
            <span class="text-center" style="font-size:20px;font-weight:500;color:black;">No product in wishlist!</span>
        </div> 


    </section>
</template>
<style scoped>
    .wish-add-list{
        background-color:#0E302A;
        border:1px solid #0E302A;
    }
    .wish-add-list:hover{
             background-color:#19574C;
    }
    .mt8{
        margin-top: 8rem !important;
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