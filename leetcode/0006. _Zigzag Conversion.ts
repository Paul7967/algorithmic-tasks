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

// другой вариант решения: на лету формировать строки для каждой строки массива и в конце их склеить

function convert(s: string, numRows: number): string {
    if (numRows===1) return s;
    const oneCycleSymbols = numRows*2-2; // количество символов в одном цикле
    const oneCycleColumns = numRows - 1; // количество колонок в одном цикле
    const arrWidthInsideCycle = (strLength) => {
        if (strLength<=numRows) return 1;
        if (strLength>numRows && strLength<=oneCycleSymbols) {
            return (strLength-numRows) + 1;
        }
    }
    
    let arrWidth = 0;
    const {length} = s;
    if (length<=oneCycleSymbols) arrWidth=arrWidthInsideCycle(length)
    else arrWidth = Math.floor(s.length/oneCycleSymbols)*oneCycleColumns + 
       arrWidthInsideCycle(length%oneCycleSymbols) 
    
        let x = 0, y = 0;

    const arr: string[][] = new Array(arrWidth).fill('').map(()=> Array(numRows).fill('')); 
    
    let directionUp = false;

    const step = () => {
        if (y===numRows-1) directionUp=true;
        if (y===0) directionUp=false;

        if (directionUp) { 
            y--;
            x++;
        } else { 
            y++;
        };

    }

    for (let simbIndex=0; simbIndex<length; simbIndex++) {
        arr[x][y] = s[simbIndex];
        step();
    }

    let result = '';
    for (let y=0; y<numRows; y++) {
        for (let x=0; x<arrWidth; x++) {
                if (arr[x][y]!=='') result = `${result}${arr[x][y]}`
        }
    }

    return result
};

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