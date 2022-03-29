class Node {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  traverse(position) {
    let pointer = this.head

    for (let i = 0; i < position - 1 && pointer?.next !== null; i++) pointer = pointer.next

    return pointer
  }

  insert(value, position) {
    if (!this.head) {
      let node = new Node(value, null)
      this.head = node
    } else {
      let pointer = this.traverse(position)

      let node = new Node(value, pointer.next)
      pointer.next = node
    }
  }

  delete(position) {
    let pointer = this.traverse(position - 1)

    pointer.next = pointer.next.next
  }

  print() {
    let pointer = this.head

    while (pointer !== null) {
      console.log(this.temp.value)
      pointer = pointer.next
    }
  }
}
