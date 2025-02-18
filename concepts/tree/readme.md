# The tree data structure 

- A tree consist of `nodes` with a parent-child relationship.
- Each node has a `parent` (except for the first node at the top) and zero or more `children`.
- The top node of a tree called `root`.
- Two type of nodes
    1. internal nodes: A node with atleast one child
    2. external or a leaf nodes: A node with no children
- A node can have ancestors and descendants
- Subtree: Consist of a node and its descendants
- The depth of the node consists of the number of ancestors
- The hight of the tree consists of the maximum depth of any node. A tree can also be broken down into levels. The root level is on level 0 and its children are on level 1 and so on. 

# The binary and binary search trees

- A node in a binary tree has two children at most: one left and one right child.
- This defination allows us to write more efficient algorithms to insert, delete and search nodes to/from a tree.
- A BST (Binary search tree) is a binary tree, but it only allow us to store nodes with lesser values to left hand side and node with greater value on the right-hand side.

  --  --  --
| l | 1 | r |      
  --  --  --
left key right

- The following diagram exemplifies how a binary search tree (BST) is organized in terms of the data structure:
![alt text](image.png)
- just as linked list, we will work with pointers again to represent the connection between the nodes (called edges in the tree).
- When working with doubly linked list each node had two pointer, one indicate next node and another to the previous node. We will use the same concent in tree as well. 
- However, one pointer will point to the left child, and the other one will point to the right child. For this reason, we will need a Node class that will represent each node of the tree.
-  A key is what a tree node is known as in tree terminology.

Lets discuss on different operation on BST:
1. Insert: 
    - To insert a node into a tree, there are two steps that we need to follow. 
    - First step is verifying whether the insertion is a special case. The special case for the BST is if the node we are trying to add is the first one in the tree. If it is, all we have to do is point the root to this new node ({2}) by creating an instance of the Node class and assigning it to the root property. Because of the Node constructor properties, we only need to pass the value we want to add to the tree (key), and its left and right pointers will have a null value automatically.
    - The second step is to add the node to a different position than the root. In this case, we will need a helper ({3}) method to help us to do this, which is declared as follows: (Follow binarySearchTree.js)
    - The insertNode method will help us find out where the correct place to insert a new node is. The following list describes what this method does:
        - If the tree is not empty, we need to find a place to add a new node. For this reason, we will call the insertNode method by passing the root node and the key we want to insert as parameters 
        - If the key is lesser the the current node (which is root) then we need to check the left child of the node. if left child is empty inseart the key else call insert node recursivly to get to the next descend. 
        - If the key is greater than the current node and no right then we will insert the new key as the right child. If not we will need to call the insertNode recursivly, but the new node to be compared will be the right child.


# Refrences:
https://learning.oreilly.com/library/view/learning-javascript-data/9781788623872/6e584677-7699-473f-9e42-2732ac82314e.xhtml