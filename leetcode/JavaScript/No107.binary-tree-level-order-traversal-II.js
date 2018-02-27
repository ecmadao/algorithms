/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a binary tree, return the bottom-up level order traversal of its nodes' values.
 * (ie, from left to right, level by level from leaf to root).
 *
 * Example:
 * Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
 * return its bottom-up level order traversal as:
 * [
 *  [15,7],
 *  [9,20],
 *  [3]
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
var levelOrderBottom = function(root) {
  const results = [];
  if (!root) return results;
  const getLayerValues = (nodes) => {
    const childs = [];
    const values = [];
    for (let i = 0; i < nodes.length; i += 1) {
      const node = nodes[i];
      values.push(node.val);
      if (node.left) childs.push(node.left);
      if (node.right) childs.push(node.right);
    }
    results.unshift(values);
    if (childs.length) getLayerValues(childs);
  };
  getLayerValues([root]);
  return results;
};
