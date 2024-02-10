// Given a string s, return the longest
// palindromic substring in s.

// Example 1:
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Example 2:
// Input: s = "cbbd"
// Output: "bb"

// Constraints:
// 1 <= s.length <= 1000
// s consist of only digits and English letters.

function longestPalindrome(s: string): string {
    const obj: object = {};
    let result: string = s[0];

    const isPolindrom = (inStr: string) => {
        const halfString = Math.floor(inStr.length / 2);
        for (let i = 0; i < halfString; i++) {
            if (inStr[i] !== inStr[inStr.length - i - 1]) {
                return false;
            }
        }
        return true;
    };

    const sheckSubstrings = (inArr: number[]) => {
        const lastCharIndex = inArr[inArr.length - 1];
        for (let i = 0; i < inArr.length - 1; i++) {
            const subStr = s.slice(inArr[i], lastCharIndex + 1);
            if (
                lastCharIndex - inArr[i] + 1 > result.length &&
                isPolindrom(subStr)
            ) {
                result = subStr;
            }
        }
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (obj[char]) {
            obj[char].push(i);
            sheckSubstrings(obj[char]);
        } else {
            obj[char] = [i];
        }
    }
    return result;
}

// console.log(longestPalindrome("aba"));
// console.log(longestPalindrome("abangrajaj"));
console.log(longestPalindrome("cbbd"));
console.log(
    longestPalindrome(
        "ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc"
    )
);
