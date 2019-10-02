class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items[this.items.length] = item;
        return this;
    }

    pop() {
        if (this.items.length) {
            this.items.splice(this.items.length - 1);
        }
        return this;
    }

    length() {
        return this.items.length;
    }

    isEmpty() {
        if (this.items.length) {
            return false;
        } else {
            return true;
        }
    }

    isFull() {
        if (this.items.length) {
            return true;
        } else {
            return false;
        }
    }

    peek() {
        if (this.items.length) {
            return this.items[this.items.length - 1];
        }
    }

    clear() {
        this.items.length = 0;
        return this;
    }

    printStack() {
            if (!this.items.length) {
                return 'The Stack is empty.'
            } else {
                let printStackString = '';
                for (let i = 0; i < this.items.length; i++) {
                    printStackString += `Element ${i + 1} is ${this.items[i]} \n`;
                }
                return printStackString;
            }
    }
}

export default Stack;