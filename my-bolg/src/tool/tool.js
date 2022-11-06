/** made by domekisuzi
 * @2022/11/6
 */
import {useStore} from "../store/index.js";
import {getButListByName} from "../api/api.js";

export const  getAvg  = (butList) =>{
    var sum = getSum(butList)
    return Math.floor(tmp/butList.length)
}

export const getSum= (butList)=>{
    var tmp = 0
    for (const one in butList) {
        tmp +=one['score'].toInt
    }
    return tmp
}

export const  getRank= (name)=>{
    const store = useStore()
    const list = eval("("+ store.allStudents.data+")")
    const butsList =  eval("("+ store.allButs.data+")")
    var grade = null
    var personList =  null

    const newList=  []
    console.log(list)
    for (let i = 0; i < list.length; i++) {
        if(list[i]['name'] === name){
            grade  = list[i]['grade']
        }

        break
    }

  getButListByName(name).then(
      res=>{
          res.data
      }
  )
    console.log(butsList)
    for (let i = 0; i < butsList.length; i++) {
        if(list[i]['grade'] === grade) {

            newList.push(list[i])
        }

    }

    console.log(newList)
}

export  const getScoreByGrade = (grade)=>{
    //需要获取某个学生的总分，而非总答辩but
    const butsList =  eval("("+ store.allButs.data+")")
    const scoreList  = [ ]
    var sum = 0
    for (let i = 0; i < butsList; i++) {
        if (butsList[i]['grade'] === grade) {
            let tmp = butsList[i]['score']
            scoreList.push(tmp)
            sum+=tmp
        }
    }
    //升序排序
    scoreList.sort(function (a, b){return a-b})
    return {sum,scoreList}
}
//计算的方式太过于复杂，因此选择查找函数再说
export const  getScoreBuName =(name)=>{

}