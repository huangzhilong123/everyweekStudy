/*async函数
* 1.async函数的返回值为promise对象
* 2.promise对象的结果由async函数执行的返回值决定
* await表达式
* 1.await必须写在async函数中
* 2.await右侧的表达式一般为promise对象
* 3.await返回的是promise成功的值
* 4.await的promise失败了，就会抛出异常，需要通过try.catch捕获处理*/
const p = new Promise((resolve, reject) => {
    // resolve('成功的值')
    reject('失败的值')
  
})
/*await要放在async函数中*/
async function main(){
    try{
        let result = await p;
        console.log(result)
    }catch (e){
        console.log(e)
    }

}
main()
