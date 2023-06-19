/*
* ES6允许在大括号里面直接写入变量和函数，作为对象的属性和方法
* 这样的书写更加简洁*/
let name = '尚硅谷';
let change = function (){
    console.log('我们可以改变世界')
}
const school = {
    name,change,
    improve(){
        console.log('加油，改变世界，第一步改变自己')
    }
}
console.log(school.name)
