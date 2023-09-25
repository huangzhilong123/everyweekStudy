/*方式2：借用构造函数继承（假的）
* 套路：
* 1.定义父类型构造函数
* 2.定义子类型构造函数
* 3.在子类型构造函数中调用父类型构造
* 关键：
* 在子类型构造函数中通用call()调用父类型构造函数
* */
function person(name,age){
    this.name = name
    this.age = age
}
function Student(name,age,price){
    person.call(this,name,age)/*得到属性*/
    this.price = price
}
var s = new Student('tom',20,14000)
console.log(s.name,s.age,s.price)
/*方式3：原型链+借用构造函数的组合继承
* 1.利用原型链实现对父类型对象的方法继承
* 2.利用super()借用父类型构建函数初始化相同属性*/

function person(name,age){
    this.name = name
    this.age = age
}
person.prototype.setName = function (name){
    this.name = name
}
function Student(name,age,price){
    person.call(this,name,age)
    this.price = price
}
Student.prototype = new Person()/*为了得到父类型方法*/
Student.prototype.constructor = Student/*修正constructor属性*/
var s = new Student('tom',20,14000)
s.setName('huagn')

