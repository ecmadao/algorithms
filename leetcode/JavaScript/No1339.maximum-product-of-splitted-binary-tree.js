/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a binary tree root. Split the binary tree into two subtrees by removing 1 edge such that the product of the sums of the subtrees are maximized.
 * Since the answer may be too large, return it modulo 10^9 + 7.
 *
 * Example 1:
 * Input: root = [1,2,3,4,5,6]
 * Output: 110
 * Explanation: Remove the red edge and get 2 binary trees with sum 11 and 10. Their product is 110 (11*10)
 *
 * Example 2:
 * Input: root = [1,null,2,3,4,null,null,5,6]
 * Output: 90
 * Explanation:  Remove the red edge and get 2 binary trees with sum 15 and 6.Their product is 90 (15*6)
 *
 * Example 3:
 * Input: root = [2,3,9,10,7,8,6,5,4,11,1]
 * Output: 1025
 *
 * Example 4:
 * Input: root = [1,1]
 * Output: 1
 *
 * Constraints:
 * 1. Each tree has at most 50000 nodes and at least 2 nodes.
 * 2. Each node's value is between [1, 10000].
 *
 * 给你一棵二叉树，它的根为 root 。请你删除 1 条边，使二叉树分裂成两棵子树，且它们子树和的乘积尽可能大。
 * 由于答案可能会很大，请你将结果对 10^9 + 7 取模后再返回
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const getTreeSum = (node) => {
  if (!node) return 0
  if (node.sum) return node.sum
  const sum = node.val + getTreeSum(node.left) + getTreeSum(node.right)
  node.sum = sum
  return sum
}

/**
 * @param {TreeNode} root
 * @return {number}
 *
 * 递归层级太深，调用栈溢出
 */
var maxProduct_1 = function(root) {
  let result = -Infinity
  const base = Math.pow(10, 9) + 7

  const dfs = (node, pre) => {
    if (!node) return
    if (!node.left && !node.right) return

    const sum = getTreeSum(node) + pre
    const left = getTreeSum(node.left)
    const right = getTreeSum(node.right)

    result = Math.max(
      result,
      (sum - left) * left,
      (sum - right) * right
    )

    dfs(node.left, sum - left)
    dfs(node.right, sum - right)
  }

  dfs(root, 0)
  return result % base
}

/**
 * @param {TreeNode} root
 * @return {number}
 *
 * 递归改迭代，解决问题
*/
var maxProduct_2 = function(root) {
  let result = -Infinity
  const base = Math.pow(10, 9) + 7

  const queue = [[root, 0]]

  while (queue.length) {
    const [node, pre] = queue.pop()

    const sum = getTreeSum(node) + pre
    const left = getTreeSum(node.left)
    const right = getTreeSum(node.right)

    result = Math.max(
      result,
      (sum - left) * left,
      (sum - right) * right
    )

    if (node.left) {
      if (node.left.left || node.left.right) queue.push([node.left, sum - left])
    }
    if (node.right) {
      if (node.right.left || node.right.right) queue.push([node.right, sum - right])
    }
  }
  return result % base
}
