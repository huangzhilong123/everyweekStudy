/*1.let不能重复声明
* let start = 'jfew'
* let start = 'fjef'*/
/*2,块级作用域 全局，函数，eval
* 3.不存在变量提升
* 4，不影响作用域链*/
{
    let school = 'huag'
    function fn(){
        console.log(school)
    }
    fn()
}
