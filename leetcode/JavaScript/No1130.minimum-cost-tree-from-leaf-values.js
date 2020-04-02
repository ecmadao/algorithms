/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array arr of positive integers, consider all binary trees such that:
 * 1. Each node has either 0 or 2 children;
 * 2. The values of arr correspond to the values of each leaf in an in-order traversal of the tree.  (Recall that a node is a leaf if and only if it has 0 children.)
 * 3. The value of each non-leaf node is equal to the product of the largest leaf value in its left and right subtree respectively.
 * Among all possible binary trees considered, return the smallest possible sum of the values of each non-leaf node.  It is guaranteed this sum fits into a 32-bit integer.
 *
 * Example 1:
 * Input: arr = [6,2,4]
 * Output: 32
 * Explanation:
 * There are two possible trees.
 * The first has non-leaf node sum 36, and the second has non-leaf node sum 32.
 *     24            24
 *    /  \          /  \
 *   12   4        6    8
 *  /  \               / \
 * 6    2             2   4
 *
 * Constraints:
 * 1. 2 <= arr.length <= 40
 * 2. 1 <= arr[i] <= 15
 * 3. It is guaranteed that the answer fits into a 32-bit signed integer (ie. it is less than 2^31).
 *
 * 给你一个正整数数组 arr，考虑所有满足以下条件的二叉树：
 * 1. 每个节点都有 0 个或是 2 个子节点。
 * 2. 数组 arr 中的值与树的中序遍历中每个叶节点的值一一对应。（知识回顾：如果一个节点有 0 个子节点，那么该节点为叶节点。）
 * 3. 每个非叶节点的值等于其左子树和右子树中叶节点的最大值的乘积。
 * 在所有这样的二叉树中，返回每个非叶节点的值的最小可能总和。这个和的值是一个 32 位整数。
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var mctFromLeafValues = function(arr) {
  const max = []
  for (let i = 0; i < arr.length; i += 1) {
    if (!max[i]) max[i] = []
    let num = arr[i]
    for (let j = i; j < arr.length; j += 1) {
      num = Math.max(num, arr[j])
      max[i][j] = num
    }
  }

  const dp = Array.from(
    { length: arr.length },
    (_, i) => Array.from(
      { length: arr.length },
      (_, j) => i === j ? 0 : Infinity
    )
  )

  for (let len = 1; len < arr.length; len += 1) {
    for (let i = 0; i + len < arr.length; i += 1) {
      j = i + len
      for (let k = i; k < j; k += 1) {
        dp[i][j] = Math.min(
          dp[i][j],
          max[i][k] * max[k + 1][j] + dp[i][k] + dp[k + 1][j]
        )
      }
    }
  }

  return dp[0][arr.length - 1]
}
