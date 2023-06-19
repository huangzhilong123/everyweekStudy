/*模拟数据 用户数据 订单数据 商品数据*/
function getUsers(){
    setTimeout(()=>{
        let data = "用户数据";
        /*调用next方法，并且将数据传入*/
        iterator.next(data)
    },1000)
}
function getOrders(){
    setTimeout(()=>{
        let data = "订单数据";
        iterator.next(data)
    },1000)
}
function getGoods(){
    setTimeout(()=>{
        let data = "商品数据";
        iterator.next(data)
    },1000)
}
function * gen(){
   let users = yield getUsers();
   console.log(users)
    let goods = yield getGoods();
   console.log(goods)
    let orders = yield getOrders();
   console.log(orders)
}
/*调用生成器函数*/
let iterator = gen();
iterator.next()
