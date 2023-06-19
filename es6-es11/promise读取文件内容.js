/*1.引入fs模块*/
const fs = require('fs');
/*2.调用方法读取文件*/
// fs.readFile('../html5与css3/1.md',(err,data)=>{
//     /*如果失败，则抛出错误*/
//     if(err) throw err;
//     /*如果没有出错，则输出内容*/
//     console.log(data.toString())
// })
/*3.使用promise封装*/
// const p = new Promise(function (resolve, reject){
//     fs.readFile('../html5与css3/1.md',(err,data)=>{
//       /*判断如果失败*/
//         if(err) reject(err);
//         //判断如果成功
//         resolve(data)
//     })
// })
// p.then(function (value){
//     console.log(value.toString())
// },function (err){
//     console.log(err)
// })
/*promise封装ajax*/
//接口地址：https://api.apiopen.top/getJoke
const p = new Promise((resolve, reject) => {
    /*1.创建对象*/
    const xhr = new XMLHttpRequest();
    /*2.初始化*/
    xhr.open('GET','https://api.apiopen.top/getJoke')
//3.发送
    xhr.send();
//4.绑定对象，处理响应结果
    xhr.onreadystatechange = function (){
        /*判断*/
        if(xhr.readyState === 4){
            /*判断响应状态码 200 - 299*/
            if(xhr.status >= 200 && xhr.status < 300){
                /*响应成功*/
                console.log(xhr.response)
            }else{
                /*响应失败*/
                console.error(xhr.status)
            }
        }
    }

})
p.then(function (value){console.log(value)},function (err){
    console.log(err)
})
