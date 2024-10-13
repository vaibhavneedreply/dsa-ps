function Node(val) {
    this.val = val;
    this.next = null;
}

function LinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.append = append; // Insert element always at end
    this.prepend = prepend; // Insert element always at start
    this.insertAt = insertAt; // Insert element at item
    this.deleteLast = deleteLast;
    this.deleteFirst = deleteFirst;
    this.deleteAt = deleteAt;
    this.showList = showList;
    this.find = find; // search item
    this.findLast = findLast;
    this.findPrevious = findPrevious;
    this.reverse = reverse;
    this.insertionSort = insertionSort;
}

function append(val) {
    let currNode = this.head;
    let newNode = new Node(val);
    if(currNode === null) {
        this.head = newNode;
        this.tail = newNode;
        this.length++;
    } else {
        while(currNode.next !== null) {
            currNode = currNode.next;
        }
        currNode.next = newNode;
        this.tail = newNode;
        this.length++
    }
}

function prepend(val) {
    let currNode = this.head;
    let newNode = new Node(val);
    if(currNode === null) {
        this.head = newNode;
        this.tail = newNode;
        this.length++;
    } else {
        newNode.next = currNode;
        this.head = newNode;
        this.length++
    }
}

function insertAt(newVal, item) {
    const found = this.find(item);
    let newNode = new Node(newVal);
    let indexedNode = found.next;
    found.next = newNode;
    newNode.next = indexedNode;
    this.length++
}

function find(item) {
    let currNode = this.head;
    while(currNode !== null) {
        if(currNode.val === item) {
            return currNode;
        }
        currNode = currNode.next;
    }
    throw new Error('item not found');
}

function findLast() {
    let currNode = this.head;
    while(currNode.next.next !== null) {
        currNode = currNode.next;
    }
    return currNode;
}

function findPrevious(item) {
    let currNode = this.head;
    let prevNode = null;
    while(currNode !== null && currNode.val !== item) {
        prevNode = currNode;
        currNode = currNode.next;
    }
    if (currNode === null) {
        return null;
    }
    return prevNode;
}

function deleteFirst() {
    let currNode = this.head;
    if(currNode.val === null) throw new Error('empty linkedlist');
    this.head = currNode.next;
    this.length--
}

function deleteLast() {
    let currNode = this.head;
    if(currNode.val === null) throw new Error('empty linkedlist');
    let lastNode = this.findLast();
    lastNode.next = null;
    this.tail = lastNode;
    this.length--
}

function deleteAt(item) {
    let prevNode = this.findPrevious(item);
    let temp = prevNode.next.next;
    prevNode.next = temp;
    this.length--
}

function showList(list) {
    let arr = [];
    let currNode = list;
    while(currNode !== null) {
        arr.push(currNode.val);
        currNode = currNode.next;
    }
    return arr;
}

function reverse() {
    let prev = null;
    let currNode = this.head;
    while(currNode !== null) {
        let temp = currNode.next;
        currNode.next = prev;
        prev = currNode;
        currNode = temp;
        this.tail = currNode;
    }
    this.head = prev;
    return this.showList(prev);
}

function insertionSort() {
    if(!this.head) {
        return this.showList(this.head);
    }
    let sorted = this.head;
    let currNode = this.head.next;

    while(currNode !== null) {
        let nextNode = currNode.next;
        
        if(currNode.val < sorted.val) {
            currNode.next = sorted;
            sorted = currNode;
        } else {
            let preNode = findPrevious(currNode.val);
            currNode.next = preNode.next;
            preNode.next = currNode;
        }

        currNode = nextNode;  
    }
    this.head = sorted;
    return this.showList(this.head);
}

const list = new LinkedList();
// console.log(list, 'initial');
list.append(1);
list.append(3);
list.append(5);
list.prepend(2);
list.prepend(1);
list.prepend(3);
list.prepend(4);
list.prepend(9);
list.insertAt(6, 1);
console.log(list.showList(list.head));

list.deleteFirst();
list.deleteLast();
list.deleteAt(1)
console.log(list.showList(list.head));
console.log(list.reverse());
console.log(list.insertionSort());
