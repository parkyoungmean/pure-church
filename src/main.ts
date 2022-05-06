import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import '@/assets/tailwind.css'

/* Inport Pinia into config file */
import { createPinia } from "pinia";

createApp(App).use(store).use(router).use(createPinia()).mount('#app')
