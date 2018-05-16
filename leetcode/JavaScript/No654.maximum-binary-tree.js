/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:
 * 1. The root is the maximum number in the array.
 * 2. The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
 * 3. The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.
 * Construct the maximum tree by the given array and output the root node of this tree.
 *
 * Example:
 * Input: [3,2,1,6,0,5]
 * Output: return the tree root node representing the following tree:

      6
    /   \
   3     5
   \    /
   2  0
    \
     1
 *
 * Note:
 * The size of the given array will be in the range [1,1000].
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const findIndex = (nums, target) => {
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === target) return i;
  }
};

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  if (!nums.length) return null;

  const max = Math.max(...nums);
  const root = new TreeNode(max);

  if (max.length === 1) return root;

  const index = findIndex(nums, max);
  root.left = constructMaximumBinaryTree(nums.slice(0, index));
  root.right = constructMaximumBinaryTree(nums.slice(index + 1));

  return root;
};
