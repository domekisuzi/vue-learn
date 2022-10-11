// made by domekisuzi @2022/10/11
import { createPinia} from "pinia";
//引入持久化存储插件
import piniaPluginPersist from 'pinia-plugin-persist'
const store = createPinia()

store.use(piniaPluginPersist)

export  default  store
