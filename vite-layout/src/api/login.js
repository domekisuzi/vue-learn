import request  from "./request.js";

export  const  login= () =>{
    return request({
        url:'but/getAllButs',
        method:'GET',
        responseType:'text'
    })
}
