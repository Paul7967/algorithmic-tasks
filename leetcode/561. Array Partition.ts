// https://leetcode.com/problems/array-partition/description/
// Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.

// Дано целочисленный массив nums из 2n целых чисел, сгруппируйте эти целые числа в n пар (a1, b1), (a2, b2), ..., (an, bn) таким образом, чтобы сумма минимальных значений min(ai, bi) для всех i была максимальной. Верните максимальную сумму.

// Example 1:

// Input: nums = [1,4,3,2]
// Output: 4
// Explanation: All possible pairings (ignoring the ordering of elements) are:
// 1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
// 2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
// 3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
// So the maximum possible sum is 4.
// Example 2:

// Input: nums = [6,2,6,5,1,2]
// Output: 9
// Explanation: The optimal pairing is (2, 1), (2, 5), (6, 6). min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9.

// Constraints:

// 1 <= n <= 104
// nums.length == 2 * n
// -104 <= nums[i] <= 104


// сортируем массив
function arrayPairSum(inArr: number[]): number {
    const sortedArr = [...inArr].sort();
    let result = sortedArr[0];
    for (let i=2; i<sortedArr.length; i+=2) {
        result+=sortedArr[i]
    }
    return result;
};

const arr1 = [6,2,6,5,1,2]
console.log(arrayPairSum(arr1));


test("[1,4,3,2] = 4", () => {
    expect(arrayPairSum([1,4,3,2])).toEqual(4);
});

test("[6,2,6,5,1,2] = 9", () => {
    expect(arrayPairSum([6,2,6,5,1,2])).toEqual(9);
});