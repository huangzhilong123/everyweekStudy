function debounce(fn,ms = 1000){
    let timer;
    return function(...args){
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(()=>{
            func.apply(this,args)
        },ms)
    }
}
let task = ()=>{console.log('taskover')}
let debounceTask = debounce(task,1000)
window.addEventListener('scroll',debounceTask)

function throttle(func,ms = 1000){
    let canRun = true;
    return function(...args){
        if(!canRun){
            return
        }
        canRun = false;
        setTimeout(()=>{
            func.apply(this,args)
            canRun = true
        },ms)
    }
}
function myNew(Func,...args){
    const instance = {};
    if(Func.prototype){
        Object.setPrototypeOf(instance,Func.prototype)
    }
    let res = Func.apply(instance,args)
    if(typeof res === 'function' || (typeof res === 'object' && res !== null)){
        return res
    }
    return instance
}
function person(name){
    this.name = name
}
person.prototype.sayName = function(){
    console.log(`my name is ${this.name}`)
}
let me = myNew(person,'jack')
me.sayName()
console.log(me)

function push(array,...items){
    array.push(...items)
}
function add(x,y){
    return x+y
}
var numbers = [4,30];
add(...numbers)


function f(v,w,x,y,z,o){console.log(w);return v+w+x+y+z+o}
var args = [1,2]
f(-1,...args,3,3,...[4])

var x = 3
var arr = [...(x>0?['a']:[]),'b']


function f(x,y,z){
    return x+y+z
}
var args = [0,1,2]
f.apply(null,args)


var arr1 = [0,1,2]
var arr2 = [3,4,5]
arr1.push(...arr2)
Array.prototype.push.apply(arr1,arr2)

new (Date.bind.apply(Date,[null,2015,1,1]))

var a1 = [{foo:1}]
var a2 = [{bar:2}]
var a3 = a1.concat(a2)
var a4 = [...a1,...a2]

var [first,...rest] = [1,2,3,4,5]

Number.prototype[Symbol.iterator] = function*(){
    let i=0;
    let num = this.valueOf();
    while(i < num){
        yield i++;
    }
}
console.log([...5])

var go = function*(){
    yield 1;
    yield 2;
    yield 3;
}

console.log([...go()])

function foo(){
    var arguments = [...arguments]
    console.log(arguments)
}
var toArray = (()=>{
    Array.from ? Array.from : obj =>[].slice.call(obj)
})()


function typesOf(){
    return Array.from(arguments,value=>typeof value)
}
typesOf(null,[],NaN)

function typesOf(){
    return Array.from(arguments,value => typeof value)
}
Array.from({length:2},()=>'jack')
function countSymbols(string){
    return Array.from(string).length
}


function ArrayOf(){
    console.log(arguments)
    // console.log(this)
    console.log([].slice.call(arguments))
    return [].slice.call(arguments)
}



function f(v){
    return v > this.age
}
let person = {name:'jhon',age:20}
[10,21,25,18].find(f,person)


let arr = new Array(3).fill({name:'mike'});
arr[0].name = "Ben";

for(let index of ['a','b'].keys()){
    console.log(index)
}

let letter = ['a','b','c'];
let entries = letter.entries()
entries.next().value
entries.next().value
entries.next().value

var contains = (()=>Array.prototype.includes
?(arr,value) => arr.includes(value):(arr,value)=>arr.some(el=>el===value))()

function myinstanceof(left,right){
    let proto = Object.getPrototypeOf(left);
    let prototype = right.prototype;
    while(true){
        if(!proto) return false;
        if(proto === prototype) return true;
        proto = Object.getPrototypeOf(proto);
    }
}

let onwatch = (target,setBind,getlogger)=>{
    let handler = {
        get(target,property,receiver){
            getlogger(target,property)
            return Reflect.get(target,property,receiver)
        },
        set(target,property,value,receiver){
            setBind(value,property)
            return Reflect.set(target,property,value)
        }
    }
    return new Proxy(obj,handler)
}

