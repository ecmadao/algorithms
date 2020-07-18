/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given n, how many structurally unique BST's (binary search trees) that store values 1...n?
 *
 * Example:
 * Given n = 3, there are a total of 5 unique BST's.

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
 *
 * 已知二叉树的取值范围是 1 ~ n，每个数字只出现一次。求总共有多少种不同的二叉树
 */

/**
 * 思路：
 * 动态规划。对于每个树节点（由根节点，左子节点，右子节点组成），其能够排列的树的数目为左子节点的数目 * 右子节点的数目
 */

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  const cache = {};
  const array = [];
  for (let i = 1; i <= n; i += 1) {
    array.push(i);
  }
  const countTreeNum = (arr) => {
    const len = arr.length;
    if (!len || len === 1) return 1;
    if (len === 2) return 2;
    if (cache[len]) return cache[len];
    let num = 0;
    for (let i = 0; i < arr.length; i += 1) {
      const leftCount = countTreeNum(arr.slice(0, i));
      const rightCount = countTreeNum(arr.slice(i + 1));
      num += (leftCount * rightCount);
    }
    cache[len] = num;
    return num;
  };

  return countTreeNum(array);
};


/**
 * @param {number} n
 * @return {number}
 *
 * 动态规划
 */
var numTrees_DP = function(n) {
  const dp = [1]

  for (let i = 1; i <= n; i += 1) {
    dp[i] = 0
    for (let j = 1; j <= i; j += 1) {
      dp[i] += dp[j - 1] * dp[i - j]
    }
  }
  return dp[n]
}
