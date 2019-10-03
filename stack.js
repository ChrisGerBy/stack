import Node from './node';

class Stack {
    constructor() {
        this.top = null;
    }

    push(item) {
        let node = new Node(item);
        if (!this.top) {
            this.top = node;
        } else {
            node.next = this.top;
            this.top = node;
        }
    }

    pop() {                     // return the deleted element
        if (!this.top) {
            throw new Error('Stack is empty.');
        } else {
            let deletedItem = this.top;
            this.top = this.top.next;
            return deletedItem.data;
        }
    }

    length() {
        if (!this.top) {
            throw new Error('Stack is empty.');
        } else {
            let current = this.top;
            let count = 0;
            while(current) {
                current = current.next;
                count ++;
            }
            return count;
        }
    }

    isEmpty() {
        if (this.top) {
            return false;
        } else {
            return true;
        }
    }

    isFull() {
        if (this.top) {
            return true;
        } else {
            return false;
        }
    }

    peek() {
        if (this.top) {
            return this.top;
        } else {
            throw new Error('Stack is empty.');
        }
    }

    search(item) {                             // true or false
        if (!this.top) {
            throw new Error('Stack is empty.');
        } else {
            let current = this.top;
            while (current) {
                if (current.data === item) {
                    return true;
                } else {
                    current = current.next;
                }
            }
        }
    }

    reverse() {
        let current = this.top;
        let prev = null;
        while (current) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.top = prev;
    }
}

export default Stack;