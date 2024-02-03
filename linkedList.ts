export class ListNode {
    constructor(
        val?: typeof ListNode.prototype.val,
        next: ListNode | null = null
    ) {
        this.val = val;
        this.next = next;
    }

    val: number;
    next: ListNode | null;

    toString() {
        return `${this.val}`;
    }

    leftListToString() {
        let result = "";
        let currentNode: ListNode = this;

        while (currentNode) {
            result += currentNode.val;
            if (currentNode.next) result += ", ";
            currentNode = currentNode.next;
        }

        return result;
    }
}

export class LinkedList {
    head: ListNode | null;
    tail: ListNode | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(val: typeof ListNode.prototype.val) {
        const newNode = new ListNode(val);

        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;

        return this;
    }

    appendNodesFromArray(valArr: (typeof ListNode.prototype.val)[]) {
        valArr.forEach((val) => this.append(val));
    }

    toArray() {
        const nodes = [];

        let currentNode: ListNode = this.head;

        while (currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }

        return nodes;
    }

    toString() {
        return this.toArray()
            .map((node: ListNode) => node.toString())
            .toString();
    }
}

// const list = new LinkedList();

// list.append(1).append(2).append(3).append(4).append(5);
// console.log(list.toString());
// list.appendNodesFromArray([6, 7, 8, 9]);
// console.log(list.toString());
