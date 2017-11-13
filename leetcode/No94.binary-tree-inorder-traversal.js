/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a binary tree, return the inorder traversal of its nodes' values.
 *
 * Example:
 * Given binary tree [1,null,2,3],
 *  1
    \
     2
    /
   3
   return [1,3,2].
 *
 * 求二叉树中序遍历各个元素的顺序
 */

/**
 * Note:
 * 理解中序遍历：
 * 对于每一个树节点，总是先遍历其左子节点，然后遍历根节点，最后右子节点
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  var result = [];
  if (!root) return result;
  if (root.left) {
    result.push(...inorderTraversal(root.left));
  }
  result.push(root.val);
  if (root.right) {
    result.push(...inorderTraversal(root.right));
  }
  return result;
};