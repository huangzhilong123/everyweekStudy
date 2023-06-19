let arr = [1,2,3,4,56,2,3];
/*1数组去重*/
// let result = [...new Set(arr)]
/*2交集*/
let arr2 = [2,3,4,5,6];
let result = [...new Set(arr)].filter(item=>{
    let s2 = new Set(arr2);
    if(s2.has(item)){
        return true;
    }else{
        return false;
    }
})
let result = [...new Set(arr)].filter(item=>new Set(arr2).has(item));
console.log(result)
/*并集*/
let union = [...new Set([...arr,...arr2])];
console.log(union)
/*差集*/
let diff = [...new Set(arr)].filter(item=>!(new Set(arr2).has(item)));
console.log(diff)
