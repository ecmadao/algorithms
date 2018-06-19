/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a positive integer n and you can do operations as follow:
 * - If n is even, replace n with n/2.
 * - If n is odd, you can replace n with either n + 1 or n - 1.
 *
 * What is the minimum number of replacements needed for n to become 1?
 *
 * Example:
 * Input: 8
 * Output: 3
 * Explanation: 8 -> 4 -> 2 -> 1
 *
 * Input: 7
 * Output: 4
 * Explanation:
 * 7 -> 8 -> 4 -> 2 -> 1
 * or
 * 7 -> 6 -> 3 -> 2 -> 1
 */

/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
  if (n === 1) return 0;

  const find = (num, step) => {
    if (num === 1) return step;

    if (num % 2 === 0) {
      return find(num / 2, step + 1);
    }
    return Math.min(
      find(num + 1, step + 1),
      find(num - 1, step + 1),
    );
  }
  return find(n, 0);
};

integerReplacement(7); // 4
integerReplacement(8); // 3
integerReplacement(2); // 1
integerReplacement(3); // 2
integerReplacement(5); // 3
integerReplacement(100000000); // 37
integerReplacement(65535); // 17
integerReplacement(1234); // 14
