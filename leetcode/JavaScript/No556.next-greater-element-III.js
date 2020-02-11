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
 *
 * 给定一个32位正整数 n，你需要找到最小的32位整数，其与 n 中存在的位数完全相同，并且其值大于n。如果不存在这样的32位整数，则返回-1
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

const MAX = Math.pow(2,31) - 1

/**
 * @param {number} n
 * @return {number}
 *
 * 字典序方法（全排列
 */
var nextGreaterElement_2 = function(n) {
  const s = `${n}`.split('')
  let i = s.length - 1

  while (i - 1 >= 0 && s[i - 1] >= s[i]) i -= 1
  if (i === 0) return -1

  const index = i - 1
  const num = s[index]

  let j = s.length - 1
  while (j > index && s[j] <= num) j -= 1
  if (j <= index) return -1

  s[index] = s[j]
  s[j] = num

  const result = Number([
    ...s.slice(0, index + 1),
    ...s.slice(index + 1).sort((a, b) => a - b)
  ].join(''))
  return result > MAX ? -1 : result
}

// Test case
console.log(nextGreaterElement(12))
console.log(nextGreaterElement(123))
console.log(nextGreaterElement(230241)); // 230412
console.log(nextGreaterElement(12443322)); // 13222344
console.log(nextGreaterElement(1999999999)); // -1
