const node = (val) => ({
    value: val,
    next: null
})

const createLinkedList = () => ({
    head: null,
    tail: null
});

const add = (list, val) => {
    const newNode = node(val);
    if(!list.head) {
        list.head = newNode;
        list.tail = newNode;
        return newNode
    }
    list.tail.next = newNode;
    list.tail = newNode;
    return newNode;
}

// One of the way to solve the pailndrom is reverse the list and verify after reverse both the list are equal
// Below solution is using technique where only half list need reverse
    // 1. Use fast-slow to find the midpoint of the linkedList
    // 2. Use Linked-List Reversal on the second half of the linked list
    // 3. Use Lead-Lag to determine if the linkedlist is a palindrome.

const isPalindrome = (list) => {
    if(!list.head || !list.head.next) return true;

    let fast = list.head;
    let slow = list.head;
    // Get middle
    while(fast && fast.next) { // Lag will be on middle
       slow = slow.next
       fast = fast.next.next
    }
    // Reverse the second half of the list
    let prev = null;
    while(slow) {
        nextNode = slow.next;
        slow.next = prev;
        prev = slow;
        slow = nextNode;
    }
    
    let lag = list.head;
    let lead = prev;

    while(lead) {
        if(lag.value !== lead.value) {
            return false
        }
        lag = lag.next
        lead = lead.next
    }
    return true;

    // console.log(JSON.stringify(prev));
}


const myLinkedList = createLinkedList();

add(myLinkedList, 'A');
add(myLinkedList, 'B');
add(myLinkedList, 'C');
add(myLinkedList, 'D');
add(myLinkedList, 'D');
add(myLinkedList, 'C');
add(myLinkedList, 'B');
add(myLinkedList, 'A');

console.log(JSON.stringify(myLinkedList), 'sdfs');
console.log(JSON.stringify(isPalindrome(myLinkedList)));