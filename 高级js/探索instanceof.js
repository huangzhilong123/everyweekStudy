/*
* 1.instanceof是如何判断的
* 表达式：A instanceof B
* 如果B函数的显式原型对象在A对象的原型链上，返回true，否则返回false
* 2.Function是通过new自己产生的实例*/
function Foo(){

}
var f1 = new Foo()
console.log(f1 instanceof Foo)
console.log(f1 instanceof Object)
console.log(Object instanceof Function)
console.log(Object instanceof Object)
console.log(Function instanceof Function)
console.log(Function instanceof Object)
function Foo(){}
console.log(Object instanceof Foo)/*false*/
