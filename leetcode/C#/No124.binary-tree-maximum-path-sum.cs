/*
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given a non-empty binary tree, find the maximum path sum.
 * For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections.
 * The path must contain at least one node and does not need to go through the root.
 *
 * Example 1:
 * Input: [1,2,3]
 *       1
 *      / \
 *     2   3
 * Output: 6
 *
 * Example 2:
 * Input: [-10,9,20,null,null,15,7]
 *   -10
 *   / \
 *  9  20
 *    /  \
 *   15   7
 * Output: 42
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
    public int MaxPathSum(TreeNode root) {
        int res = int.MinValue;

        int MathSum(TreeNode node) {
            if (node == null) return int.MinValue;
            
            int maxLeft = MathSum(node.left);
            int maxRight = MathSum(node.right);
            int maxSum = node.val;

            try {
                maxSum = Math.Max(
                    checked(maxLeft + node.val),
                    maxSum
                );
            } catch (System.OverflowException e) {}
            try {
                maxSum = Math.Max(
                    checked(maxRight + node.val),
                    maxSum
                );
            } catch (System.OverflowException e) {}

            res = new int[]{
                res,
                maxSum,
                maxLeft,
                maxRight,
            }.Max();

            try {
                res = Math.Max(res, checked(node.val + maxLeft + maxRight));
            } catch (System.OverflowException e) {}

            return maxSum;
        }

        MathSum(root);
        return res;
    }
}