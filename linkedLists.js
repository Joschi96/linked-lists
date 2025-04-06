// Project learning about linked lists

// Class / factor, which will represent the full list
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length
    this.size = 0;
  }

  // Add new node containing value to the end of the list
  append(value) {
    const newNode = new Node();
    newNode.value = value;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }
  // Add new node containing value to the start of the list
  prepend(value) {
    const newNode = new Node();
    newNode.value = value;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  // size return the total number of nodes in the list
  size() {
    return this.size;
  }
  // getHead returns the first node in the list
  getHead() {
    return this.head;
  }
  // getTail returns the last node in the list
  getTail() {
    return this.tail;
  }
  // at(index) returns the node at the given index
  at(index) {
    if (index < 0 || index >= this.size) {
      throw new RangeError('Index out of bounds');
    }
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentIndex < index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode;
  }

  // pop removes the last node from the list
  pop() {
    if (!this.head) {
      return null;
    }
    if (this.head === this.tail) {
      const value = this.head.value;
      this.head = null;
      this.tail = null;
      this.size--;
      return value;
    }
    let currentNode = this.head;
    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next;
    }
    const value = this.tail.value;
    currentNode.next = null;
    this.tail = currentNode;
    this.size--;
    return value;
  }

  // contains(value) returns true if the list contains the value
  contains(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
  // find(value) returns the index of the first node containing the value
  find(value) {
    let currentNode = this.head;
    let index = 0;
    while (currentNode) {
      if (currentNode.value === value) {
        return index;
      }
      currentNode = currentNode.next;
      index++;
    }
    return -1;
  }
  // toString() returns a string representation of the list	
  toString() {
    let currentNode = this.head;
    let result = '';
    while (currentNode) {
      result += `(${currentNode.value}) -> `;
      currentNode = currentNode.next;
    }
    result += 'null';
    return result;
  }
}

// Class / factor, which will represent a single node
// containing a value property and a nextNode property, set both to null

class Node {
  constructor() {
    this.value = null;
    this.next = null;
  }

}

export default LinkedList;