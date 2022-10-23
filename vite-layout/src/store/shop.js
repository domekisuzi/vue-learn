// made by domekisuzi @2022/10/11
import {defineStore} from 'pinia'

export const shop = defineStore('shop',
    {
        state: () => {
            return {}

        },
        getters: {
            //具有缓存机制
            changeNum() {
                console.log('getters')
                return this.num + 1000;
            }
        },
        actions: {
            upNum(val) {
                this.num += val;
                console.log(this.num)
            }
        }
    }
)