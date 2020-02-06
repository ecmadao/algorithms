/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given a binary tree, find the maximum path sum.
 * For this problem,
 * a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections.
 * The path must contain at least one node and does not need to go through the root.
 *
 * Example 1:
 * Given the below binary tree [1,2,3],
       1
      / \
     2   3
 * Return 6.
 *
 * Example 2:
 * Given the below binary tree [-10,9,20,null,null,15,7],
      -10
      / \
     9  20
     /  \
    15   7
 * Return 42.
 *
 * 给定一个非空二叉树，返回其最大路径和。注意，是路径，即从一个节点走到另一个节点，不能走重复路线
 * 本题中，路径被定义为一条从树中任意节点出发，达到任意节点的序列。该路径至少包含一个节点，且不一定经过根节点
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
  let result = -Infinity

  const getMaxSum = (node) => {
    if (!node) return -Infinity
    if (!node.left && !node.right) return node.val
    const maxLeft = getMaxSum(node.left)
    const maxRight = getMaxSum(node.right)

    const sum = Math.max(
      node.val,
      node.val + maxLeft,
      node.val + maxRight
    )

    result = Math.max(
      sum,
      result,
      maxLeft,
      maxRight,
      node.val + maxLeft + maxRight
    )

    return sum
  }
  const final = getMaxSum(root)
  return Math.max(result, final)
}
