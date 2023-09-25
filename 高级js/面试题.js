var name = 'huagnzhilogn'
var obj = {
    name:'huanghaijun',
    getName:function (){
        console.log('htis',this)
        return function (){
            console.log(this)
            return this.name;
        }
    }
}
console.log(obj.getName()())



var name2 = 'this window'
var obj2 = {
    name2:'my obj',
    getName1:function(){
        var that = this;
        return function(){
            return that.name2
        }
    }
}
console.log(obj2.getName1()())


function fun(n,o){
    console.log(o)
    return {
        fun:function (m){
            console.log(m)
            return fun(m,n)
        }
    }
}
var a = fun(0);a.fun(1);a.fun(2);a.fun(3);
var b = fun(0).fun(1).fun(2).fun(3);
var c = fun(0).fun(1);c.fun(2);c.fun(3);
