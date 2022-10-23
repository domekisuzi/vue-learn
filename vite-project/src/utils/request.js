/**
 * 10/18
 */
import axios from 'axios'

const service = axios.create
({
    baseURL: '/path/shixun/',
    timeout:5000,
})
//请求拦截器
service.interceptors.request.use(
    config=>{
        return config
    }
    ,error =>{
        Promise.reject(error)
    }
)
service.interceptors.response.use(response =>{
        return response.data;
    },
    error =>{
        return Promise.reject(error)
    }
)
export  default  service;