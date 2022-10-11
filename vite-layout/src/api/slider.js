// made by domekisuzi @2022/10/11
import request from "../utils/request.js";

export function mostNew(data) {
    return request({
        url: '/path/slider/getSliders',
        method: 'post',
        data
    })
}
