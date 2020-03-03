/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * 实现一个函数，检查二叉树是否平衡。在这个问题中，平衡树的定义如下：任意一个节点，其两棵子树的高度差不超过 1。
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
 *       1
 *      / \
 *     2   2
 *    / \
 *   3   3
 *  / \
 * 4   4
 * 返回 false
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const treeHeight = function(root) {
  if (!root) return 0

  if (root.height) return root.height
  const left = treeHeight(root.left)
  const right = treeHeight(root.right)

  root.height = Math.max(left, right) + 1
  return root.height
}

/**
* @param {TreeNode} root
* @return {boolean}
*/
var isBalanced = function(root) {
  if (!root) return true
  if (!root.left && !root.right) return true

  const left = treeHeight(root.left)
  const right = treeHeight(root.right)

  if (Math.abs(left - right) > 1) return false
  return isBalanced(root.left) && isBalanced(root.right)
}