function printDiamond(num){
    if( num % 2 === 0){
        console.log('请输入奇数')
        return;
    }
    //打印上半部分菱形
    for(let i = 1; i < num; i++){
        let row = '';
        for(let j = 0;j < (num - i) / 2; j++){
            row += ' ';
        }
        for(let j = 0;j < i; j++){
            row += '*';
        }
        console.log(row)
    }
    //打印下半部分的菱形
    for(let i = num - 2; i >= 1; i -= 2){
        let row = '';
        for(let j = 0; j < (num - i) / 2; j++){
            row += ' ';
        }
        for(let j = 0; j < i; j++){
            row += '*'
        }
        console.log(row)
    }
}


function printDiamond(num) {
    // 判断输入的数字是否为奇数，如果不是则加1
    if (num % 2 === 0) {
        // num++;
        console.log('请输入奇数');
        return;
    }
    // 打印上半部分的菱形
    for (let i = 1; i <= num; i += 2) {
        let row = '';
        for (let j = 0; j < (num - i) / 2; j++) {
            row += ' ';
        }
        for (let j = 0; j < i; j++) {
            row += '*';
        }
        console.log(row);
    }
    // 打印下半部分的菱形
    for (let i = num - 2; i >= 1; i -= 2) {
        let row = '';
        for (let j = 0; j < (num - i) / 2; j++) {
            row += ' ';
        }
        for (let j = 0; j < i; j++) {
            row += '*';
        }
        console.log(row);
    }
}

function fn(){
    let n = 1;
    function fn1(){
        console.log(n);

    }
    fn1()
    ++n;
}

function fn(){
    var i = 0
    return {
        // fn 函数返回一个对象，有 get、set 等方法，来操作私有变量 i
        get: function () {
            return i
        },
        set: function (val) {
            i = val
        },
        increment: function () {
            return ++i
        }
    }
}


let a = {
    age:1,
    jobs:{
        first:'huang'
    }
}
let b = JSON.parse(JSON.stringify(a));
b.jobs.first = 'haijun'
console.log(a)


const flattenDeep = (arr)=>{
    Array.isArray(arr)?arr.reduce((a,b)=>[...a,...flattenDeep(b)],[]):[arr];
}

let a = {
    age:1,
    set:function(){
        let b = 4
        console.log(b)
    }
}
let b = Object.assign({},a)
b.age = 2

function debounce(fn){
    let timer = null;
    return function (){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(this,arguments)
        },500)
    }
}

async function async1() {
    console.log('async1 start')
    await async2()
    console.log('async1 end')}async function async2()
{
    console.log('async2')}console.log('script
start')setTimeout(function()
{
    console.log('setTimeout')},
0) async1()new Promise(function(resolve)
1) {
    console.log('promise1')
    resolve()}).then(function()
{
    console.log('promise2')})console.log('script end')


function concatArr(arr1,arr2){
    var arr = [...arr1];
    let currIndex = 0;
    for(let i=0;i<arr2.length;i++){
        var re = new RegExp(arr2[i]);
        console.log('re',re)
        while(currIndex < arr.length){
            ++currIndex;
            console.log('huang',!re.test(arr[currIndex]))
            if(!re.test(arr[currIndex])){
                console.log('jun',currIndex)
                arr.splice(currIndex,0,arr2[i])
                console.log('hai',arr.splice(currIndex,0,arr2[i]))
                break;
            }
        }
    }
    return arr
}

function myInstanceof(left,right){
    var left = Object.getPrototypeOf(left);
    var right = right.prototype
    while(true){
        if(!right) return false;
        if(left === right) return true;
        right = Object.getPrototypeOf(right)
    }
}


let onwatch = (obj,setBind,getLogger)=>{
    let handler = {
        get(target,property,recerver){
            getLogger(target,property)
            return Reflect.get(target,property,receiver)
        },
        set(target,property,value,receiver){
            setBind(value,property);
            return Reflect.set(target,property,value)
        }

    }
    return new Proxy(obj,handler)
}


let onwatch = (target,setBind,getLogger)=>{
    let handler = {
        get(target,property,receiver){
            getLogger(target,property);
            return Reflect.get(target,property,receiver)
        },
        set(target,property,value,receiver){
            setBind(value,property)
        }
    }
}
