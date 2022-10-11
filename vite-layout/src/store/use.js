import {defineStore} from 'pinia'

export const use = defineStore('use', {
    state: () => {
        return {
            num: 0,
            name: 'xdc'
        }
    }
    ,
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
    ,
    persist: {
        enabled: true,

        //本地存储，不设置则是会话存储,path指定本地存储的字段
        strategies: [
             {
                key: 'my_user',
                storage: localStorage,
                paths:[ 'name']
            }
        ]
    }
})

