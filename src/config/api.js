export const BASE_URL = "http://127.0.0.1:8000/api";
export const image_url = "http://127.0.0.1:8000/storage/";
export const razorpay_key = "rzp_test_S3klEShimc5g8E";
export const razorpay_secret = "3NnpfJogmmBmUwPh7whLXWg5";
export const API_ENDPOINTS = {
  base: BASE_URL,
  products: `/products`,
  productDetails: `/product/`,
  login: `/login`,
  validateloginotp: `/validate/otp`,
  addToCartApi: `/cart/add`,
  updateToCartApi: `/cart/edit`,
  displayCart: `/cart/display`,
  cartDelete: `/cart/remove`,
  cartCount: `/cart/count`,
  customerImage: `/customer/store/avatar`,
  customerProfile: `/customer/profile`,
  customerAddAddress: `/customer/address/create`,
  customerAddressList: `/customer/address`,
  paymentDetails: `/payment`,
  checkoutSuccess: `/success`,
  checkoutDetails: `/checkout`,
  orderDetails: `/customer/orders`,
  viewOrderDetails: `/customer/order/`,
  invoiceDownload: `/download-invoice`,
  productCategory: `/products/category`,
  sellingProducts: `/products/trending`,
  summerProducts: `/products/new-arrivals`,
  wishlist: `/wishlist/`,
  postWishlist: `/`,
  faqDetails: `/faqs`,
  categoryProducts: `/product-categories/`,
  searchProducts: `/fastsearch/`,
   menus: `/menus`,
   applycouponcode:'/coupon/apply/',
   labelproducts:'/products/label/'
};
