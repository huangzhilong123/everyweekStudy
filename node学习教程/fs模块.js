/* 
需求：
新建一个文件，座右铭.txt，写入内容
，三人行，必有我实验
*/
const fs = require('fs');
fs.writeFile('./座右铭.txt','三人行，必有我实验',err=>{
    if(err){
        console.log('写入失败');
        return;
}})