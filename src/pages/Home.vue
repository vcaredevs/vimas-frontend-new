<template>
    <!-- hero-section area start here  -->
         <div class="hero-section">
        <div class="hero-slider">
     <swiper
    :modules="modules"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false
    }"
   :pagination="{ clickable: true }"
    :loop="true"
    class="mySwiper"
  >
    <swiper-slide>
         <div class="signle-slide"  :style="{ backgroundImage: `url(${heroBg})` }">
                <div class="container">
          <div class="row align-items-center">
                        <div class="col-lg-6 col-6">
                            <div class="hero-slider-content text-center">
                                <h2 class="slider-sub-title">Glow Naturally</h2>
                                <h1 class="slider-title">Vimas Professionals</h1>
                                <p class="slider-text">Experience the soothing touch of Aloe Vera with our refreshing facial gels and daily care essentials designed for radiant skin.</p>
                                
<div class="slider-btn">
  <router-link to="/shop"><a class="primary-btn">Shop Now!</a> </router-link>  
    <a href="#collection" class="secondary-btn" >Explore Collection</a>
</div>
                               
                            </div>
                        </div>
                        <div class="col-lg-5 offset-lg-1 col-6">
                            <div class="hero-slider-image text-center"><img class="hero-image img-fluid" src="@/assets/ui/images/hero-banner-image-1.webp" alt="Aloe Vera Care" /></div>
                        </div>
                    </div>
                         </div>
                    </div>
    </swiper-slide>
    <swiper-slide>
         <div class="signle-slide"  :style="{ backgroundImage: `url(${heroBg})` }">
                <div class="container">
          <div class="row align-items-center">
                        <div class="col-lg-6 col-6">
                            <div class="hero-slider-content text-center">
                                <h2 class="slider-sub-title">Glow Naturally</h2>
                                <h1 class="slider-title">Vimas Professionals</h1>
                                <p class="slider-text">Experience the soothing touch of Aloe Vera with our refreshing facial gels and daily care essentials designed for radiant skin.</p>
                                
<div class="slider-btn">
  <router-link to="/shop"><a class="primary-btn">Shop Now!</a> </router-link>  
    <a href="#collection" class="secondary-btn" >Explore Collection</a>
