// made by domekisuzi @2022/10/11
import request from "../utils/request.js";

export const getData = () => {
    return request({
            url: '/but/getAllButs',
            method: 'GET',
        responseType:'text'
        }
    )
}
