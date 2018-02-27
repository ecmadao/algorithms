/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a binary tree containing digits from 0-9 only,
 * each root-to-leaf path could represent a number.
 * An example is the root-to-leaf path 1->2->3 which represents the number 123.
 * Find the total sum of all root-to-leaf numbers.
 *
 * Example:
 *   1
    / \
   2   3
 * The root-to-leaf path 1->2 represents the number 12.
 * The root-to-leaf path 1->3 represents the number 13.
 * Return the sum = 12 + 13 = 25.
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
var sumNumbers = function(root) {
  if (!root) return 0;
  let sum = 0;
  const getTreeNum = (node, pre) => {
    const num = `${pre}${node.val}`;
    if (!node.left && !node.right) sum += Number(num);
    if (node.left) getTreeNum(node.left, num);
    if (node.right) getTreeNum(node.right, num);
  };
  getTreeNum(root, '');
  return sum;
};
