/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given the root of a binary search tree with distinct values, modify it so that every node has a new value equal to the sum of the values of the original tree that are greater than or equal to node.val.
 * As a reminder, a binary search tree is a tree that satisfies these constraints:
 * - The left subtree of a node contains only nodes with keys less than the node's key.
 * - The right subtree of a node contains only nodes with keys greater than the node's key.
 * - Both the left and right subtrees must also be binary search trees.
 *
 * Example 1:
 * Input: [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
 * Output: [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
 *
 * Constraints:
 * The number of nodes in the tree is between 1 and 100.
 * Each node will have value between 0 and 100.
 * The given tree is a binary search tree.
 * Note: This question is the same as 538: https://leetcode.com/problems/convert-bst-to-greater-tree/
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
    private List<int> InorderTraversal(TreeNode root) {
        List<int> res = new List<int>();
        Stack<TreeNode> s = new Stack<TreeNode>();
        while (s.Count > 0 || root != null) {
            if (root != null) {
                s.Push(root);
                root = root.left;
            } else {
                root = s.Pop();
                res.Add(root.val);
                root = root.right;
            }
        }
        return res;
    }

    public TreeNode BstToGst(TreeNode root) {
        List<int> nums = InorderTraversal(root);

        int[] sums = new int[nums.Count];
        int sum = 0;
        for (int i = nums.Count - 1; i >= 0; i -= 1) {
            sum += nums[i];
            sums[i] = sum;
        }

        TreeNode node = root;
        int j = 0;
        Stack<TreeNode> s = new Stack<TreeNode>();
        while (s.Count > 0 || node != null) {
            if (node != null) {
                s.Push(node);
                node = node.left;
            } else {
                node = s.Pop();
                node.val = sums[j];
                j += 1;
                node = node.right;
            }
        }
        return root;
    }
}