/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * You need to find the largest value in each row of a binary tree.
 *
 * Example:
 * Input:
          1
         / \
        3   2
       / \   \
      5   3   9
 * Output: [1, 3, 9]
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
var largestValues = function(root) {
  if (!root) return [];
  const queue = [{
    layer: 0,
    node: root
  }];

  const results = [];
  let preMax = -Infinity;
  let preLayer = 0;
  while (queue.length) {
    const {
      node,
      layer,
    } = queue.shift();
    if (layer > preLayer) {
      results.push(preMax);
      preMax = node.val;
      preLayer = layer;
    } else if (node.val > preMax) {
      preMax = node.val;
    }
    if (node.left) queue.push({
      node: node.left,
      layer: layer + 1
    });
    if (node.right) queue.push({
      node: node.right,
      layer: layer + 1
    });
  }
  results.push(preMax);
  return results;
};
