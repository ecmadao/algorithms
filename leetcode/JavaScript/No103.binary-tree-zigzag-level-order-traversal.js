/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a binary tree, return the zigzag level order traversal of its nodes' values.
 * (ie, from left to right, then right to left for the next level and alternate between).
 *
 * Example:
 * Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
 * return its zigzag level order traversal as:
 * [
 *  [3],
 *  [20,9],
 *  [15,7]
 * ]
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  const results = [];
  if (!root) return results;
  const getLayerValues = (nodes, fromLeftToRight = true) => {
    const childs = [];
    const values = [];
    for (let i = 0; i < nodes.length; i += 1) {
      const node = nodes[i];
      values.push(node.val);
      if (fromLeftToRight) {
        if (node.left) childs.unshift(node.left);
        if (node.right) childs.unshift(node.right);
      } else {
        if (node.right) childs.unshift(node.right);
        if (node.left) childs.unshift(node.left);
      }
    }
    results.push(values);
    if (childs.length) getLayerValues(childs, !fromLeftToRight);
  };
  getLayerValues([root]);
  return results;
};
