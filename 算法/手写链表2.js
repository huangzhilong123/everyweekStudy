function SinglyLinkedList(){
    function Node(element){
        this.element = element;
        this.next = null
    }
  var length = 0;
  var head = null;
  this.append = function(element){
        var node = new Node(element);
        var currentNode = head;
        if(head === null){
            head = node;
        }else{
            while(currentNode.next){
                currentNode = currentNode.next;
            }
            currentNode.next = node
        }
        length++;
  }
  this.insert = function(position,element){
    if(position < 0 || position > length){
        return false;
    }else{
        var node = new Node(element);
        var index = 0;
        var currentNode = head;
        var previousNode;
        //在最前插入节点
        if(position === 0){
            node.next = currentNode;
            head = node;
        }
    }
  }
}