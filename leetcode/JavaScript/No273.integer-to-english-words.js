/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Convert a non-negative integer to its english words representation.
 * Given input is guaranteed to be less than 2^31 - 1.
 *
 * Example:
 * Input: 123
 * Output: "One Hundred Twenty Three"
 *
 * Input: 12345
 * Output: "Twelve Thousand Three Hundred Forty Five"
 *
 * Input: 1234567
 * Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
 */

const SINGLE_MAP = {
  0: '',
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine',
  10: 'Ten',
  '11': 'Eleven',
  '12': 'Twelve',
  '14': 'Fourteen',
  '20': 'Twenty',
};
const MULTI_MAP = {
  '0': '',
  '1': '',
  '3': 'Thir',
  '4': 'For',
  '5': 'Fif',
  '6': 'Six',
  '7': 'Seven',
  '8': 'Eigh',
  '9': 'Nine',
  '11': 'teen', /* 11 <= x < 20 */
  '10': 'ty', /* 20 <= x < 100 */
  '100': 'Hundred',
  '1000': 'Thousand',
  '1000000': 'Million',
  '1000000000': 'Billion',
  '1000000000000': 'Trillion'
};

/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
  const numStr = num.toString();

  const getTwoNum = (str) => {
    if (SINGLE_MAP[str]) return SINGLE_MAP[str];
    if (str[0] === '0') return SINGLE_MAP[str[1]];

    let integerStr = '';
    if (str[0] === '2') {
      integerStr = SINGLE_MAP[20] + (SINGLE_MAP[str[1]] ? ` ${SINGLE_MAP[str[1]]}` : '');
    } else if (str[0] === '1') {
      integerStr = MULTI_MAP[str[1]] + MULTI_MAP['11'];
    } else {
      integerStr = MULTI_MAP[str[0]] + MULTI_MAP['10'] + (SINGLE_MAP[str[1]] ? ` ${SINGLE_MAP[str[1]]}` : '');
    }
    return integerStr;
  };

  const getThreeNum = (start, multi) => {
    let base = 100;
    let i = 0;
    while ((numStr[start + i] === undefined || numStr[start + i] === '0') && i < 2) {
      i += 1;
      base /= 10;
    }
    if (numStr[start + i] === '0' || numStr[start + i] === undefined) return '';

    const unit = MULTI_MAP[multi];
    if (i === 2) return SINGLE_MAP[numStr[start + i]] + ' ' + unit + ' ';
    if (i === 1) return getTwoNum(numStr.slice(start + i, start + i + 2)) + ' ' + unit + ' ';

    const twoNumStr = getTwoNum(numStr.slice(start + 1, start + 3));
    return twoNumStr
      ? `${SINGLE_MAP[numStr[start]]} Hundred ${twoNumStr} ${unit} `
      : `${SINGLE_MAP[numStr[start]]} Hundred ${unit} `;
  }

  let i = numStr.length - 1;
  let base = 1;
  let result = '';
  while (i >= -2) {
    result = getThreeNum(i - 2, base) + result;
    i -= 3;
    base *= 1000;
  }
  result = result.trim();
  if (!result) result = 'Zero';
  return result;
};

// Test case
numberToWords(14); // Fourteen
numberToWords(100000); // One Hundred Thousand
numberToWords(15); // Fifteen
numberToWords(0); // Zero
numberToWords(10); // Ten
numberToWords(100); // One Hundred
numberToWords(101); // One Hundred One
numberToWords(1000); // One Thousand
numberToWords(10000); // Ten Thousand
numberToWords(123); // One Hundred Twenty Three
numberToWords(12345); // Twelve Thousand Three Hundred Forty Five
numberToWords(1234567); // One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven
numberToWords(1000010); // One Million Ten
