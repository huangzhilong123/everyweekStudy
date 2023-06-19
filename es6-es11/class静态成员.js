function phone(){

}
phone.name = '手机';
phone.change = function (){
    console.log('fjeiwao')
}
phone.prototype.size = '5.5'
let nokia = new phone();
console.log(nokia.name);
// nokia.change()
console.log(nokia.size)

class Phone{
    /*静态属性*/
    static name = '手机';
    static change(){
        console.log('我可以改变世界')
    }
}
let huang = new Phone();
console.log(huang.name)
console.log(nokia.name)
