/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a binary tree, determine if it is a valid binary search tree (BST).
 * Assume a BST is defined as follows:
 * The left subtree of a node contains only nodes with keys less than the node's key.
 * The right subtree of a node contains only nodes with keys greater than the node's key.
 * Both the left and right subtrees must also be binary search trees.
 *
 * Example 1:
 *    2
 *   / \
 *  1   3
 * Input: [2,1,3]
 * Output: true
 *
 * Example 2:
 *    5
 *   / \
 *  1   4
 *     / \
 *    3   6
 * Input: [5,1,4,null,null,3,6]
 * Output: false
 * Explanation: The root node's value is 5 but its right child's value is 4.
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
    public bool IsValidBST(TreeNode root) {
        if (root == null) return true;

        bool dfs(TreeNode node, long min, long max) {
            if (node == null) return true;
            if (node.val >= max || node.val <= min) return false;

            return dfs(node.left, min, Math.Min((long)node.val, max))
                && dfs(node.right, Math.Max(min, (long)node.val), max);
        }
        return dfs(root.left, Int64.MinValue, (long)root.val) && dfs(root.right, (long)root.val, Int64.MaxValue);
    }
}