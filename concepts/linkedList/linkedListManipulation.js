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
    this.find = find; // search item
    this.deleteLast = deleteLast;
    this.deleteFirst = deleteFirst;
    this.deleteAt = deleteAt;
    this.showList = showList;
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

function deleteFirst() {
    let currNode = this.head;
    if(currNode.val === null) throw new Error('empty linkedlist');
    this.head = currNode.next;
    this.length--
}

function deleteLast() {
    let currNode = this.head;
    if(currNode.val === null) throw new Error('empty linkedlist');
    while(currNode !== null) {
        currNode = currNode.next;
    }
    console.log(currNode, 'in del')
    this.length--
}

function deleteAt(item) {

}

function showList() {
    let arr = [];
    let currNode = this.head;
    while(currNode !== null) {
        arr.push(currNode.val);
        currNode = currNode.next;
    }
    return arr;
}

const list = new LinkedList();
// console.log(list, 'initial');
list.append(1);
list.append(3);
list.append(5);
list.prepend(2);
list.prepend(3);
list.prepend(4);
list.insertAt(6, 1);
console.log(list.showList());

list.deleteFirst();
list.deleteLast();
// list.deleteAt(3)
console.log(list.showList());
