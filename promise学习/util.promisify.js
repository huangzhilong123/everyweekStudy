/*传入一个遵循常见的错误优先的回调风格的函数（以(err,value)=>...回调作为最后一个参数，
* 并返回一个返回promise的版本*/
let util = require('util');
const fs = require('fs')
let mineReadFile = util.promisify(fs.readFile);
mineReadFile('../promise学习/块级元素与行内元素.md').then(value=>{
    console.log(value.toString())
},reason=>{
    console.log(reason)
})
