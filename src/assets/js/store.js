import { reactive, ref } from "vue";

import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { useRouter } from "vue-router";
import { getMenus, getWishlistProduct, postwishlistProducts } from "../../services/apiService";

const router = useRouter();
const MENU_CACHE_VERSION = "v1";
const MENU_CACHE_TTL = 60 * 60 * 1000; 
const getMenuCacheKey = (type) => `menu_${MENU_CACHE_VERSION}_${type}`;



const store = reactive({
  
  wishlistProd:[],
  loading:false,
  menu:[],
  checkoutData: null,

});
const setCheckoutData = (data) => {
  store.checkoutData = data;
};

const clearCheckoutData = () => {
  store.checkoutData = null;
};

const userStore = reactive({
  phone: localStorage.getItem("phone") ? atob(localStorage.getItem("phone")) :null,
  customerType: localStorage.getItem("customerType") ? atob(localStorage.getItem("customerType")) : "Both",
  userId: localStorage.getItem("user_id") ? atob(localStorage.getItem("user_id")):null,
});

const fetchwishlistDetails = async(page=1)=>{
   
    try {
        if(userStore.userId){
            store.loading = true;
            const orderDetailRes = await getWishlistProduct
            
            (userStore.userId,page);
            store.wishlistProd = orderDetailRes.data.data;            
        }
    } catch (err) {
        store.wishlistProd.data = [ ];
        console.error('Error fetching wishlist details:', err)
    }finally{
        store.loading = false;
    }
}
const addDeleteWishlist = async (productId,type) => {
    var data = {
        user_id:userStore.userId,
        product_id:productId
    }
    try{
        const  wishlistfun = await postwishlistProducts(type,data);
        if(type == 'delete'){
            store.wishlistProd.data = store.wishlistProd.data.filter(item=> item.id !== productId);
            toast.success(wishlistfun.data.data);
            if(store.wishlistProd.data.length < 1){
                store.wishlistProd.data = [];
            }
        }else{
            store.wishlistProd.data.push(wishlistfun.data.data);
            toast.success('Product added to wishlist successfully!');
        }
    }catch(err){
        if(err.response.status != 401){
            toast.error(err.response.data.msg);
        }
    }
};
const checkLogin = ()=>{
    let userId = localStorage.getItem("user_id") ? atob(localStorage.getItem("user_id")):null;
    if(!userId){
      router.push({ name: "Login" });
    }
    
}

const fetchMenus = async () => {
 
    let menutype = "main-menu-1";

     const CACHE_KEY = getMenuCacheKey(menutype);
     const cached = localStorage.getItem(CACHE_KEY);
       if (cached) {
    const { data, expiry } = JSON.parse(cached);

    if (Date.now() < expiry) {
      store.menu = data;
      return; 
    } else {
      localStorage.removeItem(CACHE_KEY);
    }
  }
    try {
           store.loading = true;
        const menuRes = await getMenus(menutype);
        store.menu = menuRes.data.data;
           localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({
        data: store.menu,
        expiry: Date.now() + MENU_CACHE_TTL,
      })
    );
    } catch (error) {
        console.error("Error is", error);
    }
};
fetchwishlistDetails();
fetchMenus();

export function useUserStore() {
  return {
    store,
    addDeleteWishlist,
    fetchwishlistDetails,
   
    userStore,
    checkLogin,
     setCheckoutData,
    clearCheckoutData,
  };
}
