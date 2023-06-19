/*
* ES6允许按照一定模式从数组和对象中提取值，对变量进行赋值
* 这被称为解构赋值
* 比如数组的结构*/
const F4 = ['hfe','huang','iop']
let [m,o,p] = F4;
console.log(m)
/*对象的解构*/
const zhao = {
    name:'赵本山',
    age:19,
    xiaopin:function(){
        console.log(111)
    }
}
let {name,age,xiaopin} = zhao
console.log(xiaopin)
