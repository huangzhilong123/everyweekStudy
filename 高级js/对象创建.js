/*
* 方式一：Object构造函数模式
* 套路：先创建空Object对象，再动态添加属性/方法
* 适用场景：起始时不确定对象内部数据
* 问题：语句太多*/
var p = new Object()
p.name = 'tom'
p.age = 12
p.setName = function (name){
    this.name = name
}

/*测试*/
p.setName('huang')
/*对象字面量
* */
var p1 = {
    name:'huang',
    age:12,
    setName:function (name){
        this.name = name

    }
}
/*工厂模式
* 套路：通过工厂函数动态创建对象并返回
* 适用场景：需要创建多个对象
* 问题：对象没有一个具体的类型，都是Object类型*/
function createPerson(name,age){
    var obj = {
        name:name,
        age:age,
        setName:function (name){
            this.name = name
        }
    }
    return obj
}
var p1 = createPerson('huagn',12)
var p2 = createPerson('fie',13)
/*自定义构造函数模式
* 套路：自定义构造函数，通过new创建对象
* 适用场景：需要创建多个类型确定的对象
* 问题：每个对象都有相同的数据，浪费内存*/
function Person(name,age){
    this.name = name
    this.age = age
    this.setName = function (name){
        this.name = name
    }
}
var p1 = new Person('tom',12)
p1.setName('jack')
console.log(p1.name,p1.age)
