/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.
 *
 * Example:
 * Given the following matrix:
 * [
 *    [ 1, 2, 3 ],
 *    [ 4, 5, 6 ],
 *    [ 7, 8, 9 ]
 * ]
 * You should return [1,2,3,6,9,8,7,4,5].
 *
 * 按照螺旋的顺序旋转数组
 */

/**
 * 思路：
 * 目前除了老老实实的按照旋转顺序遍历以外还没想出什么更好的方法
 * 不过我们可以来优化旋转遍历的代码
 * 右题意可知，按照从最外层顺时针旋转的顺序进行遍历，每次到达最底部，或者撞到已经遍历过的元素时，就重新改变方向
 * 所以其实每次遍历的方向是 右 -> 下 -> 左 -> 上，我们可以记录旋转的次数 loopCount ，通过 loopCount % 4 来方便的确认下一步的方向
 * 同时根据其是否到底部（或顶部）以及是否撞上已遍历的元素，来确定是否改变方向
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  var m = matrix.length;
  if (!m) return [];
  var n = matrix[0].length;
  if (!n) return [];

  var results = [];
  var used = {};
  var indexM = 0;
  var indexN = 0;
  var loopCount = 1;

  while(results.length < m * n) {
    results.push(matrix[indexM][indexN]);
    used[`${indexM}${indexN}`] = true;

    var loopIndex = loopCount % 4;
    if (loopIndex === 1) {
      if (indexN === n - 1 || used[`${indexM}${indexN + 1}`]) {
        loopCount += 1;
        indexM += 1;
      } else {
        indexN += 1;
      }
    } else if (loopIndex === 2) {
      if (indexM === m -1 || used[`${indexM + 1}${indexN}`]) {
        loopCount += 1;
        indexN -= 1;
      } else {
        indexM += 1;
      }
    } else if (loopIndex === 3) {
      if (indexN === 0 || used[`${indexM}${indexN - 1}`]) {
        loopCount += 1;
        indexM -= 1;
      } else {
        indexN -= 1;
      }
    } else {
      if (indexM === 0 || used[`${indexM - 1}${indexN}`]) {
        loopCount += 1;
        indexN += 1;
      } else {
        indexM -= 1;
      }
    }
  }
  return results;
};