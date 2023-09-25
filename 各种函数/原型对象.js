function Myclass(){

}
Myclass.prototype.name = "我是原型中的名字"
var mc = new Myclass()
console.log("name" in mc)

console.log(mc.__proto__.hasOwnProperty("name"))
console.log(mc.__proto__.__proto__.__proto__)
console.log(mc.hello)

function Person(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender
}
var per = new Person('huangzhio',19,"男")
per.toString = function (){
    return "我是大爷"
}
var result = per.toString()
console.log(result)
