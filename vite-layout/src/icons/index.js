import  SvgIcon from '../components/SvgIcon/index.vue'


const utilFuns = {}
const  files = import.meta.glob('./*.svg')
Object.keys(files).forEach((fileName)=>{
    const  name = fileName.replace(/\.svg%/,'')
    utilFuns[name] =  files[fileName]
})

export default app =>{
    app.component('svg-icon',SvgIcon)
}
