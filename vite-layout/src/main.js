import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './styles/index.scss'

import router from  '@/router/index.js'

import  ElementPlus from 'element-plus'
const app = createApp(App)

// app.use(cors({
//     method:['GET','POST'],
//     allowedHeaders:["Content-Type", "application/json;charset=utf-8;application/x-www-form-urlencoded"]
//
// }))
app.use(router)
app.use(ElementPlus)

app.mount('#app')

// app.use('store')
