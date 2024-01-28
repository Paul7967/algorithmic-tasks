class LinkedListNode {
    constructor(val: typeof LinkedListNode.prototype.val, next = null) {
        this.val = val;
        this.next = null;
    }

    val: number;
    next: {} | null;

    toString() {
        return `${this.val}`;
    }
}

class LinkedList {
    head: LinkedListNode | null;
    tail: LinkedListNode | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(val: typeof LinkedListNode.prototype.val) {
        const newNode = new LinkedListNode(val);

        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;
    }
}

export const makeSingleLinkedListFromArray = (inArr: []) => {
    const result = {};
};

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
console.log(list);
