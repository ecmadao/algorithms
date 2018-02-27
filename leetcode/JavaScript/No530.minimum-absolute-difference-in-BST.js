/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a binary search tree with non-negative values,
 * find the minimum absolute difference between values of any two nodes.
 *
 * Example:
 * Input:
 * 1
 *  \
 *   3
 *  /
 * 2
 * Output:
 * 1
 *
 * Explanation:
 * The minimum absolute difference is 1,
 * which is the difference between 2 and 1 (or between 2 and 3).
 *
 * Note:
 * There are at least two nodes in this BST.
 *
 * 在一个 BST 中寻找两节点间的最短距离
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var getNode = function(node, position, tmp) {
  if (!node[position]) return node;
  var key = `${node.val}-${position}`;
  if (tmp[key]) return tmp[key];
  var result = getNode(node[position], position, tmp);
  tmp[key] = result;
  return result;
};

var getDiff = function(node, tmp) {
  var leftDiff = node.left
    ? node.val - getNode(node.left, 'right', tmp).val
    : Number.POSITIVE_INFINITY;
  var rightDiff = node.right
    ? getNode(node.right, 'left', tmp).val - node.val
    : Number.POSITIVE_INFINITY;
  return leftDiff > rightDiff ? leftDiff : rightDiff;
};

/**
* @param {TreeNode} root
* @return {number}
*/
var getMinimumDifference = function(root) {
  var tmp = {};
  var minDiff = null;
  var getMinDiff = function(node) {
    var diff = getDiff(node, tmp);
    if (diff) {
      if (!minDiff || minDiff > diff) {
        minDiff = diff;
      }
    }
    node.left && getMinDiff(node.left);
    node.right && getMinDiff(node.right);
  };
  getMinDiff(root);
  return minDiff;
};
