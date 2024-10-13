class NewNode {
  value: number | null;
  next: NewNode | null;
  back: NewNode | null;

  constructor(value: number | null) {
    this.value = value;
    this.next = null;
    this.back = null;
  }
  toJSON() {
    return {
      value: this.value,
      next: this.next ? this.next.value : null,
      back: this.back ? this.back.value : null
    };
  }
}

class DoublyLinkedList {
  head: NewNode | null;

  constructor() {
    this.head = null;
  }

  prepend(val: number): void {
    let newNode = new NewNode(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head.back = newNode;
      this.head = newNode;
    }
  }

  append(val: number): void {
    let newNode = new NewNode(val);
    if(!this.head) {
        this.head = newNode;
    } else {
        let curr: NewNode = this.head;
        while(curr.next !== null) {
            curr = curr.next;
        }
        curr.next = newNode;
        newNode.back = curr;
    }
  }

  toJSON(): Array<{ value: number | null; next: number | null; back: number | null }> {
    const nodes: Array<{value: number | null; next: number | null;  back: number | null}> = [];
    let current = this.head;
    while (current) {
      nodes.push(current.toJSON());
      current = current.next;
    }
    return nodes;
  }
}

const list1 = new DoublyLinkedList();

list1.append(1);
list1.prepend(2);
list1.append(5);
list1.prepend(1);
list1.prepend(3);
list1.append(4);

console.log(JSON.stringify(list1, null, 2));
