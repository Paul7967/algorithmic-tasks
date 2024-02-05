// 387. First Unique Character in a String

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:
// Input: s = "leetcode"
// Output: 0

// Example 2:
// Input: s = "loveleetcode"
// Output: 2

// Example 3:
// Input: s = "aabb"
// Output: -1

// Constraints:
// 1 <= s.length <= 105
// s consists of only lowercase English letters.

function firstUniqChar(s: string): number {
    const setUniques: Map<string, number> = new Map();
    for (let i = 0; i < s.length; i++) {
        const sign = s[i];

        if (!setUniques.has(sign)) {
            // когда символ встречается первый раз добавляем его в Map и сохраняем его индекс
            setUniques.set(sign, i);
        } else {
            // когда символ встречается второй раз, удаляем его из Map
            setUniques.set(sign, -2);
        }
    }

    for (const val of setUniques.values()) {
        if (val !== -2) {
            return val;
        }
    }
    return -1;
}

console.log(`Первый уникальный символ ${firstUniqChar("aadadaad")}`);

describe("387", () => {
    let testName = "leetcode";
    let testVal = testName;
    let testResult = 0;
    test(`${testVal} = ${testResult}`, () => {
        expect(firstUniqChar(testVal)).toBe(testResult);
    });

    testName = "loveleetcode";
    testVal = testName;
    testResult = 2;
    test(`${testVal} = ${testResult}`, () => {
        expect(firstUniqChar(testVal)).toBe(testResult);
    });

    testName = "aabb";
    testVal = testName;
    testResult = -1;
    test(`${testVal} = ${testResult}`, () => {
        expect(firstUniqChar(testVal)).toBe(testResult);
    });

    testName = "aadadaad";
    testVal = testName;
    testResult = -1;
    test(`${testVal} = ${testResult}`, () => {
        expect(firstUniqChar(testVal)).toBe(testResult);
    });
});

// loveleetcode
// aabb
