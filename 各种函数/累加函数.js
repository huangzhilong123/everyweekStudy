/*累加函数*/
/*一个参数累加*/function add(a){
    function sum(b){/*使用闭包*/
        a = b ? a+b : a;/*累加*/
        return sum
    }
    sum.toString = function (){
        return a;//只在最后一次调用，返回最后结果，
    }
    return sum/*返回一个函数*/
}
function add(){
    let args = [...arguments];
    console.log('args',args)
    let fn = function (){
        return add.apply(null,args.concat([...arguments]))
    }
    fn.toString = () => args.reduce((a,b) => a+b)
    return fn
}

function flat(arr){
    if(arr.some(Array.isArray)){
        console.log(...arr)
        arr = [].concat(...arr)
    }
    return arr
}

function Foo() {
    console.log('this1',this)
    getName = function () { console.log('this2',this);console.log(1) }
    return this
}
Foo.getName = function () {
    console.log(2)
}
Foo.prototype.getName = function() {
    console.log(3)
}
var getName = function () {
    console.log(4)
}
function getName() {
    console.log(5)
}

Foo.getName()
getName()
Foo().getName()
getName()
new Foo.getName()
new Foo().getName()
new new Foo().getName()
