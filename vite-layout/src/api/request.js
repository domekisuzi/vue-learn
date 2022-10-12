import axios from "axios";

const service = axios.create({
    baseURL: '/path/shixun/',
    timeout:5000,

})

export  default service
