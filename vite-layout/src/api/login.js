import request  from "./request.js";
import axios from "axios";

export  const  login= () =>{
    return request({
        url:'but/getAllButs',
        method:'GET',
        responseType:'text'
    })
}
// axios.get('path/shixun/but/getAllButs')   : 正确语法