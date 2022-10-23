import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from "./router/index.js";
import store from './store'
createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
