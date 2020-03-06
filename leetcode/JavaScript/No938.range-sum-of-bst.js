/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).
 * The binary search tree is guaranteed to have unique values.
 *
 * Example 1:
 * Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
 * Output: 32
 *
 * Example 2:
 * Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
 * Output: 23
 *
 * Note:
 * 1. The number of nodes in the tree is at most 10000.
 * 2. The final answer is guaranteed to be less than 2^31.
 *
 * 给定二叉搜索树的根结点 root，返回 L 和 R（含）之间的所有结点的值的和。
 * 二叉搜索树保证具有唯一的值
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
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
  if (!root) return 0
  if (L > root.val) return rangeSumBST(root.right, L, R)
  if (R < root.val) return rangeSumBST(root.left, L, R)
  return rangeSumBST(root.right, root.val, R) + rangeSumBST(root.left, L, root.val) + root.val
}
