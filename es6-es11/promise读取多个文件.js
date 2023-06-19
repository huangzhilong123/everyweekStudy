/*引入fs模块*/
const fs = require('fs');
/*使用promise实现*/
const p = new Promise((resolve, reject) => {
    fs.readFile('../html5与css3/1.md',(err,data)=>{
        resolve(data)
    })
})
p.then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('../html5与css3/cs架构与bs架构.md',(err,data)=>{
            resolve([value,data])
        })
    }).then(value=>{
        return new Promise((resolve, reject) => {
            fs.readFile('../html5与css3/块级元素与行内元素.md',(err,data)=>{
                value.push(data);
                resolve(value)
            })
        })
    }).then(value=>{
        console.log(value.join('\r\n'))
    })
})
/*promise中catch方法*/
const p1 = new Promise((resolve, reject) => {
    setTimeout(function (){
        reject('出错啦')
    },1000)
})
p1.then(function (value){
    console.log(value)
},function (error){
    console.log(error)
})

p1.catch(function (error){
    console.warn(error)
})
