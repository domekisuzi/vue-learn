import axios from "axios";

const service = axios.create({
    baseURL: '/path/domekisuzi.fun:7777/shixun/',
    timeout:5000,

})

export  default service
