
import axios from "axios";
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
export const getButListByName = (name)=> {
    return service({
        url: 'but/getButListByName',
        method: 'GET',
        responseType: 'text',
        params: {"name": name}
    })
}

// axios.get('path/shixun/but/getAllButs')   : 正确语法 =