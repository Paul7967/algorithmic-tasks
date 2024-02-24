// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const checkCouple = (leftSimbol, rightSimbol) => {
        if (leftSimbol === "(" && rightSimbol === ")") return true;
        if (leftSimbol === "{" && rightSimbol === "}") return true;
        if (leftSimbol === "[" && rightSimbol === "]") return true;
        return false;
    };

    const checkLeftBracket = (inSimbol) => {
        if (inSimbol === "{" || inSimbol === "[" || inSimbol === "(") {
            return true;
        }
        return false;
    };

    if (s.length % 2 !== 0) return false;

    const leftBrackets = [];

    for (let i = 0; i < s.length; i++) {
        if (checkLeftBracket(s[i])) {
            // если левая скобка добавляем ее в массив
            leftBrackets.push(s[i]);
        } else {
            // если правая скобка
            if (
                leftBrackets.length &&
                checkCouple(leftBrackets[leftBrackets.length - 1], s[i])
            ) {
                leftBrackets.pop();
            } else {
                return false;
            }
        }
    }

    return leftBrackets.length === 0;
};

// console.log(isValid("())"));
// console.log(isValid("()"));
// console.log(isValid("(){}[]"));
// console.log(isValid("(]"));
// console.log(isValid("[{}()]"));
// console.log(isValid("[()]"));
console.log(isValid("(("));
