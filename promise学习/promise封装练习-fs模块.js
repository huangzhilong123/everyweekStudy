function mineReadFile(path){
    return new Promise((resolve, reject) => {
        require('fs').readFile(path,(err,data)=>{
            if(err) reject(err);
            resolve(data)
        })
    })
}
// ../everystudy/everyweekStudy/promise学习/块级元素与行内元素.md
mineReadFile('../promise学习/块级元素与行内元素.md').then(value=>{
    console.log(value.toString())
},reason=>{
    console.log(reason)
})
