/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
 * For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
 *
 * Example:
 * Given the sorted array: [-10,-3,0,5,9],
 * One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:
 *      0
 *     / \
 *   -3   9
 *   /   /
 * -10  5
*/

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int x) { val = x; }
 * }
 */
public class Solution {
    public TreeNode SortedArrayToBST(int[] nums) {
        if (nums.Length == 0) return null;
        int index = nums.Length / 2;

        TreeNode node = new TreeNode(nums[index]);
        node.left = SortedArrayToBST(nums[0..index]);
        node.right = SortedArrayToBST(nums[(index + 1)..]);
        return node;
    }
}