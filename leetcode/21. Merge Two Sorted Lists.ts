// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

// Definition for singly-linked list.
// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.next = (next===undefined ? null : next)
//     }
// }

import { ListNode, LinkedList } from "../linkedList";

function mergeTwoLists(
    list1: ListNode | null,
    list2: ListNode | null
): ListNode | null {
    if (!list1 && list2) return list2;
    if (!list1 && !list2) return null;
    if (list1 && !list2) return list1;

    let leftList: ListNode; // leftList - список с меньшим первым значением
    let rightList: ListNode;
    // определяем какой список начинается с меньшего значения
    if (list1.val <= list2.val) {
        leftList = list1;
        rightList = list2;
    } else {
        leftList = list2;
        rightList = list1;
    }

    let leftListCurNode = leftList;
    let rightListCurNode = rightList;
    let leftListPrevNode: ListNode = null;
    while (leftListCurNode && rightListCurNode) {
        if (leftListCurNode.val < rightListCurNode.val) {
            if (leftListCurNode.next) {
                leftListPrevNode = leftListCurNode;
                leftListCurNode = leftListCurNode.next;
            } else {
                leftListCurNode.next = rightListCurNode;
                return leftList;
            }
        } else if (leftListCurNode.val >= rightListCurNode.val) {
            const intValRightListNode = rightListCurNode.next;
            const insertionNode = rightListCurNode;

            // вставляем элемент в список до (т.е. слева) текущего значения leftListCurNode.val
            if (leftListPrevNode) {
                leftListPrevNode.next = insertionNode;
            } else {
                // обрабатываем ситуацию для первого элемента в списке
                leftList = insertionNode;
            }

            insertionNode.next = leftListCurNode;
            leftListPrevNode = insertionNode;

            rightListCurNode = intValRightListNode;

            if (!leftListCurNode) {
            }
        }
        console.log(
            leftList.leftListToString(),
            `Текущее значение: ${leftListCurNode.val}`
        );
        console.log(rightListCurNode?.leftListToString());
        console.log("-------------------------");
    }

    return leftList;
}

const list1 = new LinkedList();
const list2 = new LinkedList();
list1.appendNodesFromArray([1, 2, 4]);
list2.appendNodesFromArray([1, 3, 4]);

// list2.appendNodesFromArray([0]);

// list1.appendNodesFromArray([2]);
// list2.appendNodesFromArray([1]);

// list1.appendNodesFromArray([-10, -9, -6, -4, 1, 9, 9]);
// list2.appendNodesFromArray([-5, -3, 0, 7, 8, 8]);
// результат: [-10,-9,-6,-5,-4,-3,0,1,7,8,8,9,9]

// list1.appendNodesFromArray([-9, -7, -3, -3, -1, 2, 3]);
// list2.appendNodesFromArray([-7, -7, -6, -6, -5, -3, 2, 4]);
// результат: [-9,-7,-7,-7,-6,-6,-5,-3,-3,-3,-1,2,2,3,4]

const list3 = mergeTwoLists(list1.head, list2.head);
console.log(list3?.leftListToString());
