/*...扩展运算符能将数组转换为逗号分隔的参数序列
* 声明一个数组*/
const tyboys = ['huagn','f','iei']
/*声明一个函数*/
function chunwan(){
    console.log(arguments)
}
chunwan(...tyboys)
