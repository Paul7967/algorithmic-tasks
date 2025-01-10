// https://leetcode.com/problems/string-to-integer-atoi/
// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

// The algorithm for myAtoi(string s) is as follows:

// Whitespace: Ignore any leading whitespace (" ").
// Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity if neither present.
// Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
// Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
// Return the integer as the final result.

// Example 1:
// Input: s = "42"
// Output: 42
// Explanation:

// The underlined characters are what is read in and the caret is the current reader position.
// Step 1: "42" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "42" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "42" ("42" is read in)
//            ^
// Example 2:
// Input: s = " -042"
// Output: -42
// Explanation:

// Step 1: "   -042" (leading whitespace is read and ignored)
//             ^
// Step 2: "   -042" ('-' is read, so the result should be negative)
//              ^
// Step 3: "   -042" ("042" is read in, leading zeros ignored in the result)
//                ^
// Example 3:
// Input: s = "1337c0d3"
// Output: 1337
// Explanation:
// Step 1: "1337c0d3" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "1337c0d3" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "1337c0d3" ("1337" is read in; reading stops because the next character is a non-digit)
//              ^
// Example 4:
// Input: s = "0-1"
// Output: 0

// Explanation:
// Step 1: "0-1" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "0-1" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "0-1" ("0" is read in; reading stops because the next character is a non-digit)
//           ^
// Example 5:
// Input: s = "words and 987"
// Output: 0
// Explanation:
// Reading stops at the first non-digit character 'w'.

 

// Constraints:

// 0 <= s.length <= 200
// s consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'.

// Задача: Преобразование строки в целое число (Реализация функции atoi)

// Цель: Создать функцию myAtoi, которая преобразует строку в 32-битное целое число с учетом следующих строгих правил:

// 📝 Алгоритм преобразования:

// Пропуск начальных пробелов
// Определение знака числа (+ или -)
// Чтение цифр с игнорированием начальных нулей
// Остановка при первом не цифровом символе
// Обработка выхода за границы 32-битного целого числа
// 🔍 Детальные правила:

// Если в строке нет цифр - возвращать 0
// Игнорировать начальные пробелы
// Поддерживать знаки "+" и "-"
// Останавливать чтение при первом не цифровом символе
// Округлять числа, выходящие за диапазон [-2^31, 2^31 - 1]
// ✅ Ограничения:

// Длина входной строки: 0-200 символов
// Допустимые символы: буквы, цифры, пробелы, "+", "-", "."
// 🧩 Примеры:

// "42" → 42
// " -042" → -42
// "1337c0d3" → 1337
// "0-1" → 0
// "words and 987" → 0
// Задача требует аккуратной обработки краевых случаев и точного следования спецификации преобразования.

export {}; // чтобы сделать файл изолированным модулем

function myAtoi(s: string): number {
    const LEFT_BOUND = '2147483648'; // минимальное значение, но без знака минус
    const RIGHT_BOUND = '2147483647'; // максимально значение
    let result = ''; 
    let sign = '';
    let isStart = true;
    for (let i=0;i<s.length;i++) {
        const simb = s[i];
        if (simb===' ' && isStart) continue;
        if (simb==='-' && isStart) {
            sign='-';
            isStart=false;
            continue;
        } else if (simb==='+' && isStart) {
            sign='+';
            isStart=false;
            continue;
        } else if (['0','1','2','3','4','5','6','7','8','9'].includes(simb)) {
            isStart=false;
            // если число еще не начато, то пропускаем ноли из начала строки
            if (result==='' && simb==='0') continue; 
            
            result = `${result}${simb}`
            
            // обрабатываем ситуации когда result подходит к краевым значениям
            if (result.length===10) {
                if (sign==='-' && result>=LEFT_BOUND) return -Number(LEFT_BOUND);
                else if (sign!=='-' && result>=RIGHT_BOUND) return Number(RIGHT_BOUND);
            }
            if (result.length>10) {
                return sign=== '-' ? 
                    -Number(LEFT_BOUND) : 
                    Number(RIGHT_BOUND);}
        } else break;
    } 
    if (result==='') return 0;

    return Number(`${sign}${result}`);
};

// 2**31 = 2147483648
const s = "-2147483647";
console.log(myAtoi(s));

describe('8', () => {
    const testData = [
        {s: '42', result: 42},
        {s: '-42', result: -42},
        {s: '   -42', result: -42},
        {s: '0-1', result: 0},
        {s: 'words and 987', result: 0},
        {s: '-91283472332', result: -2147483648},
        {s: '-+12', result: 0},
        {s: '+1', result: 1},
        {s: '21474836460', result: 2147483647},
        {s: '  0000000000012345678', result: 12345678},
        {s: '-2147483648', result: -2147483648},
        {s: '-2147483647', result: -2147483647},
    ]

    for (let i=0; i<testData.length; i++) {
        const {s, result} = testData[i];
        test(`${s}, result=${result}`, () => {
            expect(myAtoi(s)).toEqual(result);
            }
        )
    }
});
