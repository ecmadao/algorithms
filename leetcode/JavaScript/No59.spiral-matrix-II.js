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
 * 给定一个正整数 n，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵
 */

/**
 * 思路：
 * 和 No54.Spiral Matrix 基本一致，只是我们不再需要多余的对象来储存以及遍历过的元素
 */

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix_1 = function(n) {
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

/**
 * @param {number} n
 * @return {number[][]}
 *
 * 最外层所有元素按照顺时针顺序输出，其次是次外层，以此类推
 */
var generateMatrix_2 = function(n) {
  const matrix = Array.from({ length: n }, (_, i) => Array.from({ length: n }))
  let r1 = 0
  let r2 = n
  let c1 = 0
  let c2 = n
  let num = 1

  while (r1 < r2 && c1 < c2) {
    for (let c = c1; c < c2; c += 1) {
      matrix[r1][c] = num
      num += 1
    }
    for (let r = r1 + 1; r < r2; r += 1) {
      matrix[r][c2 - 1] = num
      num += 1
    }
    if (r1 + 1 < r2 && c1 + 1 < c2) {
      for (let c = c2 - 2; c >= c1; c -= 1) {
        matrix[r2 - 1][c] = num
        num += 1
      }
      for (let r = r2 - 2; r > r1; r -= 1) {
        matrix[r][c1] = num
        num += 1
      }
    }
    r1 += 1
    r2 -= 1
    c1 += 1
    c2 -= 1
  }
  return matrix
}
