const reverseLinkedList = (list) => {
    let prev = null;
    let curr = list.head;

    while(curr !== null) {
        temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp
    }
    console.log(JSON.stringify(prev))
    return prev;
};

const list = { head: { value: 5, next: { value: 15, next: { value: 10, next: { value: 2, next: null } } } }, tail: { value: 2, next: null } };

reverseLinkedList(list);