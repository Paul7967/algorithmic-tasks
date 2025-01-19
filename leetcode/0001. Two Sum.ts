// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
export {}; // чтобы сделать файл изолированным модулем

function twoSum(nums: number[], target: number): number[] {
    // сортируем
    // ставим указатели на 2 первых значения
    // Если сумма больше target двигаем правый указатель влево
    // если сумму меньше target двикаем левый указатель вправо

    const sortedArr = [...nums].sort((a,b)=>a-b);
    const result = [];
    let p1 = 0;
    let p2 = 1;

    let done = false;
    do {
        const v1 = sortedArr[p1];
        const v2 = sortedArr[p2];
        const summ = v1+v2;
        if (summ===target) {
            result.push(nums.indexOf(v1));
            let indexFrom = 0;
            if (v1===v2) indexFrom = result[0] + 1;
            result.push(nums.indexOf(v2, indexFrom));
            done = true;
        } else if (summ<target) {
            if (p2<nums.length-1) p2++;
            else if (p2-p1>1) {
                p1++;
                p2=p1+1;
            } else done=true;
        } else if (summ>target) {
            if (nums.length-p1>2) {
                p1++;
                p2=p1+1;
            } else done=true;
        }

    } while (!done);
    
    return result;  
};

// const nums= [2,7,11,15], target = 9, result = [0,1];
// const nums= [-1000,1000,-999,999,1001,-1001,2,-1002,1004,5,18,-1000000], target = 7, result = [6,9];
const nums= [2,5,5,11], target = 10, result = [1,2];
console.log(twoSum(nums,target), result);

for (let i = 0; i++ < 5; ) {
    console.log(i); // This will log 1, 2, 3, 4, 5
}

describe('1', () => {
    const testData = [
        {nums: [2,7,11,15], target: 9, result: [0,1]},
        {nums: [3,2,4], target: 6, result: [1,2]},
        {nums: [3,3], target: 6, result: [0,1]},
        {nums: [2,5,5,11], target: 10, result: [1,2]},
        {nums: [-1,-2,-3,-4,-5], target: -8, result: [4,2]},
        {nums: [-1000,1000,-999,999,1001,-1001,2,-1002,1004,5,18,-1000000], target: 7, result: [6,9]},
    ]

    for (let i=0; i<testData.length; i++) {
        const {nums, target, result} = testData[i];
        test(`${nums}, ${target} => ${result}`, () => {
            
            const res = twoSum(nums, target);
            
            expect(res).toEqual(result);
            }
        )
    }
});