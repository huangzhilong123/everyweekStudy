function phone(brand,price){
    this.brand = brand;
    this.price = price;
}
phone.prototype.call = function(){
    console.log('我可以打电话');
}
function smartphone(brand,price,color,size){
    phone.call(this,brand,price);
    this.color = color;
    this.size = size;
}
/*设置子级构造函数的原型*/
smartphone.prototype = new phone;
smartphone.prototype.constructor = smartphone;
/*声明子类的方法*/
smartphone.prototype.photo = function (){
    console.log('我可以拍照')
}
smartphone.prototype.playgame = function(){
    console.log('我可以玩游戏')
}
const chuizi = new smartphone('锤子',2000,'黑色',5.5);
console.log(chuizi)
