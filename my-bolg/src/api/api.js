
　
import service from "./request.js";
//获取所有答辩
export  const  getAllButs = () =>{
    return service({
        url:'but/getAllButs',
        method:'GET',
        responseType:'text'
    })
}
//获取所有md笔记
export  const getAllNotes = () =>{
    return service({
        url:'note/getAllNotes',
        method:'GET',
        responseType:'text'
    })
}

//获取所有答辩学生
export const getAllStudents = () =>{
    return service({
        url:'student/getAllStudent',
        method:'GET',
        responseType:'text'
    })
}

//记录操作函数 带有参数
export const  insertOperate = (name,operate)=>{
    return service({
        url:'operate/operate',
        method:'GET',
        responseType:'text',
        params: {"name":name,"operate":operate}
    })
}
export const getStudentByName = (name)=>{
    return service({
        url: 'student/getStudentByName',
        method: 'GET',
        responseType: 'text',
        params: {"name": name}
    })
}
export const getButListByName = (name)=> {
    return service({
        url: 'but/getButListByName',
        method: 'GET',
        responseType: 'text',
        params: {"name": name}
    })
}
export const getOperateCount = ()=>{
    return service({
        url: 'operate/count',
        method: 'GET',
        responseType: 'text'
    }
    )
}
getOperateCount().then(res=>{

    console.log("查询成功")
    console.log(res.data)
})



export const getGradeStatus = (grade)=>{
    return service({
        url: 'customer/grade',
        method: 'GET',
        responseType: 'text',
        params: {"grade": grade}
    })

}

export const getCategoryButs = (category) =>{
    return service({
        url: 'but/category',
        method: 'GET',
        responseType: 'text',
        params: {"category": category}
})
}



// axios.get('path/shixun/but/getAllButs')   : 正确语法 =