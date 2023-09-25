function instance_of(L,R){
    var prototype = R.prototype
    L = L.__proto__
    console.log('prototype',prototype)
    console.log('L',L)
    while(true){
        if(L === null){
            return false
        }
        if(prototype === L){
            return true
        }
        L = L.__proto__
    }
}

function myinstanceof(left,right){
    let proto = Object.getPrototypeOf(left);
    let prototype = right.prototype;
    while(true){
        if(!proto) return false;
        if(proto === prototype) return true;
        proto = Object.getPrototypeOf(proto)
    }
}
function myinstanceof(left,right){
    let proto = Object.getPrototypeOf(left);
    let prototype = right.prototype;
    while(true){
        if(!proto) return false;
        if(proto === prototype) reurn true;
        proto = Object.getPrototypeOf(proto)
    }
}
