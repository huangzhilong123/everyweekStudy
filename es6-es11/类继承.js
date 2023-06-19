class Phone{
    //构造方法
    constructor(brand,price) {
        this.brand = brand;
        this.price = price;
    }
    /*父类的成员属性*/
    call(){
        console.log('我可以打电话')
    }
}
class smartphone extends Phone{
    /*构造方法*/
    constructor(brand,price,color,size) {
        super(brand,price);
        this.color = color;
        this.size = size;
    }
    photo(){
        console.log('拍照');
    }
    playGame(){
        console.log('玩游戏')
    }
}
const xioami = new smartphone('小米',999,'black',4.6)
console.log(xioami)
xioami.call()
//class内部get与set设置
class Beizi{
    get price(){
        console.log('好多钱')
    }
    set price(newValue){
        console.log('你想设置为好多钱')
    }
}
let beizi = new Beizi();
beizi.price
beizi.price = '100yuan'
/*设置原型*/
const school = {
    name:'尚硅谷'
}
const cities = {
    xiaoqu:['北京','上海','深圳']
}
Object.setPrototypeOf(school,cities);
console.log(Object.getPrototypeOf(school))
console.log(school)
