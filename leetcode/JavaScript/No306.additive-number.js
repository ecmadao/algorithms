/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Additive number is a string whose digits can form additive sequence.
 * A valid additive sequence should contain at least three numbers.
 * Except for the first two numbers, each subsequent number in the sequence must be the sum of the preceding two.
 *
 * Given a string containing only digits '0'-'9', write a function to determine if it's an additive number.
 *
 * Note:
 * Numbers in the additive sequence cannot have leading zeros, so sequence 1, 2, 03 or 1, 02, 3 is invalid.
 *
 * Example:
 * Input: "112358"
 * Output: true
 * Explanation: The digits can form an additive sequence: 1, 1, 2, 3, 5, 8.
 * 1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
 *
 * Input: "199100199"
 * Output: true
 * Explanation: The additive sequence is: 1, 99, 100, 199.
 * 1 + 99 = 100, 99 + 100 = 199
 *
 * Follow up:
 * How would you handle overflow for very large input integers?
 */

/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber_1 = function(num) {
  if (num.length <= 2) return false;

  const checkValidate = (pre, start) => {
    let i = start;
    while (i < num.length) {
      const number = Number(num.slice(start, i + 1));
      const str = String(pre + number);

      const remain = num.slice(i + 1);
      if (str === remain) return true;

      if (str.length > remain.length || Number(remain) < pre + number) {
        return false;
      }
      if (num.slice(i + 1).startsWith(str)) {
        const check = checkValidate(number, i + 1);
        if (check) return true;
      }
      if (num[i] === '0' && num[start] === '0') return false;
      i += 1;
    }
    return false;
  };

  if (num[0] === '0') return checkValidate(0, 1);

  for (let i = 0; i < num.length; i += 1) {
    if (checkValidate(Number(num.slice(0, i + 1)), i + 1)) return true;
  }
  return false;
};

/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber_2 = function(num) {
  const isAdditive = (start, pre1, pre2, count) => {
    if (start >= num.length) return count >= 3

    for (let i = start + 1; i <= num.length; i += 1) {
      if (i - start > 1 && num[start] === '0') return false
      const n = parseInt(num.slice(start, i))

      if (pre1 === null || pre2 === null || (pre1 + pre2 === n)) {
        const result = isAdditive(
          i,
          pre1 === null ? n : (pre2 === null ? pre1 : pre2),
          pre1 === null ? null : n,
          count + 1
        )
        if (result) return true
      }
    }

    return false
  }
  return isAdditive(0, null, null, 0)
}


console.log(isAdditiveNumber('111'));
console.log(isAdditiveNumber('112'));
console.log(isAdditiveNumber('1023'));
console.log(isAdditiveNumber('011235'));
console.log(isAdditiveNumber('101'));
console.log(isAdditiveNumber('199100199'));
console.log(isAdditiveNumber('112358'));
console.log(isAdditiveNumber('199100199'));
