// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.

// [1,1,2] 2
// [0,0,1,1,1,2,2,3,3,4] 5

function removeDuplicates(nums: number[]): number {
    const setUniques: Set<number> = new Set();
    const newArr = [...nums];
    let counter = 0;
    for (let i = 0; i < nums.length; i++) {
        const val = newArr[i];
        if (!setUniques.has(val)) {
            setUniques.add(val);
            nums[counter] = val;
            counter++;
        }
    }

    return setUniques.size;
}

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([-3, -1, 0, 0, 0, 3, 3]));

describe("26", () => {
    let testName: number[] = [1, 1, 2];
    let testVal = testName;
    let testResult = 2;
    let testResultArr = [1, 2, 2];
    test(`${testVal} = ${testResult}`, () => {
        expect(removeDuplicates(testVal)).toBe(testResult);
    });
    test(`${testVal} мутирование входного массива`, () => {
        const mutateArray = jest.fn(removeDuplicates);
        mutateArray(testVal);
        expect(mutateArray).toHaveBeenCalledWith(testVal);
        expect(testVal).toEqual(testResultArr);
    });
});
describe("26 - 1", () => {
    let testName = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    let testVal = testName;
    let testResult = 5;
    let testResultArr = [0, 1, 2, 3, 4, 2, 2, 3, 3, 4];
    test(`${testVal} = ${testResult}`, () => {
        expect(removeDuplicates(testVal)).toBe(testResult);
    });
    test(`${testVal} мутирование входного массива`, () => {
        const mutateArray = jest.fn(removeDuplicates);
        mutateArray(testVal);
        expect(mutateArray).toHaveBeenCalledWith(testVal);
        expect(testVal).toEqual(testResultArr);
    });
});

describe("26 - 1", () => {
    let testName = [-3, -1, 0, 0, 0, 3, 3];
    let testVal = testName;
    let testResult = 4;
    let testResultArr = [-3, -1, 0, 3, 0, 3, 3];
    test(`${testVal} = ${testResult}`, () => {
        expect(removeDuplicates(testVal)).toBe(testResult);
    });
    test(`${testVal} мутирование входного массива`, () => {
        const mutateArray = jest.fn(removeDuplicates);
        mutateArray(testVal);
        expect(mutateArray).toHaveBeenCalledWith(testVal);
        expect(testVal).toEqual(testResultArr);
    });
});
