var x = 10;
function fn(){
    console.log(x)
}
function show(f){
    var x = 20
    f()
}
show(fn)



var fn1 = function (){
    console.log(fn1)
}
fn1()
var obj = {
    fn2:function (){
        console.log(fn2)
        /*正确
        * console.log(this.fn2)*/
    }
}
obj.fn2()