</div>
                               
                            </div>
                        </div>
                        <div class="col-lg-5 offset-lg-1 col-6">
                            <div class="hero-slider-image text-center"><img class="hero-image img-fluid" src="@/assets/ui/images/hero-banner-image-1.webp" alt="Aloe Vera Care" /></div>
                        </div>
                    </div>
                         </div>
                    </div>
    </swiper-slide>
   
  </swiper>
   </div>
   </div>
    <!-- hero-section area end here  -->
         <p>&nbsp;</p>
    <!-- Google Fonts -->
    <link href="https://fonts.cdnfonts.com/css/cream-cake" rel="stylesheet">
    <link href="https://fonts.cdnfonts.com/css/futura-md-bt" rel="stylesheet">

    
   

    <div class="banner pt-4">
        <div class="container">
            <div class="row">
                <div class="col-md-6" id="popular-category">
                    <h3 class="sub-title">SERVES YOUR NEEDS</h3>
                    <h2 class="section-title">VIMAS PROFESSIONALS</h2>
                </div>
                
                <div class="col-md-6 align-self-end text-md-end" id="all-category">
              <router-link to="/shop"> <a  class="primary-btn">View All Categories</a></router-link>     
                </div>
            </div>

            <div class="row mt-3">
                <div class="col-md-4" v-for="(item, index) in categories" :key="index">
                    
                    <div class="banner_item">
                      
                        <div class="card category-card">
                          <router-link to="/shop">   <a class="single-categorie" href="https://inway.com.in:443./shop/skin-care">
                                <div class="image-container">
                                    <img :src="image_url + item.image" :alt="item.name"  class="img-fluid">
                                </div>
                                <div class="categorie-wrap">
                                    <h1 class="categorie-name">{{ item.name }}</h1>
                                    <h1 class="categorie-subtitle">Beauty is the fashion</h1>
                                </div>
                            </a>
                            </router-link> 
                        </div>
                      
                    </div>
                    
                </div>
             
            </div>
        </div>
    </div>
    <!-- Popular Categories area end here  -->

     <!-- How It Works – VIMAS PROFESSIONAL -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <section class="vimas-hiw">
        <div class="vimas-hiw__head">
            <h2>How It Works</h2>
            <p>The VIMAS PROFESSIONAL Experience</p>
        </div>

        <div class="vimas-hiw__wrap">
            <!-- Step 1 -->
            <article class="vimas-hiw__card">
                <div class="vimas-hiw__badge">1</div>
                <div class="vimas-hiw__icon"><span class="material-icons">shopping_bag</span></div>
                <h3>Discover Your Favorites</h3>
                <p>Browse our curated collection of premium beauty products and add your must-haves to the cart.</p>
            </article>

            <!-- Step 2 -->
            <article class="vimas-hiw__card">
                <div class="vimas-hiw__badge">2</div>
                <div class="vimas-hiw__icon"><span class="material-icons">fact_check</span></div>
                <h3>Learn More Before You Buy</h3>
                <p>Explore detailed product descriptions, ingredients, and usage tips to make confident choices.</p>
            </article>

            <!-- Step 3 -->
            <article class="vimas-hiw__card">
                <div class="vimas-hiw__badge">3</div>
                <div class="vimas-hiw__icon"><span class="material-icons">lock</span></div>
                <h3>Secure Your Order</h3>
                <p>Complete your purchase through our smooth and secure checkout process.</p>
            </article>

            <!-- Step 4 -->
            <article class="vimas-hiw__card">
                <div class="vimas-hiw__badge">4</div>
                <div class="vimas-hiw__icon"><span class="material-icons">local_shipping</span></div>
                <h3>Fast & Reliable Dispatch</h3>
                <p>Your order is packed with care and dispatched within 2 working days.</p>
            </article>

            <!-- Step 5 -->
            <article class="vimas-hiw__card">
                <div class="vimas-hiw__badge">5</div>
                <div class="vimas-hiw__icon"><span class="material-icons">schedule</span></div>
                <h3>Timely Delivery</h3>
                <p>Receive your beauty essentials at your doorstep within 3–6 working days.</p>
            </article>

            <!-- Step 6 -->
            <article class="vimas-hiw__card">
                <div class="vimas-hiw__badge">6</div>
                <div class="vimas-hiw__icon"><span class="material-icons">spa</span></div>
                <h3>Indulge & Inspire</h3>
                <p>Enjoy the VIMAS PROFESSIONAL touch. We’re here to empower your beauty journey and serve you with excellence.</p>
            </article>
        </div>
    </section>
    <!-- New arrivals -->
         <div class="new_arrivals">
        <div class="container">
            <div class="row" >
                <div class="col text-center">
                    <div class="section_title new_arrivals_title">
                        <h2 id="collection">New Arrivals</h2>
                    </div>
                </div>
            </div>

            <div class="row align-items-center">
                <div class="col text-center">
                    <div class="new_arrivals_sorting">
                        <ul class="arrivals_grid_sorting clearfix button-group filters-button-group"  >
                      
                             <li v-for="(item,index) in collectionList" :key="item.id"
                             :class="{ 'active is-checked': activeCollection === item.id }"
  @click="productListById(item.id)"
                            class="grid_sorting_button button" data-filter="*">{{ item.name }}</li>
  
                           
                        </ul>
                    </div>
                </div>
            </div>

            <div class="product-grid mt-4">
                <div class="row">
                    <div class="col-md-3 pt-4"   v-for="product in productList"
      :key="product.id">
                        <div class="product-item category-31">
                            <div class="product discount product_filter">
                                <div class="product_image">
                                    <a :href="`/vimas/product/${product.slugable.key}`">
                    <img class="product-thumbnail" :src="image_url+product.image" :alt="product.name" />
                  </a>
                                </div>
                                <div class="product_info mt-3">
                                    <h5 class="product-name">
                                        <a class="product-link" >{{ product.name }}</a>
                                    </h5>
                                    <div class="product_price">
                                        <span class="price">
                      {{ product.sale_price!==null?product.sale_price:product.price }}                                             </span>
                                    </div>

                                    <div class="stock-status pb-4">
                                        <span class="badge bg-info">In Stock</span>
                                    </div>
                                </div>
                            </div>
<button class="red_button cart_button add_to_cart_button" @click="cartStore.addToCartList(product)">

    	<span v-if="cartStore.loadingProductId === product.id" class="custom-spinner"></span>
  <span v-else>Add To Bag</span>
