/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * 输入一棵二叉树的根节点，判断该树是不是平衡二叉树。如果某二叉树中任意节点的左右子树的深度相差不超过 1，那么它就是一棵平衡二叉树。
 *
 * 示例 1:
 * 给定二叉树 [3,9,20,null,null,15,7]
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * 返回 true
 *
 * 示例 2:
 * 给定二叉树 [1,2,2,3,3,null,null,4,4]
 *        1
 *       / \
 *      2   2
 *     / \
 *    3   3
 *   / \
 *  4   4
 * 返回 false
 *
 * 限制：
 * 1. 1 <= 树的结点个数 <= 10000
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const getDepth = function(root) {
  if (!root) return 0
  if (root.depth) return root.depth

  const depth = 1 + Math.max(
    getDepth(root.left),
    getDepth(root.right)
  )
  root.depth = depth
  return depth
}
/**
* @param {TreeNode} root
* @return {boolean}
*/
var isBalanced = function(root) {
  if (!root) return true

  const left = getDepth(root.left)
  const right = getDepth(root.right)
  if (Math.abs(left - right) > 1) return false

  return isBalanced(root.left) && isBalanced(root.right)
}
