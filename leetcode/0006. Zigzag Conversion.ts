// The string 'PAYPALISHIRING' is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: 'PAHNAPLSIIGYIR'

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
 
// Example 1:

// Input: s = 'PAYPALISHIRING', numRows = 3
// Output: 'PAHNAPLSIIGYIR'

// Example 2:
// Input: s = 'PAYPALISHIRING', numRows = 4
// Output: 'PINALSIGYAHRPI'
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = 'A', numRows = 1
// Output: 'A'
 

// Constraints:

// 1 <= s.length <= 1000
// s consists of English letters (lower-case and upper-case), ',' and '.'.
// 1 <= numRows <= 1000

export {};

function convert(s: string, numRows: number): string {
    if (numRows===1) return s;

    const { length } = s;

    const arr: string[] = new Array(numRows).fill('');

    let directionUp = false;
    let rowIndex = 0;
    for (let i=0; i<length; i++) {
        arr[rowIndex] = `${arr[rowIndex]}${s[i]}`;
        if (!directionUp && rowIndex<numRows-1) rowIndex++
        else if (!directionUp && rowIndex===numRows-1) {
            directionUp=true;
            rowIndex--;
        } else if (directionUp && rowIndex>0) rowIndex--
        else if (directionUp && rowIndex===0) {
            directionUp=false;
            rowIndex++;
        }
    }

    return arr.reduce((prevV,currV)=>`${prevV}${currV}`, "");
}

const s = 'Apalindromeisaword,phrase,number,orothersequenceofunitsthatcanbereadthesamewayineitherdirection,withgeneralallowancesforadjustmentstopunctuationandworddividers.'; 
const numRows = 10;
console.log(convert(s,numRows)); // PAHNAPLSIIGYIR

describe('6', () => {
    const testData = [
        {s: 'PAYPALISHIRING', numRows: 3, result: 'PAHNAPLSIIGYIR'},
        {s: 'PAYPALISHIRING', numRows: 4, result: 'PINALSIGYAHRPI'},
        {s: 'PAYPALISHIRING', numRows: 9, result: 'PAYPGANLIIRSIH'},
        {s: 'A', numRows: 1, result: 'A'},
        {s: 'Apalindromeisaword,phrase,number,orothersequenceofunitsthatcanbereadthesamewayineitherdirection,withgeneralallowancesforadjustmentstopunctuationandworddividers.', numRows: 10, result: 'A,tsaclmapdpohttsmetaltennarhreiheerilosnodlorornahwioawutiw.iwa,suttadnrajstosnasrefcdyr,endtarrdseeqoaaiewncaouderi,buenenhieerptddoenmecbrettgsouciimuneihfnv'},
    ]

    for (let i=0; i<testData.length; i++) {
        const {s, numRows, result} = testData[i];
        test(`${s}, numRows=${numRows}`, () => {
            expect(convert(s, numRows)).toEqual(result);
            }
        )
    }
});