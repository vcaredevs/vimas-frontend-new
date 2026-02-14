import axios from "axios";
import { API_ENDPOINTS } from "../config/api";

const api = axios.create({
  baseURL: API_ENDPOINTS.base,
  headers: {
    "Content-Type": "application/json",
  },
  //  timeout: 1500,
});

export const getProducts = (page = 1, param = "") => {
  const query = param ? `&${param}` : "";
  return api.get(`${API_ENDPOINTS.products}?page=${page}${query}`);
};
export const getProductDetails = (slug) =>
  api.get(`${API_ENDPOINTS.productDetails}${slug}`);
export const customerlogin = (payload) =>
  api.post(API_ENDPOINTS.login, payload);
export const validateloginotp = (payload) =>
  api.post(API_ENDPOINTS.validateloginotp, payload);
export const addToCartApi = (data) => {
  return api.post(API_ENDPOINTS.addToCartApi, data);
};
export const updateToCartApi = (data) => {
  return api.post(API_ENDPOINTS.updateToCartApi, data);
};
export const displayCartDetails = (userId) => {
  return api.post(API_ENDPOINTS.displayCart, userId);
};
export const deleteCartList = (payload) =>
  api.post(API_ENDPOINTS.cartDelete, payload);
export const getCartCount = (userId) =>
  api.get(`${API_ENDPOINTS.cartCount}/${userId}`);
export const postCustomerImage = (formData) => {
  return api.post(API_ENDPOINTS.customerImage, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
export const getCustomerDetail = (phone) => {
  return api.get(`${API_ENDPOINTS.customerProfile}?phone=${phone}`);
};
export const postCustomerAddress = (payload) =>
  api.post(API_ENDPOINTS.customerAddAddress, payload);
export const getCustomerAddress = (userId) =>
  api.get(`${API_ENDPOINTS.customerAddressList}?user_id=${userId}`);
export const sendPaymentDetails = (user_id, payload) =>
  api.post(`${API_ENDPOINTS.paymentDetails}/${user_id}`, payload);
export const getcheckoutSuccess = (orderId, payload) =>
  api.post(`${API_ENDPOINTS.checkoutSuccess}/${orderId}`, payload);
export const getCheckoutDetails = (user_id, payload) =>
  api.post(`${API_ENDPOINTS.checkoutDetails}/${user_id}`, payload);
export const getOrderDetails = (user, page) =>
  api.get(`${API_ENDPOINTS.orderDetails}?user_id=${user}&page=${page}`);
export const getViewOrderDetails = (order, user) =>
  api.get(`${API_ENDPOINTS.viewOrderDetails}${order}?user_id=${user}`);
export const getInvoice = (orderId) =>
  api.post(`${API_ENDPOINTS.invoiceDownload}/${orderId}`);
export const getCategory = () => api.get(API_ENDPOINTS.productCategory);
export const getSellingProducts = () => api.get(API_ENDPOINTS.sellingProducts);
export const getSummerProducts = () => api.get(API_ENDPOINTS.summerProducts);
export const getWishlistProduct = (userId, page) =>
  api.get(`${API_ENDPOINTS.wishlist}${userId}?page=${page}`);
export const postwishlistProducts = (type, payload) =>
  api.post(`${API_ENDPOINTS.postWishlist}${type}/wishlist`, payload);
export const getFaqDetails = () => api.get(API_ENDPOINTS.faqDetails);
export const getCollectionList = () => api.get(API_ENDPOINTS.collectionList);
export const getCollectionListById = (id) => api.get(`${API_ENDPOINTS.collectionList}/${id}/products`);
export const getCategoryList = () => api.get(API_ENDPOINTS.categoryList);
export const getCategoryListById = (id) => api.get(`${API_ENDPOINTS.categoryList}/${id}/products`);
export const getCategoryProducts = (slug, page, param) =>
  api.get(`${API_ENDPOINTS.categoryProducts}${slug}?page=${page}&${param}`);
export const getsearchDetails = (payload) =>
  api.post(API_ENDPOINTS.searchProducts, payload);
export const getMenus = (menutype) =>
  api.get(`${API_ENDPOINTS.menus}?type=${menutype}`);
export const postCoupon = (userId, payload) =>
  api.post(`${API_ENDPOINTS.applycouponcode}${userId}`, payload);
export const getlabelProducts = (id) =>
  api.get(`${API_ENDPOINTS.labelproducts}${id}`);

export const downloadInvoiceApi = (invoiceId) =>
  api.get(
    `${API_ENDPOINTS.downloadinvoice}/${invoiceId}/generate?type=print`,

    {
      responseType: "blob",
    },
  );
