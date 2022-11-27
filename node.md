浏览器是JavaScript前端运行环境
Nodejs是JavaScript后端运行环境
nodejs无法调用BOM，DOM操作API

##fs
fs.readFile(path,[option],callback)//[]为可选参数
eg:fs.readFile('./README.md','utf-8',function(error,data){
    console.log(error,data)
})