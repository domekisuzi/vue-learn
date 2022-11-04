/** made by domekisuzi
 * @2022/11/3
 */
import service from "./request.js";

// axios.get('/path/shixun/but/getAllButs').then(
//     res=>console.log(res)
// )
service.get('but/getAllButs').then(
    res=>console.log(res)
)