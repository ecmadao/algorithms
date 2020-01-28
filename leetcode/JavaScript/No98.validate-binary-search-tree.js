/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a binary tree, determine if it is a valid binary search tree (BST).
 * Assume a BST is defined as follows:
 * 1. The left subtree of a node contains only nodes with keys less than the node's key.
 * 2. The right subtree of a node contains only nodes with keys greater than the node's key.
 * 3. Both the left and right subtrees must also be binary search trees.
 *
 * Example1:
 *  2
   / \
  1   3
 * Binary tree [2,1,3], return true.
 *
 * Example2:
 *  1
   / \
  2   3
 * Binary tree [1,2,3], return false.
 *
 * 验证一个二叉树是否合法
 * 注意，对于一个合法的二叉树而言，某一个节点的左子节点下的所有数值都小于该节点的数值；
 * 右子节点下的所有数值都大于该节点的数值
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
 * @return {boolean}
 * 注：对于合法的二叉搜索树树，要求：
 * 1. 节点左子树的所有元素都小于节点值
 * 2. 节点右子树的所有元素都大于节点值
 */
var isValidBST = function(root) {
  const check = (node, min, max) => {
      if (!node) return true
      if (node.val <= min || node.val >= max) return false
      return check(node.left, min, Math.min(node.val, max)) && check(node.right, Math.max(min, node.val), max)
  }
  if (!root) return true
  return check(root.left, -Infinity, root.val) && check(root.right, root.val, Infinity)
}
