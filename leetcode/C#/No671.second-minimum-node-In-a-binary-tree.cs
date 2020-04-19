/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a non-empty special binary tree consisting of nodes with the non-negative value, where each node in this tree has exactly two or zero sub-node. If the node has two sub-nodes, then this node's value is the smaller value among its two sub-nodes. More formally, the property root.val = min(root.left.val, root.right.val) always holds.
 * Given such a binary tree, you need to output the second minimum value in the set made of all the nodes' value in the whole tree.
 * If no such second minimum value exists, output -1 instead.
 *
 * Example 1:
 * Input: 
 *    2
 *   / \
 *  2   5
 *     / \
 *    5   7
 * Output: 5
 * Explanation: The smallest value is 2, the second smallest value is 5.
 *
 * Example 2:
 * Input: 
 *    2
 *   / \
 *  2   2
 * Output: -1
 * Explanation: The smallest value is 2, but there isn't any second smallest value.
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
    public int FindSecondMinimumValue(TreeNode root) {
        if (root == null) return -1;

        int FindMinmumValue(TreeNode node, int target) {
            if (node == null) return -1;
            if (node.val > target) return node.val;
            int left = FindMinmumValue(node.left, target);
            int right = FindMinmumValue(node.right, target);

            if (left == -1 && right == -1) return -1;
            if (left != -1 && right != -1) return Math.Min(left, right);
            if (left == -1) return right;
            return left;
        }

        return FindMinmumValue(root, root.val);
    }
}