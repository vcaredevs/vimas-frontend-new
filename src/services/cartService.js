import { ref } from "vue";
import { addToCartApi, updateToCartApi } from "./apiService";
import { getOrCreateAuthUserId } from "../utils/authUser";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export const cartCount = ref(0);

export function increaseCount(qty = 1) {
  cartCount.value += qty;
}

export function decreaseCount(qty = 1) {
  cartCount.value = Math.max(0, cartCount.value - qty);
}
export function resetCartCount() {
  cartCount.value = 0;
}
function getProductId(product) {
  return product?.id || product?.product?.id;
}

export async function addOrUpdateCart(product, qty = 1) {
  const userId = getOrCreateAuthUserId();
  const productId = getProductId(product);

  try {
    const res = await addToCartApi({
      user_id: userId,
      product_id: productId,
      qty,
    });

    if (res.data.status) {
      increaseCount(qty);
      toast.success("Added to cart successfully!");
    }
  } catch (error) {
    if (error.response?.status === 409) {
      const currentQty = product.qty || 1;
      const newQty = currentQty + qty;

      await updateCartQty(productId, userId, newQty);
      increaseCount(qty);
    } else {
      toast.error(error.response?.data?.msg || "Something went wrong!");
    }
  }
}

export async function updateCartQty(productId, userId, qty) {
  try {
    const res = await updateToCartApi({
      user_id: userId,
      product_id: productId,
      qty,
    });
 toast.success(res.data.msg || "Cart Updated Successfully!");
    if (!res.data.status) {
      toast.error(res.data.msg || "Failed to update cart!");
    }
  } catch (error) {
    toast.error(error.response?.data?.msg || "Update failed!");
  }
}

export async function addToCart(product, qty = 1) {
  const userId = getOrCreateAuthUserId();

  try {
    const res = await addToCartApi({
      user_id: userId,
      product_id: product.id,
      qty,
    });

    if (res.data.status) {
      increaseCount(qty);
      toast.success(res.data.msg || "Added to cart successfully!");
    } else {
      toast.error(res.data.msg || "Failed to add to cart!");
    }
  } catch (error) {
    toast.error(error.response?.data?.msg || "Something went wrong!");
  }
}
