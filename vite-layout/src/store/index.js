<!-- made by domekisuzi
    @2022/10/11
-->
import {defineStore} from 'pinia'

export const useStore = defineStore('storeId', {
    state: () => {
        return {
            num:0,
            name:'xdc'
        }
    }
    ,
    getters: {},
    actions: {}
})

