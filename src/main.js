import { createApp } from "vue";
import { createPinia } from "pinia";
import $ from "jquery";
window.$ = window.jQuery = $;
import './assets/font/fonts.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './assets/css/bootstrap.min.css'
import './assets/css/swiper-bundle.min.css'
import './assets/css/animate.min.css'
import './assets/css/image-compare-viewer.min.css'
import './assets/css/styles.css'
import './assets/icons/icomoon/style.css'
import WOW from "wow.js";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/autoplay";



import App from "./App.vue";
import router from "./router";
const app = createApp(App);
app.use(createPinia());
app.use(router).mount("#app");
new WOW().init();

