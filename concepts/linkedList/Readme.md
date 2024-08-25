# Shortcomings of Arrays

- In most of the language Array has fixed size so its hard to add new element when the last element is reached.
- Adding or deleting data from the array is also difficult because we have to move array elements up and down to reflect either an addition or deletion. However these problem doesn't come with JS since we can use split() function without performing additional array element access.
- The main problem with JS array is they are implemented as objects, causing them to be less efficient than arrays in other build in languages like c, c++ or java.
- The linked list can be used in almost every situation where a one-dimensional array is used, except when you need random access to the elements of a list. When random access is required, an array is the better data structure to use.

# Singly Linked List

- Collection of objects called nodes.
- Each node in Linked List have two part. left part is value and right part is link which is linked to successor node using a object reference.
- Marking the beginning of a linked list can be a problem. Many linked-list implementations include a special node, called the head, to denote the beginning of a linked list.

Head                    Tail
 ___ __      ___ __              
|   |  |    |   |  |                        
| 1 |  ---> | 2 |  ---> null             
|___|__|    |___|__|                 
 val  link   val  link


- <b>Inserting</b> a new node into a linked list is a very efficient task. To insert a new node, the link of the node before the inserted node (the previous node) is changed to point to the new node, and the new node’s link is set to the node the previous node was pointing to before the insertion.

- <b>Removing</b> an item from a linked list is also easy to do. The link of the node before the removed node is redirected to point to the node the removed node is pointing to, while also pointing the removed node to null, effectively taking the node out of the linked list.