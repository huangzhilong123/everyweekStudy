/*创建symbol*/
let s = Symbol()
// console.log(s,typeof s);
let s2 = Symbol('尚硅谷');
let s3 = Symbol('尚硅谷')
/*Symbol.for创建*/
let s4 = Symbol.for('尚硅谷');
let s5 = Symbol.for('尚硅谷');
console.log(s4 === s5)
/*不能与其他数据进行运算*/
/*usonb you are so niubility
* u：undefined
* s：string
* o：Object
* n：null，number
* b：boolean*/
