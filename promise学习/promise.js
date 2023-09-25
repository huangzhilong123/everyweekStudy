class Promise{
    constructor(executor) {
        /*添加属性*/
        this.PromiseState = 'pending'
        this.PromiseResult = null
        /*声明一个属性*/
        this.callbacks = []
        /*保存实例对象的this值*/
        const self = this
        function resolve(data){
            /* 1.修改对象状态（promiseState）

            * 2，设置对象结果值(promiseResult)
            * */
            /*判断状态*/
            if(self.PromiseState != 'pending') return;
            self.PromiseState = 'fulfilled'
            self.PromiseResult = data;
            /*调用成功的回调函数
            * */
            self.callbacks.forEach(item => {
                item.onResolved(data)
            })

        }
        function reject(data){
            /*判断状态*/
            if(self.PromiseState != 'pending') return;
            self.PromiseState = 'rejected'
            self.PromiseResult = data;
            setTimeout(()=>{
                self.callbacks.forEach(item => {
                    item.onRjected(data)
                })
            })
        }
        try {
            /*同步调用 执行器函数*/
            executor(resolve,reject)
        }catch (e){
            /*修改promise对象状态为reject*/
            reject(e)
        }
    }
    then(onResolved,onRjected){
        /*调用回调函数*/
        const self = this;
        /*判断回调函数参数*/
        if(typeof onRjected != 'function'){
            onRjected = reason =>{
                throw reason;
            }
        }
        if(typeof onResolved != 'function'){
            onResolved = value =>value;
        }
        return new Promise((resolve,reject)=>{
            /*封装函数*/
            function callback(type){
                try {
                    /*获取函数的回调结果*/
                    let result = type(this.PromiseResult);
                    if(result instanceof Promise){
                        /*如果是promise对象*/
                        result.then(v=>{
                            resolve(v)
                        },r=>{
                            reject(r)
                        })
                    }else{
                        /*结果对象状态为成功*/
                        resolve(result)
                    }

                }catch (e){
                    reject(e)
                }
            }
            if(this.PromiseState === 'fulfilled'){
                setTimeout(()=>{
                    callback(onResolved)
                })
            }
            if(this.PromiseState === 'rejected'){
                setTimeout(()=>{
                    callback(onRjected)
                })

            }
            if(this.PromiseState === 'pending'){
                /*保存回调函数*/
                this.callbacks.push({
                    onResolved:function (){
                        /*执行成功的回调函数*/
                        callback(onResolved)
                    },
                    onRjected:function (){
                        callback(onRjected)
                    }
                })
            }
        })

    }
    catch(onRejected){
        return this.then(undefined,onRejected)
    }
    static resolve(value){
        return new Promise((resolve,reject)=>{
            if(value instanceof Promise){
                value.then(v=>{
                    resolve(v);
                },r=>{
                    reject(r);
                })
            }else{
                resolve(value)
            }
        })
    }
    static reject(reason){
        return new Promise((resolve,reject)=>{
            reject(reason)
        })
    }
    static all(promises){
        return new Promise((resolve,reject)=>{
            /*遍历*/
            for(let i=0;i<promises.length;i++){
                /*声明变量*/
                let count = 0;
                let arr = [];
                promises[i].then(v=>{
                    /*得知对象的状态*/
                    /*每个promise对象都成功*/
                    /*将当前promise对象成功的结果存入到数组中*/
                    count++;
                    arr[i] = v;
                    if(count === promises.length){
                        resolve(arr)
                    }
                },r=>{

                })
            }
        })
    }
    static race(promises){
        return new Promise((resolve,reject)=>{
            for(let i=0;i<promises.length;i++){
                promises[i].then(v=>{
                    resolve(v);
                },r=>{
                    reject(r)
                })
            }
        })
    }
}


function Promise(executor){
    /*添加属性*/
    this.PromiseState = 'pending'
    this.PromiseResult = null
    /*声明一个属性*/
    this.callbacks = []
    /*保存实例对象的this值*/
    const self = this
    function resolve(data){
    /* 1.修改对象状态（promiseState）

    * 2，设置对象结果值(promiseResult)
    * */
        /*判断状态*/
        if(self.PromiseState != 'pending') return;
        self.PromiseState = 'fulfilled'
        self.PromiseResult = data;
        /*调用成功的回调函数
        * */
        self.callbacks.forEach(item => {
            item.onResolved(data)
        })

    }
    function reject(data){
        /*判断状态*/
        if(self.PromiseState != 'pending') return;
        self.PromiseState = 'rejected'
        self.PromiseResult = data;
        setTimeout(()=>{
            self.callbacks.forEach(item => {
                item.onRjected(data)
            })
        })
    }
    try {
        /*同步调用 执行器函数*/
        executor(resolve,reject)
    }catch (e){
        /*修改promise对象状态为reject*/
        reject(e)
    }
}
/*添加then方法*/
Promise.prototype.then = function (onResolved,onRjected){
/*调用回调函数*/
    const self = this;
    /*判断回调函数参数*/
    if(typeof onRjected != 'function'){
        onRjected = reason =>{
            throw reason;
        }
    }
    if(typeof onResolved != 'function'){
        onResolved = value =>value;
    }
    return new Promise((resolve,reject)=>{
        /*封装函数*/
        function callback(type){
            try {
                /*获取函数的回调结果*/
                let result = type(this.PromiseResult);
                if(result instanceof Promise){
                    /*如果是promise对象*/
                    result.then(v=>{
                        resolve(v)
                    },r=>{
                        reject(r)
                    })
                }else{
                    /*结果对象状态为成功*/
                    resolve(result)
                }

            }catch (e){
                reject(e)
            }
        }
        if(this.PromiseState === 'fulfilled'){
            setTimeout(()=>{
                callback(onResolved)
            })
        }
        if(this.PromiseState === 'rejected'){
            setTimeout(()=>{
                callback(onRjected)
            })

        }
        if(this.PromiseState === 'pending'){
            /*保存回调函数*/
            this.callbacks.push({
                onResolved:function (){
                    /*执行成功的回调函数*/
                 callback(onResolved)
                },
                onRjected:function (){
                 callback(onRjected)
                }
            })
        }
    })

}
Promise.prototype.catch = function (onRejected){
    return this.then(undefined,onRejected)
}
/*添加resolve对象*/
Promise.resolve = function (value){
    return new Promise((resolve,reject)=>{
        if(value instanceof Promise){
            value.then(v=>{
                resolve(v);
            },r=>{
                reject(r);
            })
        }else{
            resolve(value)
        }
    })
}
/*添加reject方法*/
Promise.reject = function (reason){
   return new Promise((resolve,reject)=>{
       reject(reason)
   })
}
Promise.all = function (promises){
    return new Promise((resolve,reject)=>{
        /*遍历*/
        for(let i=0;i<promises.length;i++){
            /*声明变量*/
            let count = 0;
            let arr = [];
            promises[i].then(v=>{
                /*得知对象的状态*/
                /*每个promise对象都成功*/
                /*将当前promise对象成功的结果存入到数组中*/
                count++;
                arr[i] = v;
                if(count === promises.length){
                    resolve(arr)
                }
            },r=>{

            })
        }
    })
}
Promise.race = function (promises){
    return new Promise((resolve,reject)=>{
        for(let i=0;i<promises.length;i++){
            promises[i].then(v=>{
                resolve(v);
            },r=>{
                reject(r)
            })
        }
    })
}
