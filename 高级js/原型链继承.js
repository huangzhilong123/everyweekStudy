/*方式一：原型链继承
* 1.套路
*   1.定义父类型构造函数
*   2.给父类型的原型添加方法
*   3.定义子类型的构造函数
*   4.创建父类型的对象赋值给子类型的原型
*   5.将子类型原型的构造属性设置为子类型
*   6.给子类型原型添加方法
*   7.创建子类型的对象：可以调用父类型的方法
* 2.关键
* 1.子类型的原型为父类型的一个实例对象*/
/*父类型*/
function Supper(){
    this.supProp = 'Supper property'
}
Supper.prototype.showSupperProp = function (){
    console.log(this.supProp)
}
/*子类型*/
function Sub(){
    this.subProp = 'Sub property'
}
Sub.prototype = new Supper()
/*让子类型的原型的constructor指向子类型*/
Sub.prototype.constructor = Sub
Sub.prototype.showSubProp = function (){
    console.log(this.subProp)
}
var sub = new Sub()
sub.showSupperProp()
