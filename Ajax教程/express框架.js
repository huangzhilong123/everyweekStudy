
let express = require('express');
/*2.创建应用对象*/
const app = express();
/*创建路由规则
* request 是对请求报文的封装
* response是对响应报文的封装*/
app.get('/server',(requeset,response)=>{
/*设置响应头，设置允许跨域*/
    response.setHeader('Access-Control-Allow-Origin','*')
    /*设置响应*/
    response.send('hello world')
})
/*4.监听端口启动服务*/
app.listen(8000,()=>{
    console.log('服务已经启动，8000端口监听中....')
})
