/*
* 1.什么是数据
* 存储在内存中代表特定信息的‘东西’
* 数据的特点：可传递，可运算
* 2.什么是内存
* 内存条通电后产生的可存储数据的空间（临时的）
* 内存产生和死亡：内存条（电路板）==》通电==》产生内存空间==》存储数据==》处理数据==》内存空间和数据都消失
* 一块小内存的两个数据：内部存储数据，地址值
* 内存分类：
* 栈：全局变量/局部变量
* 堆：对象
* 3.什么是变量
* 可变化的量，由变量名和变量值组成
* 每个变量都对应的一块小内存，变量名用来查找对应的内存，变量值就是内存中保存的数据
* 4.内存，数据，变量三者之间的关系
* 内存用来存储数据的空间，
* 变量是内存的标识
* 5.关于引用变量赋值问题
* 2个引用变量指向同一个对象，通过一个变量修改对象内部数据，另一个变量看到的是修改后的数据
* （重点）两个引用变量指向同一个对象，让其中一个引用变量指向另一个对象，另一个引用变量依然指向前一个对象
* */
var obj1 = {name:'tom'}
var boj2 = obj1;
obj1.name  = 'huang'
console.log(boj2.name)
/*重点测试*/
var a = {age:12}
function fn(obj){
    obj = {age:14}
}
fn(a)
console.log(a.age)
