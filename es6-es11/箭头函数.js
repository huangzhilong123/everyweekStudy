

let fn = function (){

}
let fn1 = (a,b)=>{
    return a + b
}
let result = fn(1,2)
console.log(result)
/*1.this是静态的，this始终指向函数声明时所在作用域下的this的值
* */
function getName(){
    console.log(this.name)
}
let getName2 = ()=>{
    console.log(this.name)
}
window.name = "huangzhilong"
const school = {
    name:'huangHHH'
}
// getName();
// getName2()
/*2.不能作为构造实例化对象*/
// let Person = (name,age)=>{
//     this.name = name;
//     this.age = age;
// }
// let me = new Person('xiao',30);
// console.log(me)
/*3.不能使用arguments变量*/
// let fn = () => {
//     console.log(arguments)
// }
// fn(1,2,3,4)
/*4.箭头函数简写
* 省略小括号，当形参有且只有一个的时候*/
// let add = n =>{
//     return n + n
// }
// console.log(add(9))
/*省略花括号，当代码体只有一条语句的时候,此时return必须省略*/
let pow = (n) => n*n;
console.log(pow(8))
