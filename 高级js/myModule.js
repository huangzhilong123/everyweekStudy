
/*第一种方式*/
// function myModule(){
//     //私有数据
//     var msg = 'My atguigu'
//     function doSomething(){
//         console.log('doSomething()' + msg.toUpperCase())
//     }
//     function doOtherthing(){
//         console.log('doOtherthing()' + msg.toLowerCase())
//     }
//     return {
//         doSomething:doSomething,
//         doOtherthing:doOtherthing
//     }
// }
/*第二种方式*/
(function (){
    //私有数据
    var msg = 'My atguigu'
    function doSomething(){
        console.log('doSomething()' + msg.toUpperCase())
    }
    function doOtherthing(){
        console.log('doOtherthing()' + msg.toLowerCase())
    }
    window.myModule2 = {
        doSomething:doSomething,
        doOtherthing:doOtherthing
    }
})()
