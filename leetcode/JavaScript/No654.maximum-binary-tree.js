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
 *
 * 给定一个不含重复元素的整数数组。一个以此数组构建的最大二叉树定义如下：
 * 1. 二叉树的根是数组中的最大元素。
 * 2. 左子树是通过数组中最大值左边部分构造出的最大二叉树。
 * 3. 右子树是通过数组中最大值右边部分构造出的最大二叉树。
 * 通过给定的数组构建最大二叉树，并且输出这个树的根节点
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
var constructMaximumBinaryTree = function(nums) {
  if (!nums.length) return null

  const max = Math.max(...nums)
  const index = nums.indexOf(max)

  const root = new TreeNode(max)
  root.left = constructMaximumBinaryTree(nums.slice(0, index))
  root.right = constructMaximumBinaryTree(nums.slice(index + 1))
  return root
}

