/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a binary tree, find its minimum depth.
 * The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
 *
 * 求树的最短路径上的节点数
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
var minDepth = function(root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  const depth = [];
  if (root.left) {
    depth.push(
      minDepth(root.left)
    );
  }
  if (root.right) {
    depth.push(
      minDepth(root.right)
    );
  }
  return 1 + Math.min(...depth);
};
