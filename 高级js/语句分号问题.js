/*
* 1.js一条语句的后面可以不加分号
* 2.是否加分号是编码问题，没有应该不应该，只有你喜不喜欢的问题
* 3.解决办法，在括号前面加分号，还有中括号前面加分号*/
var a = 3
;(function (){
   console.log(a)
})()
var b=4
;[1,3].forEach(function (){
    console.log('...')
})
