/** made by domekisuzi
 * @2022/11/6
 */




import {useStore} from "../store/index.js";
import {  getCategoryButs} from "../api/api.js";


//根据当前的名字获取平均分等
export const getStatus= () =>{
    const store  = useStore()
    const name = store.name
    const grade = store.grade
    const status  = eval( "("+ store.gradeStatus[grade].data +")")
    let length;
    let result = null;
    length = status.length

    console.log("获取状态中"+typeof store.gradeStatus[grade].data)
    for (let i = 0; i < status.length; i++) {
        if (status[i]['name'] === name){
            result = status[i]

            return {length, result}
        }
        else{
        //     不能在这里返回值，否则会直接中断
        }
    }
    return  {length,result}

}

//获取图标里面的数据
export const getRankScore = (grade1,grade2)=>{

    //分别放21级，22级，以及平均分差
    const store = useStore()
    let tmp1 = eval( "("+ store.gradeStatus[grade1].data +")")
    console.log(tmp1)
    let tmp2 =  eval( "("+ store.gradeStatus[grade2].data +")")
    let array1 = []
    let array2 = []
    let array3 =  []

    for (let i = 0; i < tmp1.length; i++) {
        array1.push([tmp1[i].sumScores,tmp1[i].avgScores] )
    }
    for (let i = 0; i < tmp2.length; i++) {
        array2.push([tmp2[i].sumScores ,tmp2[i].avgScores])
    }

    array1 =  array1.sort(function (a,b) {
        return b[0]-a[0]
    }).slice(0,5)
    array2 = array2.sort(function (a,b) {
        return b[0]-a[0]
    }).slice(0,5)
    for (let i = 0; i < 5; i++) {
        array3.push((array1[i][1]-array2[i][1]).toFixed(2))
    }

    array1 = array1.map(
        value => {
            return value[0]
        }
    )
    array2 = array2.map(
        value => {
            return value[0]
        }
    )
    return{array1,array2,array3}
}


// { value: 335, name: 'Direct' },
// { value: 310, name: 'Email' },
// { value: 274, name: 'Union Ads' },
// { value: 235, name: 'Video Ads' },
// { value: 400, name: 'Search Engine' }
//获取总体平均分range
export const  getRange =  (grade) => {

    const range = {
        "95~100": 0,
        "85~95": 0,
        "75~85": 0,
        "60~75": 0,
        "0~60": 0
    }
    const store = useStore()
    const gradeStatus =   eval( "("+ store.gradeStatus[grade].data +")")

            for (let i = 0; i <  gradeStatus.length; i++) {
                let score = gradeStatus[i]['avgScores']
                if (score <= 60) {
                    range["0~60"] += 1
                } else if (score > 60 && score <= 75) {
                    range["60~75"] += 1
                } else if (score > 75 && score <= 85) {
                    range["75~85"] += 1
                } else if (score > 85 && score <= 95) {
                    range["85~95"] += 1
                } else if (score > 95 && score <= 100) {
                    range["95~100"] += 1
                }
            }

    // range组装
    const  result = [ ]
    for(let[key,value] of Object.entries(range))
    {
        result.push({'name':key,'value':value})
    }
    return result
}

//获取某个答辩平均分range
export const getCategoryRange = async (category) => {
    var buts = null
    const range = {
        "95~100": 0,
        "85~95": 0,
        "75~85": 0,
        "60~75": 0,
        "0~60": 0
    }
    await getCategoryButs(category).then(
        res => {
            buts = res
            buts = eval("(" + buts.data + ")")
            for (let i = 0; i < buts.length; i++) {
                let score = buts[i]['score']
                if (score <= 60) {
                    range["0~60"] += 1
                } else if (score > 60 && score <= 75) {
                    range["60~75"] += 1
                } else if (score > 75 && score <= 85) {
                    range["75~85"] += 1
                } else if (score > 85 && score <= 95) {
                    range["85~95"] += 1
                } else if (score > 95 && score <= 100) {
                    range["95~100"] += 1
                }
            }
        })


    return range
}