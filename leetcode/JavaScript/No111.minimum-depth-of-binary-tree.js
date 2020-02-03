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
 * 
 * 递归法
 */
var minDepth_1 = function(root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  const depth = [];
  if (root.left) {
    depth.push(
      minDepth_1(root.left)
    );
  }
  if (root.right) {
    depth.push(
      minDepth_1(root.right)
    );
  }
  return 1 + Math.min(...depth);
};


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
 * 迭代法
 */
var minDepth_2 = function(root) {
  if (!root) return 0

  let depth = Infinity
  root.depth = 1
  const queue = [root]
  
  while (queue.length) {
    const node = queue.pop()
    if (!node.left && !node.right) {
      depth = Math.min(depth, node.depth)
    }
    if (node.right) {
      node.right.depth = node.depth + 1
      queue.push(node.right)
    }
    if (node.left) {
      node.left.depth = node.depth + 1
      queue.push(node.left)
    }
  }
  return depth
}
