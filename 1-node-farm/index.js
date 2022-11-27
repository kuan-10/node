// const fs=require('fs')
// const http=require('http')
// // const textin=fs.readFileSync('./starter/txt/input.txt','utf-8')
// // console.log(textin)
// // const textout=`${textin}created${Date.now()}`
// // fs.writeFileSync('./starter/txt/final.txt',textout)
// // console.log('output')
// // fs.readFile('./starter/txt/read-this.txt','utf-8',(err,data)=>{
// //     console.log(data)
// // })
// const server=http.createServer((req,res)=>{
//     console.log(req.url)
//     if(req.url==='/overview'){
//     res.end('hello from the server')
// }
// })
// server.listen(8000,'127.0.0.1',()=>{
//     console.log('Listening to requests on port 8000')
// })//starting the server
const fs=require('fs')
const path=require('path')

// fs.readFile('./starter/txt/grade.txt','utf-8',(err,data)=>{
//     if(err===null){
//         data=data.replace(/,/g," ").replace(/-/g,'=')
//         fs.writeFile('./starter/txt/grade-ok.txt',data,'utf-8',(err,data)=>{

//         })
//     }
// })
// const pathfile='/a/b/c/d/index.js'
// const pathstr=path.join('/a','\/b/c','/d','../')
// const str=path.basename(pathfile,'.js')
// console.log(str)
// const regstr=/<style>[\s\S]*<\/style>/
// fs.readFile(path.join(__dirname,'/index.html'),'utf-8',(err,data)=>{
//     if(err){
//         console.log("读取文件失败")
//     }else{
//         let datastr=regstr.exec(data)
//         datastr=datastr[0].replace(/<style>/,"").replace(/<\/style>/,"")
//         fs.writeFile(path.join(__dirname,'/index.css'),datastr,'utf-8',(err,data)=>{
//             console.log("成功写入文件")
//         })
//     }
// })
const http=require('http')
const a=require('./input')
a.use()
// const server=http.createServer()
// server.on('request',(req,res)=>{
//     const str=`本次请求网址为${req.url},本次请求方式为${req.method}`
//     res.setHeader('Content-Type','text/html;charset=utf-8')
//     res.end(str)
// })
// server.listen(80,function(){
//     console.log("server is running at 127.0.0.1:8080")
// })