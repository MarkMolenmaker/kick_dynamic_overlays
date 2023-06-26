import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue3SmoothScroll from 'vue3-smooth-scroll'

createApp(App).use(store).use(router).use(Vue3SmoothScroll).mount('#app')
