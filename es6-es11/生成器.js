/*生成器其实就是一个特殊函数
* 异步编程 纯回调函数 node fs ajax mongodb*/
// function * gen(){
//     console.log('hello')
// }
/*函数代码的分隔符*/
function * gen(){
    // console.log(111)
    yield 'en';
    // console.log(222)
    yield 'hhe';
    // console.log(333)
    yield 'feu';
}
// let iterator = gen()
// console.log(iterator)
// iterator.next()
// iterator.next()
// iterator.next()
// iterator.next()
/*遍历*/
for(let v of gen()){
    console.log(v)
}
/*生成器函数的参数传递*/
function * gen1(arg){
    console.log(arg)
    let one =  yield 111;
   console.log(one)
    yield 222;
    yield 333;
}
let iterator1 = gen1('aaa');
console.log(iterator1.next())
console.log(iterator1.next('ife'))
console.log(iterator1.next('443'))

