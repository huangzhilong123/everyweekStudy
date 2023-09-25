/*1.如何产生闭包？
* 当一个嵌套的内部（子）函数引用了嵌套的外部（父）函数的变量（函数）时，就产生了闭包
* 2.闭包到底是什么？
* 使用chrome调试查看
* 理解1：闭包是嵌套的内部函数（绝大部分人）
* 理解2：包含被引用变量（函数）的对象（极少数人）
* 注意：闭包存在于嵌套的内部函数中
* 3.产生闭包的条件
* 函数嵌套
* 内部函数引用了外部函数的数据（变量/函数）*/
/*将函数作为另一个函数的返回值*/
function fn1(){
    var a = 2;
    function fn2(){/*执行函数定义就会产生闭包（不用调用内部函数）*/
        a++
        console.log(a)
    }
    return fn2
}
fn1()
var f = fn1()
f()
f()


/*2将函数作为实参传递给另一个函数调用*/
function showDelay(msg,time){
    setTimeout(function (){
        alert(msg)
    },time)
}
showDelay('huanghzilong',2000)
