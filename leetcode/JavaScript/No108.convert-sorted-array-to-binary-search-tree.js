/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
 *
 * 为了让二叉树尽量平衡，每次取数组中间值作为树的根节点
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (!nums.length) return null;
  const midIndex = Math.ceil(nums.length / 2) - 1;
  const root = new TreeNode(nums[midIndex]);
  root.left = sortedArrayToBST(nums.slice(0, midIndex));
  root.right = sortedArrayToBST(nums.slice(midIndex + 1));
  return root;
};
