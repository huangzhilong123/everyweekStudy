let xiyou = [1,2,3,4]
for(let v of xiyou){
    console.log(v)
}
let iterator = xiyou[Symbol.iterator]();
console.log(iterator.next())
/*自定义遍历数据*/
let banji = {
    name:'huang',
    stus:['xaofjie','fjeiw','iejfi','pweo'],
    [Symbol.iterator](){
        let index = 0;
        let _this = this;
        return {
            next:function (){
                if(index < _this.stus.length){
                    const result =  {value:_this.stus[index],done:false}
                    /*下标自增*/
                    index++;
                    return result
                }else{
                    return {value:_this.stus[index],done:true}
                }
            }
        }
    }
}
for(let v of banji){
    console.log(v)
}
