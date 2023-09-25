/*
* 1.内存溢出
* 一种程序运行出现的错误
* 当程序运行需要的内存超过剩余的内存时，就会出现内存溢出的错误
* 2.内存泄漏
* 占用的内存没有及时释放
* 内存泄漏积累多了就容易导致内存溢出
* 常见的内存泄漏
* 意外的全局变量
* 没有及时清理的计时器或回调函数
* 闭包*/
/*1.内存溢出*/
var obj = {}
for(var i =0 ;i<10000;i++){
   obj[i] = new Array(100000000000)
}
/*2内存泄漏*/
//意外的全局变量
function fn(){
    a = 3
    console.log(a)
}

setInterval(function (){/*启动循环定时器不清理*/
    console.log('-----')
},1000)

function fn1(){
    var a = 4;
    function fn2(){
        console.log(++a)
    }
    return fn2
}
var f = fn1()
f()
fn()
