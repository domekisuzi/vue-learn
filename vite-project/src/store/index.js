/** made by domekisuzi
 * @2022/10/18
 */
import {createPinia} from "pinia";
//引入持久化存储
import piniaPluginPersist from  'pinia-plugin-persist'
const store = createPinia()
store.use(piniaPluginPersist)
export  default  store