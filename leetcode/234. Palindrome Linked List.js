// Given the head of a singly linked list, return true if it is a
// palindrome
//  or false otherwise.

// Example 1:

// Input: head = [1,2,2,1]
// Output: true
// Example 2:

// Input: head = [1,2]
// Output: false

// Constraints:

// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9

// Follow up: Could you do it in O(n) time and O(1) space?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// неоптимальное решение, требуется доработка
var isPalindrome = function (head) {
    let curNode = head;
    const arr = [];

    while (curNode) {
        arr.push(curNode.val);
        curNode = curNode.next;
    }

    const result = arr.join('') === arr.reverse().join('');
    return result;
};

const headNode = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 2,
            next: {
                val: 1,
                next: null,
            },
        },
    },
};
console.log(isPalindrome(headNode));
