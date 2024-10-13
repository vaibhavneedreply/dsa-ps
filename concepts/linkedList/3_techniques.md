# 1. Lead-Lag Pointers

Two pointers traverse a linked list at the same speed but at differnet intervals.

1 -> 2 -> 3 -> 4 -> 5  // First pointer starts from 1st and 2nd pointer from 3

|         |
    |           |   
          |             null

This technique is particularly useful if we need to do thing in two steps or wanted to maintain the access to the node we already traversed. 

```
Input: LinkedList of nodes rooted at L

lag = L
lead = L.next.next
while lead != NULL 
    lead = lead.next
    lag = lag.next
```


# 2. Fast-Slow Pointers

Two pointers traverse a Linked List at different speeds.

1 -> 2 -> 3 -> 4 -> 5 -> 6 (Start from node a)
fs
    s   f 
        s           f       
    
This technique is use full for cycle detection. 

```
Input: LinkedList of nodes rooted at L

fast = L
slow = L

while fast != NULL && fast.next != NULL
    fast = fast.next.next
    slow = slow.next
```

# 3. Linked List Reversal

The head of the linkedlist become tail and all pointer are reversed. 

```
Input: LinkedList of nodes rooted at L

prev = NULL
curr = L
next = L

while curr != NULL
    next = next.next
    curr.next = prev
    prev = curr
    curr = next

return prev
```