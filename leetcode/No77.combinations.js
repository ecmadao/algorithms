/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.
 *
 * Example:
 * If n = 4 and k = 2, a solution is:
 * [
 *    [2,4],
 *    [3,4],
 *    [2,3],
 *    [1,2],
 *    [1,3],
 *    [1,4],
 * ]
 *
 * 给定一个最大值 n，元素个数 k，求在 [1, n] 范围内 k 个数的排列组合
 * 例如，n = 3, k = 2
 * 则返回 [[1, 2], [1, 3], [2, 3]]
 * 注意，不能有重复的元素，即 [1, 2] 和 [2, 1] 被认为是重复的
 */

/**
 * 思路：
 * 考核回溯编程的能力
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  var results = [];
  var chooseNum = function(result, used, min, layer) {
    for (var i = min + 1; i <= n; i += 1) {
      if (!used[i]) {
        used[i] = true;
        result.push(i);
        if (layer === k) {
          var r = [...result];
          results.push(r);
        } else {
          chooseNum(result, used, i, layer + 1);
        }
        used[i] = false;
        result.pop();
      }
    }
  }
  chooseNum([], {}, 0, 1);
  return results;
};
