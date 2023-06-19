/*创建promise对象*/
const p = new Promise((resolve, reject) => {
    setTimeout(function (){
        resolve('用户数据')
    },1000)
})
/*调用then方法，then方法的返回结果是Promise对象，对象状态由回调函数的执行结果决定
* 1.如果回调函数中返回的结果是非promise类型的属性，状态为成功，返回值为对象的成功的值
* */
const result = p.then(value=>{
    console.log(value)
    /*1非promise对象*/
    // return 123
//  2是promise对象
//     return new Promise((resolve, reject) => {
//         reject('error')
//     })
//    3.抛出错误
//     throw new Error('出错啦')
    throw '出错啦'
},reason => {
    console.log(reason)
})
/*链式调用*/
p.then(value => {

}).then(value => {
    
})
