/*
* 1.依次输出什么
* 2.整个过程中产生了几个执行上下文
* 5个上下文*/
console.log('global begin:' + i)
var i=1;
foo(1)
function foo(i){
    if(i == 4){
        return;
    }
    console.log('foo() begin:' + i);
    foo(i + 1)/*递归调用：在函数内部调用自己*/
    console.log('foo() end:' + i)
}
console.log('global end:' + i)
/*测试题 先执行变量提升，再执行函数提升*/
function a(){

}
var a
console.log(typeof a)
/*测试题2*/
if(!(b in window)){
    var b = 1;
}
console.log(b)
/*测试题3*/
var c = 1;
function c(c){
    console.log(c)
}
c(2)
/*实际上*/
var c
function c(c){
    console.log(c)
}
c = 1
c(c)
