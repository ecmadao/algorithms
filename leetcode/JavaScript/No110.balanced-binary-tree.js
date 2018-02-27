/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a binary tree, determine if it is height-balanced.
 * For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const getNodeDepth = (node, which = 'left') => {
  if (!node || !node[which]) return 0;
  return 1 + Math.max(getNodeDepth(node[which], 'left'), getNodeDepth(node[which], 'right'))
};

/**
* @param {TreeNode} root
* @return {boolean}
*/
var isBalanced = function(root) {
  if (!root) return true;
  const leftDepth = getNodeDepth(root, 'left');
  const rightDepth = getNodeDepth(root, 'right');
  if (!leftDepth && !rightDepth) return true;
  if (Math.abs(leftDepth - rightDepth) > 1) return false;

  return isBalanced(root.left) && isBalanced(root.right);
};
