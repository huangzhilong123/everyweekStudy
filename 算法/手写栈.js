/*首先要明白什么是线性表跟非线性表：线性表就是数据排成一条线一样的结构，只有前后两个方向，如
* 数组，链表，队列，栈就是线性表,而非线性表：数据之间并不是简单的前后关系，如二叉树，堆，图等*/
/* 
push(element)：添加一个（或几个）新元素到栈顶。
pop()：移除栈顶的元素，同时返回被移除的元素。
peek()：返回栈顶的元素，不对栈做任何修改。
isEmpty()：如果栈里没有任何元素就返回 true，否则返回 false。
clear()：移除栈里的所有元素。
size()：返回栈里的元素个数。
 */
function Stack(){
    this.items = [];
    // 添加新元素到栈顶
    this.push = function(element){
        this.items.push(element)
    }
    // 移除栈顶元素，同时返回被移除的元素
    this.pop = function(){
        return this.items.pop()
    }
    // 查看栈顶元素
    this.peek = function(){
        return this.items[this.items.length - 1]
    }
    // 判断是否为空栈
    this.isEmpty = function(){
        return this.items.length === 0;
    }
    this.clear = function(){
        this.items = []
    }
    this.size = function(){
        return this.items.length
    }
    this.print = function(){
        console.log(this.items.toString())
    }
}