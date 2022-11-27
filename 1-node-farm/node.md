浏览器是JavaScript前端运行环境
Nodejs是JavaScript后端运行环境
nodejs无法调用BOM，DOM操作API

##fs
```
fs.readFile(path,[option],callback)//[]为可选参数
eg:fs.readFile('./README.md','utf-8',function(error,data){
    console.log(error,data)
})
```
读取成功，err为null，data为打印结果，读取失败err为错误对象，data为undefined

fs.writeFile(path,data,[option],callback)//[]为可选参数
path为文件路径，data为写入内容，option为字符格式，callback为回调函数

##path
```
const pathfile='/a/b/c/d/index.js'
const pathstr=path.join('/a','\/b/c','/d','../')//可以将路径拼接起来，忽略一些小的错误
```
const str=path.basename(pathfile,'.js')//获取文件名，后面假如不加.js那就获取完整的带后缀的路径名称

##http
基本格式
```const http=require('http')
const server=http.createServer()
server.on('request',(req,res)=>{
    const str=`本次请求网址为${req.url},本次请求方式为${req.method}`
    res.setHeader('Content-Type','text/html;charset=utf-8')
    res.end(str)
})
server.listen(80,function(){
    console.log("server is running at 127.0.0.1:8080")
})
```

###模块化
在js中有三种模块
#####node内置模块 require('fs')
#####自定义模块   require('对应路径')
#####第三方模块   require('moment')
在外界使用require时候，得到的对象是那个模块的exports属性对应的对象，默认模块的exports属性对应的是空对象
最终向外共享的结果都是module.exports对象指向的属性
module.exports对象的指向和exports指向的对象是一样的
