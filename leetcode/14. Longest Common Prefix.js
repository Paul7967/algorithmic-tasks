// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string}
 */
// первое решение
var longestCommonPrefix1 = function (strs) {
    if (strs.length === 1) return strs[0];
    let currSimbol = strs[0][0];
    let prefixStr = "";
    // если 0я строка в массиве пустая, сразу возвращаем ""
    if (currSimbol === undefined) return "";

    let currSimbolIndex = 0;

    for (let currStrIndex = 1; currStrIndex < strs.length; currStrIndex++) {
        const currStrSimbol = strs[currStrIndex][currSimbolIndex];
        if (currStrSimbol && currStrSimbol === currSimbol) {
            if (currStrIndex === strs.length - 1) {
                prefixStr += currSimbol;
                currSimbolIndex++;
                currSimbol = strs[0][currSimbolIndex];
                currStrIndex = 0;
            }
        } else {
            return prefixStr;
        }
    }
    return prefixStr;
};

// второе решение
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";
    if (strs.length === 1) return strs[0];

    let prefix = strs[0];

    // проверить что все строки начинаются на prefix
    for (let curStrIndex = 1; curStrIndex < strs.length; curStrIndex++) {
        // если строка не начинается на prefix уменьшаем префикс на один символ справа
        if (prefix.length && !strs[curStrIndex].startsWith(prefix)) {
            prefix = prefix.slice(0, -1);
            curStrIndex = 0;
        }

        if (prefix.length === 0) {
            return "";
        }
    }

    return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["a"]));
