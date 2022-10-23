/** made by domekisuzi
 * @2022/10/18
 */
import request from  "../request.js"
export  function getData ( ){
    return request({
            url:'but/getAllButs',
            method:'GET',
            responseType:'text'

    })
}