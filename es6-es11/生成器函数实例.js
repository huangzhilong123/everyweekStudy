/*异步编程 文件操作 网络操作（ajax，request）数据库操作
* 1s后控制台输出111 2s后输出222 3s后输出333*/
function one(){
    setTimeout(()=>{
        console.log(111)
        iterator.next()
    },1000)
}
function two(){
    setTimeout(()=>{
        console.log(222)
        iterator.next()
    },2000)
}
function three(){
    setTimeout(()=>{
        console.log(333)
        iterator.next()

    },3000)
}
function * gen(){
    yield one();
    yield two();
    yield three();
}
let iterator = gen();
iterator.next()
