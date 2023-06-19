/*
* Object.values()方法返回一个给定对象的所有可枚举属性值的数组
* Object.entries()方法返回一个给定对象自身可遍历属性[key,value]的数组
* Object.getOwnPropertyDescriptors()方法返回指定对象所有自身属性的描述对象*/
const school = {
    name:'尚硅谷',
    cities:['北京','b','c'],
    xueke:['er','se','po']
}
/*获取对象所有的键*/
console.log(Object.keys(school))
/*获取对象所有的值*/
// console.log(Object.values(school))
// console.log(Object.entries(school))
// const m = new Map(Object.entries(school))
// console.log(m.get('cities'))
console.log(Object.getOwnPropertyDescriptors(school))
const obj = Object.create(null,{
    name:{
        value:'尚硅谷',
        /*属性特性*/
        writable:true,
        configurable:true,
        enumerable:true
    }
})

/*Object.fromEntries将二维数组转换为对象*/
const result = Object.fromEntries([['a','b'],['c','d']])
const m = new Map();
m.set('name','是覅噢恶化');
const result = Object.fromEntries(m)
/*Object.entries将对象转换为二维数组*/
const arr = Object.entries({
    name:'尚硅谷',
    ohuo:['a']
})
console.log(arr)
