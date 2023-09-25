/*
* 1.原型链（图解）
* 访问一个对象的属性时，
* 先在自身属性中查找，找到返回
* 如果没有，再沿着__proto__这条链向上查找，找到返回
* 如果最终没找到，返回undefined
* 别名：隐式原型链
* 作用：查找对象的属性（方法）
* 2.构造函数/原型/实体对象的关系
* 3.构造函数/原型/实体对象的关系*/
console.log(Object.prototype.__proto__)
function Fn(){
    this.test1 = function (){
        console.log('test1()')
    }
}
Fn.prototype.test2 = function (){
    console.log('test2()')
}
var fn = new Fn()
fn.test1()
fn.test2()
console.log(fn.toString())

// fn.test3()
/*
* 1.函数的显式原型指向的对象默认是object实例对象（但是Object不满足）*/
console.log(Fn.prototype instanceof Object)
console.log(Object.prototype instanceof  Object)
console.log(Function.prototype instanceof Object)
/*
* 2.所有函数都是Function的实例（包含Function）*/
console.log(Function.__proto__ === Function.prototype)
/*
* Object的原型对象是原型链尽头*/
console.log(Object.prototype.__proto__)
