/*封装一个函数 sendAjax发送GET Ajax请求
* 参数， URL
* 返回结果Promise对象*/
function sendAjax(url){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET",url);
        xhr.send();
        xhr.onreadystatechange = function (){
            if(xhr.readyState === 4){
                if(xhr.status >= 200 && xhr.status < 300){
                    resolve(xhr.response);
                }else{
                    reject(xhr.status);
                }
            }
        }
    })
}
sendAjax('https://api.apiopen.top/getJoke').then(value=>{
    console.log(value.toString())
},reason=>{
    console.log(reason)
})
