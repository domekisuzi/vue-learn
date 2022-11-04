/** made by domekisuzi
 * @2022/11/4
 */

import {defineStore} from "pinia";
import {getAllButs, getAllStudents} from "../api/api.js";
export const useStore = defineStore('',{
    state:() =>{
        return {
            allButs: async () => {

                // const tmp = getAllButs().then(
                //     res => {
                //         return res;
                //     }
                // )
                //
                // return await tmp
            },
            allStudents:() =>{
                const tmp = getAllStudents()
                console.log('------------------')
                console.log(tmp)
                console.log('------------------')
               return   tmp
            },
            //全局名称
            name: '',

        }
    }
    ,
    getters:{

    },
    actions:{

    }
})