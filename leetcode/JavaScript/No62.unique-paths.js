/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
 * The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
 * How many possible unique paths are there?
 *
 * 简而言之，就是从 m * n 的方格盘上，从左上角走到右下角，且每次只能向右或向左走一步
 * 求有多少种走法
 * 根据每一步的所有可能取值再去推导下一步显然是不行的。这道题考核的是动态规划
 */

/**
 * 先看一个有效但会超时的解法（应该是因为当数据值大时，递归层数太多造成超时）
 * 从右下角 (m, n) 进行逆推，在每个点上只能向左或向右走一步。而当到达左边界或上边界时，
 * 则分别只剩一种走法，即向上直走或向左直走
 * 因此，从右下角逆推，当在点 (m, n) 上时，可去的点为 (m - 1, n) 和 (m , n - 1)
 */
// Normal DP solution, worked well, but has timeout error when submit on leetcode
var goFromBack = function(m, n) {
  if (m === 1 || n === 1) return 1;
  return goFromBack(m - 1, n) + goFromBack(m, n - 1);
};

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 *
 * 递归
 */
var uniquePaths_1 = function(m, n) {
  return goFromBack(m, n);
};

console.log(uniquePaths_1(23, 12));
console.log(uniquePaths_1(3, 7));

/**
 * 再进一步优化上面的方法
 * 遍历所有点，对点 (m, n) 而言，其到 (1, 1) 点的路径由前两个点决定，即 (m - 1, n) 和 (m, n - 1)
 * 因此在遍历的过程中进行累加
 */
// Advance version
var uniquePaths_2 = function(m, n) {
  var steps = [];

  for (var i = 1; i <= m; i += 1) {
    for (var j = 1; j <= n; j += 1) {
      var key = `${i}${j}`;
      if (i === 1 || j === 1) {
        // 初始化某点的路径来源数 - 来源意味着有多少条路可以到达该点
        // 对于靠在左边缘或上边缘的点而言，始终为 1
        steps[key] = 1;
      } else {
        steps[key] = steps[`${i}${j - 1}`] + steps[`${i - 1}${j}`];
      }
    }
  }
  return steps[`${m}${n}`];
};


/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 *
 * 动态规划
 */
var uniquePaths_3 = function(m, n) {
  const dp = Array.from({ length: m }, (_, i) => {
    return Array.from({ length: n }, (_, j) => i === 0 ? 1 : (j === 0 ? 1 : 0))
  })

  for (let i = 1; i < m; i += 1) {
    for (let j = 1; j < n; j += 1) {
      dp[i][j] = (dp[i - 1][j] || 0) + (dp[i][j - 1] || 0)
    }
  }
  return dp[m - 1][n - 1]
}

console.log(uniquePaths_3(23, 12))
console.log(uniquePaths_3(3, 7))