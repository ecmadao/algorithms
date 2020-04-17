/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given the root of a binary tree, consider all root to leaf paths: paths from the root to any leaf.  (A leaf is a node with no children.)
 * A node is insufficient if every such root to leaf path intersecting this node has sum strictly less than limit.
 * Delete all insufficient nodes simultaneously, and return the root of the resulting binary tree.
 *
 * Example 1:
 * Input: root = [1,2,3,4,-99,-99,7,8,9,-99,-99,12,13,-99,14], limit = 1
 * Output: [1,2,3,4,null,null,7,8,9,null,14]
 *
 * Example 2:
 * Input: root = [5,4,8,11,null,17,4,7,1,null,null,5,3], limit = 22
 * Output: [5,4,8,11,null,17,4,7,null,null,null,5]
 *
 * Example 3:
 * Input: root = [1,2,-3,-5,null,4,null], limit = -1
 * Output: [1,null,-3,4]
 *
 * Note:
 * 1. The given tree will have between 1 and 5000 nodes.
 * 2.-10^5 <= node.val <= 10^5
 * 3. -10^9 <= limit <= 10^9
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
    public TreeNode SufficientSubset(TreeNode root, int limit) {
        bool dfs(TreeNode node, int num) {
            if (node == null) return false;
            if (node.left == null && node.right == null) return node.val + num >= limit;

            bool left = dfs(node.left, node.val + num);
            bool right = dfs(node.right, node.val + num);

            if (!left) node.left = null;
            if (!right) node.right = null;

            if (left || right) return true;
            return false;
        }

        bool res = dfs(root, 0);
        if (!res) return null;
        return root;
    }
}