/** made by domekisuzi
 * @2022/11/1
 * 通过使用插件实现(数据)懒加载
 */
import {useIntersectionObserver } from "@vueuse/core";
import {ref} from 'vue'
export  const useLazyData = (apiFn) =>{
    const  target = ref(null)
    // const result = ref([])
    const  result = ref(false)
    const {stop} = useIntersectionObserver(target,([{isIntersecting}],observerElement) =>{
        if (isIntersecting){
            stop()
            console.log(apiFn)
             apiFn().then(
                data=>{
                    result.value = data.result
                    console.log(data.result)
            })
        }
    })

    return {result,target}
}