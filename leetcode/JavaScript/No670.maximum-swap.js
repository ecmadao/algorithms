/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a non-negative integer, you could swap two digits at most once to get the maximum valued number.
 * Return the maximum valued number you could get.
 *
 * Example:
 * Input: 2736
 * Output: 7236
 * Explanation: Swap the number 2 and the number 7.
 *
 * Input: 9973
 * Output: 9973
 * Explanation: No swap.
 *
 * Note: The given number is in the range [0, 10^8]
 */

/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
  const str = String(num);
  const maxIndex = str.length - 1;
  const tmp = [];
  tmp[maxIndex] = {
    index: maxIndex,
    num: str[maxIndex]
  };
  let result = [];

  for (let i = str.length - 2; i >= 0; i -= 1) {
    const numStr = str[i];

    if (numStr < tmp[i + 1].num) {
      result = String(num).split('');
      result[i] = tmp[i + 1].num;
      result[tmp[i + 1].index] = numStr;
      tmp[i] = tmp[i + 1];
    } else if (numStr > tmp[i + 1].num) {
      tmp[i] = {
        num: numStr,
        index: i,
      };
    } else {
      tmp[i] = tmp[i + 1];
    }
  }
  return result.length ? Number(result.join('')) : num;
};

// Test case
console.log(maximumSwap(9918)); // 9981
console.log(maximumSwap(9981)); // 9981
console.log(maximumSwap(2736)); // 7236
console.log(maximumSwap(1993)); // 9913
console.log(maximumSwap(1893)); // 9813
console.log(maximumSwap(98368)); // 98863
