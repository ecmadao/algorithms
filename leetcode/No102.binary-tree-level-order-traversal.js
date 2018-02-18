/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a binary tree, return the level order traversal of its nodes' values.
 * (ie, from left to right, level by level).
 *
 * Example:
 * Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
 * return its level order traversal as:
 * [
 *  [3],
 *  [9,20],
 *  [15,7]
 * ]
 *
 * 层序遍历，一次遍历树的一层
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

 /* ============================ Recursive Solution ============================ */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
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
    results.push(values);
    if (childs.length) getLayerValues(childs);
  };
  getLayerValues([root]);
  return results;
};

/* ============================ Iteratively Solution ============================ */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder_iteratively = (root) => {
  const result = [];
  let nodes = [root];
  let tmp = [];
  let tmpVal = [];
  let layer = 0;
  while (nodes.length) {
    const node = nodes.shift();
    node && tmpVal.push(node.val);
    node && node.left && tmp.push(node.left);
    node && node.right && tmp.push(node.right);
    if (!nodes.length && tmpVal.length) {
      nodes = tmp;
      result[layer] = tmpVal;
      layer += 1;
      tmpVal = [];
      tmp = [];
    }
  }
  return result;
};
