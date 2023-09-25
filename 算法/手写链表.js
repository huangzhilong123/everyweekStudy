/* 
链表：
    链表存储有序的元素集合，跟数组不同的是，链表中的元素在内存中并不是连续放置的，它是通过指针将零散的内存块串连起来的
    每个元素由一个存储元素本身的节点和一个指向下一个元素的引用（也称指针或链接）组成
    特点：
        1.不支持随机访问，如果要找到特定的项，只能从头开始遍历，直到找到为止，所以访问的时间复杂度为O(n)
        2.高效的插入和删除
        链表中插入或删除一个数据，我们不需要为了保持内存的连续性而搬移结点，因为链表的存储空间本身就不是连续的，只需要考虑相邻结点的指针改变
        所以在链表中插入和删除一个数据是非常快速的，时间复杂度为O(1)
    常见的链表结构：
        1.单链表
        2.双向链表
        3.循环链表

单向链表操作：
append(element)：尾部添加元素。
insert(position, element)：特定位置插入一个新的项。
removeAt(position)：特定位置移除一项。
remove(element)：移除一项。
indexOf(element)：返回元素在链表中的索引。如果链表中没有该元素则返回 -1。
isEmpty()：如果链表中不包含任何元素，返回 true，如果链表长度大于 0，返回 false。
size()：返回链表包含的元素个数，与数组的 length 属性类似。
getHead()：返回链表的第一个元素。
toString()：由于链表使用了 Node 类，就需要重写继承自 JavaScript 对象默认的 toString() 方法，让其只输出元素的值。
print()：打印链表的所有元素。
*/
function SinglyLinkedList(){
    // 节点
    function Node(element){
        this.element = element;//当前节点的元素
        this.next = null;//下一个节点指针
    }
    var length = 0;//链表的长度
    var head = null;//链表的头部节点
    // 向链表尾部添加一个新的节点
    this.append = function(element){
        var node = new Node(element);
        var currentNode = head;
        // 判断是否为空链表
        if(head === null){
            //是空链表，就把当前节点作为头部节点
            head = node;
        }else{
            //从head开始一直找到最后一个node
            while(currentNode.next){
                // 后面还有node
                currentNode = currentNode.next;
            }
            // 把当前节点的next指针指向新的节点
            currentNode.next = node
        }
        // 链表的长度加1
        length++;
    }
    // 向链表特定位置插入一个新节点
    this.insert = function(position,element){
        if(position < 0 || position > length){
            //越界
            return false
        }else{
            var node = new Node(element);
            var index = 0;
            var currentNode = head;
            var previousNode;
            //在最前插入节点
            if(position === 0){
                node.next = currentNode;
                head = node;
            }else{
                // 循环找到位置
                while(index<position){
                    index++;
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
                // 把前一个节点的指针指向新节点，保持连续性
                previousNode.next = node;
                node.next = currentNode;
            }
            length++;
            return true;
        }
    }

    	// 从链表的特定位置移除一项
	this.removeAt = function(position) {
		if ((position < 0 && position >= length) || length === 0) {
			// 越界
			return false;
		} else {
			var currentNode = head;
			var index = 0;
			var previousNode;

			if (position === 0) {
				head = currentNode.next;
			} else {
				// 循环找到位置
				while (index < position) {
					index++;
					previousNode = currentNode;
					currentNode = currentNode.next;
				}
				// 把当前节点的 next 指针 指向 当前节点的 next 指针，即是 删除了当前节点
				previousNode.next = currentNode.next;
			}

			length--;

			return true;
		}
	};

    // 从链表中移除指定项
    this.remove = function(element){
        var index = this.indexOf(element);
        return this.removeAt(index)
    }
    //返回元素在链表的索引，如果链表中没有该元素则返回-1
    this.indexOf = function(element){
        var currentNode = head;
        var index = 0;
        while(currentNode){
            if(currentNode.element === element){
                return index;
            }
            index++;
            currentNode = currentNode.next;
        }
        return -1;
    }
    //如果链表中不包含任何元素，返回true，如果链表长度大于0，返回false
    this.isEmpty = function(){
        return length === 0;
    }
    //返回链表包含的元素个数，与数组的length属性类似
    this.size = function(){
        return length;
    }
    //获取链表头部元素
    this.getHead = function(){
        return head.element;
    }
    //由于链表使用了Node类，就需要重写继承自JavaScript对象默认的toString()方法，让其只输出元素的值
    this.toString = function(){
        var currentNode = head;
        var string = '';
        while(currentNode){
            string += ',' + currentNode.element;
            currentNode = currentNode.next;
        }
        return string.slice(1);
    }
    //打印链表数据
    this.print = function(){
        console.log(this.toString())
    }
    //获取整个链表
    this.list = function(){
        console.log('head:',head);
        return head;
    }
}