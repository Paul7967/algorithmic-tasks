// Given a string s, find the length of the longest
// substring
//  without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const substr = new Set();
    let result = 0;
    let currSignIndex = 0;

    const makeUniqueSet = (inVal) => {
        let beforeInValFlag = true;

        for (const item of substr) {
            if (substr.has(inVal)) {
                // удаляем повторяющийся символ
                beforeInValFlag = false;
                substr.delete(item);
            }
            if (beforeInValFlag) {
                //удаляем все символы до повторяющегося
                substr.delete(item);
            }
        }
        substr.add(inVal);
    };

    while (currSignIndex < s.length) {
        const currSign = s[currSignIndex];
        if (!substr.has(currSign)) {
            substr.add(currSign);
            if (substr.size > result) result = substr.size;
        } else {
            makeUniqueSet(currSign);
        }

        currSignIndex++;
    }

    return result;
};

// console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("bbbbb"));
// console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("dvdf"));
