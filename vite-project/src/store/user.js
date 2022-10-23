/** made by domekisuzi
 * @2022/10/18
 */
import  {defineStore} from 'pinia'
export  const  useUserStore = defineStore('test',{
    state:() =>{
        return{
            token :''
        }
    },
    actions:{
        setToken(token){
            this.token = token;
        }
    },
    persist:{
        enabled:true,
        strategies:[{
            key: 'xiaoluxian_user',
            storage:localStorage,
        }]
    }
})