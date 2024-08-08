class Node {
    constructor(value) {
        this.head = value;
        this.next = null;
    }
}

class MyLinkedList {
    createLinkedList() {
        return {
            head: null,
            next: null,
            length: 0
        }
    }

    prepend(mylist, value) {
        const newNode = new Node(value);

        if(!mylist.head) {
            mylist.head = newNode;
            mylist.tail = newNode;
            mylist.length++
            return mylist;
        }

        newNode.next = mylist.head;
        mylist.head = newNode;
        mylist.length++
        return mylist;
    }

    append(mylist, value) {
        const newNode = new Node(value);

        if(!mylist.head) {
            mylist.head = newNode;
            mylist.tail = newNode;
            mylist.length++
            return mylist;
        }
        mylist.tail.next = newNode;
        mylist.tail = newNode
        mylist.length++
        return mylist;
    }

    find(list, index) {
        let currIndex = 0;
        if(index < 0 || index > list.length - 1) {
            console.error("Invalid index");
            return;
        }
        let curr = list.head;
        while(currIndex < index) {
            curr = curr.next;
            currIndex++
        }
        return curr;
    }

    insert(list, value, index) {
        const newNode = new Node(value);

        const indexedNode = this.find(list, index);
        const temp = indexedNode.next;
        indexedNode.next = newNode;
        newNode.next = temp;
        list.length++
        return newNode; 
    }

    delete(list, index) {
        const indexedNode = this.find(list, index - 1);
        const temp = indexedNode.next.next;
        indexedNode.next = temp;
        return indexedNode;
    }
}

const myLinkedList = new MyLinkedList();


const mylist = myLinkedList.createLinkedList();
myLinkedList.prepend(mylist, 10);
myLinkedList.prepend(mylist, 20);
myLinkedList.append(mylist, 30);
myLinkedList.insert(mylist, 40, 0);
myLinkedList.delete(mylist, 2);

console.log(mylist, 'here');

// console.log(myLinkedList.find(mylist, 0));
