/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a positive 32-bit integer n, you need to find the smallest 32-bit integer which has exactly the same digits existing in the integer n and is greater in value than n.
 * If no such positive 32-bit integer exists, you need to return -1.
 *
 * Example:
 * Input: 12
 * Output: 21
 *
 * Input: 21
 * Output: -1
 */

/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function(n) {
  const str = `${n}`.split('');
  const tmp = {};
  const MAX = Math.pow(2,31) - 1;

  for (let i = str.length - 1; i >= 0; i -= 1) {
    const num = parseInt(str[i], 10);
    let tmpNum = num + 1;
    while (tmpNum <= 9) {
      if (tmp[tmpNum]) {
        str[i] = tmpNum;
        str[tmp[tmpNum]] = num;
        const result = parseInt(`${str.slice(0, i + 1).join('')}${str.slice(i + 1).sort((a, b) => a - b).join('')}`, 10);
        return result > MAX ? -1 : result;
      }
      tmpNum += 1;
    }
    tmp[num] = i;
  }
  return -1;
};

// Test case
console.log(nextGreaterElement(12))
console.log(nextGreaterElement(123))
console.log(nextGreaterElement(230241)); // 230412
console.log(nextGreaterElement(12443322)); // 13222344
console.log(nextGreaterElement(1999999999)); // -1
