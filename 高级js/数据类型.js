/*1.类型
* 基本（值）类型：String,Number,boolean,undefined,null
* 对象（引用）类型:
* Object
* Function
* Array
* 2.判断
* typeof：可以判断undefined/数值/字符串/布尔值/function
* 不能判断：null与object,object与array
* 返回数据类型的字符串表达
* instanceof:判断对象的具体类型
* ===:可以判断undefined
* */
var a;
console.log(a === undefined)
console.log(typeof a === 'undefined')
a = 'fheiwf'
console.log(typeof a === 'string')
a = null
console.log(typeof a ==='object')
/*2.对象*/
var b1 = {
    b2:[1,'abc',console.log],
    b3:function (){
        console.log('b3')
        return function (){
            return 'huanghzilong'
        }
    }
}
console.log(b1 instanceof Object,b1 instanceof Array)
/*可以看成A是B的实例，所以可以将Object看成构造函数*/
console.log(b1.b2 instanceof Array,b1.b3 instanceof Object)
console.log(b1.b3 instanceof Function,b1.b3 instanceof Object)
console.log(typeof b1.b3 === 'function')
console.log(typeof b1.b2[2] === 'function')
b1.b2[2](4)
console.log(b1.b3()())
console.log(typeof b1.b2)
