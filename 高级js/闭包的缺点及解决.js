// 1.缺点
// 函数执行完后，函数内部的局部变量没有释放，占用内存时间会变长
// 容易造成内存泄漏
// 2.解决
// 能不用闭包就不用
// 及时释放
function fn(){
    var arr = new Array[100000]
    function fn2(){
        console.log(arr.length)
    }
    return fn2
}
var f = fn1()
f()
f = null/*让内部函数成为垃圾对象=》回收闭包*/
