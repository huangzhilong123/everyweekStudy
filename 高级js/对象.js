/*
* 1.什么是对象？
* 多个数据的封装体，一个对象代表现实中的一个事物
* 2.为什么要用对象？
* 统一管理多个数据
* 3.对象的组成？
* 属性：属性名（字符串）和属性值（任意）组成，
* 方法：一种特别的属性（属性值是函数）
* 4.如何访问对象内部数据
* .属性名
* [''] 包含特殊字符的时候用（['content-type']),变量名不确定
* var proname = 'age'
* var value = 18
* p[proname] = value*/
var p = {
    name:'tom',
    age:12,
    setName:function (name){
        this.name = name
    }
}
console.log(p['name'])
