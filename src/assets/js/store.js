import { reactive, ref } from "vue";

import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { useRouter } from "vue-router";
import { getWishlistProduct, postwishlistProducts } from "../../services/apiService";

const router = useRouter();




const store = reactive({
  
  wishlistProd:[],
 
  loading:false,

});

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


fetchwishlistDetails();

export function useUserStore() {
  return {
    store,
    addDeleteWishlist,
    fetchwishlistDetails,
   
    userStore,
    checkLogin
  };
}
