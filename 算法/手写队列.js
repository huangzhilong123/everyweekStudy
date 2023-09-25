/* 
队列：
 队列是遵循 FIFO（First In First Out，先进先出）原则的一组有序的项。
 队列在尾部添加新元素，并从顶部移除元素。
 最新添加的元素必须排在队列的末尾。
 队列只有 入队 push() 和出队 pop()。
方法：
    enqueue(element)：向队列尾部添加新项。
    dequeue()：移除队列的第一项，并返回被移除的元素。
    front()：返回队列中第一个元素，队列不做任何变动。
    isEmpty()：如果队列中不包含任何元素，返回 true，否则返回 false。
    size()：返回队列包含的元素个数，与数组的 length 属性类似。
    print()：打印队列中的元素。
    clear()：清空整个队列。

定义：优先队列中元素的添加和移除是依赖优先级。
优先队列分为两类：最小优先队列，最大优先队列
*/
function Queue(){
    this.items = [];
    // 向队列尾部添加元素
    this.enqueue = function(element){
        this.items.push(element)
    };
    // 移除队列的第一个元素，并返回被移除的元素
    this.dequeue = function(){
        return this.items.shift()
    }
    // 返回队列的第一个元素
    this.front = function(){
        return this.items[0];
    }
    // 判断是否为空队列
    this.isEmpty = function(){
        return this.items.length === 0;
    }
    // 获取队列的长度
    this.size = function(){
        return this.items.length
    }
    // 清空队列
    this.clear = function(){
        this.items = []
    }
    // 打印队列
    this.print = function(){
        console.log(this.items.toString())
    }
}

// 定义最小优先队列
function MinPriorityQueue(){
 
    this.items = [];
    // 向队列尾部添加元素
    // this.enqueue = function(element){
    //     this.items.push(element)
    // };
    this.enqueue = enqueue;
    this.print = print;
    // 移除队列的第一个元素，并返回被移除的元素
    this.dequeue = function(){
        return this.items.shift()
    }
    // 返回队列的第一个元素
    this.front = function(){
        return this.items[0];
    }
    // 判断是否为空队列
    this.isEmpty = function(){
        return this.items.length === 0;
    }
    // 获取队列的长度
    this.size = function(){
        return this.items.length
    }
    // 清空队列
    this.clear = function(){
        this.items = []
    }
    // 打印队列
    // this.print = function(){
    //     console.log(this.items.toString())
    // }

// 重写enqueue方法
    function enqueue(element,priority){
        var queueElement = {
            element:element,
            priority:priority
        }
        if(this.isEmpty()){
            this.items.push(queueElement)
        }else{
            var added = false;
            for(var i = 0;i<this.size();i++){
                // 改大小就变成最大优先队列了
                if(queueElement.priority < this.items[i].priority){
                    this.items.splice(i,0,queueElement);
                    added = true;
                    break;
                }
            }  
            if(!added){
                this.items.push(queueElement)
            }

        }
      
    }
    // 重写print方法
    function print(){
        var strArr = [];
        strArr = this.items.map(function(item){
            return `${item.element}->${item.priority}`
        });
        console.log(strArr.toString())
    }
}

