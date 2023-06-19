/*ES6引入rest参数，用于获取函数的实参，用来代替arguments
*ES5获取实参的方式
*  */
// function date(){
//     console.log(arguments)
// }
// date('huangzhilogn','hei')
//rest参数
function date(...args){
    console.log(args)
}
date('啊哈','fei','field')
//rest参数必须放到参数最后
function fn(a,b,...agrs){
    console.log(a)
    console.log(b)
    console.log(args)
}
fn(1,2,3,4,5,6)
