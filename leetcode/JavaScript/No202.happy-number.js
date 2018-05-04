/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Write an algorithm to determine if a number is "happy".
 * A happy number is a number defined by the following process:
 * Starting with any positive integer, replace the number by the sum of the squares of its digits,
 * and repeat the process until the number equals 1 (where it will stay),
 * or it loops endlessly in a cycle which does not include 1.
 * Those numbers for which this process ends in 1 are happy numbers.
 *
 * Example:
 * Input: 19
 * Output: true
 * Explanation:
 * 1^2 + 9^2 = 82
 * 8^2 + 2^2 = 68
 * 6^2 + 8^2 = 100
 * 1^2 + 0^2 + 0^2 = 1
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const replace = (num) => {
    let result = 0;
    let tmp = num;
    while (tmp !== 0) {
      result += Math.pow(tmp % 10, 2);
      tmp = Math.floor(tmp / 10);
    }
    return result;
  };

  const tmp = {};
  let num = n;
  while (true) {
    if (num === 1) return true;
    num = replace(num);
    if (tmp[num] !== undefined) return false;
    tmp[num] = true;
  }
};
