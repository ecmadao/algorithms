/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Find all possible combinations of k numbers that add up to a number n,
 * given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.
 *
 * Note:
 * - All numbers will be positive integers.
 * - The solution set must not contain duplicate combinations.
 *
 * Example:
 * Input: k = 3, n = 7
 * Output: [[1,2,4]]
 *
 * Input: k = 3, n = 9
 * Output: [[1,2,6], [1,3,5], [2,3,4]]
 */



/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  const results = [];
  const tmp = new Set([]);

  const find = (pre, count, remain, arr) => {
    if (count === 1) {
      if (!tmp.has(remain) && remain >= 1 && remain <= 9) {
        results.push([...arr, remain]);
      }
      return;
    }

    let cur = pre + 1;
    while (remain > 2 * cur && cur <= 9) {
      tmp.add(cur);
      arr.push(cur);
      find(cur, count - 1, remain - cur, arr);
      arr.pop();
      tmp.delete(cur);
      cur += 1;
    }
  }

  find(0, k, n, []);
  return results;
};
