// made by domekisuzi @2022/10/11
import axios from 'axios';

const service = axios.create()

service.interceptors.request.use(
    config => {
        return config;
    }, error => {
        Promise.reject(error)
    }
)

service.interceptors.response.use(response => {
        return response.data
    }, error => {
        return Promise.reject(error);
    }
)

export default service;
