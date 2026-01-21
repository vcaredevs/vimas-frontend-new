import { createApp } from 'vue'

import './assets/css/style.css'
import './assets/css/service.css'
import './assets/css/owl-carousal.css'

import App from './App.vue'
import router from './router';
createApp(App)
.use(router)
.mount('#app')
