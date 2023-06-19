/*实例化promise对象*/
const p = new Promise(function (resolve, reject){
    setTimeout(function (){
        /**/
        // let data = "数据库中的用户数据";
        // resolve(data)
        let err = "数据读取失败";
        reject(err)
    },1000)
})
/*调用promise中then方法*/
p.then(function (value){
    console.log(value)
},function (reason){
    console.log(reason)
})
