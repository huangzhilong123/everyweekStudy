/*ES6允许给函数参数赋值初始值
* 1.形参初始值 具有默认值的参数，一般位置要靠后（潜规则）*/
function add(a,b,c=10){
    return a + b + c
}
let result = add(1,2)
console.log(result)
function connect({host,username,password,port}){
console.log(host)
    console.log(username)
}
connect({
    host:'localhost',
    username:'root',
    password:'root',
    port:'10'
})
