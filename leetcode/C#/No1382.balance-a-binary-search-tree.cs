/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a binary search tree, return a balanced binary search tree with the same node values.
 * A binary search tree is balanced if and only if the depth of the two subtrees of every node never differ by more than 1.
 * If there is more than one answer, return any of them.
 *
 * Example 1:
 * Input: root = [1,null,2,null,3,null,4,null,null]
 * Output: [2,1,3,null,null,null,4]
 * Explanation: This is not the only correct answer, [3,1,4,null,2,null,null] is also correct.
 *
 * Constraints:
 * The number of nodes in the tree is between 1 and 10^4.
 * The tree nodes will have distinct values between 1 and 10^5.
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
    private List<int> InorderTrverseal(TreeNode node) {
        List<int> res = new List<int>();
        Stack<TreeNode> stack = new Stack<TreeNode>();
    
        while (stack.Count > 0 || node != null) {
            if (node != null) {
                stack.Push(node);
                node = node.left;
            } else {
                node = stack.Pop();
                res.Add(node.val);
                node = node.right;
            }
        }
        return res;
    }

    private TreeNode BuildBST(List<int> data, int start, int end) {
        if (end < start) return null;
    
        int mid = (start + end) / 2;
        TreeNode node = new TreeNode(data[mid]);
        node.left = BuildBST(data, start, mid - 1);
        node.right = BuildBST(data, mid + 1, end);
        return node;
    }

    public TreeNode BalanceBST(TreeNode root) {
        if (root == null) return null;
        List<int> nums = InorderTrverseal(root);
        return BuildBST(nums, 0, nums.Count - 1);
    }
}