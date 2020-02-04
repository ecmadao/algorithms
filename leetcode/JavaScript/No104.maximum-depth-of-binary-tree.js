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
var maxDepth_1 = function(root) {
  const walk = (node, deep) => {
    if (!node) return deep - 1;
    if (!node.left && !node.right) return deep;
    const leftDepth = walk(node.left, deep + 1);
    const rightDepth = walk(node.right, deep + 1);
    return Math.max(leftDepth, rightDepth);
  };
  return walk(root, 1);
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth_2 = function(root) {
  let depth = 0
  if (!root) return depth

  root.depth = 1
  const queue = [root]
  while (queue.length) {
    const node = queue.pop()
    if (!node.left && !node.right) depth = Math.max(depth, node.depth)
    if (node.left) {
      node.left.depth = node.depth + 1
      queue.push(node.left)
    }
    if (node.right) {
      node.right.depth = node.depth + 1
      queue.push(node.right)
    }
  }
  return depth
}
