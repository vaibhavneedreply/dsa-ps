class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currNode = this.root;
      while (true) {
        if (value < currNode.value) {
          // Left
          if (!currNode.left) {
            currNode.left = newNode;
            return this;
          }
          currNode = currNode.left;
        } else {
          // right
          if (!currNode.right) {
            currNode.right = newNode;
            return this;
          }
          currNode = currNode.right;
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currNode = this.root;
    while (currNode) {
      if (value === currNode.value) {
        return currNode;
      } else if (value < currNode.value) {
        currNode = currNode.left;
      } else if( value > currNode.value) {
        currNode = currNode.right;
      }
    }
    return false;
  }
}

const tree = new BinarySearchTree();

console.log(tree.lookup(9), "lookup");
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(JSON.stringify(tree));

console.log(tree.lookup(6), "lookup");
console.log(tree.lookup(1), "lookup");
console.log(tree.lookup(170), "lookup");
console.log(tree.lookup(10), "lookup");