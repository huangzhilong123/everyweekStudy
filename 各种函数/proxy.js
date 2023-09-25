let onWatch = (obj, setBind, getLogger) => {
    let handler = {
        get(target, property, recerver) {
            getLogger(target, property)
            return Reflect.get(target, property, recerver)
        },
        set(target, property, value, receiver) {
            setBind(value, property)
            return Reflect.set(target, property, value)
        }
    }
    return new Proxy(obj, handler)
}
let obj = {
    a: 1
}
let p = onWatch(obj, (v, property) => {
    console.log(`监听到属性${property}改变为${v}`)
}, (target, property) => {
    console.log(`'${property}' = ${target[property]}`)
})
p.a = 3
console.log('fje', p.a)



function myInstanceof(left, right) {
    let proto = Object.getPrototypeOf(left);
    let prototype = right.prototype;
    while (true) {
        if (!proto) return false;
        if (proto === prototype) return true;
        proto = Object.getPrototypeOf(proto)
    }
}

