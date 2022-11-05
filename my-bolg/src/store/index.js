/** made by domekisuzi
 * @2022/11/4
 */

//需要用storeToRef进行结构
import {defineStore} from "pinia";
import {getAllButs, getAllStudents} from "../api/api.js";
export const useStore = defineStore('storeId',{
    state:  () =>{
        return {
            //全局名称
            name: '张丹',
            allButs: null,
            allStudents: null,
            START_DAY: new Date(2022,6,20)
        }
    },

    getters:{
        allButsNumber(){
           // 有缓存机制，多次打印只会显示一次
            if(this.allButs != null) {
                // 这个为proxy类型
                // console.log(this.allButs)
                // 转为json数组再计算长度

                return   eval("("+ this.allButs.data+")").length
            }
            else {
                return 0
            }
        },
        allStudentsNumber(){
            if(this.allStudents!=null){
                // console.log(this.allStudents)
                return   eval("("+ this.allStudents.data+")").length
            }
            else{
                return  0
            }
        },
        setUpDay(){
            //获取成立天数
            return Math.floor( (new Date() - this.START_DAY)/(24*60*60*1000))
        }
    },

    actions:{
        upName(val){
            this.name = val
        },
         //更新全局的数据，申请时再使用
         upStudents() {
             getAllStudents().then(
                res=>{
                    this.allStudents =  res
                }
            )
        },

        upAllButs(){
            getAllButs().then(
                res=>{
                    this.allButs = res
                }
            )
        },

    }
})