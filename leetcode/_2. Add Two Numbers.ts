// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

// export class ListNode {
//     val: number;
//     next: ListNode | null;
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = val === undefined ? 0 : val;
//         this.next = next === undefined ? null : next;
//     }
// }

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

import { LinkedList, ListNode } from "../linkedList";

function addTwoNumbers(
    l1: ListNode | null,
    l2: ListNode | null
): ListNode | null {
    const getNumberFromList = (listHead: ListNode): number => {
        let rate = 0;
        let result = 0;
        let curNode = listHead;
        while (curNode) {
            result += curNode.val * 10 ** rate;
            curNode = curNode.next;
            rate++;
        }

        return result;
    };

    let number1: number = getNumberFromList(l1);
    let number2: number = getNumberFromList(l2);
    let number3: number = number1 + number2;

    // решение не подходит для чисел более 2**32, поэтому нужно складывать вручную
    const arr: string[] = number3.toString().split("").reverse();

    const l3Head: ListNode = new ListNode(+arr[0]);
    let curNode: ListNode = l3Head;
    arr.forEach((val, index, arr) => {
        const nextNodeVal = index < arr.length - 1 ? +arr[index + 1] : null;
        if (nextNodeVal !== null) {
            curNode.next = new ListNode(nextNodeVal);
            curNode = curNode.next;
        }
    });

    return l3Head;
}

const list1 = new LinkedList();
const list2 = new LinkedList();
const list3 = new LinkedList();
list1.appendNodesFromArray([
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1,
]);
list2.appendNodesFromArray([5, 6, 4]);
list3.appendNodesFromArray([
    6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1,
]);
console.log(addTwoNumbers(list1.head, list2.head).leftListToString());

test("[2,4,3] + [5,6,4] = [7,0,8]", () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();
    const list3 = new LinkedList();
    list1.appendNodesFromArray([2, 4, 3]);
    list2.appendNodesFromArray([5, 6, 4]);
    list3.appendNodesFromArray([7, 0, 8]);

    expect(addTwoNumbers(list1.head, list2.head)).toEqual(list3.head);
});

test("[0] + [0] = [0]", () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();
    const list3 = new LinkedList();
    list1.appendNodesFromArray([0]);
    list2.appendNodesFromArray([0]);
    list3.appendNodesFromArray([0]);

    expect(addTwoNumbers(list1.head, list2.head)).toEqual(list3.head);
});

test("[9,9,9,9,9,9,9] + [9,9,9,9] = [8,9,9,9,0,0,0,1]", () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();
    const list3 = new LinkedList();
    list1.appendNodesFromArray([9, 9, 9, 9, 9, 9, 9]);
    list2.appendNodesFromArray([9, 9, 9, 9]);
    list3.appendNodesFromArray([8, 9, 9, 9, 0, 0, 0, 1]);

    expect(addTwoNumbers(list1.head, list2.head)).toEqual(list3.head);
});
