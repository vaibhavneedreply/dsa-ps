const node = val => ({
        value: val,
        next: null
});

const createLinkedList = () => ({
    head: null,
    tail: null,
    length: 0
});


const prepend = (list, val) => {
    const newNode = node(val);

    if(!list.head) {
        list.head = newNode;
        list.tail = newNode;
        list.length++
        return newNode;
    }

    newNode.next = list.head;
    list.head = newNode;
    list.length++
    return newNode;
};

const append = (list, val) => {
    const newNode = node(val);

    if(!list.head) {
        list.head = newNode;
        list.tail = newNode;
        list.length++
        return newNode;
    }

    list.tail.next = newNode;
    list.tail = newNode
    list.length++
    return newNode;
};

const find = (list, index) => {
    let curIndex = 0;
    if(index < 0 || index > list.length - 1) {
        console.error("Invalid index");
        return;
    }
    let curr = list.head;
    while(curIndex < index) {
        curr = curr.next
        curIndex++
    }
    return curr;
};


const insert = (list, val, index) => {
    const newNode = node(val);

    let indexedNode = find(list, index);
    
    let temp = indexedNode.next;
    indexedNode.next = newNode;
    newNode.next = temp;
    list.length++
    return newNode;
};

const remove = (list, index) => {
    let indexedNode = find(list, index - 1);
    let temp = indexedNode.next.next;
    indexedNode.next = temp;
    return indexedNode;
};


const myLinkedList = createLinkedList();

prepend(myLinkedList, 5);
prepend(myLinkedList, 20);
append(myLinkedList, 15);
append(myLinkedList, 30);
insert(myLinkedList, 40, 0);
remove(myLinkedList, 2);

console.log(JSON.stringify(myLinkedList.head), 'myLinkedList')
console.log(myLinkedList.length, 'myLinkedList')
// console.log(find(myLinkedList, 2));
// console.log(find(myLinkedList, 3));

