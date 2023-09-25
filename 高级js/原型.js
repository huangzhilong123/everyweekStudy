/*
* 每个函数function都有一个prototype，显式原型（属性）
* 每个实例对象都有一个__proto__,可称为隐式原型（属性）
* 对象的隐式原型的值为其对应构造函数的显式原型的值
* 内存结构（图）
* 总结
* 1.函数的prototype属性：在定义函数时自动添加的，默认值是一个空Object对象
* 2.对象的__proto__属性：创建对象时自动添加的，默认值为构造函数的prototype属性值
* 3.程序员能直接操作显式原型，但不能直接操作隐式原型（Es6之前）*/
function Fn(){/*内部语句：this.prototype = {} */

}
/*1.每个函数function都有一个prototype，即显式原型*/
console.log(Fn.prototype)
/*每个实例对象都有一个__proto__,可称为隐式原型（属性）*/
var fn = new Fn();/*内部语句this.__proto__ = Fn.prototype*/
console.log(fn.__proto__)
console.log(Fn.prototype === fn.__proto__)
/*给原型添加方法*/
Fn.prototype.test = function (){
    console.log('test')
}
fn.test()
