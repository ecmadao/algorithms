/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.
 *
 * Example:
 * Given n = 3,
 * You should return the following matrix:
 * [
 *    [ 1, 2, 3 ],
 *    [ 8, 9, 4 ],
 *    [ 7, 6, 5 ]
 * ]
 *
 * 输入 n，返回 n * n 的顺时针排序的矩阵
 */

/**
 * 思路：
 * 和 No54.Spiral Matrix 基本一致，只是我们不再需要多余的对象来储存以及遍历过的元素
 */

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  if (n === 1) return [[1]];

  var results = [];
  var loopCount = 1;
  var i = 1;
  var indexM = 0;
  var indexN = 0;
  var count = n * n;
  while(i <= count) {
    if (!results[indexM]) {
      results[indexM] = [];
    }
    results[indexM][indexN] = i;
    i += 1;
    if (i > count) break;

    var loopIndex = loopCount % 4;
    if (loopIndex === 1) {
      if (indexN === n - 1 || (results[indexM] && results[indexM][indexN + 1] !== undefined)) {
        loopCount += 1;
        indexM += 1;
      } else {
        indexN += 1;
      }
    } else if (loopIndex === 2) {
      if (indexM === n - 1 || (results[indexM + 1] && results[indexM + 1][indexN] !== undefined)) {
        loopCount += 1;
        indexN -= 1;
      } else {
        indexM += 1;
      }
    } else if (loopIndex === 3) {
      if (indexN === 0 || (results[indexM] && results[indexM][indexN - 1] !== undefined)) {
        loopCount += 1;
        indexM -= 1;
      } else {
        indexN -= 1;
      }
    } else {
      if (indexM === 0 || (results[indexM - 1] && results[indexM - 1][indexN] !== undefined)) {
        loopCount += 1;
        indexN += 1;
      } else {
        indexM -= 1;
      }
    }
  }
  return results;
};