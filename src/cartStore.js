import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import {
  displayCartDetails,
  getCartCount,
  updateToCartApi,
  deleteCartList,
  addToCartApi,
  getCheckoutDetails,
} from "./services/apiService";
import { getOrCreateAuthUserId } from "./utils/authUser";

export const useCartStore = defineStore("cart", () => {
  const cartItems = ref([]);
  const cartCount = ref(0);
  const loading = ref(false);
  const checkoutData = ref(null);
  const loadingProductId=ref(null) ;
const checkoutLoading = ref(false);

  const fetchCheckoutData = async () => {
  const userId = getOrCreateAuthUserId();
  checkoutLoading.value = true;
  try {
     const payload = {
    coupon_code: null,
  };

  const res = await getCheckoutDetails(userId, payload);

  if (res?.data) {
    checkoutData.value = res.data;
  }
  } finally {
    checkoutLoading.value = false;
  }
};

  /* ===============================
      FETCH CART
  =============================== */
  const fetchCart = async () => {
    const userId = getOrCreateAuthUserId();
    loading.value = true;

    try {
      const productRes = await displayCartDetails({ user_id: userId });
      const countRes = await getCartCount(userId);

      cartCount.value = countRes.data.cart_count || 0;

      const qtyMap = {};
      countRes.data.cart_items.forEach((item) => {
        qtyMap[item.product_id] = item.qty;
      });

      cartItems.value = productRes.data.data.map((product) => ({
        ...product,
        qty: qtyMap[product.id] || 1,
       
        
      }
    
    ));
   
    } catch (error) {
      console.error("Fetch cart error:", error);
    } finally {
      loading.value = false;
    }
  };

  /* ===============================
      ADD TO CART
  =============================== */
    const addToCartList  = async (product, qty = 1) => {
        const userId = getOrCreateAuthUserId();

        try {
       loadingProductId.value= product.id; 
        const res = await addToCartApi({
            user_id: userId,
            product_id: product.id,
            qty,
        });

        if (res.data.status) {
        await fetchCart();
        toast.success(res.data.msg || "Added to cart successfully!");
        } else {
        toast.error(res.data.msg || "Failed to add to cart!");
        }
        
        } catch (error) {
        console.error("Add to cart error:", error);

        if (error.response && error.response.status === 409) {
        toast.warning("Already in cart");
        } else {
        toast.error("Something went wrong. Please try again!");
        }
    }
    finally {
        loadingProductId.value= null; 
      }
    };
     /* ===============================
      UPDATE TO CART
  =============================== */

const addOrUpdateCart = async (product, qty = 1) => {
    console.log("product=====>",product.product.id);
    
  const userId = getOrCreateAuthUserId();
  console.log("userId=====>",userId);

  try {

 loadingProductId.value= product.id; 
    const res = await addToCartApi({
      user_id: userId,
      product_id: product.product.id,
      qty,
    });

    if (res?.data?.status) {
      await fetchCart(); 
      toast.success(res.data.msg || "Added to cart successfully!");
    }

  } catch (error) {

    
    if (error.response?.status === 409) {

  
      const existingItem = cartItems.value.find(
        (item) => item.id === product.product.id
      );

      const newQty =
        (existingItem?.qty || 0) + qty;

      try {
        const updateRes = await updateToCartApi({
          user_id: userId,
          product_id: product.product.id,
          qty: newQty,
        });

        if (updateRes?.data?.status) {
          await fetchCart();
          toast.success("Cart quantity updated!");
        } else {
          toast.error(updateRes?.data?.msg || "Failed to update cart!");
        }

      } catch (updateError) {
        toast.error("Failed to update cart!");
      }
       finally {
        loadingProductId.value= null; 
      }

    } else {
      toast.error(error?.response?.data?.msg || "Something went wrong!");
    }
  }
};

  /* ===============================
      UPDATE QUANTITY
  =============================== */
  const updateQty = async (item, type) => {
    const userId = getOrCreateAuthUserId();
    let newQty = item.qty;

    if (type === "increment") newQty++;
    if (type === "decrement" && item.qty > 1) newQty--;
    if (type === "input") newQty = Number(item.qty) || 1;

    try {
    const res=  await updateToCartApi({
        user_id: userId,
        product_id: item.id,
        qty: newQty,
      });
if (res?.data?.status) {
      item.qty = newQty;

      cartCount.value = cartItems.value.reduce(
        (sum, i) => sum + Number(i.qty || 1),
        0
      );

      toast.success(res.data.msg || "Cart updated successfully!");
    } else {
      toast.error(res?.data?.msg || "Failed to update!");
    }
  
    } catch (error) {
      console.error("Update qty error:", error);
       toast.error(error?.response?.data?.msg || "Failed to update!");
    }
  };

  /* ===============================
      REMOVE ITEM
  =============================== */
  const removeItem = async (item) => {
    const userId = getOrCreateAuthUserId();

    try {
      const res=await deleteCartList({
        user_id: userId,
        product_id: item.id,
      });

         if (res?.data?.status) {

      cartItems.value = cartItems.value.filter(
        (p) => p.id !== item.id
      );

      cartCount.value = cartItems.value.reduce(
        (sum, i) => sum + Number(i.qty || 1),
        0
      );
await fetchCheckoutData();
      toast.success(res.data.msg || "Item removed from cart!");
    } else {
      toast.error(res?.data?.msg || "Failed to remove item!");
    }
    } catch (error) {
      console.error("Delete item error:", error);
       toast.error(error?.response?.data?.msg || "Something went wrong!");
    }
  };

  /* ===============================
      SUBTOTAL
  =============================== */
  const subtotal = computed(() => {
    return cartItems.value.reduce((sum, item) => {
      const price =
        item.sale_price !== null ? item.sale_price : item.price;
      return sum + price * item.qty;
    }, 0);
  });
function clearCart () {
  cartCount.value = 0;
   cartItems.value = [];
}

// =====Checkout==========
const checkout = async (couponCode = null) => {
  let userId = localStorage.getItem("user_id")
    ? atob(localStorage.getItem("user_id"))
    : null;

  const payload = {
    id:userId,
     coupon_code: "",
  shipping_method: "default",
  shipping_option: "standard"
  };
  checkoutLoading.value = true;
  try {
    const res = await getCheckoutDetails(userId, payload);

    if (res?.data) {
      checkoutData.value = res.data;
      return true; // success flag
    }

    return false;

  } catch (err) {
    console.error("Checkout error:", err);
    toast.error("Failed to load checkout details");
    return false;
  }
  finally {
    checkoutLoading.value = false;
  }
};

  return {
    cartItems,
    cartCount,
    loading,
    subtotal,
    fetchCart,
    addToCartList ,
    updateQty,
    removeItem,
    addOrUpdateCart,
    clearCart,
    checkout,
    checkoutData,
    loadingProductId,
    checkoutLoading
  };
});
