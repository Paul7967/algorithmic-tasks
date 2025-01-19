// https://leetcode.com/problems/merge-sorted-array/description/

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
 

// Constraints:

// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[j] <= 109
 

// Follow up: Can you come up with an algorithm that runs in O(m + n) time?

// Вам даны два целочисленных массива nums1 и nums2, отсортированных в порядке возрастания, и два целых числа m и n, представляющих количество элементов в nums1 и nums2 соответственно.

// Объедините nums1 и nums2 в один массив, отсортированный в порядке возрастания.

// Итоговый отсортированный массив не должен быть возвращен функцией, а должен быть сохранен внутри массива nums1. Для этого nums1 имеет длину m + n, где первые m элементов обозначают элементы, которые должны быть объединены, а последние n элементов установлены в 0 и должны игнорироваться. Массив nums2 имеет длину n.

// Пример 1:

// Входные данные: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Выходные данные: [1,2,2,3,5,6]
// Объяснение: Массивы, которые мы объединяем, это [1,2,3] и [2,5,6]. Результат объединения - [1,2,2,3,5,6], где подчеркнутые элементы взяты из nums1.
// Пример 2:

// Входные данные: nums1 = [1], m = 1, nums2 = [], n = 0
// Выходные данные: [1]
// Объяснение: Массивы, которые мы объединяем, это [1] и []. Результат объединения - [1].
// Пример 3:

// Входные данные: nums1 = [0], m = 0, nums2 = [1], n = 1
// Выходные данные: [1]
// Объяснение: Массивы, которые мы объединяем, это [] и [1]. Результат объединения - [1]. Обратите внимание, что поскольку m = 0, в nums1 нет элементов. 0 используется только для того, чтобы результат объединения мог поместиться в nums1.
// Ограничения:

// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -10^9 <= nums1[i], nums2[j] <= 10^9
// Дополнительное задание: Можете ли вы придумать алгоритм, который работает за время O(m + n)?

/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    if (n===0) return;

    let currPos1 = 0;
    const resArray = [];
    for (let i = 0;; ) {
        if (nums1[currPos1]<nums2[i] && currPos1<m) {
            resArray.push(nums1[currPos1]);
            currPos1++;
        } else if (i<n) {
            resArray.push(nums2[i])
            i++;
        } else currPos1++;
        
        if (resArray.length === m+n) break;

        // if (n<=m && i===n) {
        //     resArray.push(...nums1.splice(0,currPos1+1));
        //     break;
        // }
    }

    nums1.splice(0, nums1.length, ...resArray)
 };

const nums1 = [4,5,6,0,0,0], m = 3, nums2 = [1,2,3], n = 3;
// const nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
// const nums1 = [1], m = 1, nums2 = [], n = 0;
// const nums1 = [2,0], m = 1, nums2 = [1], n = 1;

console.log(nums1);
merge(nums1, m, nums2, n);
console.log(nums1);


describe('88', () => {
    const testData = [
        {nums1: [1,2,3,0,0,0], m: 3, nums2: [2,5,6], n: 3, 
            result: [1,2,2,3,5,6]},
        {nums1: [1], m: 1, nums2: [], n: 0, 
            result: [1]},
        {nums1: [2,0], m: 1, nums2: [1], n: 1, 
            result: [1,2]},
        {nums1: [4,5,6,0,0,0], m: 3, nums2: [1,2,3], n: 3, 
            result: [1,2,3,4,5,6]},
    ]

    for (let i=0; i<testData.length; i++) {
        const {nums1, nums2, n, m, result} = testData[i];
        test(`${nums1}, ${nums2} => ${result}`, () => {
            
            merge(nums1, m, nums2, n);
            expect(nums1).toEqual(result);
            }
        )
    }
});
 