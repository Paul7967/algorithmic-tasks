// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Constraints:

// -231 <= x <= 231 - 1

// Follow up: Could you solve it without converting the integer to a string?

/**
 * @param {number} x
 * @return {boolean}
 */

// пишем решение без приведения к строке
var isPalindrome = function (x) {
    if (x < 0) return false;
    let leftNumberSub = 0;
    let rightNumberSub = 0;

    const numDigits = Math.floor(Math.log10(x)) + 1;
    if (numDigits === 1) return true;
    const countCicles = Math.floor(numDigits / 2);

    for (let rateOf10 = 0; rateOf10 < countCicles; rateOf10++) {
        const leftNumberOrder = 10 ** (numDigits - rateOf10 - 1);
        const leftNumber = Math.floor((x - leftNumberSub) / leftNumberOrder);
        leftNumberSub += leftNumber * leftNumberOrder;

        const rightNumberOrder = 10 ** rateOf10;
        const rightNumber =
            Math.floor((x - rightNumberSub) % 10 ** (rateOf10 + 1)) /
            rightNumberOrder;
        rightNumberSub += rightNumber * rightNumberOrder;

        if (leftNumber !== rightNumber) {
            return false;
        }
    }

    return true;
};

// console.log(isPalindrome(121));
// console.log(isPalindrome(-121));
// console.log(isPalindrome(10));
console.log(isPalindrome(1001));
console.log(isPalindrome(1231));
