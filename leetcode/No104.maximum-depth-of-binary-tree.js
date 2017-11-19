/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a binary tree, find its maximum depth.
 * The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 *
 * 求二叉树最长路径（路径上的节点数目）
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
var maxDepth = function(root) {
  const walk = (node, deep) => {
    if (!node) return deep - 1;
    if (!node.left && !node.right) return deep;
    const leftDepth = walk(node.left, deep + 1);
    const rightDepth = walk(node.right, deep + 1);
    return Math.max(leftDepth, rightDepth);
  };
  return walk(root, 1);
};