</button>
                            <!-- <a href="" class="red_button add_to_cart_button cart_button"  title="Add To Bag" @click="addToCart(product)">Add To Bag</a> -->
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
    </div>
       <!-- Featured Products area start here  -->
 <div class="mt-4">
        <!-- About Area start here  -->
        <div class="about-area section">
            <div class="container">
                <div class="section-header-area">
                    <div class="row">
                        <div class="col-md-6">
                            <h3 class="sub-title">About Us</h3>
                            <h2 class="section-title">The Journey of <br />Vimas Beauty Products</h2>
                        </div>
                         
                        <div class="col-md-6 align-self-end text-md-end">
                         <router-link to="/about-us"><a class="primary-btn" >Know More About Us</a> </router-link>  
                        </div>
                    </div>
                </div>
                <div class="story-box-slide">
                    <div class="single-story-box">
                        <h3 class="story-title">Beginning <span class="story-year">2016</span></h3>
                        <p class="story-content">Vimas was born with a simple vision &mdash; to bring natural beauty solutions that are safe, effective, and rooted in tradition. Our first formulations focused on skin and hair wellness using pure herbal extracts.</p>
                    </div>
                    <div class="single-story-box">
                        <h3 class="story-title">Expansion <span class="story-year">2017</span></h3>
                        <p class="story-content">We introduced our first range of face washes and hair oils, carefully crafted with ingredients like aloe vera, neem, and essential oils. The trust of our customers helped us expand across local markets.</p>
                    </div>
                    <div class="single-story-box">
                        <h3 class="story-title">Innovation <span class="story-year">2018</span></h3>
                        <p class="story-content">Innovation became our focus &mdash; we launched facial kits and scrubs designed to suit every skin type. Our promise of quality and affordability made Vimas a household name in beauty care.</p>
                    </div>
                    <div class="single-story-box">
                        <h3 class="story-title">Recognition <span class="story-year">2019</span></h3>
                        <p class="story-content">By 2019, Vimas Beauty Products gained recognition for blending Ayurveda with modern science. Our products were widely appreciated for delivering visible results without harmful chemicals.</p>
                    </div>
                    <div class="single-story-box">
                        <h3 class="story-title">Growth <span class="story-year">2020</span></h3>
                        <p class="story-content">Even during challenging times, we grew stronger by introducing hygiene and daily care ranges. Our shampoos, conditioners, and sunscreens became a trusted part of everyday routines.</p>
                    </div>
                    <div class="single-story-box">
                        <h3 class="story-title">Today <span class="story-year">2021 - Now</span></h3>
                        <p class="story-content">Vimas continues to evolve as a complete beauty and wellness brand. With a growing range of skincare, haircare, and facial kits, we remain committed to enhancing natural beauty with products you can trust.</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- About Area  end here  -->
        <p>&nbsp;</p>
    </div>
      <!-- Featured Products area end here  -->
</template>
 
    <style scoped>
        :root {
            --ink: #30343a;
            --muted: #6b7077;
            --card-shadow: 0 6px 20px rgba(0, 0, 0, .06);
            --brand: #2f74ff;
            /* button color */
        }

        /* Section header */

        #popular-category .sub-title {
            font-weight: 600;
            letter-spacing: .2px;
            margin: 0;
            color: #8a8f98;
            font-family: 'Cream Cake';
            /* SERVES YOUR NEEDS */
        }
@media(max-width:991px){
    .hero-section {
    padding-top: 48px !important;
}
}
        #popular-category .section-title {
            font-weight: 800;
            margin: .25rem 0 1rem;
            color: var(--ink);
            font-family: 'Futura Md BT';
            /* PURE N SURE */
        }
        

