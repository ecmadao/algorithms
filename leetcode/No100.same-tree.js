/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given two binary trees, write a function to check if they are the same or not.
 * Two binary trees are considered the same if they are structurally identical and the nodes have the same value.
 *
 * Example1:
 * Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

 * Output: true
 *
 * Example2:
 * Input:     1         1
          /           \
         2             2

        [1,2],     [1,null,2]

 * Output: false
 *
 * Example3:
 * Input:     1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

 * Output: false
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  const isSameNode = function(node1, node2) {
    if (!node1 && !node2) return true;
    if (!node1 || !node2 || (node1.val !== node2.val)) return false;
    return isSameNode(node1.left, node2.left) && isSameNode(node1.right, node2.right);
  };
  return isSameNode(p, q);
};
