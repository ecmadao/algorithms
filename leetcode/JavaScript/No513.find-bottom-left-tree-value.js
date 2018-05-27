/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a binary tree, find the leftmost value in the last row of the tree.
 *
 * Example:
 * Input:
    2
   / \
  1   3
 * Output:
 * 1
 *
 * Input:
        1
       / \
      2   3
     /   / \
    4   5   6
       /
      7
 * Output:
 * 7
 *
 * Note: You may assume the tree (i.e., the given root node) is not NULL.
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
var findBottomLeftValue = function(root) {
  if (!root) return null;

  const queue = [{
    layer: 0,
    node: root
  }];
  let result;
  let preL = null;
  while (queue.length) {
    const {
      layer,
      node
    } = queue.shift();
    if (!preL || preL !== layer) {
      preL = layer;
      result = node.val;
    }
    if (node.left) queue.push({
      layer: layer + 1,
      node: node.left
    });
    if (node.right) queue.push({
      layer: layer + 1,
      node: node.right
    });
  }
  return result;
};