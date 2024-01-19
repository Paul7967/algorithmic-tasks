// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

// Constraints:

// -231 <= x <= 231 - 1

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let bitDepth = 32;
    if (x.toString(2).length > bitDepth) return 0;
    const sNumber = x.toString();
    let idx = 0;
    let newStr = x > 0 ? "" : "-";
    let zeroFlag = true;

    if (x > 0) bitDepth--; // необходимо сделать т.к. ф-я toString(2) не использует для указания знака числа левый бит,
    // а просто ставит минус, а для положительных левый бит используется как числовой, а не показатель положительного значения
    // поэтому работа не совсем корректна. И для положительных значений мы длинну уменьшаем чтобы оставить место для
    // бита показывающего что число положительное

    for (i = sNumber.length - 1; i >= 0; i--) {
        if (sNumber[i] != "-") {
            if ((sNumber[i] = "0" && zeroFlag)) {
                zeroFlag = false;
            }
            newStr += sNumber[i];
            const a = Number(newStr).toString(2).length;

            // console.log(newStr);
            // console.log(a);

            if (a > bitDepth) return 0;
        }
    }
    return Number(newStr);
};

// console.log(reverse(321));
// console.log(reverse(-321));
// console.log(reverse(120));
console.log(reverse(1563847412));
