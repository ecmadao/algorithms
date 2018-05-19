/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
 *
 * Example:
 * Input: 38
 * Output: 2
 * Explanation:
 * The process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.
 *
 * Follow up:
 * Could you do it without any loop/recursion in O(1) runtime?
 */

/**
 * 求数根。
 * 找规律：
 * 1 -> 1
 * ...
 * 9 -> 9
 * 10 -> 1
 * ...
 * 18 -> 9
 * 19 -> 1
 * ...
 * 440 -> 8
 * 441 -> 9
 * 442 -> 10 -> 1
 * 443 -> 11 -> 2
 * 444 -> 12 -> 3
 * 445 -> 13 -> 4
 * 446 -> 14 -> 5
 * 447 -> 15 -> 6
 * 448 -> 16 -> 7
 * 449 -> 17 -> 8
 * 450 -> 9
 * 451 -> 10 -> 1
 */

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  return num > 0 ? num % 9 || 9 : 0;
};