.grid_sorting_button.active {
  background: #ff3f3f;   
  color: #fff;
  font-weight: 600;
}


        #all-category .primary-btn {
            display: inline-block;
            padding: .6rem 1.2rem;
            border-radius: 999px;
            background: var(--brand);
            color: #fff;
            font-weight: 700;
            text-decoration: none;
            box-shadow: 0 8px 20px rgba(47, 116, 255, .2);
            transition: .2s ease;
        }

        #all-category .primary-btn:hover {
            transform: translateY(-1px);
            box-shadow: 0 12px 26px rgba(47, 116, 255, .25);
        }

        /* card grid */

        .banner .row .col-md-4 {
            margin-bottom: 24px;
        }

        /* card */

        .category-card {
            border: 0;
            border-radius: 18px;
            overflow: hidden;
            background: #fff;
            box-shadow: var(--card-shadow);
            height: 100%;
            transition: .2s ease;
        }

        .category-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 28px rgba(0, 0, 0, .1);
        }

        /* link takes whole card */

        .single-categorie {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-decoration: none;
            height: 100%;
            padding: 16px;
        }

        /* big image on top */

        .image-container {
            width: 100%;
            display: flex;
            justify-content: center;
            margin-bottom: 16px;
        }

        .image-container img {
            width: 100%;
            max-width: 160px;
            height: auto;
            object-fit: contain;
            border-radius: 14px;
            box-shadow: 0 6px 14px rgba(0, 0, 0, .06);
            background: #f9fafb;
            padding: 10px;
        }

        /* text under image */

        .categorie-wrap {
            text-align: center;
        }
.product-name {
  margin: 0;
  width: 100%;
}

.product-link {
  display: block;          /* must be block */
  width: 100%;
  white-space: nowrap;     /* single line */
  overflow: hidden;        
  text-overflow: ellipsis; 
}
        .categorie-name {
            font-size: 2rem;
            font-weight: 700;
            color: var(--ink);
            margin: 0 0 .25rem;
            font-family: 'Futura Md BT';
            /* PURE N SURE */
        }

        .categorie-subtitle {
            font-size: 2rem;
            font-weight: 500;
            color: var(--muted);
            margin: 0;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            font-family: 'Cream Cake';
            /* SERVES YOUR NEEDS */
        }

        @media(max-width:575.98px) {
            .image-container img {
                max-width: 120px;
            }
        }
         .vimas-hiw {
            font-family: 'Arial', sans-serif;
            color: white;
        }

        .vimas-hiw__head {
            background: #000;
            color: white;
            text-align: center;
            padding: 48px 16px 84px;
        }

        .vimas-hiw__head h2 {
            margin: 0;
            font-size: 28px;
            font-weight: 700;
            color: white;
        }

        .vimas-hiw__head p {
            margin: 8px 0 0;
            font-size: 14px;
            opacity: 0.9;
        }

        .vimas-hiw__wrap {
            max-width: 1200px;
            margin: -56px auto 48px;
            padding: 0 16px;
            display: grid;
            gap: 22px;
            grid-template-columns: repeat(3, 1fr);
        }

        @media (max-width: 991px) {
            .vimas-hiw__wrap {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 575px) {
            .vimas-hiw__wrap {
                grid-template-columns: 1fr;
            }
        }

        .vimas-hiw__card {
            background: #fff;
            border-radius: 14px;
            border: 1px solid #000;
            padding: 30px 20px 24px;
            text-align: center;
            position: relative;
            box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);
        }

        .vimas-hiw__badge {
            position: absolute;
            top: -16px;
            left: 50%;
            transform: translateX(-50%);
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: #000;
            color: #fff;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 8px rgba(0, 0, 0, .2);
        }

        .vimas-hiw__icon {
            width: 72px;
            height: 72px;
            margin: 6px auto 14px;
            border-radius: 50%;
            background: #000;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
        }

        .vimas-hiw__icon .material-icons {
            font-size: 36px;
        }

        .vimas-hiw__card h3 {
            font-size: 16px;
            margin: 8px 0 6px;
            font-weight: 700;
        }

        .vimas-hiw__card p {
            font-size: 14px;
            line-height: 1.55;
            margin: 0;
        }
         .new_arrivals_title h2 {
            margin: .25rem 0 0;
            color: var(--ink);
            font-weight: 800;
            font-size: clamp(22px, 2.6vw, 32px);
        }

        /* Centered filter buttons, wrap on small screens */

        .filters-button-group {
            margin: 12px 0 0;
            padding: 0;
            display: flex;
            justify-content: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .filters-button-group .button {
            list-style: none;
            cursor: pointer;
            user-select: none;
            padding: 10px 16px;
            border: 1px solid var(--line);
            border-radius: 999px;
            background: #fff;
            color: var(--ink);
            font-weight: 700;
            font-size: 14px;
            white-space: nowrap;
        }

        /* keep active state, but no hover transitions */

        .filters-button-group .button.active,
        .filters-button-group .button.is-checked {
            background: var(--ink);
            color: #fff;
            border-color: transparent;
        }

        /* Card shell: tidy, no hover transforms */

        .product-item {
            display: flex;
            flex-direction: column;
            height: 100%;
            gap: 12px;
        }

        .product.discount.product_filter {
            background: var(--card);
            border: 1px solid var(--line);
            border-radius: var(--radius);
            box-shadow: var(--shadow);
            padding: 14px;
        }

        /* Image: consistent square, crisp crop */

        .product_image {
            width: 100%;
            border-radius: 12px;
            overflow: hidden;
            background: #f8fafc;
            border: 1px solid var(--line);
        }

        .product-thumbnail {
            width: 100%;
            height: auto;
            aspect-ratio: 1/1;
            object-fit: cover;
            display: block;
        }

        /* Text */

        .product_info .product-name {
            margin: 6px 0 2px;
            font-size: 15px;
            line-height: 1.3;
            font-weight: 700;
        }

        .product_info .product-name a {
            color: var(--ink);
            text-decoration: none;
        }

        .product_price .price {
            color: #111827;
            font-weight: 800;
            font-size: 16px;
        }

        .stock-status .badge {
            font-weight: 600;
        }

        /* Add to cart: visible, full-width, no hover color change */

        .add_to_cart_button.cart_button {
            display: block;
            width: 100%;
            text-align: center;
            padding: 12px 16px;
            border-radius: 12px;
            background: #111827;
            color: #fff !important;
            font-weight: 800;
            font-size: 15px;
            text-decoration: none;
            box-shadow: var(--shadow);
            margin-top: 8px;
        }

        /* Mobile refinements */

        @media (max-width: 575.98px) {
            .col-md-3 {
                padding-left: 10px;
                padding-right: 10px;
            }
            .product.discount.product_filter {
                padding: 12px;
            }
            .add_to_cart_button.cart_button {
                padding: 12px 14px;
                font-size: 14px;
            }
        }

        /* When filtering elsewhere, ensure hidden items collapse space (if used) */

        .product-item.hidden {
            display: none !important;
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
  background-color: #0d6efd !important; /* your primary color */
  border-color: #0d6efd !important;
  opacity: 0.9;
}
    </style>
    <script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay,Navigation,Pagination  } from 'swiper/modules'
import heroBg from '@/assets/ui/images/hero-banner-bg.webp'

import 'swiper/css'
import 'swiper/css/pagination'
import "swiper/css/navigation"
import { nextTick, onMounted, ref, watch } from 'vue'
import { getCategory, getCollectionList, getCollectionListById} from '../services/apiService'
import { image_url } from '../config/api'

import { useCartStore } from '../cartStore'
const modules = [Autoplay]
const categories = ref([]);
const collectionList=ref([])
const productList=ref([])
const cartStore=useCartStore();
const activeCollection = ref(null)
const stories = [
  { title: "Beginning", year: "2016", content: "Vimas was born with a vision." },
  { title: "Expansion", year: "2017", content: "Expanded into local markets." },
  { title: "Innovation", year: "2018", content: "Launched new facial kits." },
  { title: "Recognition", year: "2019", content: "Gained brand recognition." },
  { title: "Growth", year: "2020", content: "Expanded hygiene range." },
  { title: "Today", year: "2021 - Now", content: "A complete beauty brand." }
]

const breakpoints = {
  320: { slidesPerView: 1 },
  768: { slidesPerView: 2 },
  1024: { slidesPerView: 3 }
}
const fetchCategories = async () => {
  try {
    const res = await getCategory();
    categories.value = res.data.data;
    console.log("categories.value", categories.value);
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};
const getCollection = async () => {
    
  try {
    const res = await getCollectionList();
    collectionList.value = res.data.data;
    
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};
const productListById=async(collectionId)=>{
    try {
        activeCollection.value = collectionId
        const res=await getCollectionListById(collectionId);
productList.value=res.data.data
console.log("productList.value",productList.value);

    } catch (error) {
        console.error("Error fetching products:", error);
    }
    
}
watch(collectionList, (newList) => {
  if (newList.length && !activeCollection.value) {
    const firstCollection = newList[0];

   if (firstCollection) {
      productListById(firstCollection.id);
    }
  }
})
onMounted(async () => {
  await nextTick()

  if (window.initStorySlider) {
    window.initStorySlider()
  }
})
onMounted(() => {
  fetchCategories();
  getCollection();

});
</script>